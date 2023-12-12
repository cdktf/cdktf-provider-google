# `computeBackendService` Submodule <a name="`computeBackendService` Submodule" id="@cdktf/provider-google.computeBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendService <a name="ComputeBackendService" id="@cdktf/provider-google.computeBackendService.ComputeBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service google_compute_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendService(
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
  affinity_cookie_ttl_sec: typing.Union[int, float] = None,
  backend: typing.Union[IResolvable, typing.List[ComputeBackendServiceBackend]] = None,
  cdn_policy: ComputeBackendServiceCdnPolicy = None,
  circuit_breakers: ComputeBackendServiceCircuitBreakers = None,
  compression_mode: str = None,
  connection_draining_timeout_sec: typing.Union[int, float] = None,
  consistent_hash: ComputeBackendServiceConsistentHash = None,
  custom_request_headers: typing.List[str] = None,
  custom_response_headers: typing.List[str] = None,
  description: str = None,
  edge_security_policy: str = None,
  enable_cdn: typing.Union[bool, IResolvable] = None,
  health_checks: typing.List[str] = None,
  iap: ComputeBackendServiceIap = None,
  id: str = None,
  load_balancing_scheme: str = None,
  locality_lb_policies: typing.Union[IResolvable, typing.List[ComputeBackendServiceLocalityLbPolicies]] = None,
  locality_lb_policy: str = None,
  log_config: ComputeBackendServiceLogConfig = None,
  outlier_detection: ComputeBackendServiceOutlierDetection = None,
  port_name: str = None,
  project: str = None,
  protocol: str = None,
  security_policy: str = None,
  security_settings: ComputeBackendServiceSecuritySettings = None,
  session_affinity: str = None,
  timeouts: ComputeBackendServiceTimeouts = None,
  timeout_sec: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.affinityCookieTtlSec">affinity_cookie_ttl_sec</a></code> | <code>typing.Union[int, float]</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.backend">backend</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>]]</code> | backend block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.cdnPolicy">cdn_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.circuitBreakers">circuit_breakers</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.compressionMode">compression_mode</a></code> | <code>str</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.connectionDrainingTimeoutSec">connection_draining_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.consistentHash">consistent_hash</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.customRequestHeaders">custom_request_headers</a></code> | <code>typing.List[str]</code> | Headers that the HTTP/S load balancer should add to proxied requests. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.customResponseHeaders">custom_response_headers</a></code> | <code>typing.List[str]</code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.edgeSecurityPolicy">edge_security_policy</a></code> | <code>str</code> | The resource URL for the edge security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.enableCdn">enable_cdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enable Cloud CDN for this BackendService. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.healthChecks">health_checks</a></code> | <code>typing.List[str]</code> | The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#id ComputeBackendService#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | Indicates whether the backend service will be used with internal or external load balancing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.localityLbPolicies">locality_lb_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>]]</code> | locality_lb_policies block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.localityLbPolicy">locality_lb_policy</a></code> | <code>str</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.outlierDetection">outlier_detection</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.portName">port_name</a></code> | <code>str</code> | Name of backend port. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#project ComputeBackendService#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | The protocol this BackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.securityPolicy">security_policy</a></code> | <code>str</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.securitySettings">security_settings</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.sessionAffinity">session_affinity</a></code> | <code>str</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | How many seconds to wait for the backend before considering it a failed request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `affinity_cookie_ttl_sec`<sup>Optional</sup> <a name="affinity_cookie_ttl_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.affinityCookieTtlSec"></a>

- *Type:* typing.Union[int, float]

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#affinity_cookie_ttl_sec ComputeBackendService#affinity_cookie_ttl_sec}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.backend"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>]]

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#backend ComputeBackendService#backend}

---

##### `cdn_policy`<sup>Optional</sup> <a name="cdn_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.cdnPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#cdn_policy ComputeBackendService#cdn_policy}

---

##### `circuit_breakers`<sup>Optional</sup> <a name="circuit_breakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.circuitBreakers"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#circuit_breakers ComputeBackendService#circuit_breakers}

---

##### `compression_mode`<sup>Optional</sup> <a name="compression_mode" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.compressionMode"></a>

- *Type:* str

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#compression_mode ComputeBackendService#compression_mode}

---

##### `connection_draining_timeout_sec`<sup>Optional</sup> <a name="connection_draining_timeout_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.connectionDrainingTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#connection_draining_timeout_sec ComputeBackendService#connection_draining_timeout_sec}

---

##### `consistent_hash`<sup>Optional</sup> <a name="consistent_hash" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.consistentHash"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#consistent_hash ComputeBackendService#consistent_hash}

---

##### `custom_request_headers`<sup>Optional</sup> <a name="custom_request_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.customRequestHeaders"></a>

- *Type:* typing.List[str]

Headers that the HTTP/S load balancer should add to proxied requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#custom_request_headers ComputeBackendService#custom_request_headers}

---

##### `custom_response_headers`<sup>Optional</sup> <a name="custom_response_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.customResponseHeaders"></a>

- *Type:* typing.List[str]

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#custom_response_headers ComputeBackendService#custom_response_headers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#description ComputeBackendService#description}

---

##### `edge_security_policy`<sup>Optional</sup> <a name="edge_security_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.edgeSecurityPolicy"></a>

- *Type:* str

The resource URL for the edge security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#edge_security_policy ComputeBackendService#edge_security_policy}

---

##### `enable_cdn`<sup>Optional</sup> <a name="enable_cdn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.enableCdn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enable Cloud CDN for this BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#enable_cdn ComputeBackendService#enable_cdn}

---

##### `health_checks`<sup>Optional</sup> <a name="health_checks" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.healthChecks"></a>

- *Type:* typing.List[str]

The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService.

Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

For internal load balancing, a URL to a HealthCheck resource must be specified instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#health_checks ComputeBackendService#health_checks}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.iap"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#iap ComputeBackendService#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#id ComputeBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancing_scheme`<sup>Optional</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* str

Indicates whether the backend service will be used with internal or external load balancing.

A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED", "INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#load_balancing_scheme ComputeBackendService#load_balancing_scheme}

---

##### `locality_lb_policies`<sup>Optional</sup> <a name="locality_lb_policies" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.localityLbPolicies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>]]

locality_lb_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#locality_lb_policies ComputeBackendService#locality_lb_policies}

---

##### `locality_lb_policy`<sup>Optional</sup> <a name="locality_lb_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.localityLbPolicy"></a>

- *Type:* str

The load balancing algorithm used within the scope of the locality. The possible values are:.

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  is selected in round robin order.
* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  hosts and picks the host which has fewer active requests.
* 'RING_HASH': The ring/modulo hash load balancer implements consistent
  hashing to backends. The algorithm has the property that the
  addition/removal of a host from a set of N hosts only affects
  1/N of the requests.
* 'RANDOM': The load balancer selects a random healthy host.
* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  connection metadata, i.e., connections are opened
  to the same address as the destination address of
  the incoming connection before the connection
  was redirected to the load balancer.
* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  Maglev is not as stable as ring hash but has faster table lookup
  build times and host selection times. For more information about
  Maglev, refer to https://ai.google/research/pubs/pub44824
* 'WEIGHTED_MAGLEV': Per-instance weighted Load Balancing via health check
  reported weights. If set, the Backend Service must
  configure a non legacy HTTP-based Health Check, and
  health check replies are expected to contain
  non-standard HTTP response header field
  X-Load-Balancing-Endpoint-Weight to specify the
  per-instance weights. If set, Load Balancing is weight
  based on the per-instance weights reported in the last
  processed health check replies, as long as every
  instance either reported a valid weight or had
  UNAVAILABLE_WEIGHT. Otherwise, Load Balancing remains
  equal-weight.

This field is applicable to either:

* A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
  and loadBalancingScheme set to INTERNAL_MANAGED.
* A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
* A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
  Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
  Network Load Balancing. The default is MAGLEV.

If session_affinity is not NONE, and this field is not set to MAGLEV, WEIGHTED_MAGLEV,
or RING_HASH, session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#locality_lb_policy ComputeBackendService#locality_lb_policy}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#log_config ComputeBackendService#log_config}

---

##### `outlier_detection`<sup>Optional</sup> <a name="outlier_detection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.outlierDetection"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#outlier_detection ComputeBackendService#outlier_detection}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.portName"></a>

- *Type:* str

Name of backend port.

The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#port_name ComputeBackendService#port_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#project ComputeBackendService#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.protocol"></a>

- *Type:* str

The protocol this BackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. **NOTE**: With protocol “UNSPECIFIED”,
the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
with TCP/UDP/L3_DEFAULT Forwarding Rule protocol. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#protocol ComputeBackendService#protocol}

---

##### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.securityPolicy"></a>

- *Type:* str

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#security_policy ComputeBackendService#security_policy}

---

##### `security_settings`<sup>Optional</sup> <a name="security_settings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.securitySettings"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#security_settings ComputeBackendService#security_settings}

---

##### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.sessionAffinity"></a>

- *Type:* str

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#session_affinity ComputeBackendService#session_affinity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#timeouts ComputeBackendService#timeouts}

---

##### `timeout_sec`<sup>Optional</sup> <a name="timeout_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.timeoutSec"></a>

- *Type:* typing.Union[int, float]

How many seconds to wait for the backend before considering it a failed request.

Default is 30 seconds. Valid range is [1, 86400].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#timeout_sec ComputeBackendService#timeout_sec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putBackend">put_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy">put_cdn_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers">put_circuit_breakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putConsistentHash">put_consistent_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putIap">put_iap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putLocalityLbPolicies">put_locality_lb_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection">put_outlier_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putSecuritySettings">put_security_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetAffinityCookieTtlSec">reset_affinity_cookie_ttl_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCdnPolicy">reset_cdn_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCircuitBreakers">reset_circuit_breakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCompressionMode">reset_compression_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetConnectionDrainingTimeoutSec">reset_connection_draining_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetConsistentHash">reset_consistent_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomRequestHeaders">reset_custom_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomResponseHeaders">reset_custom_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetEdgeSecurityPolicy">reset_edge_security_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetEnableCdn">reset_enable_cdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetHealthChecks">reset_health_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetIap">reset_iap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLoadBalancingScheme">reset_load_balancing_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLocalityLbPolicies">reset_locality_lb_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLocalityLbPolicy">reset_locality_lb_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetOutlierDetection">reset_outlier_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSecurityPolicy">reset_security_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSecuritySettings">reset_security_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSessionAffinity">reset_session_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTimeoutSec">reset_timeout_sec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backend` <a name="put_backend" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putBackend"></a>

