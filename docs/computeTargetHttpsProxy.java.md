# `computeTargetHttpsProxy` Submodule <a name="`computeTargetHttpsProxy` Submodule" id="@cdktf/provider-google.computeTargetHttpsProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeTargetHttpsProxy <a name="ComputeTargetHttpsProxy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy google_compute_target_https_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_target_https_proxy.ComputeTargetHttpsProxy;

ComputeTargetHttpsProxy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .urlMap(java.lang.String)
//  .certificateManagerCertificates(java.util.List<java.lang.String>)
//  .certificateMap(java.lang.String)
//  .description(java.lang.String)
//  .httpKeepAliveTimeoutSec(java.lang.Number)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .proxyBind(java.lang.Boolean)
//  .proxyBind(IResolvable)
//  .quicOverride(java.lang.String)
//  .serverTlsPolicy(java.lang.String)
//  .sslCertificates(java.util.List<java.lang.String>)
//  .sslPolicy(java.lang.String)
//  .timeouts(ComputeTargetHttpsProxyTimeouts)
//  .tlsEarlyData(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.urlMap">urlMap</a></code> | <code>java.lang.String</code> | A reference to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.certificateManagerCertificates">certificateManagerCertificates</a></code> | <code>java.util.List<java.lang.String></code> | URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.certificateMap">certificateMap</a></code> | <code>java.lang.String</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>java.lang.Number</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.proxyBind">proxyBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.quicOverride">quicOverride</a></code> | <code>java.lang.String</code> | Specifies the QUIC override policy for this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.serverTlsPolicy">serverTlsPolicy</a></code> | <code>java.lang.String</code> | A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.sslCertificates">sslCertificates</a></code> | <code>java.util.List<java.lang.String></code> | URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.tlsEarlyData">tlsEarlyData</a></code> | <code>java.lang.String</code> | Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#name ComputeTargetHttpsProxy#name}

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.urlMap"></a>

- *Type:* java.lang.String

A reference to the UrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#url_map ComputeTargetHttpsProxy#url_map}

---

##### `certificateManagerCertificates`<sup>Optional</sup> <a name="certificateManagerCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.certificateManagerCertificates"></a>

- *Type:* java.util.List<java.lang.String>

URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.

Certificate manager certificates only apply when the load balancing scheme is set to INTERNAL_MANAGED.
For EXTERNAL and EXTERNAL_MANAGED, use certificate_map instead.
sslCertificates and certificateManagerCertificates fields can not be defined together.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#certificate_manager_certificates ComputeTargetHttpsProxy#certificate_manager_certificates}

---

##### `certificateMap`<sup>Optional</sup> <a name="certificateMap" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.certificateMap"></a>

- *Type:* java.lang.String

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field is only supported for EXTERNAL and EXTERNAL_MANAGED load balancing schemes.
For INTERNAL_MANAGED, use certificate_manager_certificates instead.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#certificate_map ComputeTargetHttpsProxy#certificate_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#description ComputeTargetHttpsProxy#description}

---

##### `httpKeepAliveTimeoutSec`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.httpKeepAliveTimeoutSec"></a>

- *Type:* java.lang.Number

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value will be used. For Global
external HTTP(S) load balancer, the default value is 610 seconds, the
minimum allowed value is 5 seconds and the maximum allowed value is 1200
seconds. For cross-region internal HTTP(S) load balancer, the default
value is 600 seconds, the minimum allowed value is 5 seconds, and the
maximum allowed value is 600 seconds. For Global external HTTP(S) load
balancer (classic), this option is not available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#http_keep_alive_timeout_sec ComputeTargetHttpsProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}.

---

##### `proxyBind`<sup>Optional</sup> <a name="proxyBind" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.proxyBind"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#proxy_bind ComputeTargetHttpsProxy#proxy_bind}

---

##### `quicOverride`<sup>Optional</sup> <a name="quicOverride" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.quicOverride"></a>

- *Type:* java.lang.String

Specifies the QUIC override policy for this resource.

