# `computeTargetHttpsProxy` Submodule <a name="`computeTargetHttpsProxy` Submodule" id="@cdktf/provider-google.computeTargetHttpsProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeTargetHttpsProxy <a name="ComputeTargetHttpsProxy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy google_compute_target_https_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_target_https_proxy

computeTargetHttpsProxy.ComputeTargetHttpsProxy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  url_map: str,
  certificate_manager_certificates: typing.List[str] = None,
  certificate_map: str = None,
  description: str = None,
  http_keep_alive_timeout_sec: typing.Union[int, float] = None,
  id: str = None,
  project: str = None,
  proxy_bind: typing.Union[bool, IResolvable] = None,
  quic_override: str = None,
  server_tls_policy: str = None,
  ssl_certificates: typing.List[str] = None,
  ssl_policy: str = None,
  timeouts: ComputeTargetHttpsProxyTimeouts = None,
  tls_early_data: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.urlMap">url_map</a></code> | <code>str</code> | A reference to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.certificateManagerCertificates">certificate_manager_certificates</a></code> | <code>typing.List[str]</code> | URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.certificateMap">certificate_map</a></code> | <code>str</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.httpKeepAliveTimeoutSec">http_keep_alive_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.proxyBind">proxy_bind</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.quicOverride">quic_override</a></code> | <code>str</code> | Specifies the QUIC override policy for this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.sslCertificates">ssl_certificates</a></code> | <code>typing.List[str]</code> | URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.sslPolicy">ssl_policy</a></code> | <code>str</code> | A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.tlsEarlyData">tls_early_data</a></code> | <code>str</code> | Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#name ComputeTargetHttpsProxy#name}

---

##### `url_map`<sup>Required</sup> <a name="url_map" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.urlMap"></a>

- *Type:* str

A reference to the UrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#url_map ComputeTargetHttpsProxy#url_map}

---

##### `certificate_manager_certificates`<sup>Optional</sup> <a name="certificate_manager_certificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.certificateManagerCertificates"></a>

- *Type:* typing.List[str]

URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.

Certificate manager certificates only apply when the load balancing scheme is set to INTERNAL_MANAGED.
For EXTERNAL and EXTERNAL_MANAGED, use certificate_map instead.
sslCertificates and certificateManagerCertificates fields can not be defined together.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#certificate_manager_certificates ComputeTargetHttpsProxy#certificate_manager_certificates}

---

##### `certificate_map`<sup>Optional</sup> <a name="certificate_map" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.certificateMap"></a>

- *Type:* str

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field is only supported for EXTERNAL and EXTERNAL_MANAGED load balancing schemes.
For INTERNAL_MANAGED, use certificate_manager_certificates instead.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#certificate_map ComputeTargetHttpsProxy#certificate_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#description ComputeTargetHttpsProxy#description}

---

##### `http_keep_alive_timeout_sec`<sup>Optional</sup> <a name="http_keep_alive_timeout_sec" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.httpKeepAliveTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value will be used. For Global
external HTTP(S) load balancer, the default value is 610 seconds, the
minimum allowed value is 5 seconds and the maximum allowed value is 1200
seconds. For cross-region internal HTTP(S) load balancer, the default
value is 600 seconds, the minimum allowed value is 5 seconds, and the
maximum allowed value is 600 seconds. For Global external HTTP(S) load
balancer (classic), this option is not available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#http_keep_alive_timeout_sec ComputeTargetHttpsProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}.

---

##### `proxy_bind`<sup>Optional</sup> <a name="proxy_bind" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.proxyBind"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#proxy_bind ComputeTargetHttpsProxy#proxy_bind}

---

##### `quic_override`<sup>Optional</sup> <a name="quic_override" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.quicOverride"></a>

- *Type:* str

Specifies the QUIC override policy for this resource.