```python
def put_backend(
  value: typing.Union[IResolvable, typing.List[ComputeBackendServiceBackend]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putBackend.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>]]

---

##### `put_cdn_policy` <a name="put_cdn_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy"></a>

```python
def put_cdn_policy(
  bypass_cache_on_request_headers: typing.Union[IResolvable, typing.List[ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders]] = None,
  cache_key_policy: ComputeBackendServiceCdnPolicyCacheKeyPolicy = None,
  cache_mode: str = None,
  client_ttl: typing.Union[int, float] = None,
  default_ttl: typing.Union[int, float] = None,
  max_ttl: typing.Union[int, float] = None,
  negative_caching: typing.Union[bool, IResolvable] = None,
  negative_caching_policy: typing.Union[IResolvable, typing.List[ComputeBackendServiceCdnPolicyNegativeCachingPolicy]] = None,
  serve_while_stale: typing.Union[int, float] = None,
  signed_url_cache_max_age_sec: typing.Union[int, float] = None
) -> None
```

###### `bypass_cache_on_request_headers`<sup>Optional</sup> <a name="bypass_cache_on_request_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy.parameter.bypassCacheOnRequestHeaders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>]]

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#bypass_cache_on_request_headers ComputeBackendService#bypass_cache_on_request_headers}

---

###### `cache_key_policy`<sup>Optional</sup> <a name="cache_key_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy.parameter.cacheKeyPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#cache_key_policy ComputeBackendService#cache_key_policy}

---

###### `cache_mode`<sup>Optional</sup> <a name="cache_mode" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy.parameter.cacheMode"></a>

- *Type:* str

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#cache_mode ComputeBackendService#cache_mode}

---

###### `client_ttl`<sup>Optional</sup> <a name="client_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy.parameter.clientTtl"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#client_ttl ComputeBackendService#client_ttl}

---

###### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy.parameter.defaultTtl"></a>

- *Type:* typing.Union[int, float]

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#default_ttl ComputeBackendService#default_ttl}

---

###### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_ttl ComputeBackendService#max_ttl}

---

###### `negative_caching`<sup>Optional</sup> <a name="negative_caching" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy.parameter.negativeCaching"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#negative_caching ComputeBackendService#negative_caching}

---

###### `negative_caching_policy`<sup>Optional</sup> <a name="negative_caching_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy.parameter.negativeCachingPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>]]

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#negative_caching_policy ComputeBackendService#negative_caching_policy}

---

###### `serve_while_stale`<sup>Optional</sup> <a name="serve_while_stale" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy.parameter.serveWhileStale"></a>

- *Type:* typing.Union[int, float]

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#serve_while_stale ComputeBackendService#serve_while_stale}

---

###### `signed_url_cache_max_age_sec`<sup>Optional</sup> <a name="signed_url_cache_max_age_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy.parameter.signedUrlCacheMaxAgeSec"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s).

After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#signed_url_cache_max_age_sec ComputeBackendService#signed_url_cache_max_age_sec}

---

##### `put_circuit_breakers` <a name="put_circuit_breakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers"></a>

```python
def put_circuit_breakers(
  max_connections: typing.Union[int, float] = None,
  max_pending_requests: typing.Union[int, float] = None,
  max_requests: typing.Union[int, float] = None,
  max_requests_per_connection: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None
) -> None
```

###### `max_connections`<sup>Optional</sup> <a name="max_connections" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers.parameter.maxConnections"></a>

- *Type:* typing.Union[int, float]

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_connections ComputeBackendService#max_connections}

---

###### `max_pending_requests`<sup>Optional</sup> <a name="max_pending_requests" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers.parameter.maxPendingRequests"></a>

- *Type:* typing.Union[int, float]

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_pending_requests ComputeBackendService#max_pending_requests}

---

###### `max_requests`<sup>Optional</sup> <a name="max_requests" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers.parameter.maxRequests"></a>

- *Type:* typing.Union[int, float]

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_requests ComputeBackendService#max_requests}

---

###### `max_requests_per_connection`<sup>Optional</sup> <a name="max_requests_per_connection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers.parameter.maxRequestsPerConnection"></a>

- *Type:* typing.Union[int, float]

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_requests_per_connection ComputeBackendService#max_requests_per_connection}

---

###### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_retries ComputeBackendService#max_retries}

---

##### `put_consistent_hash` <a name="put_consistent_hash" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putConsistentHash"></a>

```python
def put_consistent_hash(
  http_cookie: ComputeBackendServiceConsistentHashHttpCookie = None,
  http_header_name: str = None,
  minimum_ring_size: typing.Union[int, float] = None
) -> None
```

###### `http_cookie`<sup>Optional</sup> <a name="http_cookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putConsistentHash.parameter.httpCookie"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#http_cookie ComputeBackendService#http_cookie}

---

###### `http_header_name`<sup>Optional</sup> <a name="http_header_name" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putConsistentHash.parameter.httpHeaderName"></a>

- *Type:* str

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#http_header_name ComputeBackendService#http_header_name}

---

###### `minimum_ring_size`<sup>Optional</sup> <a name="minimum_ring_size" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putConsistentHash.parameter.minimumRingSize"></a>

- *Type:* typing.Union[int, float]

The minimum number of virtual nodes to use for the hash ring.

Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#minimum_ring_size ComputeBackendService#minimum_ring_size}

---

##### `put_iap` <a name="put_iap" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putIap"></a>

```python
def put_iap(
  oauth2_client_id: str,
  oauth2_client_secret: str
) -> None
```

###### `oauth2_client_id`<sup>Required</sup> <a name="oauth2_client_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putIap.parameter.oauth2ClientId"></a>

- *Type:* str

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#oauth2_client_id ComputeBackendService#oauth2_client_id}

---

###### `oauth2_client_secret`<sup>Required</sup> <a name="oauth2_client_secret" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putIap.parameter.oauth2ClientSecret"></a>

- *Type:* str

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#oauth2_client_secret ComputeBackendService#oauth2_client_secret}

---

##### `put_locality_lb_policies` <a name="put_locality_lb_policies" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLocalityLbPolicies"></a>

```python
def put_locality_lb_policies(
  value: typing.Union[IResolvable, typing.List[ComputeBackendServiceLocalityLbPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLocalityLbPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>]]

---

##### `put_log_config` <a name="put_log_config" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLogConfig"></a>

```python
def put_log_config(
  enable: typing.Union[bool, IResolvable] = None,
  sample_rate: typing.Union[int, float] = None
) -> None
```

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLogConfig.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#enable ComputeBackendService#enable}

---

###### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLogConfig.parameter.sampleRate"></a>

- *Type:* typing.Union[int, float]

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#sample_rate ComputeBackendService#sample_rate}

---

##### `put_outlier_detection` <a name="put_outlier_detection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection"></a>

```python
def put_outlier_detection(
  base_ejection_time: ComputeBackendServiceOutlierDetectionBaseEjectionTime = None,
  consecutive_errors: typing.Union[int, float] = None,
  consecutive_gateway_failure: typing.Union[int, float] = None,
  enforcing_consecutive_errors: typing.Union[int, float] = None,
  enforcing_consecutive_gateway_failure: typing.Union[int, float] = None,
  enforcing_success_rate: typing.Union[int, float] = None,
  interval: ComputeBackendServiceOutlierDetectionInterval = None,
  max_ejection_percent: typing.Union[int, float] = None,
  success_rate_minimum_hosts: typing.Union[int, float] = None,
  success_rate_request_volume: typing.Union[int, float] = None,
  success_rate_stdev_factor: typing.Union[int, float] = None
) -> None
```

###### `base_ejection_time`<sup>Optional</sup> <a name="base_ejection_time" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.baseEjectionTime"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#base_ejection_time ComputeBackendService#base_ejection_time}

---

###### `consecutive_errors`<sup>Optional</sup> <a name="consecutive_errors" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.consecutiveErrors"></a>

- *Type:* typing.Union[int, float]

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#consecutive_errors ComputeBackendService#consecutive_errors}

---

###### `consecutive_gateway_failure`<sup>Optional</sup> <a name="consecutive_gateway_failure" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.consecutiveGatewayFailure"></a>

- *Type:* typing.Union[int, float]

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#consecutive_gateway_failure ComputeBackendService#consecutive_gateway_failure}

---

###### `enforcing_consecutive_errors`<sup>Optional</sup> <a name="enforcing_consecutive_errors" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.enforcingConsecutiveErrors"></a>

- *Type:* typing.Union[int, float]

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#enforcing_consecutive_errors ComputeBackendService#enforcing_consecutive_errors}

---

###### `enforcing_consecutive_gateway_failure`<sup>Optional</sup> <a name="enforcing_consecutive_gateway_failure" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.enforcingConsecutiveGatewayFailure"></a>

- *Type:* typing.Union[int, float]

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#enforcing_consecutive_gateway_failure ComputeBackendService#enforcing_consecutive_gateway_failure}

---

###### `enforcing_success_rate`<sup>Optional</sup> <a name="enforcing_success_rate" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.enforcingSuccessRate"></a>

- *Type:* typing.Union[int, float]

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#enforcing_success_rate ComputeBackendService#enforcing_success_rate}

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.interval"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#interval ComputeBackendService#interval}

---

###### `max_ejection_percent`<sup>Optional</sup> <a name="max_ejection_percent" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.maxEjectionPercent"></a>

- *Type:* typing.Union[int, float]

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_ejection_percent ComputeBackendService#max_ejection_percent}

---

###### `success_rate_minimum_hosts`<sup>Optional</sup> <a name="success_rate_minimum_hosts" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.successRateMinimumHosts"></a>

- *Type:* typing.Union[int, float]

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#success_rate_minimum_hosts ComputeBackendService#success_rate_minimum_hosts}

---

###### `success_rate_request_volume`<sup>Optional</sup> <a name="success_rate_request_volume" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.successRateRequestVolume"></a>

- *Type:* typing.Union[int, float]

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#success_rate_request_volume ComputeBackendService#success_rate_request_volume}

---

###### `success_rate_stdev_factor`<sup>Optional</sup> <a name="success_rate_stdev_factor" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.successRateStdevFactor"></a>

- *Type:* typing.Union[int, float]

This factor is used to determine the ejection threshold for success rate outlier ejection.

The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#success_rate_stdev_factor ComputeBackendService#success_rate_stdev_factor}

---

##### `put_security_settings` <a name="put_security_settings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putSecuritySettings"></a>

```python
def put_security_settings(
  client_tls_policy: str,
  subject_alt_names: typing.List[str]
) -> None
```

###### `client_tls_policy`<sup>Required</sup> <a name="client_tls_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putSecuritySettings.parameter.clientTlsPolicy"></a>

- *Type:* str

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service.

This resource itself does not affect
configuration unless it is attached to a backend service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#client_tls_policy ComputeBackendService#client_tls_policy}

---

###### `subject_alt_names`<sup>Required</sup> <a name="subject_alt_names" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putSecuritySettings.parameter.subjectAltNames"></a>

- *Type:* typing.List[str]

A list of alternate names to verify the subject identity in the certificate.

If specified, the client will verify that the server certificate's subject
alt name matches one of the specified values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#subject_alt_names ComputeBackendService#subject_alt_names}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#create ComputeBackendService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#delete ComputeBackendService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#update ComputeBackendService#update}.

---

##### `reset_affinity_cookie_ttl_sec` <a name="reset_affinity_cookie_ttl_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetAffinityCookieTtlSec"></a>

```python
def reset_affinity_cookie_ttl_sec() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_cdn_policy` <a name="reset_cdn_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCdnPolicy"></a>

```python
def reset_cdn_policy() -> None
```

##### `reset_circuit_breakers` <a name="reset_circuit_breakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCircuitBreakers"></a>

```python
def reset_circuit_breakers() -> None
```

##### `reset_compression_mode` <a name="reset_compression_mode" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCompressionMode"></a>

```python
def reset_compression_mode() -> None
```

##### `reset_connection_draining_timeout_sec` <a name="reset_connection_draining_timeout_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetConnectionDrainingTimeoutSec"></a>

```python
def reset_connection_draining_timeout_sec() -> None
```

##### `reset_consistent_hash` <a name="reset_consistent_hash" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetConsistentHash"></a>

```python
def reset_consistent_hash() -> None
```

##### `reset_custom_request_headers` <a name="reset_custom_request_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomRequestHeaders"></a>

```python
def reset_custom_request_headers() -> None
```

##### `reset_custom_response_headers` <a name="reset_custom_response_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomResponseHeaders"></a>

```python
def reset_custom_response_headers() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_edge_security_policy` <a name="reset_edge_security_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetEdgeSecurityPolicy"></a>

```python
def reset_edge_security_policy() -> None
```

##### `reset_enable_cdn` <a name="reset_enable_cdn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetEnableCdn"></a>

```python
def reset_enable_cdn() -> None
```

##### `reset_health_checks` <a name="reset_health_checks" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetHealthChecks"></a>

```python
def reset_health_checks() -> None
```

##### `reset_iap` <a name="reset_iap" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetIap"></a>

```python
def reset_iap() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_load_balancing_scheme` <a name="reset_load_balancing_scheme" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLoadBalancingScheme"></a>

```python
def reset_load_balancing_scheme() -> None
```

##### `reset_locality_lb_policies` <a name="reset_locality_lb_policies" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLocalityLbPolicies"></a>

```python
def reset_locality_lb_policies() -> None
```

##### `reset_locality_lb_policy` <a name="reset_locality_lb_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLocalityLbPolicy"></a>

```python
def reset_locality_lb_policy() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_outlier_detection` <a name="reset_outlier_detection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetOutlierDetection"></a>

```python
def reset_outlier_detection() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_security_policy` <a name="reset_security_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSecurityPolicy"></a>

```python
def reset_security_policy() -> None
```

##### `reset_security_settings` <a name="reset_security_settings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSecuritySettings"></a>

```python
def reset_security_settings() -> None
```

##### `reset_session_affinity` <a name="reset_session_affinity" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSessionAffinity"></a>

```python
def reset_session_affinity() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timeout_sec` <a name="reset_timeout_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTimeoutSec"></a>

```python
def reset_timeout_sec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeBackendService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeBackendService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList">ComputeBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdnPolicy">cdn_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference">ComputeBackendServiceCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.circuitBreakers">circuit_breakers</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference">ComputeBackendServiceCircuitBreakersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.consistentHash">consistent_hash</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference">ComputeBackendServiceConsistentHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.generatedId">generated_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference">ComputeBackendServiceIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicies">locality_lb_policies</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList">ComputeBackendServiceLocalityLbPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference">ComputeBackendServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.outlierDetection">outlier_detection</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference">ComputeBackendServiceOutlierDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securitySettings">security_settings</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference">ComputeBackendServiceSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference">ComputeBackendServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.affinityCookieTtlSecInput">affinity_cookie_ttl_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.backendInput">backend_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdnPolicyInput">cdn_policy_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.circuitBreakersInput">circuit_breakers_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.compressionModeInput">compression_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connectionDrainingTimeoutSecInput">connection_draining_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.consistentHashInput">consistent_hash_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customRequestHeadersInput">custom_request_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customResponseHeadersInput">custom_response_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.edgeSecurityPolicyInput">edge_security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.enableCdnInput">enable_cdn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.healthChecksInput">health_checks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.iapInput">iap_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.loadBalancingSchemeInput">load_balancing_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPoliciesInput">locality_lb_policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicyInput">locality_lb_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.outlierDetectionInput">outlier_detection_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securityPolicyInput">security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securitySettingsInput">security_settings_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.sessionAffinityInput">session_affinity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutSecInput">timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.affinityCookieTtlSec">affinity_cookie_ttl_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.compressionMode">compression_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connectionDrainingTimeoutSec">connection_draining_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customRequestHeaders">custom_request_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customResponseHeaders">custom_response_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.edgeSecurityPolicy">edge_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.enableCdn">enable_cdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.healthChecks">health_checks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicy">locality_lb_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.backend"></a>

```python
backend: ComputeBackendServiceBackendList
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList">ComputeBackendServiceBackendList</a>

---

##### `cdn_policy`<sup>Required</sup> <a name="cdn_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdnPolicy"></a>

```python
cdn_policy: ComputeBackendServiceCdnPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference">ComputeBackendServiceCdnPolicyOutputReference</a>

---

##### `circuit_breakers`<sup>Required</sup> <a name="circuit_breakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.circuitBreakers"></a>

```python
circuit_breakers: ComputeBackendServiceCircuitBreakersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference">ComputeBackendServiceCircuitBreakersOutputReference</a>

---

##### `consistent_hash`<sup>Required</sup> <a name="consistent_hash" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.consistentHash"></a>

```python
consistent_hash: ComputeBackendServiceConsistentHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference">ComputeBackendServiceConsistentHashOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `generated_id`<sup>Required</sup> <a name="generated_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.generatedId"></a>

```python
generated_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iap`<sup>Required</sup> <a name="iap" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.iap"></a>

```python
iap: ComputeBackendServiceIapOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference">ComputeBackendServiceIapOutputReference</a>

---

##### `locality_lb_policies`<sup>Required</sup> <a name="locality_lb_policies" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicies"></a>

```python
locality_lb_policies: ComputeBackendServiceLocalityLbPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList">ComputeBackendServiceLocalityLbPoliciesList</a>

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.logConfig"></a>

```python
log_config: ComputeBackendServiceLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference">ComputeBackendServiceLogConfigOutputReference</a>

---

##### `outlier_detection`<sup>Required</sup> <a name="outlier_detection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.outlierDetection"></a>

```python
outlier_detection: ComputeBackendServiceOutlierDetectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference">ComputeBackendServiceOutlierDetectionOutputReference</a>

---

##### `security_settings`<sup>Required</sup> <a name="security_settings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securitySettings"></a>

```python
security_settings: ComputeBackendServiceSecuritySettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference">ComputeBackendServiceSecuritySettingsOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeouts"></a>

```python
timeouts: ComputeBackendServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference">ComputeBackendServiceTimeoutsOutputReference</a>

---

##### `affinity_cookie_ttl_sec_input`<sup>Optional</sup> <a name="affinity_cookie_ttl_sec_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.affinityCookieTtlSecInput"></a>

```python
affinity_cookie_ttl_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.backendInput"></a>

```python
backend_input: typing.Union[IResolvable, typing.List[ComputeBackendServiceBackend]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>]]

---

##### `cdn_policy_input`<sup>Optional</sup> <a name="cdn_policy_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdnPolicyInput"></a>

```python
cdn_policy_input: ComputeBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

---

##### `circuit_breakers_input`<sup>Optional</sup> <a name="circuit_breakers_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.circuitBreakersInput"></a>

```python
circuit_breakers_input: ComputeBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

---

##### `compression_mode_input`<sup>Optional</sup> <a name="compression_mode_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.compressionModeInput"></a>

```python
compression_mode_input: str
```

- *Type:* str

---

##### `connection_draining_timeout_sec_input`<sup>Optional</sup> <a name="connection_draining_timeout_sec_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connectionDrainingTimeoutSecInput"></a>

```python
connection_draining_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consistent_hash_input`<sup>Optional</sup> <a name="consistent_hash_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.consistentHashInput"></a>

```python
consistent_hash_input: ComputeBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

---

##### `custom_request_headers_input`<sup>Optional</sup> <a name="custom_request_headers_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customRequestHeadersInput"></a>

```python
custom_request_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_response_headers_input`<sup>Optional</sup> <a name="custom_response_headers_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customResponseHeadersInput"></a>

```python
custom_response_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `edge_security_policy_input`<sup>Optional</sup> <a name="edge_security_policy_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.edgeSecurityPolicyInput"></a>

```python
edge_security_policy_input: str
```

- *Type:* str

---

##### `enable_cdn_input`<sup>Optional</sup> <a name="enable_cdn_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.enableCdnInput"></a>

```python
enable_cdn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_checks_input`<sup>Optional</sup> <a name="health_checks_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.healthChecksInput"></a>

```python
health_checks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `iap_input`<sup>Optional</sup> <a name="iap_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.iapInput"></a>

```python
iap_input: ComputeBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancing_scheme_input`<sup>Optional</sup> <a name="load_balancing_scheme_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.loadBalancingSchemeInput"></a>

```python
load_balancing_scheme_input: str
```

- *Type:* str

---

##### `locality_lb_policies_input`<sup>Optional</sup> <a name="locality_lb_policies_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPoliciesInput"></a>

```python
locality_lb_policies_input: typing.Union[IResolvable, typing.List[ComputeBackendServiceLocalityLbPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>]]

---

##### `locality_lb_policy_input`<sup>Optional</sup> <a name="locality_lb_policy_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicyInput"></a>

```python
locality_lb_policy_input: str
```

- *Type:* str

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.logConfigInput"></a>

```python
log_config_input: ComputeBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `outlier_detection_input`<sup>Optional</sup> <a name="outlier_detection_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.outlierDetectionInput"></a>

```python
outlier_detection_input: ComputeBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `security_policy_input`<sup>Optional</sup> <a name="security_policy_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securityPolicyInput"></a>

```python
security_policy_input: str
```

- *Type:* str

---

##### `security_settings_input`<sup>Optional</sup> <a name="security_settings_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securitySettingsInput"></a>

```python
security_settings_input: ComputeBackendServiceSecuritySettings
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

---

##### `session_affinity_input`<sup>Optional</sup> <a name="session_affinity_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.sessionAffinityInput"></a>

```python
session_affinity_input: str
```

- *Type:* str

---

##### `timeout_sec_input`<sup>Optional</sup> <a name="timeout_sec_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutSecInput"></a>

```python
timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeBackendServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>]

---

##### `affinity_cookie_ttl_sec`<sup>Required</sup> <a name="affinity_cookie_ttl_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.affinityCookieTtlSec"></a>

```python
affinity_cookie_ttl_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compression_mode`<sup>Required</sup> <a name="compression_mode" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.compressionMode"></a>

```python
compression_mode: str
```

- *Type:* str

---

##### `connection_draining_timeout_sec`<sup>Required</sup> <a name="connection_draining_timeout_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connectionDrainingTimeoutSec"></a>

```python
connection_draining_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_request_headers`<sup>Required</sup> <a name="custom_request_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customRequestHeaders"></a>

```python
custom_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_response_headers`<sup>Required</sup> <a name="custom_response_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customResponseHeaders"></a>

```python
custom_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `edge_security_policy`<sup>Required</sup> <a name="edge_security_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.edgeSecurityPolicy"></a>

```python
edge_security_policy: str
```

- *Type:* str

---

##### `enable_cdn`<sup>Required</sup> <a name="enable_cdn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.enableCdn"></a>

```python
enable_cdn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_checks`<sup>Required</sup> <a name="health_checks" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.healthChecks"></a>

```python
health_checks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

---

##### `locality_lb_policy`<sup>Required</sup> <a name="locality_lb_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicy"></a>

```python
locality_lb_policy: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

##### `session_affinity`<sup>Required</sup> <a name="session_affinity" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

---

##### `timeout_sec`<sup>Required</sup> <a name="timeout_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutSec"></a>

```python
timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendServiceBackend <a name="ComputeBackendServiceBackend" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceBackend(
  group: str,
  balancing_mode: str = None,
  capacity_scaler: typing.Union[int, float] = None,
  description: str = None,
  max_connections: typing.Union[int, float] = None,
  max_connections_per_endpoint: typing.Union[int, float] = None,
  max_connections_per_instance: typing.Union[int, float] = None,
  max_rate: typing.Union[int, float] = None,
  max_rate_per_endpoint: typing.Union[int, float] = None,
  max_rate_per_instance: typing.Union[int, float] = None,
  max_utilization: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.group">group</a></code> | <code>str</code> | The fully-qualified URL of an Instance Group or Network Endpoint Group resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.balancingMode">balancing_mode</a></code> | <code>str</code> | Specifies the balancing mode for this backend. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.capacityScaler">capacity_scaler</a></code> | <code>typing.Union[int, float]</code> | A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnectionsPerEndpoint">max_connections_per_endpoint</a></code> | <code>typing.Union[int, float]</code> | The max number of simultaneous connections that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnectionsPerInstance">max_connections_per_instance</a></code> | <code>typing.Union[int, float]</code> | The max number of simultaneous connections that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | The max requests per second (RPS) of the group. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRatePerEndpoint">max_rate_per_endpoint</a></code> | <code>typing.Union[int, float]</code> | The max requests per second (RPS) that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRatePerInstance">max_rate_per_instance</a></code> | <code>typing.Union[int, float]</code> | The max requests per second (RPS) that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxUtilization">max_utilization</a></code> | <code>typing.Union[int, float]</code> | Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. Valid range is [0.0, 1.0]. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.group"></a>

```python
group: str
```

- *Type:* str

The fully-qualified URL of an Instance Group or Network Endpoint Group resource.

In case of instance group this defines the list
of instances that serve traffic. Member virtual machine
instances from each instance group must live in the same zone as
the instance group itself. No two backends in a backend service
are allowed to use same Instance Group resource.

For Network Endpoint Groups this defines list of endpoints. All
endpoints of Network Endpoint Group must be hosted on instances
located in the same zone as the Network Endpoint Group.

Backend services cannot mix Instance Group and
Network Endpoint Group backends.

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#group ComputeBackendService#group}

---

##### `balancing_mode`<sup>Optional</sup> <a name="balancing_mode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.balancingMode"></a>

```python
balancing_mode: str
```

- *Type:* str

Specifies the balancing mode for this backend.

For global HTTP(S) or TCP/SSL load balancing, the default is
UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S))
and CONNECTION (for TCP/SSL).

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#balancing_mode ComputeBackendService#balancing_mode}

---

##### `capacity_scaler`<sup>Optional</sup> <a name="capacity_scaler" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.capacityScaler"></a>

```python
capacity_scaler: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION).

