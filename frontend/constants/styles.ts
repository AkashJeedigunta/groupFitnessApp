import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    loginContainer: {
        flex: 1,
        backgroundColor: '#3B82F6',
        justifyContent: 'center',
        padding: 20,
    },
    loginCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    loginHeader: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logoContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#DBEAFE',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    logoIcon: {
        fontSize: 32,
    },
    loginTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    loginSubtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 5,
    },
    loginForm: {
        gap: 15,
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 13,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 10,
        padding: 12,
        fontSize: 15,
        backgroundColor: '#fff',
    },
    inputFlex: {
        flex: 1,
    },
    loginButton: {
        backgroundColor: '#3B82F6',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    demoText: {
        textAlign: 'center',
        color: '#059669',
        fontSize: 12,
        marginTop: 10,
        fontWeight: '600',
    },
    signupText: {
        textAlign: 'center',
        color: '#6B7280',
        fontSize: 13,
        marginTop: 15,
    },
    signupLink: {
        color: '#3B82F6',
        fontWeight: '600',
    },
    header: {
        backgroundColor: '#fff',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    headerUser: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    headerUserName: {
        fontSize: 13,
        color: '#6B7280',
    },
    avatar: {
        width: 40,
        height: 40,
        backgroundColor: '#3B82F6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        fontSize: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    backIcon: {
        fontSize: 24,
        color: '#3B82F6',
    },
    backText: {
        fontSize: 16,
        color: '#3B82F6',
        fontWeight: '600',
    },
    content: {
        padding: 15,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 20,
    },
    statCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        width: '48%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    statHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 10,
    },
    statIcon: {
        fontSize: 18,
    },
    statLabel: {
        fontSize: 12,
        color: '#6B7280',
        fontWeight: '500',
    },
    statValue: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    statSubtext: {
        fontSize: 12,
        color: '#9CA3AF',
        marginTop: 4,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 15,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    quickLogItem: {
        marginBottom: 15,
    },
    inputRow: {
        flexDirection: 'row',
        gap: 10,
    },
    logButton: {
        backgroundColor: '#3B82F6',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
        justifyContent: 'center',
    },
    logButtonGreen: {
        backgroundColor: '#10B981',
    },
    logButtonOrange: {
        backgroundColor: '#F97316',
    },
    logButtonText: {
        color: '#fff',
        fontWeight: '600',
    },
    createButton: {
        backgroundColor: '#9333EA',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8,
    },
    createButtonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
    },
    groupCard: {
        borderWidth: 2,
        borderColor: '#E5E7EB',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    groupName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1F2937',
    },
    groupMembers: {
        fontSize: 13,
        color: '#6B7280',
        marginTop: 4,
    },
    groupIcon: {
        fontSize: 28,
    },
    emptyText: {
        textAlign: 'center',
        color: '#9CA3AF',
        fontSize: 14,
        paddingVertical: 20,
    },
    groupGoalCard: {
        backgroundColor: '#3B82F6',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
    },
    groupGoalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    groupGoalText: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 15,
    },
    progressContainer: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
        padding: 15,
    },
    progressInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    progressLabel: {
        color: '#fff',
        fontSize: 13,
    },
    progressBarBg: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 10,
        height: 10,
        overflow: 'hidden',
    },
    progressBarFill: {
        backgroundColor: '#fff',
        height: 10,
        borderRadius: 10,
    },
    progressBarBlue: {
        backgroundColor: '#3B82F6',
    },
    memberCard: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    memberHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    memberInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    memberAvatar: {
        width: 40,
        height: 40,
        backgroundColor: '#3B82F6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    memberName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1F2937',
    },
    memberProgress: {
        fontSize: 12,
        color: '#6B7280',
        marginTop: 2,
    },
    memberPercent: {
        fontSize: 13,
        fontWeight: '600',
        color: '#3B82F6',
    },
    logoutButton: {
        backgroundColor: '#EF4444',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 30,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export type StylesType = typeof styles;
export default styles;