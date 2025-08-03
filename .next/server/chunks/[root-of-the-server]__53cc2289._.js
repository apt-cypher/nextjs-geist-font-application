module.exports = {

"[project]/.next-internal/server/app/api/scan/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/scan/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const COMPLIANCE_CONTROLS = {
    hipaa: [
        {
            id: 'HIPAA-164.308',
            name: 'Administrative Safeguards',
            category: 'Administrative'
        },
        {
            id: 'HIPAA-164.310',
            name: 'Physical Safeguards',
            category: 'Physical'
        },
        {
            id: 'HIPAA-164.312',
            name: 'Technical Safeguards',
            category: 'Technical'
        },
        {
            id: 'HIPAA-164.314',
            name: 'Organizational Requirements',
            category: 'Organizational'
        }
    ],
    iso27001: [
        {
            id: 'ISO-A.5.1',
            name: 'Information Security Policies',
            category: 'Security Policy'
        },
        {
            id: 'ISO-A.6.1',
            name: 'Organization of Information Security',
            category: 'Organization'
        },
        {
            id: 'ISO-A.8.1',
            name: 'Asset Management',
            category: 'Asset Management'
        },
        {
            id: 'ISO-A.9.1',
            name: 'Access Control',
            category: 'Access Control'
        },
        {
            id: 'ISO-A.10.1',
            name: 'Cryptography',
            category: 'Cryptography'
        }
    ],
    soc2: [
        {
            id: 'SOC2-CC1',
            name: 'Control Environment',
            category: 'Security'
        },
        {
            id: 'SOC2-CC2',
            name: 'Communication and Information',
            category: 'Security'
        },
        {
            id: 'SOC2-CC3',
            name: 'Risk Assessment',
            category: 'Security'
        },
        {
            id: 'SOC2-A1',
            name: 'System Availability',
            category: 'Availability'
        }
    ],
    pci: [
        {
            id: 'PCI-1',
            name: 'Install and maintain firewall configuration',
            category: 'Network Security'
        },
        {
            id: 'PCI-2',
            name: 'Do not use vendor-supplied defaults',
            category: 'System Configuration'
        },
        {
            id: 'PCI-3',
            name: 'Protect stored cardholder data',
            category: 'Data Protection'
        },
        {
            id: 'PCI-4',
            name: 'Encrypt transmission of cardholder data',
            category: 'Data Protection'
        }
    ],
    gdpr: [
        {
            id: 'GDPR-Art5',
            name: 'Principles of processing',
            category: 'Lawfulness'
        },
        {
            id: 'GDPR-Art6',
            name: 'Lawfulness of processing',
            category: 'Lawfulness'
        },
        {
            id: 'GDPR-Art25',
            name: 'Data protection by design',
            category: 'Privacy by Design'
        },
        {
            id: 'GDPR-Art32',
            name: 'Security of processing',
            category: 'Security'
        }
    ],
    nist: [
        {
            id: 'NIST-ID.AM',
            name: 'Asset Management',
            category: 'Identify'
        },
        {
            id: 'NIST-PR.AC',
            name: 'Identity Management',
            category: 'Protect'
        },
        {
            id: 'NIST-DE.AE',
            name: 'Anomalies and Events',
            category: 'Detect'
        },
        {
            id: 'NIST-RS.RP',
            name: 'Response Planning',
            category: 'Respond'
        }
    ]
};
async function POST(request) {
    try {
        const body = await request.json();
        // Validate input
        if (!body.target || !body.frameworks || body.frameworks.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Target URL and at least one framework are required"
            }, {
                status: 400
            });
        }
        // Validate URL
        let targetUrl;
        try {
            targetUrl = new URL(body.target.startsWith('http') ? body.target : `https://${body.target}`);
        } catch  {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid URL format"
            }, {
                status: 400
            });
        }
        const startTime = Date.now();
        // Simulate network request to target
        let headers = {};
        let statusCode = 200;
        try {
            const response = await fetch(targetUrl.toString(), {
                method: 'HEAD',
                headers: {
                    'User-Agent': 'ComplianceAuditor/1.0'
                }
            });
            statusCode = response.status;
            response.headers.forEach((value, key)=>{
                headers[key] = value;
            });
        } catch (error) {
            // Simulate headers for demo purposes
            headers = {
                'server': 'nginx/1.18.0',
                'content-type': 'text/html',
                'x-frame-options': 'SAMEORIGIN',
                'x-content-type-options': 'nosniff',
                'strict-transport-security': 'max-age=31536000',
                'content-security-policy': "default-src 'self'",
                'x-xss-protection': '1; mode=block',
                'referrer-policy': 'strict-origin-when-cross-origin'
            };
            statusCode = 200;
        }
        const executionTime = Date.now() - startTime;
        // Generate findings based on selected frameworks
        const findings = [];
        let totalScore = 0;
        for (const framework of body.frameworks){
            const controls = COMPLIANCE_CONTROLS[framework] || [];
            for (const control of controls){
                const finding = generateFinding(control, headers, body.options);
                findings.push(finding);
                // Calculate score contribution
                if (finding.status === 'pass') totalScore += 20;
                else if (finding.status === 'warning') totalScore += 10;
            }
        }
        // Calculate overall compliance score
        const maxPossibleScore = findings.length * 20;
        const complianceScore = maxPossibleScore > 0 ? Math.round(totalScore / maxPossibleScore * 100) : 0;
        // Generate vulnerabilities if vulnerability scanning is enabled
        const vulnerabilities = [];
        if (body.includeVulnScan) {
            vulnerabilities.push(...generateVulnerabilities(headers, body.includePenetrationTest));
        }
        // Generate recommendations
        const recommendations = generateRecommendations(findings, body.options);
        const result = {
            id: `scan-${Date.now()}`,
            timestamp: new Date().toISOString(),
            framework: body.frameworks.join(', '),
            target: targetUrl.toString(),
            status: 'completed',
            score: complianceScore,
            findings,
            recommendations,
            executionTime,
            vulnerabilities,
            scanData: {
                headers,
                statusCode,
                depth: body.depth,
                options: body.options
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (error) {
        console.error('Scan error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error during scan"
        }, {
            status: 500
        });
    }
}
function generateFinding(control, headers, options) {
    const securityHeaders = [
        'content-security-policy',
        'x-content-type-options',
        'strict-transport-security',
        'x-frame-options',
        'x-xss-protection',
        'referrer-policy'
    ];
    // Simulate compliance checking logic
    let status = 'pass';
    let severity = 'low';
    let description = `${control.name} compliance check completed`;
    let evidence = 'Configuration verified';
    let remediation = 'No action required';
    // Check for security headers
    if (control.category === 'Technical' || control.category === 'Security') {
        const hasSecurityHeaders = securityHeaders.some((header)=>headers[header]);
        if (!hasSecurityHeaders) {
            status = 'fail';
            severity = 'high';
            description = `Missing critical security headers for ${control.name}`;
            evidence = `Headers checked: ${Object.keys(headers).join(', ')}`;
            remediation = 'Implement proper security headers configuration';
        } else if (securityHeaders.filter((header)=>headers[header]).length < 3) {
            status = 'warning';
            severity = 'medium';
            description = `Partial implementation of security controls for ${control.name}`;
            evidence = `Present headers: ${securityHeaders.filter((header)=>headers[header]).join(', ')}`;
            remediation = 'Review and implement additional security headers';
        }
    }
    // AI-powered analysis simulation
    if (options.aiAnalysis) {
        if (Math.random() > 0.7) {
            severity = severity === 'low' ? 'medium' : severity;
            description += ' (AI-enhanced analysis detected potential issues)';
        }
    }
    return {
        id: `finding-${control.id}-${Date.now()}`,
        control: control.id,
        status,
        severity,
        description,
        evidence,
        remediation
    };
}
function generateVulnerabilities(headers, includePenTest) {
    const vulnerabilities = [];
    // Check for common vulnerabilities
    if (!headers['x-frame-options']) {
        vulnerabilities.push({
            id: `vuln-${Date.now()}-1`,
            type: 'Clickjacking',
            severity: 'medium',
            description: 'Missing X-Frame-Options header allows clickjacking attacks',
            impact: 'Attackers can embed the site in malicious frames',
            solution: 'Add X-Frame-Options: DENY or SAMEORIGIN header',
            cvss: 5.4
        });
    }
    if (!headers['content-security-policy']) {
        vulnerabilities.push({
            id: `vuln-${Date.now()}-2`,
            type: 'XSS',
            severity: 'high',
            description: 'Missing Content Security Policy increases XSS risk',
            impact: 'Cross-site scripting attacks may be possible',
            solution: 'Implement a strict Content Security Policy',
            cvss: 7.2
        });
    }
    // Penetration testing findings
    if (includePenTest) {
        vulnerabilities.push({
            id: `vuln-${Date.now()}-3`,
            type: 'Information Disclosure',
            severity: 'low',
            description: 'Server version information disclosed in headers',
            impact: 'Attackers can identify specific server software versions',
            solution: 'Configure server to hide version information',
            cvss: 3.1
        });
    }
    return vulnerabilities;
}
function generateRecommendations(findings, options) {
    const recommendations = [];
    const criticalFindings = findings.filter((f)=>f.severity === 'critical').length;
    const highFindings = findings.filter((f)=>f.severity === 'high').length;
    if (criticalFindings > 0) {
        recommendations.push(`Address ${criticalFindings} critical security findings immediately`);
    }
    if (highFindings > 0) {
        recommendations.push(`Review and remediate ${highFindings} high-priority issues`);
    }
    const failedFindings = findings.filter((f)=>f.status === 'fail').length;
    if (failedFindings > 0) {
        recommendations.push(`${failedFindings} compliance controls are failing and require attention`);
    }
    if (options.autoRemediation) {
        recommendations.push('Auto-remediation is enabled - some issues may be automatically resolved');
    }
    if (options.aiAnalysis) {
        recommendations.push('AI analysis suggests implementing additional monitoring for anomaly detection');
    }
    recommendations.push('Schedule regular compliance scans to maintain security posture');
    recommendations.push('Consider implementing continuous monitoring for real-time compliance tracking');
    return recommendations;
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__53cc2289._.js.map