Default value is 1, which means the group will serve up to 100%
of its configured capacity (depending on balancingMode). A
setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#capacity_scaler ComputeBackendService#capacity_scaler}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#description ComputeBackendService#description}

---

##### `max_connections`<sup>Optional</sup> <a name="max_connections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_connections ComputeBackendService#max_connections}

---

##### `max_connections_per_endpoint`<sup>Optional</sup> <a name="max_connections_per_endpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnectionsPerEndpoint"></a>

```python
max_connections_per_endpoint: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max number of simultaneous connections that a single backend network endpoint can handle.

This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either
maxConnections or maxConnectionsPerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_connections_per_endpoint ComputeBackendService#max_connections_per_endpoint}

---

##### `max_connections_per_instance`<sup>Optional</sup> <a name="max_connections_per_instance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnectionsPerInstance"></a>

```python
max_connections_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max number of simultaneous connections that a single backend instance can handle.

This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_connections_per_instance ComputeBackendService#max_connections_per_instance}

---

##### `max_rate`<sup>Optional</sup> <a name="max_rate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max requests per second (RPS) of the group.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. For RATE mode, either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_rate ComputeBackendService#max_rate}

---

##### `max_rate_per_endpoint`<sup>Optional</sup> <a name="max_rate_per_endpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRatePerEndpoint"></a>