This determines
whether the load balancer will attempt to negotiate QUIC with clients
or not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is
specified, Google manages whether QUIC is used. Default value: "NONE" Possible values: ["NONE", "ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#quic_override ComputeTargetHttpsProxy#quic_override}

---

##### `serverTlsPolicy`<sup>Optional</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.serverTlsPolicy"></a>

- *Type:* java.lang.String

A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.

If you remove this field from your configuration at the same time as
deleting or recreating a referenced ServerTlsPolicy resource, you will
receive a resourceInUseByAnotherResource error. Use lifecycle.create_before_destroy
within the ServerTlsPolicy resource to avoid this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#server_tls_policy ComputeTargetHttpsProxy#server_tls_policy}

---

##### `sslCertificates`<sup>Optional</sup> <a name="sslCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.sslCertificates"></a>

- *Type:* java.util.List<java.lang.String>

URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.

Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates can not be defined together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#ssl_certificates ComputeTargetHttpsProxy#ssl_certificates}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.sslPolicy"></a>

- *Type:* java.lang.String

A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource.

If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#ssl_policy ComputeTargetHttpsProxy#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#timeouts ComputeTargetHttpsProxy#timeouts}

---

##### `tlsEarlyData`<sup>Optional</sup> <a name="tlsEarlyData" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.tlsEarlyData"></a>

- *Type:* java.lang.String

Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#tls_early_data ComputeTargetHttpsProxy#tls_early_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateManagerCertificates">resetCertificateManagerCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateMap">resetCertificateMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetHttpKeepAliveTimeoutSec">resetHttpKeepAliveTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProxyBind">resetProxyBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetQuicOverride">resetQuicOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetServerTlsPolicy">resetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslCertificates">resetSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTlsEarlyData">resetTlsEarlyData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts"></a>

```java
public void putTimeouts(ComputeTargetHttpsProxyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

---

##### `resetCertificateManagerCertificates` <a name="resetCertificateManagerCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateManagerCertificates"></a>

```java
public void resetCertificateManagerCertificates()
```

##### `resetCertificateMap` <a name="resetCertificateMap" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateMap"></a>

```java
public void resetCertificateMap()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHttpKeepAliveTimeoutSec` <a name="resetHttpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetHttpKeepAliveTimeoutSec"></a>

```java
public void resetHttpKeepAliveTimeoutSec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProject"></a>

```java
public void resetProject()
```

##### `resetProxyBind` <a name="resetProxyBind" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProxyBind"></a>

```java
public void resetProxyBind()
```

##### `resetQuicOverride` <a name="resetQuicOverride" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetQuicOverride"></a>

```java
public void resetQuicOverride()
```

##### `resetServerTlsPolicy` <a name="resetServerTlsPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetServerTlsPolicy"></a>

```java
public void resetServerTlsPolicy()
```

##### `resetSslCertificates` <a name="resetSslCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslCertificates"></a>

```java
public void resetSslCertificates()
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslPolicy"></a>

```java
public void resetSslPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsEarlyData` <a name="resetTlsEarlyData" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTlsEarlyData"></a>

```java
public void resetTlsEarlyData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeTargetHttpsProxy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_target_https_proxy.ComputeTargetHttpsProxy;

ComputeTargetHttpsProxy.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_target_https_proxy.ComputeTargetHttpsProxy;

ComputeTargetHttpsProxy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_target_https_proxy.ComputeTargetHttpsProxy;

ComputeTargetHttpsProxy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_target_https_proxy.ComputeTargetHttpsProxy;

ComputeTargetHttpsProxy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeTargetHttpsProxy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeTargetHttpsProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeTargetHttpsProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeTargetHttpsProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeTargetHttpsProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyId">proxyId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference">ComputeTargetHttpsProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificatesInput">certificateManagerCertificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMapInput">certificateMapInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput">httpKeepAliveTimeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBindInput">proxyBindInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverrideInput">quicOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicyInput">serverTlsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificatesInput">sslCertificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicyInput">sslPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyDataInput">tlsEarlyDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMapInput">urlMapInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificates">certificateManagerCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMap">certificateMap</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBind">proxyBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverride">quicOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificates">sslCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyData">tlsEarlyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMap">urlMap</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `proxyId`<sup>Required</sup> <a name="proxyId" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyId"></a>

```java
public java.lang.Number getProxyId();
```

- *Type:* java.lang.Number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeouts"></a>

```java
public ComputeTargetHttpsProxyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference">ComputeTargetHttpsProxyTimeoutsOutputReference</a>

---

##### `certificateManagerCertificatesInput`<sup>Optional</sup> <a name="certificateManagerCertificatesInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificatesInput"></a>

```java
public java.util.List<java.lang.String> getCertificateManagerCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateMapInput`<sup>Optional</sup> <a name="certificateMapInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMapInput"></a>

```java
public java.lang.String getCertificateMapInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `httpKeepAliveTimeoutSecInput`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSecInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput"></a>

```java
public java.lang.Number getHttpKeepAliveTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `proxyBindInput`<sup>Optional</sup> <a name="proxyBindInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBindInput"></a>

```java
public java.lang.Object getProxyBindInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `quicOverrideInput`<sup>Optional</sup> <a name="quicOverrideInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverrideInput"></a>

```java
public java.lang.String getQuicOverrideInput();
```

- *Type:* java.lang.String

---

##### `serverTlsPolicyInput`<sup>Optional</sup> <a name="serverTlsPolicyInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicyInput"></a>

```java
public java.lang.String getServerTlsPolicyInput();
```

- *Type:* java.lang.String

---

##### `sslCertificatesInput`<sup>Optional</sup> <a name="sslCertificatesInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificatesInput"></a>

```java
public java.util.List<java.lang.String> getSslCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicyInput"></a>

```java
public java.lang.String getSslPolicyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

---

##### `tlsEarlyDataInput`<sup>Optional</sup> <a name="tlsEarlyDataInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyDataInput"></a>

```java
public java.lang.String getTlsEarlyDataInput();
```

- *Type:* java.lang.String

---

##### `urlMapInput`<sup>Optional</sup> <a name="urlMapInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMapInput"></a>

```java
public java.lang.String getUrlMapInput();
```

- *Type:* java.lang.String

---

##### `certificateManagerCertificates`<sup>Required</sup> <a name="certificateManagerCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificates"></a>

```java
public java.util.List<java.lang.String> getCertificateManagerCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateMap`<sup>Required</sup> <a name="certificateMap" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMap"></a>

```java
public java.lang.String getCertificateMap();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `httpKeepAliveTimeoutSec`<sup>Required</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSec"></a>

```java
public java.lang.Number getHttpKeepAliveTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `proxyBind`<sup>Required</sup> <a name="proxyBind" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBind"></a>

```java
public java.lang.Object getProxyBind();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `quicOverride`<sup>Required</sup> <a name="quicOverride" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverride"></a>

```java
public java.lang.String getQuicOverride();
```

- *Type:* java.lang.String

---

##### `serverTlsPolicy`<sup>Required</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicy"></a>

```java
public java.lang.String getServerTlsPolicy();
```

- *Type:* java.lang.String

---

##### `sslCertificates`<sup>Required</sup> <a name="sslCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificates"></a>

```java
public java.util.List<java.lang.String> getSslCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicy"></a>

```java
public java.lang.String getSslPolicy();
```

- *Type:* java.lang.String

---

##### `tlsEarlyData`<sup>Required</sup> <a name="tlsEarlyData" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyData"></a>

```java
public java.lang.String getTlsEarlyData();
```

- *Type:* java.lang.String

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMap"></a>

```java
public java.lang.String getUrlMap();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeTargetHttpsProxyConfig <a name="ComputeTargetHttpsProxyConfig" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_target_https_proxy.ComputeTargetHttpsProxyConfig;

ComputeTargetHttpsProxyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .urlMap(java.lang.String)
//  .certificateManagerCertificates(java.util.List<java.lang.String>)
//  .certificateMap(java.lang.String)
//  .description(java.lang.String)
//  .httpKeepAliveTimeoutSec(java.lang.Number)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .proxyBind(java.lang.Boolean)
//  .proxyBind(IResolvable)
//  .quicOverride(java.lang.String)
//  .serverTlsPolicy(java.lang.String)
//  .sslCertificates(java.util.List<java.lang.String>)
//  .sslPolicy(java.lang.String)
//  .timeouts(ComputeTargetHttpsProxyTimeouts)
//  .tlsEarlyData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.urlMap">urlMap</a></code> | <code>java.lang.String</code> | A reference to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateManagerCertificates">certificateManagerCertificates</a></code> | <code>java.util.List<java.lang.String></code> | URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateMap">certificateMap</a></code> | <code>java.lang.String</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>java.lang.Number</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.proxyBind">proxyBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.quicOverride">quicOverride</a></code> | <code>java.lang.String</code> | Specifies the QUIC override policy for this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>java.lang.String</code> | A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslCertificates">sslCertificates</a></code> | <code>java.util.List<java.lang.String></code> | URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.tlsEarlyData">tlsEarlyData</a></code> | <code>java.lang.String</code> | Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#name ComputeTargetHttpsProxy#name}

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.urlMap"></a>

```java
public java.lang.String getUrlMap();
```

- *Type:* java.lang.String

A reference to the UrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#url_map ComputeTargetHttpsProxy#url_map}

---

##### `certificateManagerCertificates`<sup>Optional</sup> <a name="certificateManagerCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateManagerCertificates"></a>

```java
public java.util.List<java.lang.String> getCertificateManagerCertificates();
```

- *Type:* java.util.List<java.lang.String>

URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.

Certificate manager certificates only apply when the load balancing scheme is set to INTERNAL_MANAGED.
For EXTERNAL and EXTERNAL_MANAGED, use certificate_map instead.
sslCertificates and certificateManagerCertificates fields can not be defined together.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#certificate_manager_certificates ComputeTargetHttpsProxy#certificate_manager_certificates}

---

##### `certificateMap`<sup>Optional</sup> <a name="certificateMap" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateMap"></a>

```java
public java.lang.String getCertificateMap();
```

- *Type:* java.lang.String

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field is only supported for EXTERNAL and EXTERNAL_MANAGED load balancing schemes.
For INTERNAL_MANAGED, use certificate_manager_certificates instead.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#certificate_map ComputeTargetHttpsProxy#certificate_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#description ComputeTargetHttpsProxy#description}

---

##### `httpKeepAliveTimeoutSec`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec"></a>

```java
public java.lang.Number getHttpKeepAliveTimeoutSec();
```

- *Type:* java.lang.Number

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value will be used. For Global
external HTTP(S) load balancer, the default value is 610 seconds, the
minimum allowed value is 5 seconds and the maximum allowed value is 1200
seconds. For cross-region internal HTTP(S) load balancer, the default
value is 600 seconds, the minimum allowed value is 5 seconds, and the
maximum allowed value is 600 seconds. For Global external HTTP(S) load
balancer (classic), this option is not available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#http_keep_alive_timeout_sec ComputeTargetHttpsProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}.

---

##### `proxyBind`<sup>Optional</sup> <a name="proxyBind" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.proxyBind"></a>

```java
public java.lang.Object getProxyBind();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#proxy_bind ComputeTargetHttpsProxy#proxy_bind}

---

##### `quicOverride`<sup>Optional</sup> <a name="quicOverride" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.quicOverride"></a>

```java
public java.lang.String getQuicOverride();
```

- *Type:* java.lang.String

Specifies the QUIC override policy for this resource.

This determines
whether the load balancer will attempt to negotiate QUIC with clients
or not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is
specified, Google manages whether QUIC is used. Default value: "NONE" Possible values: ["NONE", "ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#quic_override ComputeTargetHttpsProxy#quic_override}

---

##### `serverTlsPolicy`<sup>Optional</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.serverTlsPolicy"></a>

```java
public java.lang.String getServerTlsPolicy();
```

- *Type:* java.lang.String

A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.

If you remove this field from your configuration at the same time as
deleting or recreating a referenced ServerTlsPolicy resource, you will
receive a resourceInUseByAnotherResource error. Use lifecycle.create_before_destroy
within the ServerTlsPolicy resource to avoid this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#server_tls_policy ComputeTargetHttpsProxy#server_tls_policy}

---

##### `sslCertificates`<sup>Optional</sup> <a name="sslCertificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslCertificates"></a>

```java
public java.util.List<java.lang.String> getSslCertificates();
```

- *Type:* java.util.List<java.lang.String>

URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.

Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates can not be defined together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#ssl_certificates ComputeTargetHttpsProxy#ssl_certificates}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslPolicy"></a>

```java
public java.lang.String getSslPolicy();
```

- *Type:* java.lang.String

A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource.

If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#ssl_policy ComputeTargetHttpsProxy#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.timeouts"></a>

```java
public ComputeTargetHttpsProxyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#timeouts ComputeTargetHttpsProxy#timeouts}

---

##### `tlsEarlyData`<sup>Optional</sup> <a name="tlsEarlyData" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.tlsEarlyData"></a>

```java
public java.lang.String getTlsEarlyData();
```

- *Type:* java.lang.String

Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#tls_early_data ComputeTargetHttpsProxy#tls_early_data}

---

### ComputeTargetHttpsProxyTimeouts <a name="ComputeTargetHttpsProxyTimeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_target_https_proxy.ComputeTargetHttpsProxyTimeouts;

ComputeTargetHttpsProxyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#create ComputeTargetHttpsProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#delete ComputeTargetHttpsProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#update ComputeTargetHttpsProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#create ComputeTargetHttpsProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#delete ComputeTargetHttpsProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_target_https_proxy#update ComputeTargetHttpsProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeTargetHttpsProxyTimeoutsOutputReference <a name="ComputeTargetHttpsProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_target_https_proxy.ComputeTargetHttpsProxyTimeoutsOutputReference;

new ComputeTargetHttpsProxyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

---



