import "@/styles/policy.css";
import "./privacy.css";

const EFFECTIVE_DATE = "October 10, 2026";
const CONTACT_EMAIL = "husseinshakir81@gmail.com";

export const metadata = {
    title: "Wave Privacy Policy | Hussein Shakir",
    description: "Privacy policy for Wave, an offline music player for Android. No ads, no tracking, no internet.",
};

const permissions = [
    {
        name: "Music and audio (READ_MEDIA_AUDIO, or READ_EXTERNAL_STORAGE on Android 12 and older)",
        why: "To find and play the audio files already stored on your device.",
    },
    {
        name: "Write to storage (WRITE_EXTERNAL_STORAGE, Android 9 and older only)",
        why: "Only used when you choose to delete a song from your device.",
    },
    {
        name: "Notifications (POST_NOTIFICATIONS)",
        why: "To show the media notification with playback controls.",
    },
    {
        name: "Foreground service and wake lock",
        why: "To keep music playing while the screen is off or the app is in the background.",
    },
];

export default function WavePrivacyPage() {
    return (
        <div className="policy-page">
        <div className="privacy">

            <header className="privacy__header">
                <a href="/" className="privacy__back">
                    &larr; Back to portfolio
                </a>

                <div className="privacy__brand">
                    <img src="/assets/wave.png" alt="Wave app icon" className="privacy__icon" width={72} height={72} />
                    <div>
                        <h1 className="privacy__title">
                            Wave <span className="gradient-text">Privacy Policy</span>
                        </h1>
                        <p className="privacy__meta">Effective date: {EFFECTIVE_DATE}</p>
                    </div>
                </div>
            </header>

            <main className="privacy__content">
                <section className="privacy__summary glass-card">
                    <h2>The short version</h2>
                    <p>
                        Wave doesn&apos;t collect, store, share or sell any personal data. The app has no internet
                        permission, so it cannot send anything off your device. There are no ads, no analytics, no
                        crash reporting and no accounts.
                    </p>
                </section>

                <section className="privacy__section">
                    <h2>1. Who we are</h2>
                    <p>
                        Wave (package <code>smith.app.wavemusic</code>) is an offline music player for Android,
                        developed by Hussein Shakir (&quot;we&quot;, &quot;us&quot;). This policy explains how the
                        app handles your information.
                    </p>
                </section>

                <section className="privacy__section">
                    <h2>2. Information we collect</h2>
                    <p>
                        <strong>None.</strong> We don&apos;t collect any personal or usage information. Wave
                        doesn&apos;t include any third-party SDKs for advertising, analytics, crash reporting or
                        tracking.
                    </p>
                </section>

                <section className="privacy__section">
                    <h2>3. Data stored on your device</h2>
                    <p>To work, Wave keeps some information locally, on your device only:</p>
                    <ul>
                        <li>An index of your music library (titles, artists, albums, folders, durations).</li>
                        <li>Your playlists, favorites, play counts and recently played songs.</li>
                        <li>Your settings, such as theme, language and excluded folders.</li>
                        <li>Your playback session (queue and position), so you can pick up where you left off.</li>
                    </ul>
                    <p>
                        This data never leaves your device. Wave also opts out of Android cloud backup, so it
                        isn&apos;t copied to your Google account. You can delete all of it at any time by clearing
                        the app&apos;s storage in Android Settings or by uninstalling the app.
                    </p>
                </section>

                <section className="privacy__section">
                    <h2>4. Permissions</h2>
                    <p>Wave asks only for the permissions it needs to play music:</p>
                    <ul className="privacy__permissions">
                        {permissions.map(({ name, why }) => (
                            <li key={name}>
                                <strong>{name}</strong>
                                <span>{why}</span>
                            </li>
                        ))}
                    </ul>
                    <p>
                        Wave does <strong>not</strong> request internet or network access. You can revoke any
                        permission in Android Settings; some features may then stop working.
                    </p>
                </section>

                <section className="privacy__section">
                    <h2>5. Files you open or export</h2>
                    <p>
                        When you open an audio file with Wave from another app, or import or export an M3U playlist,
                        Wave reads or writes only the file you chose, and only to carry out that action.
                    </p>
                </section>

                <section className="privacy__section">
                    <h2>6. Sharing of information</h2>
                    <p>
                        We don&apos;t share any information with third parties, because we don&apos;t have any. Your
                        music and listening habits stay on your phone.
                    </p>
                </section>

                <section className="privacy__section">
                    <h2>7. Children&apos;s privacy</h2>
                    <p>
                        Wave is suitable for all ages. Since the app collects no personal information, it collects
                        none from children either.
                    </p>
                </section>

                <section className="privacy__section">
                    <h2>8. Changes to this policy</h2>
                    <p>
                        If this policy changes, the updated version will be posted on this page with a new effective
                        date.
                    </p>
                </section>

                <section className="privacy__section">
                    <h2>9. Contact</h2>
                    <p>
                        Questions about this policy? Email{" "}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="privacy__link">
                            {CONTACT_EMAIL}
                        </a>
                        .
                    </p>
                </section>
            </main>

            <footer className="privacy__footer">&copy; 2026 Hussein Shakir</footer>
        </div>
        </div>
    );
}