```python
max_rate_per_endpoint: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max requests per second (RPS) that a single backend network endpoint can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_rate_per_endpoint ComputeBackendService#max_rate_per_endpoint}

---

##### `max_rate_per_instance`<sup>Optional</sup> <a name="max_rate_per_instance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRatePerInstance"></a>

```python
max_rate_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max requests per second (RPS) that a single backend instance can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_rate_per_instance ComputeBackendService#max_rate_per_instance}

---

##### `max_utilization`<sup>Optional</sup> <a name="max_utilization" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxUtilization"></a>

```python
max_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. Valid range is [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_utilization ComputeBackendService#max_utilization}

---

### ComputeBackendServiceCdnPolicy <a name="ComputeBackendServiceCdnPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceCdnPolicy(
  bypass_cache_on_request_headers: typing.Union[IResolvable, typing.List[ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders]] = None,
  cache_key_policy: ComputeBackendServiceCdnPolicyCacheKeyPolicy = None,
  cache_mode: str = None,
  client_ttl: typing.Union[int, float] = None,
  default_ttl: typing.Union[int, float] = None,
  max_ttl: typing.Union[int, float] = None,
  negative_caching: typing.Union[bool, IResolvable] = None,
  negative_caching_policy: typing.Union[IResolvable, typing.List[ComputeBackendServiceCdnPolicyNegativeCachingPolicy]] = None,
  serve_while_stale: typing.Union[int, float] = None,
  signed_url_cache_max_age_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.bypassCacheOnRequestHeaders">bypass_cache_on_request_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>]]</code> | bypass_cache_on_request_headers block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.cacheKeyPolicy">cache_key_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.cacheMode">cache_mode</a></code> | <code>str</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.clientTtl">client_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.negativeCaching">negative_caching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.negativeCachingPolicy">negative_caching_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>]]</code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.serveWhileStale">serve_while_stale</a></code> | <code>typing.Union[int, float]</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec">signed_url_cache_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s). |

---

##### `bypass_cache_on_request_headers`<sup>Optional</sup> <a name="bypass_cache_on_request_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.bypassCacheOnRequestHeaders"></a>

```python
bypass_cache_on_request_headers: typing.Union[IResolvable, typing.List[ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>]]

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#bypass_cache_on_request_headers ComputeBackendService#bypass_cache_on_request_headers}

---

##### `cache_key_policy`<sup>Optional</sup> <a name="cache_key_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.cacheKeyPolicy"></a>

```python
cache_key_policy: ComputeBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#cache_key_policy ComputeBackendService#cache_key_policy}

---

##### `cache_mode`<sup>Optional</sup> <a name="cache_mode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.cacheMode"></a>

```python
cache_mode: str
```

- *Type:* str

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#cache_mode ComputeBackendService#cache_mode}

---

##### `client_ttl`<sup>Optional</sup> <a name="client_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.clientTtl"></a>

```python
client_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#client_ttl ComputeBackendService#client_ttl}

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#default_ttl ComputeBackendService#default_ttl}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_ttl ComputeBackendService#max_ttl}

---

##### `negative_caching`<sup>Optional</sup> <a name="negative_caching" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.negativeCaching"></a>

```python
negative_caching: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#negative_caching ComputeBackendService#negative_caching}

---

##### `negative_caching_policy`<sup>Optional</sup> <a name="negative_caching_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.negativeCachingPolicy"></a>

```python
negative_caching_policy: typing.Union[IResolvable, typing.List[ComputeBackendServiceCdnPolicyNegativeCachingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>]]

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#negative_caching_policy ComputeBackendService#negative_caching_policy}

---

##### `serve_while_stale`<sup>Optional</sup> <a name="serve_while_stale" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.serveWhileStale"></a>

```python
serve_while_stale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#serve_while_stale ComputeBackendService#serve_while_stale}

---

##### `signed_url_cache_max_age_sec`<sup>Optional</sup> <a name="signed_url_cache_max_age_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```python
signed_url_cache_max_age_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s).

After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#signed_url_cache_max_age_sec ComputeBackendService#signed_url_cache_max_age_sec}

---

### ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders <a name="ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders(
  header_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.property.headerName">header_name</a></code> | <code>str</code> | The header field name to match on when bypassing cache. Values are case-insensitive. |

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

The header field name to match on when bypassing cache. Values are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#header_name ComputeBackendService#header_name}

---

### ComputeBackendServiceCdnPolicyCacheKeyPolicy <a name="ComputeBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy(
  include_host: typing.Union[bool, IResolvable] = None,
  include_http_headers: typing.List[str] = None,
  include_named_cookies: typing.List[str] = None,
  include_protocol: typing.Union[bool, IResolvable] = None,
  include_query_string: typing.Union[bool, IResolvable] = None,
  query_string_blacklist: typing.List[str] = None,
  query_string_whitelist: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost">include_host</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHttpHeaders">include_http_headers</a></code> | <code>typing.List[str]</code> | Allows HTTP request headers (by name) to be used in the cache key. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies">include_named_cookies</a></code> | <code>typing.List[str]</code> | Names of cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol">include_protocol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, http and https requests will be cached separately. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString">include_query_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist">query_string_blacklist</a></code> | <code>typing.List[str]</code> | Names of query string parameters to exclude in cache keys. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">query_string_whitelist</a></code> | <code>typing.List[str]</code> | Names of query string parameters to include in cache keys. |

---

##### `include_host`<sup>Optional</sup> <a name="include_host" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost"></a>

```python
include_host: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#include_host ComputeBackendService#include_host}

---

##### `include_http_headers`<sup>Optional</sup> <a name="include_http_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHttpHeaders"></a>

```python
include_http_headers: typing.List[str]
```

- *Type:* typing.List[str]

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#include_http_headers ComputeBackendService#include_http_headers}

---

##### `include_named_cookies`<sup>Optional</sup> <a name="include_named_cookies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies"></a>

```python
include_named_cookies: typing.List[str]
```

- *Type:* typing.List[str]

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#include_named_cookies ComputeBackendService#include_named_cookies}

---

##### `include_protocol`<sup>Optional</sup> <a name="include_protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```python
include_protocol: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#include_protocol ComputeBackendService#include_protocol}

---

##### `include_query_string`<sup>Optional</sup> <a name="include_query_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString"></a>

```python
include_query_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#include_query_string ComputeBackendService#include_query_string}

---

##### `query_string_blacklist`<sup>Optional</sup> <a name="query_string_blacklist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist"></a>

```python
query_string_blacklist: typing.List[str]
```

- *Type:* typing.List[str]

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#query_string_blacklist ComputeBackendService#query_string_blacklist}

---

##### `query_string_whitelist`<sup>Optional</sup> <a name="query_string_whitelist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```python
query_string_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#query_string_whitelist ComputeBackendService#query_string_whitelist}

---

### ComputeBackendServiceCdnPolicyNegativeCachingPolicy <a name="ComputeBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy(
  code: typing.Union[int, float] = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.code">code</a></code> | <code>typing.Union[int, float]</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#code ComputeBackendService#code}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#ttl ComputeBackendService#ttl}

---

### ComputeBackendServiceCircuitBreakers <a name="ComputeBackendServiceCircuitBreakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceCircuitBreakers(
  max_connections: typing.Union[int, float] = None,
  max_pending_requests: typing.Union[int, float] = None,
  max_requests: typing.Union[int, float] = None,
  max_requests_per_connection: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | The maximum number of connections to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxPendingRequests">max_pending_requests</a></code> | <code>typing.Union[int, float]</code> | The maximum number of pending requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRequests">max_requests</a></code> | <code>typing.Union[int, float]</code> | The maximum number of parallel requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRequestsPerConnection">max_requests_per_connection</a></code> | <code>typing.Union[int, float]</code> | Maximum requests for a single backend connection. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of parallel retries to the backend cluster. Defaults to 3. |

---

##### `max_connections`<sup>Optional</sup> <a name="max_connections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_connections ComputeBackendService#max_connections}

---

##### `max_pending_requests`<sup>Optional</sup> <a name="max_pending_requests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxPendingRequests"></a>

```python
max_pending_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_pending_requests ComputeBackendService#max_pending_requests}

---

##### `max_requests`<sup>Optional</sup> <a name="max_requests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRequests"></a>

```python
max_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_requests ComputeBackendService#max_requests}

---

##### `max_requests_per_connection`<sup>Optional</sup> <a name="max_requests_per_connection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRequestsPerConnection"></a>

```python
max_requests_per_connection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_requests_per_connection ComputeBackendService#max_requests_per_connection}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_retries ComputeBackendService#max_retries}

---

### ComputeBackendServiceConfig <a name="ComputeBackendServiceConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  affinity_cookie_ttl_sec: typing.Union[int, float] = None,
  backend: typing.Union[IResolvable, typing.List[ComputeBackendServiceBackend]] = None,
  cdn_policy: ComputeBackendServiceCdnPolicy = None,
  circuit_breakers: ComputeBackendServiceCircuitBreakers = None,
  compression_mode: str = None,
  connection_draining_timeout_sec: typing.Union[int, float] = None,
  consistent_hash: ComputeBackendServiceConsistentHash = None,
  custom_request_headers: typing.List[str] = None,
  custom_response_headers: typing.List[str] = None,
  description: str = None,
  edge_security_policy: str = None,
  enable_cdn: typing.Union[bool, IResolvable] = None,
  health_checks: typing.List[str] = None,
  iap: ComputeBackendServiceIap = None,
  id: str = None,
  load_balancing_scheme: str = None,
  locality_lb_policies: typing.Union[IResolvable, typing.List[ComputeBackendServiceLocalityLbPolicies]] = None,
  locality_lb_policy: str = None,
  log_config: ComputeBackendServiceLogConfig = None,
  outlier_detection: ComputeBackendServiceOutlierDetection = None,
  port_name: str = None,
  project: str = None,
  protocol: str = None,
  security_policy: str = None,
  security_settings: ComputeBackendServiceSecuritySettings = None,
  session_affinity: str = None,
  timeouts: ComputeBackendServiceTimeouts = None,
  timeout_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.affinityCookieTtlSec">affinity_cookie_ttl_sec</a></code> | <code>typing.Union[int, float]</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.backend">backend</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>]]</code> | backend block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.cdnPolicy">cdn_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.circuitBreakers">circuit_breakers</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.compressionMode">compression_mode</a></code> | <code>str</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.connectionDrainingTimeoutSec">connection_draining_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.consistentHash">consistent_hash</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customRequestHeaders">custom_request_headers</a></code> | <code>typing.List[str]</code> | Headers that the HTTP/S load balancer should add to proxied requests. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customResponseHeaders">custom_response_headers</a></code> | <code>typing.List[str]</code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.edgeSecurityPolicy">edge_security_policy</a></code> | <code>str</code> | The resource URL for the edge security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.enableCdn">enable_cdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enable Cloud CDN for this BackendService. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.healthChecks">health_checks</a></code> | <code>typing.List[str]</code> | The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#id ComputeBackendService#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | Indicates whether the backend service will be used with internal or external load balancing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.localityLbPolicies">locality_lb_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>]]</code> | locality_lb_policies block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.localityLbPolicy">locality_lb_policy</a></code> | <code>str</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.outlierDetection">outlier_detection</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.portName">port_name</a></code> | <code>str</code> | Name of backend port. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#project ComputeBackendService#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.protocol">protocol</a></code> | <code>str</code> | The protocol this BackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.securityPolicy">security_policy</a></code> | <code>str</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.securitySettings">security_settings</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | How many seconds to wait for the backend before considering it a failed request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `affinity_cookie_ttl_sec`<sup>Optional</sup> <a name="affinity_cookie_ttl_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.affinityCookieTtlSec"></a>

```python
affinity_cookie_ttl_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#affinity_cookie_ttl_sec ComputeBackendService#affinity_cookie_ttl_sec}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.backend"></a>