This determines
whether the load balancer will attempt to negotiate QUIC with clients
or not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is
specified, Google manages whether QUIC is used. Default value: "NONE" Possible values: ["NONE", "ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#quic_override ComputeTargetHttpsProxy#quic_override}

---

##### `server_tls_policy`<sup>Optional</sup> <a name="server_tls_policy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.serverTlsPolicy"></a>

- *Type:* str

A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.

If you remove this field from your configuration at the same time as
deleting or recreating a referenced ServerTlsPolicy resource, you will
receive a resourceInUseByAnotherResource error. Use lifecycle.create_before_destroy
within the ServerTlsPolicy resource to avoid this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#server_tls_policy ComputeTargetHttpsProxy#server_tls_policy}

---

##### `ssl_certificates`<sup>Optional</sup> <a name="ssl_certificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.sslCertificates"></a>

- *Type:* typing.List[str]

URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.

Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates can not be defined together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#ssl_certificates ComputeTargetHttpsProxy#ssl_certificates}

---

##### `ssl_policy`<sup>Optional</sup> <a name="ssl_policy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.sslPolicy"></a>

- *Type:* str

A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource.

If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#ssl_policy ComputeTargetHttpsProxy#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#timeouts ComputeTargetHttpsProxy#timeouts}

---

##### `tls_early_data`<sup>Optional</sup> <a name="tls_early_data" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.Initializer.parameter.tlsEarlyData"></a>

- *Type:* str

Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#tls_early_data ComputeTargetHttpsProxy#tls_early_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateManagerCertificates">reset_certificate_manager_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateMap">reset_certificate_map</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetHttpKeepAliveTimeoutSec">reset_http_keep_alive_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProxyBind">reset_proxy_bind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetQuicOverride">reset_quic_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetServerTlsPolicy">reset_server_tls_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslCertificates">reset_ssl_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslPolicy">reset_ssl_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTlsEarlyData">reset_tls_early_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#create ComputeTargetHttpsProxy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#delete ComputeTargetHttpsProxy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#update ComputeTargetHttpsProxy#update}.

---

##### `reset_certificate_manager_certificates` <a name="reset_certificate_manager_certificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateManagerCertificates"></a>

```python
def reset_certificate_manager_certificates() -> None
```

##### `reset_certificate_map` <a name="reset_certificate_map" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetCertificateMap"></a>

```python
def reset_certificate_map() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_http_keep_alive_timeout_sec` <a name="reset_http_keep_alive_timeout_sec" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetHttpKeepAliveTimeoutSec"></a>

```python
def reset_http_keep_alive_timeout_sec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_proxy_bind` <a name="reset_proxy_bind" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetProxyBind"></a>

```python
def reset_proxy_bind() -> None
```

##### `reset_quic_override` <a name="reset_quic_override" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetQuicOverride"></a>

```python
def reset_quic_override() -> None
```

##### `reset_server_tls_policy` <a name="reset_server_tls_policy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetServerTlsPolicy"></a>

```python
def reset_server_tls_policy() -> None
```

##### `reset_ssl_certificates` <a name="reset_ssl_certificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslCertificates"></a>

```python
def reset_ssl_certificates() -> None
```

##### `reset_ssl_policy` <a name="reset_ssl_policy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetSslPolicy"></a>

```python
def reset_ssl_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_early_data` <a name="reset_tls_early_data" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.resetTlsEarlyData"></a>

```python
def reset_tls_early_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeTargetHttpsProxy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_target_https_proxy

computeTargetHttpsProxy.ComputeTargetHttpsProxy.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_target_https_proxy

computeTargetHttpsProxy.ComputeTargetHttpsProxy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_target_https_proxy

computeTargetHttpsProxy.ComputeTargetHttpsProxy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_target_https_proxy

computeTargetHttpsProxy.ComputeTargetHttpsProxy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeTargetHttpsProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeTargetHttpsProxy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeTargetHttpsProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeTargetHttpsProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyId">proxy_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference">ComputeTargetHttpsProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificatesInput">certificate_manager_certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMapInput">certificate_map_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput">http_keep_alive_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBindInput">proxy_bind_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverrideInput">quic_override_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicyInput">server_tls_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificatesInput">ssl_certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicyInput">ssl_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyDataInput">tls_early_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMapInput">url_map_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificates">certificate_manager_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMap">certificate_map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSec">http_keep_alive_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBind">proxy_bind</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverride">quic_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificates">ssl_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicy">ssl_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyData">tls_early_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMap">url_map</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `proxy_id`<sup>Required</sup> <a name="proxy_id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyId"></a>

```python
proxy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeouts"></a>

```python
timeouts: ComputeTargetHttpsProxyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference">ComputeTargetHttpsProxyTimeoutsOutputReference</a>

---

##### `certificate_manager_certificates_input`<sup>Optional</sup> <a name="certificate_manager_certificates_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificatesInput"></a>

```python
certificate_manager_certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_map_input`<sup>Optional</sup> <a name="certificate_map_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMapInput"></a>

```python
certificate_map_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `http_keep_alive_timeout_sec_input`<sup>Optional</sup> <a name="http_keep_alive_timeout_sec_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput"></a>

```python
http_keep_alive_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `proxy_bind_input`<sup>Optional</sup> <a name="proxy_bind_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBindInput"></a>

```python
proxy_bind_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `quic_override_input`<sup>Optional</sup> <a name="quic_override_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverrideInput"></a>

```python
quic_override_input: str
```

- *Type:* str

---

##### `server_tls_policy_input`<sup>Optional</sup> <a name="server_tls_policy_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicyInput"></a>

```python
server_tls_policy_input: str
```

- *Type:* str

---

##### `ssl_certificates_input`<sup>Optional</sup> <a name="ssl_certificates_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificatesInput"></a>

```python
ssl_certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssl_policy_input`<sup>Optional</sup> <a name="ssl_policy_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicyInput"></a>

```python
ssl_policy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeTargetHttpsProxyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>]

---

##### `tls_early_data_input`<sup>Optional</sup> <a name="tls_early_data_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyDataInput"></a>

```python
tls_early_data_input: str
```

- *Type:* str

---

##### `url_map_input`<sup>Optional</sup> <a name="url_map_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMapInput"></a>

```python
url_map_input: str
```

- *Type:* str

---

##### `certificate_manager_certificates`<sup>Required</sup> <a name="certificate_manager_certificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateManagerCertificates"></a>

```python
certificate_manager_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_map`<sup>Required</sup> <a name="certificate_map" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.certificateMap"></a>

```python
certificate_map: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `http_keep_alive_timeout_sec`<sup>Required</sup> <a name="http_keep_alive_timeout_sec" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.httpKeepAliveTimeoutSec"></a>

```python
http_keep_alive_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `proxy_bind`<sup>Required</sup> <a name="proxy_bind" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.proxyBind"></a>

```python
proxy_bind: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `quic_override`<sup>Required</sup> <a name="quic_override" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.quicOverride"></a>

```python
quic_override: str
```

- *Type:* str

---

##### `server_tls_policy`<sup>Required</sup> <a name="server_tls_policy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.serverTlsPolicy"></a>

```python
server_tls_policy: str
```

- *Type:* str

---

##### `ssl_certificates`<sup>Required</sup> <a name="ssl_certificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslCertificates"></a>

```python
ssl_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssl_policy`<sup>Required</sup> <a name="ssl_policy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.sslPolicy"></a>

```python
ssl_policy: str
```

- *Type:* str

---

##### `tls_early_data`<sup>Required</sup> <a name="tls_early_data" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tlsEarlyData"></a>

```python
tls_early_data: str
```

- *Type:* str

---

##### `url_map`<sup>Required</sup> <a name="url_map" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.urlMap"></a>

```python
url_map: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeTargetHttpsProxyConfig <a name="ComputeTargetHttpsProxyConfig" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_target_https_proxy

computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  url_map: str,
  certificate_manager_certificates: typing.List[str] = None,
  certificate_map: str = None,
  description: str = None,
  http_keep_alive_timeout_sec: typing.Union[int, float] = None,
  id: str = None,
  project: str = None,
  proxy_bind: typing.Union[bool, IResolvable] = None,
  quic_override: str = None,
  server_tls_policy: str = None,
  ssl_certificates: typing.List[str] = None,
  ssl_policy: str = None,
  timeouts: ComputeTargetHttpsProxyTimeouts = None,
  tls_early_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.urlMap">url_map</a></code> | <code>str</code> | A reference to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateManagerCertificates">certificate_manager_certificates</a></code> | <code>typing.List[str]</code> | URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateMap">certificate_map</a></code> | <code>str</code> | A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec">http_keep_alive_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.proxyBind">proxy_bind</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.quicOverride">quic_override</a></code> | <code>str</code> | Specifies the QUIC override policy for this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslCertificates">ssl_certificates</a></code> | <code>typing.List[str]</code> | URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslPolicy">ssl_policy</a></code> | <code>str</code> | A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.tlsEarlyData">tls_early_data</a></code> | <code>str</code> | Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#name ComputeTargetHttpsProxy#name}

---

##### `url_map`<sup>Required</sup> <a name="url_map" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.urlMap"></a>

```python
url_map: str
```

- *Type:* str

A reference to the UrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#url_map ComputeTargetHttpsProxy#url_map}

---

##### `certificate_manager_certificates`<sup>Optional</sup> <a name="certificate_manager_certificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateManagerCertificates"></a>

```python
certificate_manager_certificates: typing.List[str]
```

- *Type:* typing.List[str]

URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.

Certificate manager certificates only apply when the load balancing scheme is set to INTERNAL_MANAGED.
For EXTERNAL and EXTERNAL_MANAGED, use certificate_map instead.
sslCertificates and certificateManagerCertificates fields can not be defined together.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#certificate_manager_certificates ComputeTargetHttpsProxy#certificate_manager_certificates}

---

##### `certificate_map`<sup>Optional</sup> <a name="certificate_map" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.certificateMap"></a>

```python
certificate_map: str
```

- *Type:* str

A reference to the CertificateMap resource uri that identifies a certificate map associated with the given target proxy.

This field is only supported for EXTERNAL and EXTERNAL_MANAGED load balancing schemes.
For INTERNAL_MANAGED, use certificate_manager_certificates instead.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#certificate_map ComputeTargetHttpsProxy#certificate_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#description ComputeTargetHttpsProxy#description}

---

##### `http_keep_alive_timeout_sec`<sup>Optional</sup> <a name="http_keep_alive_timeout_sec" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec"></a>

```python
http_keep_alive_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value will be used. For Global
external HTTP(S) load balancer, the default value is 610 seconds, the
minimum allowed value is 5 seconds and the maximum allowed value is 1200
seconds. For cross-region internal HTTP(S) load balancer, the default
value is 600 seconds, the minimum allowed value is 5 seconds, and the
maximum allowed value is 600 seconds. For Global external HTTP(S) load
balancer (classic), this option is not available publicly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#http_keep_alive_timeout_sec ComputeTargetHttpsProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}.

---

##### `proxy_bind`<sup>Optional</sup> <a name="proxy_bind" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.proxyBind"></a>

```python
proxy_bind: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#proxy_bind ComputeTargetHttpsProxy#proxy_bind}

---

##### `quic_override`<sup>Optional</sup> <a name="quic_override" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.quicOverride"></a>

```python
quic_override: str
```

- *Type:* str

Specifies the QUIC override policy for this resource.

This determines
whether the load balancer will attempt to negotiate QUIC with clients
or not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is
specified, Google manages whether QUIC is used. Default value: "NONE" Possible values: ["NONE", "ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#quic_override ComputeTargetHttpsProxy#quic_override}

---

##### `server_tls_policy`<sup>Optional</sup> <a name="server_tls_policy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.serverTlsPolicy"></a>

```python
server_tls_policy: str
```

- *Type:* str

A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.

If you remove this field from your configuration at the same time as
deleting or recreating a referenced ServerTlsPolicy resource, you will
receive a resourceInUseByAnotherResource error. Use lifecycle.create_before_destroy
within the ServerTlsPolicy resource to avoid this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#server_tls_policy ComputeTargetHttpsProxy#server_tls_policy}

---

##### `ssl_certificates`<sup>Optional</sup> <a name="ssl_certificates" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslCertificates"></a>

```python
ssl_certificates: typing.List[str]
```

- *Type:* typing.List[str]

URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.

Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates can not be defined together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#ssl_certificates ComputeTargetHttpsProxy#ssl_certificates}

---

##### `ssl_policy`<sup>Optional</sup> <a name="ssl_policy" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.sslPolicy"></a>

```python
ssl_policy: str
```

- *Type:* str

A reference to the SslPolicy resource that will be associated with the TargetHttpsProxy resource.

If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#ssl_policy ComputeTargetHttpsProxy#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.timeouts"></a>

```python
timeouts: ComputeTargetHttpsProxyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#timeouts ComputeTargetHttpsProxy#timeouts}

---

##### `tls_early_data`<sup>Optional</sup> <a name="tls_early_data" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyConfig.property.tlsEarlyData"></a>

```python
tls_early_data: str
```

- *Type:* str

Specifies whether TLS 1.3 0-RTT Data (“Early Data”) should be accepted for this service. Early Data allows a TLS resumption handshake to include the initial application payload (a HTTP request) alongside the handshake, reducing the effective round trips to “zero”. This applies to TLS 1.3 connections over TCP (HTTP/2) as well as over UDP (QUIC/h3). Possible values: ["STRICT", "PERMISSIVE", "UNRESTRICTED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#tls_early_data ComputeTargetHttpsProxy#tls_early_data}

---

### ComputeTargetHttpsProxyTimeouts <a name="ComputeTargetHttpsProxyTimeouts" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_target_https_proxy

computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#create ComputeTargetHttpsProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#delete ComputeTargetHttpsProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#update ComputeTargetHttpsProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#create ComputeTargetHttpsProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#delete ComputeTargetHttpsProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_target_https_proxy#update ComputeTargetHttpsProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeTargetHttpsProxyTimeoutsOutputReference <a name="ComputeTargetHttpsProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_target_https_proxy

computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeTargetHttpsProxyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeTargetHttpsProxy.ComputeTargetHttpsProxyTimeouts">ComputeTargetHttpsProxyTimeouts</a>]

---