```python
backend: typing.Union[IResolvable, typing.List[ComputeBackendServiceBackend]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>]]

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#backend ComputeBackendService#backend}

---

##### `cdn_policy`<sup>Optional</sup> <a name="cdn_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.cdnPolicy"></a>

```python
cdn_policy: ComputeBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#cdn_policy ComputeBackendService#cdn_policy}

---

##### `circuit_breakers`<sup>Optional</sup> <a name="circuit_breakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.circuitBreakers"></a>

```python
circuit_breakers: ComputeBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#circuit_breakers ComputeBackendService#circuit_breakers}

---

##### `compression_mode`<sup>Optional</sup> <a name="compression_mode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.compressionMode"></a>

```python
compression_mode: str
```

- *Type:* str

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#compression_mode ComputeBackendService#compression_mode}

---

##### `connection_draining_timeout_sec`<sup>Optional</sup> <a name="connection_draining_timeout_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.connectionDrainingTimeoutSec"></a>

```python
connection_draining_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#connection_draining_timeout_sec ComputeBackendService#connection_draining_timeout_sec}

---

##### `consistent_hash`<sup>Optional</sup> <a name="consistent_hash" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.consistentHash"></a>

```python
consistent_hash: ComputeBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#consistent_hash ComputeBackendService#consistent_hash}

---

##### `custom_request_headers`<sup>Optional</sup> <a name="custom_request_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customRequestHeaders"></a>

```python
custom_request_headers: typing.List[str]
```

- *Type:* typing.List[str]

Headers that the HTTP/S load balancer should add to proxied requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#custom_request_headers ComputeBackendService#custom_request_headers}

---

##### `custom_response_headers`<sup>Optional</sup> <a name="custom_response_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customResponseHeaders"></a>

```python
custom_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#custom_response_headers ComputeBackendService#custom_response_headers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#description ComputeBackendService#description}

---

##### `edge_security_policy`<sup>Optional</sup> <a name="edge_security_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.edgeSecurityPolicy"></a>

```python
edge_security_policy: str
```

- *Type:* str

The resource URL for the edge security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#edge_security_policy ComputeBackendService#edge_security_policy}

---

##### `enable_cdn`<sup>Optional</sup> <a name="enable_cdn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.enableCdn"></a>

```python
enable_cdn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enable Cloud CDN for this BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#enable_cdn ComputeBackendService#enable_cdn}

---

##### `health_checks`<sup>Optional</sup> <a name="health_checks" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.healthChecks"></a>

```python
health_checks: typing.List[str]
```

- *Type:* typing.List[str]

The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService.

Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

For internal load balancing, a URL to a HealthCheck resource must be specified instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#health_checks ComputeBackendService#health_checks}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.iap"></a>

```python
iap: ComputeBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#iap ComputeBackendService#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#id ComputeBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancing_scheme`<sup>Optional</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

Indicates whether the backend service will be used with internal or external load balancing.

A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED", "INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#load_balancing_scheme ComputeBackendService#load_balancing_scheme}

---

##### `locality_lb_policies`<sup>Optional</sup> <a name="locality_lb_policies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.localityLbPolicies"></a>

```python
locality_lb_policies: typing.Union[IResolvable, typing.List[ComputeBackendServiceLocalityLbPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>]]

locality_lb_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#locality_lb_policies ComputeBackendService#locality_lb_policies}

---

##### `locality_lb_policy`<sup>Optional</sup> <a name="locality_lb_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.localityLbPolicy"></a>

```python
locality_lb_policy: str
```

- *Type:* str

The load balancing algorithm used within the scope of the locality. The possible values are:.

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  is selected in round robin order.
* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  hosts and picks the host which has fewer active requests.
* 'RING_HASH': The ring/modulo hash load balancer implements consistent
  hashing to backends. The algorithm has the property that the
  addition/removal of a host from a set of N hosts only affects
  1/N of the requests.
* 'RANDOM': The load balancer selects a random healthy host.
* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  connection metadata, i.e., connections are opened
  to the same address as the destination address of
  the incoming connection before the connection
  was redirected to the load balancer.
* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  Maglev is not as stable as ring hash but has faster table lookup
  build times and host selection times. For more information about
  Maglev, refer to https://ai.google/research/pubs/pub44824
* 'WEIGHTED_MAGLEV': Per-instance weighted Load Balancing via health check
  reported weights. If set, the Backend Service must
  configure a non legacy HTTP-based Health Check, and
  health check replies are expected to contain
  non-standard HTTP response header field
  X-Load-Balancing-Endpoint-Weight to specify the
  per-instance weights. If set, Load Balancing is weight
  based on the per-instance weights reported in the last
  processed health check replies, as long as every
  instance either reported a valid weight or had
  UNAVAILABLE_WEIGHT. Otherwise, Load Balancing remains
  equal-weight.

This field is applicable to either:

* A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
  and loadBalancingScheme set to INTERNAL_MANAGED.
* A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
* A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
  Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
  Network Load Balancing. The default is MAGLEV.

If session_affinity is not NONE, and this field is not set to MAGLEV, WEIGHTED_MAGLEV,
or RING_HASH, session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#locality_lb_policy ComputeBackendService#locality_lb_policy}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.logConfig"></a>

```python
log_config: ComputeBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#log_config ComputeBackendService#log_config}

---

##### `outlier_detection`<sup>Optional</sup> <a name="outlier_detection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.outlierDetection"></a>

```python
outlier_detection: ComputeBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#outlier_detection ComputeBackendService#outlier_detection}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.portName"></a>

```python
port_name: str
```

- *Type:* str

Name of backend port.

The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#port_name ComputeBackendService#port_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#project ComputeBackendService#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol this BackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. **NOTE**: With protocol “UNSPECIFIED”,
the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
with TCP/UDP/L3_DEFAULT Forwarding Rule protocol. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#protocol ComputeBackendService#protocol}

---

##### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#security_policy ComputeBackendService#security_policy}

---

##### `security_settings`<sup>Optional</sup> <a name="security_settings" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.securitySettings"></a>

```python
security_settings: ComputeBackendServiceSecuritySettings
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#security_settings ComputeBackendService#security_settings}

---

##### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#session_affinity ComputeBackendService#session_affinity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.timeouts"></a>

```python
timeouts: ComputeBackendServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#timeouts ComputeBackendService#timeouts}

---

##### `timeout_sec`<sup>Optional</sup> <a name="timeout_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.timeoutSec"></a>

```python
timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many seconds to wait for the backend before considering it a failed request.

Default is 30 seconds. Valid range is [1, 86400].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#timeout_sec ComputeBackendService#timeout_sec}

---

### ComputeBackendServiceConsistentHash <a name="ComputeBackendServiceConsistentHash" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceConsistentHash(
  http_cookie: ComputeBackendServiceConsistentHashHttpCookie = None,
  http_header_name: str = None,
  minimum_ring_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.httpCookie">http_cookie</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a></code> | http_cookie block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.httpHeaderName">http_header_name</a></code> | <code>str</code> | The hash based on the value of the specified header field. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.minimumRingSize">minimum_ring_size</a></code> | <code>typing.Union[int, float]</code> | The minimum number of virtual nodes to use for the hash ring. |

---

##### `http_cookie`<sup>Optional</sup> <a name="http_cookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.httpCookie"></a>

```python
http_cookie: ComputeBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#http_cookie ComputeBackendService#http_cookie}

---

##### `http_header_name`<sup>Optional</sup> <a name="http_header_name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.httpHeaderName"></a>

```python
http_header_name: str
```

- *Type:* str

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#http_header_name ComputeBackendService#http_header_name}

---

##### `minimum_ring_size`<sup>Optional</sup> <a name="minimum_ring_size" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.minimumRingSize"></a>

```python
minimum_ring_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of virtual nodes to use for the hash ring.

Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#minimum_ring_size ComputeBackendService#minimum_ring_size}

---

### ComputeBackendServiceConsistentHashHttpCookie <a name="ComputeBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceConsistentHashHttpCookie(
  name: str = None,
  path: str = None,
  ttl: ComputeBackendServiceConsistentHashHttpCookieTtl = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.name">name</a></code> | <code>str</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.path">path</a></code> | <code>str</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | ttl block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.path"></a>

```python
path: str
```

- *Type:* str

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#path ComputeBackendService#path}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.ttl"></a>

```python
ttl: ComputeBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#ttl ComputeBackendService#ttl}

---

### ComputeBackendServiceConsistentHashHttpCookieTtl <a name="ComputeBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

### ComputeBackendServiceIap <a name="ComputeBackendServiceIap" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceIap(
  oauth2_client_id: str,
  oauth2_client_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.oauth2ClientId">oauth2_client_id</a></code> | <code>str</code> | OAuth2 Client ID for IAP. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.oauth2ClientSecret">oauth2_client_secret</a></code> | <code>str</code> | OAuth2 Client Secret for IAP. |

---

##### `oauth2_client_id`<sup>Required</sup> <a name="oauth2_client_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.oauth2ClientId"></a>

```python
oauth2_client_id: str
```

- *Type:* str

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#oauth2_client_id ComputeBackendService#oauth2_client_id}

---

##### `oauth2_client_secret`<sup>Required</sup> <a name="oauth2_client_secret" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.oauth2ClientSecret"></a>

```python
oauth2_client_secret: str
```

- *Type:* str

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#oauth2_client_secret ComputeBackendService#oauth2_client_secret}

---

### ComputeBackendServiceLocalityLbPolicies <a name="ComputeBackendServiceLocalityLbPolicies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceLocalityLbPolicies(
  custom_policy: ComputeBackendServiceLocalityLbPoliciesCustomPolicy = None,
  policy: ComputeBackendServiceLocalityLbPoliciesPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.property.customPolicy">custom_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | policy block. |

---

##### `custom_policy`<sup>Optional</sup> <a name="custom_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.property.customPolicy"></a>

```python
custom_policy: ComputeBackendServiceLocalityLbPoliciesCustomPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#custom_policy ComputeBackendService#custom_policy}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.property.policy"></a>

```python
policy: ComputeBackendServiceLocalityLbPoliciesPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#policy ComputeBackendService#policy}

---

### ComputeBackendServiceLocalityLbPoliciesCustomPolicy <a name="ComputeBackendServiceLocalityLbPoliciesCustomPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy(
  name: str,
  data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.name">name</a></code> | <code>str</code> | Identifies the custom policy. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.data">data</a></code> | <code>str</code> | An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

Identifies the custom policy.

The value should match the type the custom implementation is registered
with on the gRPC clients. It should follow protocol buffer
message naming conventions and include the full path (e.g.
myorg.CustomLbPolicy). The maximum length is 256 characters.

Note that specifying the same custom policy more than once for a
backend is not a valid configuration and will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.data"></a>

```python
data: str
```

- *Type:* str

An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#data ComputeBackendService#data}

---

### ComputeBackendServiceLocalityLbPoliciesPolicy <a name="ComputeBackendServiceLocalityLbPoliciesPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy.property.name">name</a></code> | <code>str</code> | The name of a locality load balancer policy to be used. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

The name of a locality load balancer policy to be used.

The value
should be one of the predefined ones as supported by localityLbPolicy,
although at the moment only ROUND_ROBIN is supported.

This field should only be populated when the customPolicy field is not
used.

Note that specifying the same policy more than once for a backend is
not a valid configuration and will be rejected.

The possible values are:

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  is selected in round robin order.
* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  hosts and picks the host which has fewer active requests.
* 'RING_HASH': The ring/modulo hash load balancer implements consistent
  hashing to backends. The algorithm has the property that the
  addition/removal of a host from a set of N hosts only affects
  1/N of the requests.
* 'RANDOM': The load balancer selects a random healthy host.
* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  connection metadata, i.e., connections are opened
  to the same address as the destination address of
  the incoming connection before the connection
  was redirected to the load balancer.
* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  Maglev is not as stable as ring hash but has faster table lookup
  build times and host selection times. For more information about
  Maglev, refer to https://ai.google/research/pubs/pub44824 Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

### ComputeBackendServiceLogConfig <a name="ComputeBackendServiceLogConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceLogConfig(
  enable: typing.Union[bool, IResolvable] = None,
  sample_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable logging for the load balancer traffic served by this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | This field can only be specified if logging is enabled for this backend service. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#enable ComputeBackendService#enable}

---

##### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#sample_rate ComputeBackendService#sample_rate}

---

### ComputeBackendServiceOutlierDetection <a name="ComputeBackendServiceOutlierDetection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceOutlierDetection(
  base_ejection_time: ComputeBackendServiceOutlierDetectionBaseEjectionTime = None,
  consecutive_errors: typing.Union[int, float] = None,
  consecutive_gateway_failure: typing.Union[int, float] = None,
  enforcing_consecutive_errors: typing.Union[int, float] = None,
  enforcing_consecutive_gateway_failure: typing.Union[int, float] = None,
  enforcing_success_rate: typing.Union[int, float] = None,
  interval: ComputeBackendServiceOutlierDetectionInterval = None,
  max_ejection_percent: typing.Union[int, float] = None,
  success_rate_minimum_hosts: typing.Union[int, float] = None,
  success_rate_request_volume: typing.Union[int, float] = None,
  success_rate_stdev_factor: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.baseEjectionTime">base_ejection_time</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | base_ejection_time block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.consecutiveErrors">consecutive_errors</a></code> | <code>typing.Union[int, float]</code> | Number of errors before a host is ejected from the connection pool. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.consecutiveGatewayFailure">consecutive_gateway_failure</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingConsecutiveErrors">enforcing_consecutive_errors</a></code> | <code>typing.Union[int, float]</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure">enforcing_consecutive_gateway_failure</a></code> | <code>typing.Union[int, float]</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingSuccessRate">enforcing_success_rate</a></code> | <code>typing.Union[int, float]</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.maxEjectionPercent">max_ejection_percent</a></code> | <code>typing.Union[int, float]</code> | Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateMinimumHosts">success_rate_minimum_hosts</a></code> | <code>typing.Union[int, float]</code> | The number of hosts in a cluster that must have enough request volume to detect success rate outliers. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateRequestVolume">success_rate_request_volume</a></code> | <code>typing.Union[int, float]</code> | The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateStdevFactor">success_rate_stdev_factor</a></code> | <code>typing.Union[int, float]</code> | This factor is used to determine the ejection threshold for success rate outlier ejection. |

---

##### `base_ejection_time`<sup>Optional</sup> <a name="base_ejection_time" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.baseEjectionTime"></a>

```python
base_ejection_time: ComputeBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#base_ejection_time ComputeBackendService#base_ejection_time}

---

##### `consecutive_errors`<sup>Optional</sup> <a name="consecutive_errors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.consecutiveErrors"></a>

```python
consecutive_errors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#consecutive_errors ComputeBackendService#consecutive_errors}

---

##### `consecutive_gateway_failure`<sup>Optional</sup> <a name="consecutive_gateway_failure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.consecutiveGatewayFailure"></a>

```python
consecutive_gateway_failure: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#consecutive_gateway_failure ComputeBackendService#consecutive_gateway_failure}

---

##### `enforcing_consecutive_errors`<sup>Optional</sup> <a name="enforcing_consecutive_errors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingConsecutiveErrors"></a>

```python
enforcing_consecutive_errors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#enforcing_consecutive_errors ComputeBackendService#enforcing_consecutive_errors}

---

##### `enforcing_consecutive_gateway_failure`<sup>Optional</sup> <a name="enforcing_consecutive_gateway_failure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure"></a>

```python
enforcing_consecutive_gateway_failure: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#enforcing_consecutive_gateway_failure ComputeBackendService#enforcing_consecutive_gateway_failure}

---

##### `enforcing_success_rate`<sup>Optional</sup> <a name="enforcing_success_rate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingSuccessRate"></a>

```python
enforcing_success_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#enforcing_success_rate ComputeBackendService#enforcing_success_rate}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.interval"></a>

```python
interval: ComputeBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#interval ComputeBackendService#interval}

---

##### `max_ejection_percent`<sup>Optional</sup> <a name="max_ejection_percent" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.maxEjectionPercent"></a>

```python
max_ejection_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#max_ejection_percent ComputeBackendService#max_ejection_percent}

---

##### `success_rate_minimum_hosts`<sup>Optional</sup> <a name="success_rate_minimum_hosts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateMinimumHosts"></a>

```python
success_rate_minimum_hosts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#success_rate_minimum_hosts ComputeBackendService#success_rate_minimum_hosts}

---

##### `success_rate_request_volume`<sup>Optional</sup> <a name="success_rate_request_volume" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateRequestVolume"></a>

```python
success_rate_request_volume: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#success_rate_request_volume ComputeBackendService#success_rate_request_volume}

---

##### `success_rate_stdev_factor`<sup>Optional</sup> <a name="success_rate_stdev_factor" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateStdevFactor"></a>

```python
success_rate_stdev_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This factor is used to determine the ejection threshold for success rate outlier ejection.

The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#success_rate_stdev_factor ComputeBackendService#success_rate_stdev_factor}

---

### ComputeBackendServiceOutlierDetectionBaseEjectionTime <a name="ComputeBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

### ComputeBackendServiceOutlierDetectionInterval <a name="ComputeBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceOutlierDetectionInterval(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

### ComputeBackendServiceSecuritySettings <a name="ComputeBackendServiceSecuritySettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceSecuritySettings(
  client_tls_policy: str,
  subject_alt_names: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.clientTlsPolicy">client_tls_policy</a></code> | <code>str</code> | ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.subjectAltNames">subject_alt_names</a></code> | <code>typing.List[str]</code> | A list of alternate names to verify the subject identity in the certificate. |

---

##### `client_tls_policy`<sup>Required</sup> <a name="client_tls_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.clientTlsPolicy"></a>

```python
client_tls_policy: str
```

- *Type:* str

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service.

This resource itself does not affect
configuration unless it is attached to a backend service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#client_tls_policy ComputeBackendService#client_tls_policy}

---

##### `subject_alt_names`<sup>Required</sup> <a name="subject_alt_names" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.subjectAltNames"></a>

```python
subject_alt_names: typing.List[str]
```

- *Type:* typing.List[str]

A list of alternate names to verify the subject identity in the certificate.

If specified, the client will verify that the server certificate's subject
alt name matches one of the specified values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#subject_alt_names ComputeBackendService#subject_alt_names}

---

### ComputeBackendServiceTimeouts <a name="ComputeBackendServiceTimeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#create ComputeBackendService#create}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#delete ComputeBackendService#delete}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#update ComputeBackendService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#create ComputeBackendService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#delete ComputeBackendService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#update ComputeBackendService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendServiceBackendList <a name="ComputeBackendServiceBackendList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceBackendList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeBackendServiceBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeBackendServiceBackend]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>]]

---


### ComputeBackendServiceBackendOutputReference <a name="ComputeBackendServiceBackendOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceBackendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetBalancingMode">reset_balancing_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetCapacityScaler">reset_capacity_scaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnections">reset_max_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint">reset_max_connections_per_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance">reset_max_connections_per_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRate">reset_max_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRatePerEndpoint">reset_max_rate_per_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRatePerInstance">reset_max_rate_per_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxUtilization">reset_max_utilization</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_balancing_mode` <a name="reset_balancing_mode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetBalancingMode"></a>

```python
def reset_balancing_mode() -> None
```

##### `reset_capacity_scaler` <a name="reset_capacity_scaler" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetCapacityScaler"></a>

```python
def reset_capacity_scaler() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_max_connections` <a name="reset_max_connections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnections"></a>

```python
def reset_max_connections() -> None
```

##### `reset_max_connections_per_endpoint` <a name="reset_max_connections_per_endpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint"></a>

```python
def reset_max_connections_per_endpoint() -> None
```

##### `reset_max_connections_per_instance` <a name="reset_max_connections_per_instance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance"></a>

```python
def reset_max_connections_per_instance() -> None
```

##### `reset_max_rate` <a name="reset_max_rate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRate"></a>

```python
def reset_max_rate() -> None
```

##### `reset_max_rate_per_endpoint` <a name="reset_max_rate_per_endpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRatePerEndpoint"></a>

```python
def reset_max_rate_per_endpoint() -> None
```

##### `reset_max_rate_per_instance` <a name="reset_max_rate_per_instance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRatePerInstance"></a>

```python
def reset_max_rate_per_instance() -> None
```

##### `reset_max_utilization` <a name="reset_max_utilization" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxUtilization"></a>

```python
def reset_max_utilization() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.balancingModeInput">balancing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.capacityScalerInput">capacity_scaler_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsInput">max_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput">max_connections_per_endpoint_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput">max_connections_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRateInput">max_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerEndpointInput">max_rate_per_endpoint_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerInstanceInput">max_rate_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxUtilizationInput">max_utilization_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.balancingMode">balancing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.capacityScaler">capacity_scaler</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">max_connections_per_endpoint</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">max_connections_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint">max_rate_per_endpoint</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerInstance">max_rate_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxUtilization">max_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `balancing_mode_input`<sup>Optional</sup> <a name="balancing_mode_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.balancingModeInput"></a>

```python
balancing_mode_input: str
```

- *Type:* str

---

##### `capacity_scaler_input`<sup>Optional</sup> <a name="capacity_scaler_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.capacityScalerInput"></a>

```python
capacity_scaler_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `max_connections_input`<sup>Optional</sup> <a name="max_connections_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsInput"></a>

```python
max_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections_per_endpoint_input`<sup>Optional</sup> <a name="max_connections_per_endpoint_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput"></a>

```python
max_connections_per_endpoint_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections_per_instance_input`<sup>Optional</sup> <a name="max_connections_per_instance_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput"></a>

```python
max_connections_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_input`<sup>Optional</sup> <a name="max_rate_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRateInput"></a>

```python
max_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_per_endpoint_input`<sup>Optional</sup> <a name="max_rate_per_endpoint_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerEndpointInput"></a>

```python
max_rate_per_endpoint_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_per_instance_input`<sup>Optional</sup> <a name="max_rate_per_instance_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerInstanceInput"></a>

```python
max_rate_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_utilization_input`<sup>Optional</sup> <a name="max_utilization_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxUtilizationInput"></a>

```python
max_utilization_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `balancing_mode`<sup>Required</sup> <a name="balancing_mode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.balancingMode"></a>

```python
balancing_mode: str
```

- *Type:* str

---

##### `capacity_scaler`<sup>Required</sup> <a name="capacity_scaler" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.capacityScaler"></a>

```python
capacity_scaler: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections_per_endpoint`<sup>Required</sup> <a name="max_connections_per_endpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```python
max_connections_per_endpoint: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections_per_instance`<sup>Required</sup> <a name="max_connections_per_instance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```python
max_connections_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate`<sup>Required</sup> <a name="max_rate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_per_endpoint`<sup>Required</sup> <a name="max_rate_per_endpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```python
max_rate_per_endpoint: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_per_instance`<sup>Required</sup> <a name="max_rate_per_instance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```python
max_rate_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_utilization`<sup>Required</sup> <a name="max_utilization" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxUtilization"></a>

```python
max_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeBackendServiceBackend]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>]

---


### ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList <a name="ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>]]

---


### ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference <a name="ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>]

---


### ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost">reset_include_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders">reset_include_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies">reset_include_named_cookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">reset_include_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString">reset_include_query_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist">reset_query_string_blacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">reset_query_string_whitelist</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_host` <a name="reset_include_host" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost"></a>

```python
def reset_include_host() -> None
```

##### `reset_include_http_headers` <a name="reset_include_http_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders"></a>

```python
def reset_include_http_headers() -> None
```

##### `reset_include_named_cookies` <a name="reset_include_named_cookies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies"></a>

```python
def reset_include_named_cookies() -> None
```

##### `reset_include_protocol` <a name="reset_include_protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```python
def reset_include_protocol() -> None
```

##### `reset_include_query_string` <a name="reset_include_query_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString"></a>

```python
def reset_include_query_string() -> None
```

##### `reset_query_string_blacklist` <a name="reset_query_string_blacklist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist"></a>

```python
def reset_query_string_blacklist() -> None
```

##### `reset_query_string_whitelist` <a name="reset_query_string_whitelist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```python
def reset_query_string_whitelist() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput">include_host_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput">include_http_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput">include_named_cookies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">include_protocol_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput">include_query_string_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput">query_string_blacklist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">query_string_whitelist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">include_host</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders">include_http_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">include_named_cookies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">include_protocol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">include_query_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">query_string_blacklist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">query_string_whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_host_input`<sup>Optional</sup> <a name="include_host_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput"></a>

```python
include_host_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_http_headers_input`<sup>Optional</sup> <a name="include_http_headers_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput"></a>

```python
include_http_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_named_cookies_input`<sup>Optional</sup> <a name="include_named_cookies_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput"></a>

```python
include_named_cookies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_protocol_input`<sup>Optional</sup> <a name="include_protocol_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```python
include_protocol_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_query_string_input`<sup>Optional</sup> <a name="include_query_string_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput"></a>

```python
include_query_string_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_string_blacklist_input`<sup>Optional</sup> <a name="query_string_blacklist_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput"></a>

```python
query_string_blacklist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_whitelist_input`<sup>Optional</sup> <a name="query_string_whitelist_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```python
query_string_whitelist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_host`<sup>Required</sup> <a name="include_host" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```python
include_host: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_http_headers`<sup>Required</sup> <a name="include_http_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders"></a>

```python
include_http_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_named_cookies`<sup>Required</sup> <a name="include_named_cookies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```python
include_named_cookies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_protocol`<sup>Required</sup> <a name="include_protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```python
include_protocol: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_query_string`<sup>Required</sup> <a name="include_query_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```python
include_query_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_string_blacklist`<sup>Required</sup> <a name="query_string_blacklist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```python
query_string_blacklist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_whitelist`<sup>Required</sup> <a name="query_string_whitelist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```python
query_string_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### ComputeBackendServiceCdnPolicyNegativeCachingPolicyList <a name="ComputeBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeBackendServiceCdnPolicyNegativeCachingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>]]

---


### ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```python
code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeBackendServiceCdnPolicyNegativeCachingPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>]

---


### ComputeBackendServiceCdnPolicyOutputReference <a name="ComputeBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceCdnPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders">put_bypass_cache_on_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy">put_cache_key_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy">put_negative_caching_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders">reset_bypass_cache_on_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy">reset_cache_key_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetCacheMode">reset_cache_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetClientTtl">reset_client_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetNegativeCaching">reset_negative_caching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy">reset_negative_caching_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetServeWhileStale">reset_serve_while_stale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">reset_signed_url_cache_max_age_sec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bypass_cache_on_request_headers` <a name="put_bypass_cache_on_request_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders"></a>

```python
def put_bypass_cache_on_request_headers(
  value: typing.Union[IResolvable, typing.List[ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>]]

---

##### `put_cache_key_policy` <a name="put_cache_key_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```python
def put_cache_key_policy(
  include_host: typing.Union[bool, IResolvable] = None,
  include_http_headers: typing.List[str] = None,
  include_named_cookies: typing.List[str] = None,
  include_protocol: typing.Union[bool, IResolvable] = None,
  include_query_string: typing.Union[bool, IResolvable] = None,
  query_string_blacklist: typing.List[str] = None,
  query_string_whitelist: typing.List[str] = None
) -> None
```

###### `include_host`<sup>Optional</sup> <a name="include_host" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.includeHost"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#include_host ComputeBackendService#include_host}

---

###### `include_http_headers`<sup>Optional</sup> <a name="include_http_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.includeHttpHeaders"></a>

- *Type:* typing.List[str]

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#include_http_headers ComputeBackendService#include_http_headers}

---

###### `include_named_cookies`<sup>Optional</sup> <a name="include_named_cookies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.includeNamedCookies"></a>

- *Type:* typing.List[str]

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#include_named_cookies ComputeBackendService#include_named_cookies}

---

###### `include_protocol`<sup>Optional</sup> <a name="include_protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.includeProtocol"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#include_protocol ComputeBackendService#include_protocol}

---

###### `include_query_string`<sup>Optional</sup> <a name="include_query_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.includeQueryString"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#include_query_string ComputeBackendService#include_query_string}

---

###### `query_string_blacklist`<sup>Optional</sup> <a name="query_string_blacklist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.queryStringBlacklist"></a>

- *Type:* typing.List[str]

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#query_string_blacklist ComputeBackendService#query_string_blacklist}

---

###### `query_string_whitelist`<sup>Optional</sup> <a name="query_string_whitelist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.queryStringWhitelist"></a>

- *Type:* typing.List[str]

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#query_string_whitelist ComputeBackendService#query_string_whitelist}

---

##### `put_negative_caching_policy` <a name="put_negative_caching_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```python
def put_negative_caching_policy(
  value: typing.Union[IResolvable, typing.List[ComputeBackendServiceCdnPolicyNegativeCachingPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>]]

---

##### `reset_bypass_cache_on_request_headers` <a name="reset_bypass_cache_on_request_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders"></a>

```python
def reset_bypass_cache_on_request_headers() -> None
```

##### `reset_cache_key_policy` <a name="reset_cache_key_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```python
def reset_cache_key_policy() -> None
```

##### `reset_cache_mode` <a name="reset_cache_mode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetCacheMode"></a>

```python
def reset_cache_mode() -> None
```

##### `reset_client_ttl` <a name="reset_client_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetClientTtl"></a>

```python
def reset_client_ttl() -> None
```

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_negative_caching` <a name="reset_negative_caching" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetNegativeCaching"></a>

```python
def reset_negative_caching() -> None
```

##### `reset_negative_caching_policy` <a name="reset_negative_caching_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```python
def reset_negative_caching_policy() -> None
```

##### `reset_serve_while_stale` <a name="reset_serve_while_stale" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetServeWhileStale"></a>

```python
def reset_serve_while_stale() -> None
```

##### `reset_signed_url_cache_max_age_sec` <a name="reset_signed_url_cache_max_age_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```python
def reset_signed_url_cache_max_age_sec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders">bypass_cache_on_request_headers</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">cache_key_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference">ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">negative_caching_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList">ComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput">bypass_cache_on_request_headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput">cache_key_policy_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheModeInput">cache_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.clientTtlInput">client_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.defaultTtlInput">default_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingInput">negative_caching_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput">negative_caching_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput">serve_while_stale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">signed_url_cache_max_age_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheMode">cache_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.clientTtl">client_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching">negative_caching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale">serve_while_stale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signed_url_cache_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bypass_cache_on_request_headers`<sup>Required</sup> <a name="bypass_cache_on_request_headers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders"></a>

```python
bypass_cache_on_request_headers: ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a>

---

##### `cache_key_policy`<sup>Required</sup> <a name="cache_key_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```python
cache_key_policy: ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference">ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `negative_caching_policy`<sup>Required</sup> <a name="negative_caching_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```python
negative_caching_policy: ComputeBackendServiceCdnPolicyNegativeCachingPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList">ComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `bypass_cache_on_request_headers_input`<sup>Optional</sup> <a name="bypass_cache_on_request_headers_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput"></a>

```python
bypass_cache_on_request_headers_input: typing.Union[IResolvable, typing.List[ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>]]

---

##### `cache_key_policy_input`<sup>Optional</sup> <a name="cache_key_policy_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```python
cache_key_policy_input: ComputeBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `cache_mode_input`<sup>Optional</sup> <a name="cache_mode_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheModeInput"></a>

```python
cache_mode_input: str
```

- *Type:* str

---

##### `client_ttl_input`<sup>Optional</sup> <a name="client_ttl_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.clientTtlInput"></a>

```python
client_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.defaultTtlInput"></a>

```python
default_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negative_caching_input`<sup>Optional</sup> <a name="negative_caching_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingInput"></a>

```python
negative_caching_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `negative_caching_policy_input`<sup>Optional</sup> <a name="negative_caching_policy_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```python
negative_caching_policy_input: typing.Union[IResolvable, typing.List[ComputeBackendServiceCdnPolicyNegativeCachingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>]]

---

##### `serve_while_stale_input`<sup>Optional</sup> <a name="serve_while_stale_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```python
serve_while_stale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signed_url_cache_max_age_sec_input`<sup>Optional</sup> <a name="signed_url_cache_max_age_sec_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```python
signed_url_cache_max_age_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_mode`<sup>Required</sup> <a name="cache_mode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```python
cache_mode: str
```

- *Type:* str

---

##### `client_ttl`<sup>Required</sup> <a name="client_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```python
client_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negative_caching`<sup>Required</sup> <a name="negative_caching" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```python
negative_caching: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `serve_while_stale`<sup>Required</sup> <a name="serve_while_stale" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```python
serve_while_stale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signed_url_cache_max_age_sec`<sup>Required</sup> <a name="signed_url_cache_max_age_sec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```python
signed_url_cache_max_age_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

---


### ComputeBackendServiceCircuitBreakersOutputReference <a name="ComputeBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxConnections">reset_max_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests">reset_max_pending_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequests">reset_max_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection">reset_max_requests_per_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRetries">reset_max_retries</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_connections` <a name="reset_max_connections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxConnections"></a>

```python
def reset_max_connections() -> None
```

##### `reset_max_pending_requests` <a name="reset_max_pending_requests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests"></a>

```python
def reset_max_pending_requests() -> None
```

##### `reset_max_requests` <a name="reset_max_requests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequests"></a>

```python
def reset_max_requests() -> None
```

##### `reset_max_requests_per_connection` <a name="reset_max_requests_per_connection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection"></a>

```python
def reset_max_requests_per_connection() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput">max_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput">max_pending_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput">max_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput">max_requests_per_connection_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">max_pending_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests">max_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">max_requests_per_connection</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_connections_input`<sup>Optional</sup> <a name="max_connections_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput"></a>

```python
max_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_requests_input`<sup>Optional</sup> <a name="max_pending_requests_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput"></a>

```python
max_pending_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_requests_input`<sup>Optional</sup> <a name="max_requests_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput"></a>

```python
max_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_requests_per_connection_input`<sup>Optional</sup> <a name="max_requests_per_connection_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput"></a>

```python
max_requests_per_connection_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_requests`<sup>Required</sup> <a name="max_pending_requests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```python
max_pending_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_requests`<sup>Required</sup> <a name="max_requests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```python
max_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_requests_per_connection`<sup>Required</sup> <a name="max_requests_per_connection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```python
max_requests_per_connection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

---


### ComputeBackendServiceConsistentHashHttpCookieOutputReference <a name="ComputeBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl">put_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ttl` <a name="put_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl"></a>

```python
def put_ttl(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
) -> None
```

###### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference">ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput">ttl_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```python
ttl: ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference">ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput"></a>

```python
ttl_input: ComputeBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a>

---


### ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a>

---


### ComputeBackendServiceConsistentHashOutputReference <a name="ComputeBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceConsistentHashOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.putHttpCookie">put_http_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetHttpCookie">reset_http_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetHttpHeaderName">reset_http_header_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetMinimumRingSize">reset_minimum_ring_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http_cookie` <a name="put_http_cookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.putHttpCookie"></a>

```python
def put_http_cookie(
  name: str = None,
  path: str = None,
  ttl: ComputeBackendServiceConsistentHashHttpCookieTtl = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.name"></a>

- *Type:* str

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.path"></a>

- *Type:* str

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#path ComputeBackendService#path}

---

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.ttl"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#ttl ComputeBackendService#ttl}

---

##### `reset_http_cookie` <a name="reset_http_cookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetHttpCookie"></a>

```python
def reset_http_cookie() -> None
```

##### `reset_http_header_name` <a name="reset_http_header_name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetHttpHeaderName"></a>

```python
def reset_http_header_name() -> None
```

##### `reset_minimum_ring_size` <a name="reset_minimum_ring_size" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetMinimumRingSize"></a>

```python
def reset_minimum_ring_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpCookie">http_cookie</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference">ComputeBackendServiceConsistentHashHttpCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpCookieInput">http_cookie_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput">http_header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput">minimum_ring_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName">http_header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize">minimum_ring_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_cookie`<sup>Required</sup> <a name="http_cookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```python
http_cookie: ComputeBackendServiceConsistentHashHttpCookieOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference">ComputeBackendServiceConsistentHashHttpCookieOutputReference</a>

---

##### `http_cookie_input`<sup>Optional</sup> <a name="http_cookie_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpCookieInput"></a>

```python
http_cookie_input: ComputeBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a>

---

##### `http_header_name_input`<sup>Optional</sup> <a name="http_header_name_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput"></a>

```python
http_header_name_input: str
```

- *Type:* str

---

##### `minimum_ring_size_input`<sup>Optional</sup> <a name="minimum_ring_size_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput"></a>

```python
minimum_ring_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_header_name`<sup>Required</sup> <a name="http_header_name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```python
http_header_name: str
```

- *Type:* str

---

##### `minimum_ring_size`<sup>Required</sup> <a name="minimum_ring_size" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```python
minimum_ring_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

---


### ComputeBackendServiceIapOutputReference <a name="ComputeBackendServiceIapOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceIapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">oauth2_client_secret_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientIdInput">oauth2_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecretInput">oauth2_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientId">oauth2_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecret">oauth2_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth2_client_secret_sha256`<sup>Required</sup> <a name="oauth2_client_secret_sha256" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```python
oauth2_client_secret_sha256: str
```

- *Type:* str

---

##### `oauth2_client_id_input`<sup>Optional</sup> <a name="oauth2_client_id_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientIdInput"></a>

```python
oauth2_client_id_input: str
```

- *Type:* str

---

##### `oauth2_client_secret_input`<sup>Optional</sup> <a name="oauth2_client_secret_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecretInput"></a>

```python
oauth2_client_secret_input: str
```

- *Type:* str

---

##### `oauth2_client_id`<sup>Required</sup> <a name="oauth2_client_id" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```python
oauth2_client_id: str
```

- *Type:* str

---

##### `oauth2_client_secret`<sup>Required</sup> <a name="oauth2_client_secret" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```python
oauth2_client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

---


### ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference <a name="ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resetData">reset_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data` <a name="reset_data" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resetData"></a>

```python
def reset_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceLocalityLbPoliciesCustomPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---


### ComputeBackendServiceLocalityLbPoliciesList <a name="ComputeBackendServiceLocalityLbPoliciesList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceLocalityLbPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeBackendServiceLocalityLbPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeBackendServiceLocalityLbPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>]]

---


### ComputeBackendServiceLocalityLbPoliciesOutputReference <a name="ComputeBackendServiceLocalityLbPoliciesOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy">put_custom_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy">put_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resetCustomPolicy">reset_custom_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resetPolicy">reset_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_policy` <a name="put_custom_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy"></a>

```python
def put_custom_policy(
  name: str,
  data: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy.parameter.name"></a>

- *Type:* str

Identifies the custom policy.

The value should match the type the custom implementation is registered
with on the gRPC clients. It should follow protocol buffer
message naming conventions and include the full path (e.g.
myorg.CustomLbPolicy). The maximum length is 256 characters.

Note that specifying the same custom policy more than once for a
backend is not a valid configuration and will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

###### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy.parameter.data"></a>

- *Type:* str

An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#data ComputeBackendService#data}

---

##### `put_policy` <a name="put_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy"></a>

```python
def put_policy(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy.parameter.name"></a>

- *Type:* str

The name of a locality load balancer policy to be used.

The value
should be one of the predefined ones as supported by localityLbPolicy,
although at the moment only ROUND_ROBIN is supported.

This field should only be populated when the customPolicy field is not
used.

Note that specifying the same policy more than once for a backend is
not a valid configuration and will be rejected.

The possible values are:

* 'ROUND_ROBIN': This is a simple policy in which each healthy backend
  is selected in round robin order.
* 'LEAST_REQUEST': An O(1) algorithm which selects two random healthy
  hosts and picks the host which has fewer active requests.
* 'RING_HASH': The ring/modulo hash load balancer implements consistent
  hashing to backends. The algorithm has the property that the
  addition/removal of a host from a set of N hosts only affects
  1/N of the requests.
* 'RANDOM': The load balancer selects a random healthy host.
* 'ORIGINAL_DESTINATION': Backend host is selected based on the client
  connection metadata, i.e., connections are opened
  to the same address as the destination address of
  the incoming connection before the connection
  was redirected to the load balancer.
* 'MAGLEV': used as a drop in replacement for the ring hash load balancer.
  Maglev is not as stable as ring hash but has faster table lookup
  build times and host selection times. For more information about
  Maglev, refer to https://ai.google/research/pubs/pub44824 Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `reset_custom_policy` <a name="reset_custom_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resetCustomPolicy"></a>

```python
def reset_custom_policy() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resetPolicy"></a>

```python
def reset_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy">custom_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference">ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference">ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicyInput">custom_policy_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.policyInput">policy_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_policy`<sup>Required</sup> <a name="custom_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy"></a>

```python
custom_policy: ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference">ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference</a>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy"></a>

```python
policy: ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference">ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference</a>

---

##### `custom_policy_input`<sup>Optional</sup> <a name="custom_policy_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicyInput"></a>

```python
custom_policy_input: ComputeBackendServiceLocalityLbPoliciesCustomPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.policyInput"></a>

```python
policy_input: ComputeBackendServiceLocalityLbPoliciesPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeBackendServiceLocalityLbPolicies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>]

---


### ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference <a name="ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceLocalityLbPoliciesPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a>

---


### ComputeBackendServiceLogConfigOutputReference <a name="ComputeBackendServiceLogConfigOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetSampleRate">reset_sample_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_sample_rate` <a name="reset_sample_rate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetSampleRate"></a>

```python
def reset_sample_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.sampleRateInput">sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sample_rate_input`<sup>Optional</sup> <a name="sample_rate_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.sampleRateInput"></a>

```python
sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sample_rate`<sup>Required</sup> <a name="sample_rate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

---


### ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### ComputeBackendServiceOutlierDetectionIntervalOutputReference <a name="ComputeBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a>

---


### ComputeBackendServiceOutlierDetectionOutputReference <a name="ComputeBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime">put_base_ejection_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putInterval">put_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime">reset_base_ejection_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors">reset_consecutive_errors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure">reset_consecutive_gateway_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors">reset_enforcing_consecutive_errors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure">reset_enforcing_consecutive_gateway_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate">reset_enforcing_success_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent">reset_max_ejection_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts">reset_success_rate_minimum_hosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume">reset_success_rate_request_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor">reset_success_rate_stdev_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_base_ejection_time` <a name="put_base_ejection_time" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime"></a>

```python
def put_base_ejection_time(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
) -> None
```

###### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

##### `put_interval` <a name="put_interval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putInterval"></a>

```python
def put_interval(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
) -> None
```

###### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putInterval.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putInterval.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.9.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

##### `reset_base_ejection_time` <a name="reset_base_ejection_time" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime"></a>

```python
def reset_base_ejection_time() -> None
```

##### `reset_consecutive_errors` <a name="reset_consecutive_errors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors"></a>

```python
def reset_consecutive_errors() -> None
```

##### `reset_consecutive_gateway_failure` <a name="reset_consecutive_gateway_failure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure"></a>

```python
def reset_consecutive_gateway_failure() -> None
```

##### `reset_enforcing_consecutive_errors` <a name="reset_enforcing_consecutive_errors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors"></a>

```python
def reset_enforcing_consecutive_errors() -> None
```

##### `reset_enforcing_consecutive_gateway_failure` <a name="reset_enforcing_consecutive_gateway_failure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure"></a>

```python
def reset_enforcing_consecutive_gateway_failure() -> None
```

##### `reset_enforcing_success_rate` <a name="reset_enforcing_success_rate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate"></a>

```python
def reset_enforcing_success_rate() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_max_ejection_percent` <a name="reset_max_ejection_percent" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent"></a>

```python
def reset_max_ejection_percent() -> None
```

##### `reset_success_rate_minimum_hosts` <a name="reset_success_rate_minimum_hosts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts"></a>

```python
def reset_success_rate_minimum_hosts() -> None
```

##### `reset_success_rate_request_volume` <a name="reset_success_rate_request_volume" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume"></a>

```python
def reset_success_rate_request_volume() -> None
```

##### `reset_success_rate_stdev_factor` <a name="reset_success_rate_stdev_factor" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor"></a>

```python
def reset_success_rate_stdev_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">base_ejection_time</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference">ComputeBackendServiceOutlierDetectionIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput">base_ejection_time_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput">consecutive_errors_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput">consecutive_gateway_failure_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput">enforcing_consecutive_errors_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput">enforcing_consecutive_gateway_failure_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput">enforcing_success_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.intervalInput">interval_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput">max_ejection_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput">success_rate_minimum_hosts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput">success_rate_request_volume_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput">success_rate_stdev_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">consecutive_errors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">consecutive_gateway_failure</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">enforcing_consecutive_errors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">enforcing_consecutive_gateway_failure</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">enforcing_success_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">max_ejection_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">success_rate_minimum_hosts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">success_rate_request_volume</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">success_rate_stdev_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_ejection_time`<sup>Required</sup> <a name="base_ejection_time" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```python
base_ejection_time: ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```python
interval: ComputeBackendServiceOutlierDetectionIntervalOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference">ComputeBackendServiceOutlierDetectionIntervalOutputReference</a>

---

##### `base_ejection_time_input`<sup>Optional</sup> <a name="base_ejection_time_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput"></a>

```python
base_ejection_time_input: ComputeBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `consecutive_errors_input`<sup>Optional</sup> <a name="consecutive_errors_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput"></a>

```python
consecutive_errors_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consecutive_gateway_failure_input`<sup>Optional</sup> <a name="consecutive_gateway_failure_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput"></a>

```python
consecutive_gateway_failure_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_consecutive_errors_input`<sup>Optional</sup> <a name="enforcing_consecutive_errors_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput"></a>

```python
enforcing_consecutive_errors_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_consecutive_gateway_failure_input`<sup>Optional</sup> <a name="enforcing_consecutive_gateway_failure_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput"></a>

```python
enforcing_consecutive_gateway_failure_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_success_rate_input`<sup>Optional</sup> <a name="enforcing_success_rate_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput"></a>

```python
enforcing_success_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.intervalInput"></a>

```python
interval_input: ComputeBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a>

---

##### `max_ejection_percent_input`<sup>Optional</sup> <a name="max_ejection_percent_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput"></a>

```python
max_ejection_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_minimum_hosts_input`<sup>Optional</sup> <a name="success_rate_minimum_hosts_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput"></a>

```python
success_rate_minimum_hosts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_request_volume_input`<sup>Optional</sup> <a name="success_rate_request_volume_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput"></a>

```python
success_rate_request_volume_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_stdev_factor_input`<sup>Optional</sup> <a name="success_rate_stdev_factor_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput"></a>

```python
success_rate_stdev_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consecutive_errors`<sup>Required</sup> <a name="consecutive_errors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```python
consecutive_errors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consecutive_gateway_failure`<sup>Required</sup> <a name="consecutive_gateway_failure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```python
consecutive_gateway_failure: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_consecutive_errors`<sup>Required</sup> <a name="enforcing_consecutive_errors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```python
enforcing_consecutive_errors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_consecutive_gateway_failure`<sup>Required</sup> <a name="enforcing_consecutive_gateway_failure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```python
enforcing_consecutive_gateway_failure: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_success_rate`<sup>Required</sup> <a name="enforcing_success_rate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```python
enforcing_success_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ejection_percent`<sup>Required</sup> <a name="max_ejection_percent" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```python
max_ejection_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_minimum_hosts`<sup>Required</sup> <a name="success_rate_minimum_hosts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```python
success_rate_minimum_hosts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_request_volume`<sup>Required</sup> <a name="success_rate_request_volume" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```python
success_rate_request_volume: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_stdev_factor`<sup>Required</sup> <a name="success_rate_stdev_factor" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```python
success_rate_stdev_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

---


### ComputeBackendServiceSecuritySettingsOutputReference <a name="ComputeBackendServiceSecuritySettingsOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicyInput">client_tls_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNamesInput">subject_alt_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy">client_tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames">subject_alt_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_tls_policy_input`<sup>Optional</sup> <a name="client_tls_policy_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicyInput"></a>

```python
client_tls_policy_input: str
```

- *Type:* str

---

##### `subject_alt_names_input`<sup>Optional</sup> <a name="subject_alt_names_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNamesInput"></a>

```python
subject_alt_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_tls_policy`<sup>Required</sup> <a name="client_tls_policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy"></a>

```python
client_tls_policy: str
```

- *Type:* str

---

##### `subject_alt_names`<sup>Required</sup> <a name="subject_alt_names" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames"></a>

```python
subject_alt_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendServiceSecuritySettings
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

---


### ComputeBackendServiceTimeoutsOutputReference <a name="ComputeBackendServiceTimeoutsOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service

computeBackendService.ComputeBackendServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeBackendServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>]

---



