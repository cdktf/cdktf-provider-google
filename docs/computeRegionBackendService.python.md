# `computeRegionBackendService` Submodule <a name="`computeRegionBackendService` Submodule" id="@cdktf/provider-google.computeRegionBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionBackendService <a name="ComputeRegionBackendService" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service google_compute_region_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendService(
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
  backend: typing.Union[IResolvable, typing.List[ComputeRegionBackendServiceBackend]] = None,
  cdn_policy: ComputeRegionBackendServiceCdnPolicy = None,
  circuit_breakers: ComputeRegionBackendServiceCircuitBreakers = None,
  connection_draining_timeout_sec: typing.Union[int, float] = None,
  consistent_hash: ComputeRegionBackendServiceConsistentHash = None,
  description: str = None,
  enable_cdn: typing.Union[bool, IResolvable] = None,
  failover_policy: ComputeRegionBackendServiceFailoverPolicy = None,
  health_checks: typing.List[str] = None,
  iap: ComputeRegionBackendServiceIap = None,
  id: str = None,
  load_balancing_scheme: str = None,
  locality_lb_policy: str = None,
  log_config: ComputeRegionBackendServiceLogConfig = None,
  network: str = None,
  outlier_detection: ComputeRegionBackendServiceOutlierDetection = None,
  port_name: str = None,
  project: str = None,
  protocol: str = None,
  region: str = None,
  session_affinity: str = None,
  timeouts: ComputeRegionBackendServiceTimeouts = None,
  timeout_sec: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.affinityCookieTtlSec">affinity_cookie_ttl_sec</a></code> | <code>typing.Union[int, float]</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.backend">backend</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend">ComputeRegionBackendServiceBackend</a>]]</code> | backend block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.cdnPolicy">cdn_policy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.circuitBreakers">circuit_breakers</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.connectionDrainingTimeoutSec">connection_draining_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.consistentHash">consistent_hash</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.enableCdn">enable_cdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enable Cloud CDN for this RegionBackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.failoverPolicy">failover_policy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a></code> | failover_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.healthChecks">health_checks</a></code> | <code>typing.List[str]</code> | The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#id ComputeRegionBackendService#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | Indicates what kind of load balancing this regional backend service will be used for. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.localityLbPolicy">locality_lb_policy</a></code> | <code>str</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.network">network</a></code> | <code>str</code> | The URL of the network to which this backend service belongs. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.outlierDetection">outlier_detection</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.portName">port_name</a></code> | <code>str</code> | A named port on a backend instance group representing the port for communication to the backend VMs in that group. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#project ComputeRegionBackendService#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | The protocol this RegionBackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created backend service should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.sessionAffinity">session_affinity</a></code> | <code>str</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts">ComputeRegionBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | How many seconds to wait for the backend before considering it a failed request. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#name ComputeRegionBackendService#name}

---

##### `affinity_cookie_ttl_sec`<sup>Optional</sup> <a name="affinity_cookie_ttl_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.affinityCookieTtlSec"></a>

- *Type:* typing.Union[int, float]

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#affinity_cookie_ttl_sec ComputeRegionBackendService#affinity_cookie_ttl_sec}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.backend"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend">ComputeRegionBackendServiceBackend</a>]]

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#backend ComputeRegionBackendService#backend}

---

##### `cdn_policy`<sup>Optional</sup> <a name="cdn_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.cdnPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#cdn_policy ComputeRegionBackendService#cdn_policy}

---

##### `circuit_breakers`<sup>Optional</sup> <a name="circuit_breakers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.circuitBreakers"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#circuit_breakers ComputeRegionBackendService#circuit_breakers}

---

##### `connection_draining_timeout_sec`<sup>Optional</sup> <a name="connection_draining_timeout_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.connectionDrainingTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#connection_draining_timeout_sec ComputeRegionBackendService#connection_draining_timeout_sec}

---

##### `consistent_hash`<sup>Optional</sup> <a name="consistent_hash" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.consistentHash"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#consistent_hash ComputeRegionBackendService#consistent_hash}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#description ComputeRegionBackendService#description}

---

##### `enable_cdn`<sup>Optional</sup> <a name="enable_cdn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.enableCdn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enable Cloud CDN for this RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#enable_cdn ComputeRegionBackendService#enable_cdn}

---

##### `failover_policy`<sup>Optional</sup> <a name="failover_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.failoverPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a>

failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#failover_policy ComputeRegionBackendService#failover_policy}

---

##### `health_checks`<sup>Optional</sup> <a name="health_checks" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.healthChecks"></a>

- *Type:* typing.List[str]

The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#health_checks ComputeRegionBackendService#health_checks}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.iap"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#iap ComputeRegionBackendService#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#id ComputeRegionBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancing_scheme`<sup>Optional</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* str

Indicates what kind of load balancing this regional backend service will be used for.

A backend service created for one type of load
balancing cannot be used with the other(s). For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "INTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#load_balancing_scheme ComputeRegionBackendService#load_balancing_scheme}

---

##### `locality_lb_policy`<sup>Optional</sup> <a name="locality_lb_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.localityLbPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#locality_lb_policy ComputeRegionBackendService#locality_lb_policy}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#log_config ComputeRegionBackendService#log_config}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.network"></a>

- *Type:* str

The URL of the network to which this backend service belongs.

This field can only be specified when the load balancing scheme is set to INTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#network ComputeRegionBackendService#network}

---

##### `outlier_detection`<sup>Optional</sup> <a name="outlier_detection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.outlierDetection"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#outlier_detection ComputeRegionBackendService#outlier_detection}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.portName"></a>

- *Type:* str

A named port on a backend instance group representing the port for communication to the backend VMs in that group.

Required when the
loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#port_name ComputeRegionBackendService#port_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#project ComputeRegionBackendService#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.protocol"></a>

- *Type:* str

The protocol this RegionBackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. Possible values: ["HTTP", "HTTPS", "HTTP2", "SSL", "TCP", "UDP", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#protocol ComputeRegionBackendService#protocol}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created backend service should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#region ComputeRegionBackendService#region}

---

##### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.sessionAffinity"></a>

- *Type:* str

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "CLIENT_IP_NO_DESTINATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#session_affinity ComputeRegionBackendService#session_affinity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts">ComputeRegionBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#timeouts ComputeRegionBackendService#timeouts}

---

##### `timeout_sec`<sup>Optional</sup> <a name="timeout_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.Initializer.parameter.timeoutSec"></a>

- *Type:* typing.Union[int, float]

How many seconds to wait for the backend before considering it a failed request.

Default is 30 seconds. Valid range is [1, 86400].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#timeout_sec ComputeRegionBackendService#timeout_sec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putBackend">put_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy">put_cdn_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCircuitBreakers">put_circuit_breakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putConsistentHash">put_consistent_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putFailoverPolicy">put_failover_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putIap">put_iap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putLogConfig">put_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection">put_outlier_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetAffinityCookieTtlSec">reset_affinity_cookie_ttl_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetCdnPolicy">reset_cdn_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetCircuitBreakers">reset_circuit_breakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetConnectionDrainingTimeoutSec">reset_connection_draining_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetConsistentHash">reset_consistent_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetEnableCdn">reset_enable_cdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetFailoverPolicy">reset_failover_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetHealthChecks">reset_health_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetIap">reset_iap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetLoadBalancingScheme">reset_load_balancing_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetLocalityLbPolicy">reset_locality_lb_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetLogConfig">reset_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetOutlierDetection">reset_outlier_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetPortName">reset_port_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetSessionAffinity">reset_session_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetTimeoutSec">reset_timeout_sec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backend` <a name="put_backend" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putBackend"></a>

```python
def put_backend(
  value: typing.Union[IResolvable, typing.List[ComputeRegionBackendServiceBackend]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putBackend.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend">ComputeRegionBackendServiceBackend</a>]]

---

##### `put_cdn_policy` <a name="put_cdn_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy"></a>

```python
def put_cdn_policy(
  cache_key_policy: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy = None,
  cache_mode: str = None,
  client_ttl: typing.Union[int, float] = None,
  default_ttl: typing.Union[int, float] = None,
  max_ttl: typing.Union[int, float] = None,
  negative_caching: typing.Union[bool, IResolvable] = None,
  negative_caching_policy: typing.Union[IResolvable, typing.List[ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy]] = None,
  serve_while_stale: typing.Union[int, float] = None,
  signed_url_cache_max_age_sec: typing.Union[int, float] = None
) -> None
```

###### `cache_key_policy`<sup>Optional</sup> <a name="cache_key_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy.parameter.cacheKeyPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#cache_key_policy ComputeRegionBackendService#cache_key_policy}

---

###### `cache_mode`<sup>Optional</sup> <a name="cache_mode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy.parameter.cacheMode"></a>

- *Type:* str

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#cache_mode ComputeRegionBackendService#cache_mode}

---

###### `client_ttl`<sup>Optional</sup> <a name="client_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy.parameter.clientTtl"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#client_ttl ComputeRegionBackendService#client_ttl}

---

###### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy.parameter.defaultTtl"></a>

- *Type:* typing.Union[int, float]

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#default_ttl ComputeRegionBackendService#default_ttl}

---

###### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_ttl ComputeRegionBackendService#max_ttl}

---

###### `negative_caching`<sup>Optional</sup> <a name="negative_caching" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy.parameter.negativeCaching"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#negative_caching ComputeRegionBackendService#negative_caching}

---

###### `negative_caching_policy`<sup>Optional</sup> <a name="negative_caching_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy.parameter.negativeCachingPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>]]

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#negative_caching_policy ComputeRegionBackendService#negative_caching_policy}

---

###### `serve_while_stale`<sup>Optional</sup> <a name="serve_while_stale" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy.parameter.serveWhileStale"></a>

- *Type:* typing.Union[int, float]

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#serve_while_stale ComputeRegionBackendService#serve_while_stale}

---

###### `signed_url_cache_max_age_sec`<sup>Optional</sup> <a name="signed_url_cache_max_age_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCdnPolicy.parameter.signedUrlCacheMaxAgeSec"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#signed_url_cache_max_age_sec ComputeRegionBackendService#signed_url_cache_max_age_sec}

---

##### `put_circuit_breakers` <a name="put_circuit_breakers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCircuitBreakers"></a>

```python
def put_circuit_breakers(
  max_connections: typing.Union[int, float] = None,
  max_pending_requests: typing.Union[int, float] = None,
  max_requests: typing.Union[int, float] = None,
  max_requests_per_connection: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None
) -> None
```

###### `max_connections`<sup>Optional</sup> <a name="max_connections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCircuitBreakers.parameter.maxConnections"></a>

- *Type:* typing.Union[int, float]

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_connections ComputeRegionBackendService#max_connections}

---

###### `max_pending_requests`<sup>Optional</sup> <a name="max_pending_requests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCircuitBreakers.parameter.maxPendingRequests"></a>

- *Type:* typing.Union[int, float]

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_pending_requests ComputeRegionBackendService#max_pending_requests}

---

###### `max_requests`<sup>Optional</sup> <a name="max_requests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCircuitBreakers.parameter.maxRequests"></a>

- *Type:* typing.Union[int, float]

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_requests ComputeRegionBackendService#max_requests}

---

###### `max_requests_per_connection`<sup>Optional</sup> <a name="max_requests_per_connection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCircuitBreakers.parameter.maxRequestsPerConnection"></a>

- *Type:* typing.Union[int, float]

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_requests_per_connection ComputeRegionBackendService#max_requests_per_connection}

---

###### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putCircuitBreakers.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_retries ComputeRegionBackendService#max_retries}

---

##### `put_consistent_hash` <a name="put_consistent_hash" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putConsistentHash"></a>

```python
def put_consistent_hash(
  http_cookie: ComputeRegionBackendServiceConsistentHashHttpCookie = None,
  http_header_name: str = None,
  minimum_ring_size: typing.Union[int, float] = None
) -> None
```

###### `http_cookie`<sup>Optional</sup> <a name="http_cookie" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putConsistentHash.parameter.httpCookie"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#http_cookie ComputeRegionBackendService#http_cookie}

---

###### `http_header_name`<sup>Optional</sup> <a name="http_header_name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putConsistentHash.parameter.httpHeaderName"></a>

- *Type:* str

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#http_header_name ComputeRegionBackendService#http_header_name}

---

###### `minimum_ring_size`<sup>Optional</sup> <a name="minimum_ring_size" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putConsistentHash.parameter.minimumRingSize"></a>

- *Type:* typing.Union[int, float]

The minimum number of virtual nodes to use for the hash ring.

Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#minimum_ring_size ComputeRegionBackendService#minimum_ring_size}

---

##### `put_failover_policy` <a name="put_failover_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putFailoverPolicy"></a>

```python
def put_failover_policy(
  disable_connection_drain_on_failover: typing.Union[bool, IResolvable] = None,
  drop_traffic_if_unhealthy: typing.Union[bool, IResolvable] = None,
  failover_ratio: typing.Union[int, float] = None
) -> None
```

###### `disable_connection_drain_on_failover`<sup>Optional</sup> <a name="disable_connection_drain_on_failover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putFailoverPolicy.parameter.disableConnectionDrainOnFailover"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

On failover or failback, this field indicates whether connection drain will be honored.

Setting this to true has the following effect: connections
to the old active pool are not drained. Connections to the new active pool
use the timeout of 10 min (currently fixed). Setting to false has the
following effect: both old and new connections will have a drain timeout
of 10 min.
This can be set to true only if the protocol is TCP.
The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#disable_connection_drain_on_failover ComputeRegionBackendService#disable_connection_drain_on_failover}

---

###### `drop_traffic_if_unhealthy`<sup>Optional</sup> <a name="drop_traffic_if_unhealthy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putFailoverPolicy.parameter.dropTrafficIfUnhealthy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This option is used only when no healthy VMs are detected in the primary and backup instance groups.

When set to true, traffic is dropped. When
set to false, new connections are sent across all VMs in the primary group.
The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#drop_traffic_if_unhealthy ComputeRegionBackendService#drop_traffic_if_unhealthy}

---

###### `failover_ratio`<sup>Optional</sup> <a name="failover_ratio" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putFailoverPolicy.parameter.failoverRatio"></a>

- *Type:* typing.Union[int, float]

The value of the field must be in [0, 1].

If the ratio of the healthy
VMs in the primary backend is at or below this number, traffic arriving
at the load-balanced IP will be directed to the failover backend.
In case where 'failoverRatio' is not set or all the VMs in the backup
backend are unhealthy, the traffic will be directed back to the primary
backend in the "force" mode, where traffic will be spread to the healthy
VMs with the best effort, or to all VMs when no VM is healthy.
This field is only used with l4 load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#failover_ratio ComputeRegionBackendService#failover_ratio}

---

##### `put_iap` <a name="put_iap" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putIap"></a>

```python
def put_iap(
  oauth2_client_id: str,
  oauth2_client_secret: str
) -> None
```

###### `oauth2_client_id`<sup>Required</sup> <a name="oauth2_client_id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putIap.parameter.oauth2ClientId"></a>

- *Type:* str

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#oauth2_client_id ComputeRegionBackendService#oauth2_client_id}

---

###### `oauth2_client_secret`<sup>Required</sup> <a name="oauth2_client_secret" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putIap.parameter.oauth2ClientSecret"></a>

- *Type:* str

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#oauth2_client_secret ComputeRegionBackendService#oauth2_client_secret}

---

##### `put_log_config` <a name="put_log_config" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putLogConfig"></a>

```python
def put_log_config(
  enable: typing.Union[bool, IResolvable] = None,
  sample_rate: typing.Union[int, float] = None
) -> None
```

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putLogConfig.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#enable ComputeRegionBackendService#enable}

---

###### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putLogConfig.parameter.sampleRate"></a>

- *Type:* typing.Union[int, float]

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#sample_rate ComputeRegionBackendService#sample_rate}

---

##### `put_outlier_detection` <a name="put_outlier_detection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection"></a>

```python
def put_outlier_detection(
  base_ejection_time: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime = None,
  consecutive_errors: typing.Union[int, float] = None,
  consecutive_gateway_failure: typing.Union[int, float] = None,
  enforcing_consecutive_errors: typing.Union[int, float] = None,
  enforcing_consecutive_gateway_failure: typing.Union[int, float] = None,
  enforcing_success_rate: typing.Union[int, float] = None,
  interval: ComputeRegionBackendServiceOutlierDetectionInterval = None,
  max_ejection_percent: typing.Union[int, float] = None,
  success_rate_minimum_hosts: typing.Union[int, float] = None,
  success_rate_request_volume: typing.Union[int, float] = None,
  success_rate_stdev_factor: typing.Union[int, float] = None
) -> None
```

###### `base_ejection_time`<sup>Optional</sup> <a name="base_ejection_time" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection.parameter.baseEjectionTime"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#base_ejection_time ComputeRegionBackendService#base_ejection_time}

---

###### `consecutive_errors`<sup>Optional</sup> <a name="consecutive_errors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection.parameter.consecutiveErrors"></a>

- *Type:* typing.Union[int, float]

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#consecutive_errors ComputeRegionBackendService#consecutive_errors}

---

###### `consecutive_gateway_failure`<sup>Optional</sup> <a name="consecutive_gateway_failure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection.parameter.consecutiveGatewayFailure"></a>

- *Type:* typing.Union[int, float]

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#consecutive_gateway_failure ComputeRegionBackendService#consecutive_gateway_failure}

---

###### `enforcing_consecutive_errors`<sup>Optional</sup> <a name="enforcing_consecutive_errors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection.parameter.enforcingConsecutiveErrors"></a>

- *Type:* typing.Union[int, float]

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#enforcing_consecutive_errors ComputeRegionBackendService#enforcing_consecutive_errors}

---

###### `enforcing_consecutive_gateway_failure`<sup>Optional</sup> <a name="enforcing_consecutive_gateway_failure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection.parameter.enforcingConsecutiveGatewayFailure"></a>

- *Type:* typing.Union[int, float]

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#enforcing_consecutive_gateway_failure ComputeRegionBackendService#enforcing_consecutive_gateway_failure}

---

###### `enforcing_success_rate`<sup>Optional</sup> <a name="enforcing_success_rate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection.parameter.enforcingSuccessRate"></a>

- *Type:* typing.Union[int, float]

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#enforcing_success_rate ComputeRegionBackendService#enforcing_success_rate}

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection.parameter.interval"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#interval ComputeRegionBackendService#interval}

---

###### `max_ejection_percent`<sup>Optional</sup> <a name="max_ejection_percent" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection.parameter.maxEjectionPercent"></a>

- *Type:* typing.Union[int, float]

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_ejection_percent ComputeRegionBackendService#max_ejection_percent}

---

###### `success_rate_minimum_hosts`<sup>Optional</sup> <a name="success_rate_minimum_hosts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection.parameter.successRateMinimumHosts"></a>

- *Type:* typing.Union[int, float]

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#success_rate_minimum_hosts ComputeRegionBackendService#success_rate_minimum_hosts}

---

###### `success_rate_request_volume`<sup>Optional</sup> <a name="success_rate_request_volume" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection.parameter.successRateRequestVolume"></a>

- *Type:* typing.Union[int, float]

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#success_rate_request_volume ComputeRegionBackendService#success_rate_request_volume}

---

###### `success_rate_stdev_factor`<sup>Optional</sup> <a name="success_rate_stdev_factor" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putOutlierDetection.parameter.successRateStdevFactor"></a>

- *Type:* typing.Union[int, float]

This factor is used to determine the ejection threshold for success rate outlier ejection.

The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#success_rate_stdev_factor ComputeRegionBackendService#success_rate_stdev_factor}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#create ComputeRegionBackendService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#delete ComputeRegionBackendService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#update ComputeRegionBackendService#update}.

---

##### `reset_affinity_cookie_ttl_sec` <a name="reset_affinity_cookie_ttl_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetAffinityCookieTtlSec"></a>

```python
def reset_affinity_cookie_ttl_sec() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_cdn_policy` <a name="reset_cdn_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetCdnPolicy"></a>

```python
def reset_cdn_policy() -> None
```

##### `reset_circuit_breakers` <a name="reset_circuit_breakers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetCircuitBreakers"></a>

```python
def reset_circuit_breakers() -> None
```

##### `reset_connection_draining_timeout_sec` <a name="reset_connection_draining_timeout_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetConnectionDrainingTimeoutSec"></a>

```python
def reset_connection_draining_timeout_sec() -> None
```

##### `reset_consistent_hash` <a name="reset_consistent_hash" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetConsistentHash"></a>

```python
def reset_consistent_hash() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_cdn` <a name="reset_enable_cdn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetEnableCdn"></a>

```python
def reset_enable_cdn() -> None
```

##### `reset_failover_policy` <a name="reset_failover_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetFailoverPolicy"></a>

```python
def reset_failover_policy() -> None
```

##### `reset_health_checks` <a name="reset_health_checks" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetHealthChecks"></a>

```python
def reset_health_checks() -> None
```

##### `reset_iap` <a name="reset_iap" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetIap"></a>

```python
def reset_iap() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_load_balancing_scheme` <a name="reset_load_balancing_scheme" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetLoadBalancingScheme"></a>

```python
def reset_load_balancing_scheme() -> None
```

##### `reset_locality_lb_policy` <a name="reset_locality_lb_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetLocalityLbPolicy"></a>

```python
def reset_locality_lb_policy() -> None
```

##### `reset_log_config` <a name="reset_log_config" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetLogConfig"></a>

```python
def reset_log_config() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_outlier_detection` <a name="reset_outlier_detection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetOutlierDetection"></a>

```python
def reset_outlier_detection() -> None
```

##### `reset_port_name` <a name="reset_port_name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetPortName"></a>

```python
def reset_port_name() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_session_affinity` <a name="reset_session_affinity" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetSessionAffinity"></a>

```python
def reset_session_affinity() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timeout_sec` <a name="reset_timeout_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.resetTimeoutSec"></a>

```python
def reset_timeout_sec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeRegionBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeRegionBackendService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionBackendService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList">ComputeRegionBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.cdnPolicy">cdn_policy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference">ComputeRegionBackendServiceCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.circuitBreakers">circuit_breakers</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference">ComputeRegionBackendServiceCircuitBreakersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.consistentHash">consistent_hash</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference">ComputeRegionBackendServiceConsistentHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.failoverPolicy">failover_policy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference">ComputeRegionBackendServiceFailoverPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference">ComputeRegionBackendServiceIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference">ComputeRegionBackendServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.outlierDetection">outlier_detection</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference">ComputeRegionBackendServiceOutlierDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference">ComputeRegionBackendServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.affinityCookieTtlSecInput">affinity_cookie_ttl_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.backendInput">backend_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend">ComputeRegionBackendServiceBackend</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.cdnPolicyInput">cdn_policy_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.circuitBreakersInput">circuit_breakers_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.connectionDrainingTimeoutSecInput">connection_draining_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.consistentHashInput">consistent_hash_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.enableCdnInput">enable_cdn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.failoverPolicyInput">failover_policy_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.healthChecksInput">health_checks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.iapInput">iap_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.loadBalancingSchemeInput">load_balancing_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.localityLbPolicyInput">locality_lb_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.logConfigInput">log_config_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.outlierDetectionInput">outlier_detection_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.portNameInput">port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.sessionAffinityInput">session_affinity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeoutSecInput">timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts">ComputeRegionBackendServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.affinityCookieTtlSec">affinity_cookie_ttl_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.connectionDrainingTimeoutSec">connection_draining_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.enableCdn">enable_cdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.healthChecks">health_checks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.localityLbPolicy">locality_lb_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.portName">port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.backend"></a>

```python
backend: ComputeRegionBackendServiceBackendList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList">ComputeRegionBackendServiceBackendList</a>

---

##### `cdn_policy`<sup>Required</sup> <a name="cdn_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.cdnPolicy"></a>

```python
cdn_policy: ComputeRegionBackendServiceCdnPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference">ComputeRegionBackendServiceCdnPolicyOutputReference</a>

---

##### `circuit_breakers`<sup>Required</sup> <a name="circuit_breakers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.circuitBreakers"></a>

```python
circuit_breakers: ComputeRegionBackendServiceCircuitBreakersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference">ComputeRegionBackendServiceCircuitBreakersOutputReference</a>

---

##### `consistent_hash`<sup>Required</sup> <a name="consistent_hash" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.consistentHash"></a>

```python
consistent_hash: ComputeRegionBackendServiceConsistentHashOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference">ComputeRegionBackendServiceConsistentHashOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `failover_policy`<sup>Required</sup> <a name="failover_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.failoverPolicy"></a>

```python
failover_policy: ComputeRegionBackendServiceFailoverPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference">ComputeRegionBackendServiceFailoverPolicyOutputReference</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `iap`<sup>Required</sup> <a name="iap" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.iap"></a>

```python
iap: ComputeRegionBackendServiceIapOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference">ComputeRegionBackendServiceIapOutputReference</a>

---

##### `log_config`<sup>Required</sup> <a name="log_config" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.logConfig"></a>

```python
log_config: ComputeRegionBackendServiceLogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference">ComputeRegionBackendServiceLogConfigOutputReference</a>

---

##### `outlier_detection`<sup>Required</sup> <a name="outlier_detection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.outlierDetection"></a>

```python
outlier_detection: ComputeRegionBackendServiceOutlierDetectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference">ComputeRegionBackendServiceOutlierDetectionOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeouts"></a>

```python
timeouts: ComputeRegionBackendServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference">ComputeRegionBackendServiceTimeoutsOutputReference</a>

---

##### `affinity_cookie_ttl_sec_input`<sup>Optional</sup> <a name="affinity_cookie_ttl_sec_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.affinityCookieTtlSecInput"></a>

```python
affinity_cookie_ttl_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.backendInput"></a>

```python
backend_input: typing.Union[IResolvable, typing.List[ComputeRegionBackendServiceBackend]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend">ComputeRegionBackendServiceBackend</a>]]

---

##### `cdn_policy_input`<sup>Optional</sup> <a name="cdn_policy_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.cdnPolicyInput"></a>

```python
cdn_policy_input: ComputeRegionBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a>

---

##### `circuit_breakers_input`<sup>Optional</sup> <a name="circuit_breakers_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.circuitBreakersInput"></a>

```python
circuit_breakers_input: ComputeRegionBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a>

---

##### `connection_draining_timeout_sec_input`<sup>Optional</sup> <a name="connection_draining_timeout_sec_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.connectionDrainingTimeoutSecInput"></a>

```python
connection_draining_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consistent_hash_input`<sup>Optional</sup> <a name="consistent_hash_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.consistentHashInput"></a>

```python
consistent_hash_input: ComputeRegionBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_cdn_input`<sup>Optional</sup> <a name="enable_cdn_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.enableCdnInput"></a>

```python
enable_cdn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failover_policy_input`<sup>Optional</sup> <a name="failover_policy_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.failoverPolicyInput"></a>

```python
failover_policy_input: ComputeRegionBackendServiceFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a>

---

##### `health_checks_input`<sup>Optional</sup> <a name="health_checks_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.healthChecksInput"></a>

```python
health_checks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `iap_input`<sup>Optional</sup> <a name="iap_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.iapInput"></a>

```python
iap_input: ComputeRegionBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancing_scheme_input`<sup>Optional</sup> <a name="load_balancing_scheme_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.loadBalancingSchemeInput"></a>

```python
load_balancing_scheme_input: str
```

- *Type:* str

---

##### `locality_lb_policy_input`<sup>Optional</sup> <a name="locality_lb_policy_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.localityLbPolicyInput"></a>

```python
locality_lb_policy_input: str
```

- *Type:* str

---

##### `log_config_input`<sup>Optional</sup> <a name="log_config_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.logConfigInput"></a>

```python
log_config_input: ComputeRegionBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `outlier_detection_input`<sup>Optional</sup> <a name="outlier_detection_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.outlierDetectionInput"></a>

```python
outlier_detection_input: ComputeRegionBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a>

---

##### `port_name_input`<sup>Optional</sup> <a name="port_name_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.portNameInput"></a>

```python
port_name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `session_affinity_input`<sup>Optional</sup> <a name="session_affinity_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.sessionAffinityInput"></a>

```python
session_affinity_input: str
```

- *Type:* str

---

##### `timeout_sec_input`<sup>Optional</sup> <a name="timeout_sec_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeoutSecInput"></a>

```python
timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeRegionBackendServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts">ComputeRegionBackendServiceTimeouts</a>]

---

##### `affinity_cookie_ttl_sec`<sup>Required</sup> <a name="affinity_cookie_ttl_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.affinityCookieTtlSec"></a>

```python
affinity_cookie_ttl_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_draining_timeout_sec`<sup>Required</sup> <a name="connection_draining_timeout_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.connectionDrainingTimeoutSec"></a>

```python
connection_draining_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_cdn`<sup>Required</sup> <a name="enable_cdn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.enableCdn"></a>

```python
enable_cdn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_checks`<sup>Required</sup> <a name="health_checks" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.healthChecks"></a>

```python
health_checks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

---

##### `locality_lb_policy`<sup>Required</sup> <a name="locality_lb_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.localityLbPolicy"></a>

```python
locality_lb_policy: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `port_name`<sup>Required</sup> <a name="port_name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.portName"></a>

```python
port_name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `session_affinity`<sup>Required</sup> <a name="session_affinity" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

---

##### `timeout_sec`<sup>Required</sup> <a name="timeout_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.timeoutSec"></a>

```python
timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionBackendServiceBackend <a name="ComputeRegionBackendServiceBackend" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceBackend(
  group: str,
  balancing_mode: str = None,
  capacity_scaler: typing.Union[int, float] = None,
  description: str = None,
  failover: typing.Union[bool, IResolvable] = None,
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
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.group">group</a></code> | <code>str</code> | The fully-qualified URL of an Instance Group or Network Endpoint Group resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.balancingMode">balancing_mode</a></code> | <code>str</code> | Specifies the balancing mode for this backend. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.capacityScaler">capacity_scaler</a></code> | <code>typing.Union[int, float]</code> | A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.failover">failover</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This field designates whether this is a failover backend. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | The max number of simultaneous connections for the group. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxConnectionsPerEndpoint">max_connections_per_endpoint</a></code> | <code>typing.Union[int, float]</code> | The max number of simultaneous connections that a single backend network endpoint can handle. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxConnectionsPerInstance">max_connections_per_instance</a></code> | <code>typing.Union[int, float]</code> | The max number of simultaneous connections that a single backend instance can handle. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | The max requests per second (RPS) of the group. Cannot be set for INTERNAL backend services. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxRatePerEndpoint">max_rate_per_endpoint</a></code> | <code>typing.Union[int, float]</code> | The max requests per second (RPS) that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxRatePerInstance">max_rate_per_instance</a></code> | <code>typing.Union[int, float]</code> | The max requests per second (RPS) that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxUtilization">max_utilization</a></code> | <code>typing.Union[int, float]</code> | Used when balancingMode is UTILIZATION. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.group"></a>

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

When the 'load_balancing_scheme' is INTERNAL, only instance groups
are supported.

Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#group ComputeRegionBackendService#group}

---

##### `balancing_mode`<sup>Optional</sup> <a name="balancing_mode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.balancingMode"></a>

```python
balancing_mode: str
```

- *Type:* str

Specifies the balancing mode for this backend.

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "CONNECTION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#balancing_mode ComputeRegionBackendService#balancing_mode}

---

##### `capacity_scaler`<sup>Optional</sup> <a name="capacity_scaler" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.capacityScaler"></a>

```python
capacity_scaler: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION).

~>**NOTE**: This field cannot be set for
INTERNAL region backend services (default loadBalancingScheme),
but is required for non-INTERNAL backend service. The total
capacity_scaler for all backends must be non-zero.

A setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#capacity_scaler ComputeRegionBackendService#capacity_scaler}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#description ComputeRegionBackendService#description}

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.failover"></a>

```python
failover: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This field designates whether this is a failover backend.

More
than one failover backend can be configured for a given RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#failover ComputeRegionBackendService#failover}

---

##### `max_connections`<sup>Optional</sup> <a name="max_connections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max number of simultaneous connections for the group.

Can
be used with either CONNECTION or UTILIZATION balancing modes.
Cannot be set for INTERNAL backend services.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_connections ComputeRegionBackendService#max_connections}

---

##### `max_connections_per_endpoint`<sup>Optional</sup> <a name="max_connections_per_endpoint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxConnectionsPerEndpoint"></a>

```python
max_connections_per_endpoint: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max number of simultaneous connections that a single backend network endpoint can handle. Cannot be set for INTERNAL backend services.

This is used to calculate the capacity of the group. Can be
used in either CONNECTION or UTILIZATION balancing modes. For
CONNECTION mode, either maxConnections or
maxConnectionsPerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_connections_per_endpoint ComputeRegionBackendService#max_connections_per_endpoint}

---

##### `max_connections_per_instance`<sup>Optional</sup> <a name="max_connections_per_instance" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxConnectionsPerInstance"></a>

```python
max_connections_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max number of simultaneous connections that a single backend instance can handle. Cannot be set for INTERNAL backend services.

This is used to calculate the capacity of the group.
Can be used in either CONNECTION or UTILIZATION balancing modes.
For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_connections_per_instance ComputeRegionBackendService#max_connections_per_instance}

---

##### `max_rate`<sup>Optional</sup> <a name="max_rate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max requests per second (RPS) of the group. Cannot be set for INTERNAL backend services.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. Either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_rate ComputeRegionBackendService#max_rate}

---

##### `max_rate_per_endpoint`<sup>Optional</sup> <a name="max_rate_per_endpoint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxRatePerEndpoint"></a>

```python
max_rate_per_endpoint: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max requests per second (RPS) that a single backend network endpoint can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set. Cannot be set
for INTERNAL backend services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_rate_per_endpoint ComputeRegionBackendService#max_rate_per_endpoint}

---

##### `max_rate_per_instance`<sup>Optional</sup> <a name="max_rate_per_instance" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxRatePerInstance"></a>

```python
max_rate_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max requests per second (RPS) that a single backend instance can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set. Cannot be set
for INTERNAL backend services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_rate_per_instance ComputeRegionBackendService#max_rate_per_instance}

---

##### `max_utilization`<sup>Optional</sup> <a name="max_utilization" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend.property.maxUtilization"></a>

```python
max_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Used when balancingMode is UTILIZATION.

This ratio defines the
CPU utilization target for the group. Valid range is [0.0, 1.0].
Cannot be set for INTERNAL backend services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_utilization ComputeRegionBackendService#max_utilization}

---

### ComputeRegionBackendServiceCdnPolicy <a name="ComputeRegionBackendServiceCdnPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy(
  cache_key_policy: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy = None,
  cache_mode: str = None,
  client_ttl: typing.Union[int, float] = None,
  default_ttl: typing.Union[int, float] = None,
  max_ttl: typing.Union[int, float] = None,
  negative_caching: typing.Union[bool, IResolvable] = None,
  negative_caching_policy: typing.Union[IResolvable, typing.List[ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy]] = None,
  serve_while_stale: typing.Union[int, float] = None,
  signed_url_cache_max_age_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.cacheKeyPolicy">cache_key_policy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.cacheMode">cache_mode</a></code> | <code>str</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.clientTtl">client_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.negativeCaching">negative_caching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.negativeCachingPolicy">negative_caching_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>]]</code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.serveWhileStale">serve_while_stale</a></code> | <code>typing.Union[int, float]</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec">signed_url_cache_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s). |

---

##### `cache_key_policy`<sup>Optional</sup> <a name="cache_key_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.cacheKeyPolicy"></a>

```python
cache_key_policy: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#cache_key_policy ComputeRegionBackendService#cache_key_policy}

---

##### `cache_mode`<sup>Optional</sup> <a name="cache_mode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.cacheMode"></a>

```python
cache_mode: str
```

- *Type:* str

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#cache_mode ComputeRegionBackendService#cache_mode}

---

##### `client_ttl`<sup>Optional</sup> <a name="client_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.clientTtl"></a>

```python
client_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#client_ttl ComputeRegionBackendService#client_ttl}

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#default_ttl ComputeRegionBackendService#default_ttl}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_ttl ComputeRegionBackendService#max_ttl}

---

##### `negative_caching`<sup>Optional</sup> <a name="negative_caching" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.negativeCaching"></a>

```python
negative_caching: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#negative_caching ComputeRegionBackendService#negative_caching}

---

##### `negative_caching_policy`<sup>Optional</sup> <a name="negative_caching_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.negativeCachingPolicy"></a>

```python
negative_caching_policy: typing.Union[IResolvable, typing.List[ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>]]

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#negative_caching_policy ComputeRegionBackendService#negative_caching_policy}

---

##### `serve_while_stale`<sup>Optional</sup> <a name="serve_while_stale" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.serveWhileStale"></a>

```python
serve_while_stale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#serve_while_stale ComputeRegionBackendService#serve_while_stale}

---

##### `signed_url_cache_max_age_sec`<sup>Optional</sup> <a name="signed_url_cache_max_age_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#signed_url_cache_max_age_sec ComputeRegionBackendService#signed_url_cache_max_age_sec}

---

### ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy <a name="ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy(
  include_host: typing.Union[bool, IResolvable] = None,
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
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost">include_host</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies">include_named_cookies</a></code> | <code>typing.List[str]</code> | Names of cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol">include_protocol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, http and https requests will be cached separately. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString">include_query_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist">query_string_blacklist</a></code> | <code>typing.List[str]</code> | Names of query string parameters to exclude in cache keys. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">query_string_whitelist</a></code> | <code>typing.List[str]</code> | Names of query string parameters to include in cache keys. |

---

##### `include_host`<sup>Optional</sup> <a name="include_host" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost"></a>

```python
include_host: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#include_host ComputeRegionBackendService#include_host}

---

##### `include_named_cookies`<sup>Optional</sup> <a name="include_named_cookies" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies"></a>

```python
include_named_cookies: typing.List[str]
```

- *Type:* typing.List[str]

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#include_named_cookies ComputeRegionBackendService#include_named_cookies}

---

##### `include_protocol`<sup>Optional</sup> <a name="include_protocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```python
include_protocol: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#include_protocol ComputeRegionBackendService#include_protocol}

---

##### `include_query_string`<sup>Optional</sup> <a name="include_query_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString"></a>

```python
include_query_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#include_query_string ComputeRegionBackendService#include_query_string}

---

##### `query_string_blacklist`<sup>Optional</sup> <a name="query_string_blacklist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist"></a>

```python
query_string_blacklist: typing.List[str]
```

- *Type:* typing.List[str]

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#query_string_blacklist ComputeRegionBackendService#query_string_blacklist}

---

##### `query_string_whitelist`<sup>Optional</sup> <a name="query_string_whitelist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```python
query_string_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#query_string_whitelist ComputeRegionBackendService#query_string_whitelist}

---

### ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy <a name="ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy(
  code: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.code">code</a></code> | <code>typing.Union[int, float]</code> | The HTTP status code to define a TTL against. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#code ComputeRegionBackendService#code}

---

### ComputeRegionBackendServiceCircuitBreakers <a name="ComputeRegionBackendServiceCircuitBreakers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers(
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
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | The maximum number of connections to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxPendingRequests">max_pending_requests</a></code> | <code>typing.Union[int, float]</code> | The maximum number of pending requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxRequests">max_requests</a></code> | <code>typing.Union[int, float]</code> | The maximum number of parallel requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxRequestsPerConnection">max_requests_per_connection</a></code> | <code>typing.Union[int, float]</code> | Maximum requests for a single backend connection. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of parallel retries to the backend cluster. Defaults to 3. |

---

##### `max_connections`<sup>Optional</sup> <a name="max_connections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_connections ComputeRegionBackendService#max_connections}

---

##### `max_pending_requests`<sup>Optional</sup> <a name="max_pending_requests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxPendingRequests"></a>

```python
max_pending_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_pending_requests ComputeRegionBackendService#max_pending_requests}

---

##### `max_requests`<sup>Optional</sup> <a name="max_requests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxRequests"></a>

```python
max_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_requests ComputeRegionBackendService#max_requests}

---

##### `max_requests_per_connection`<sup>Optional</sup> <a name="max_requests_per_connection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxRequestsPerConnection"></a>

```python
max_requests_per_connection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_requests_per_connection ComputeRegionBackendService#max_requests_per_connection}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_retries ComputeRegionBackendService#max_retries}

---

### ComputeRegionBackendServiceConfig <a name="ComputeRegionBackendServiceConfig" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  affinity_cookie_ttl_sec: typing.Union[int, float] = None,
  backend: typing.Union[IResolvable, typing.List[ComputeRegionBackendServiceBackend]] = None,
  cdn_policy: ComputeRegionBackendServiceCdnPolicy = None,
  circuit_breakers: ComputeRegionBackendServiceCircuitBreakers = None,
  connection_draining_timeout_sec: typing.Union[int, float] = None,
  consistent_hash: ComputeRegionBackendServiceConsistentHash = None,
  description: str = None,
  enable_cdn: typing.Union[bool, IResolvable] = None,
  failover_policy: ComputeRegionBackendServiceFailoverPolicy = None,
  health_checks: typing.List[str] = None,
  iap: ComputeRegionBackendServiceIap = None,
  id: str = None,
  load_balancing_scheme: str = None,
  locality_lb_policy: str = None,
  log_config: ComputeRegionBackendServiceLogConfig = None,
  network: str = None,
  outlier_detection: ComputeRegionBackendServiceOutlierDetection = None,
  port_name: str = None,
  project: str = None,
  protocol: str = None,
  region: str = None,
  session_affinity: str = None,
  timeouts: ComputeRegionBackendServiceTimeouts = None,
  timeout_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.affinityCookieTtlSec">affinity_cookie_ttl_sec</a></code> | <code>typing.Union[int, float]</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.backend">backend</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend">ComputeRegionBackendServiceBackend</a>]]</code> | backend block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.cdnPolicy">cdn_policy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.circuitBreakers">circuit_breakers</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.connectionDrainingTimeoutSec">connection_draining_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.consistentHash">consistent_hash</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.enableCdn">enable_cdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enable Cloud CDN for this RegionBackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.failoverPolicy">failover_policy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a></code> | failover_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.healthChecks">health_checks</a></code> | <code>typing.List[str]</code> | The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#id ComputeRegionBackendService#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | Indicates what kind of load balancing this regional backend service will be used for. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.localityLbPolicy">locality_lb_policy</a></code> | <code>str</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.logConfig">log_config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.network">network</a></code> | <code>str</code> | The URL of the network to which this backend service belongs. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.outlierDetection">outlier_detection</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.portName">port_name</a></code> | <code>str</code> | A named port on a backend instance group representing the port for communication to the backend VMs in that group. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#project ComputeRegionBackendService#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.protocol">protocol</a></code> | <code>str</code> | The protocol this RegionBackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created backend service should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts">ComputeRegionBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.timeoutSec">timeout_sec</a></code> | <code>typing.Union[int, float]</code> | How many seconds to wait for the backend before considering it a failed request. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#name ComputeRegionBackendService#name}

---

##### `affinity_cookie_ttl_sec`<sup>Optional</sup> <a name="affinity_cookie_ttl_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.affinityCookieTtlSec"></a>

```python
affinity_cookie_ttl_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#affinity_cookie_ttl_sec ComputeRegionBackendService#affinity_cookie_ttl_sec}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.backend"></a>

```python
backend: typing.Union[IResolvable, typing.List[ComputeRegionBackendServiceBackend]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend">ComputeRegionBackendServiceBackend</a>]]

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#backend ComputeRegionBackendService#backend}

---

##### `cdn_policy`<sup>Optional</sup> <a name="cdn_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.cdnPolicy"></a>

```python
cdn_policy: ComputeRegionBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#cdn_policy ComputeRegionBackendService#cdn_policy}

---

##### `circuit_breakers`<sup>Optional</sup> <a name="circuit_breakers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.circuitBreakers"></a>

```python
circuit_breakers: ComputeRegionBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#circuit_breakers ComputeRegionBackendService#circuit_breakers}

---

##### `connection_draining_timeout_sec`<sup>Optional</sup> <a name="connection_draining_timeout_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.connectionDrainingTimeoutSec"></a>

```python
connection_draining_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#connection_draining_timeout_sec ComputeRegionBackendService#connection_draining_timeout_sec}

---

##### `consistent_hash`<sup>Optional</sup> <a name="consistent_hash" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.consistentHash"></a>

```python
consistent_hash: ComputeRegionBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#consistent_hash ComputeRegionBackendService#consistent_hash}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#description ComputeRegionBackendService#description}

---

##### `enable_cdn`<sup>Optional</sup> <a name="enable_cdn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.enableCdn"></a>

```python
enable_cdn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enable Cloud CDN for this RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#enable_cdn ComputeRegionBackendService#enable_cdn}

---

##### `failover_policy`<sup>Optional</sup> <a name="failover_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.failoverPolicy"></a>

```python
failover_policy: ComputeRegionBackendServiceFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a>

failover_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#failover_policy ComputeRegionBackendService#failover_policy}

---

##### `health_checks`<sup>Optional</sup> <a name="health_checks" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.healthChecks"></a>

```python
health_checks: typing.List[str]
```

- *Type:* typing.List[str]

The set of URLs to HealthCheck resources for health checking this RegionBackendService. Currently at most one health check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#health_checks ComputeRegionBackendService#health_checks}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.iap"></a>

```python
iap: ComputeRegionBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#iap ComputeRegionBackendService#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#id ComputeRegionBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancing_scheme`<sup>Optional</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

Indicates what kind of load balancing this regional backend service will be used for.

A backend service created for one type of load
balancing cannot be used with the other(s). For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "INTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#load_balancing_scheme ComputeRegionBackendService#load_balancing_scheme}

---

##### `locality_lb_policy`<sup>Optional</sup> <a name="locality_lb_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.localityLbPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#locality_lb_policy ComputeRegionBackendService#locality_lb_policy}

---

##### `log_config`<sup>Optional</sup> <a name="log_config" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.logConfig"></a>

```python
log_config: ComputeRegionBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#log_config ComputeRegionBackendService#log_config}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The URL of the network to which this backend service belongs.

This field can only be specified when the load balancing scheme is set to INTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#network ComputeRegionBackendService#network}

---

##### `outlier_detection`<sup>Optional</sup> <a name="outlier_detection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.outlierDetection"></a>

```python
outlier_detection: ComputeRegionBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#outlier_detection ComputeRegionBackendService#outlier_detection}

---

##### `port_name`<sup>Optional</sup> <a name="port_name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.portName"></a>

```python
port_name: str
```

- *Type:* str

A named port on a backend instance group representing the port for communication to the backend VMs in that group.

Required when the
loadBalancingScheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED, or INTERNAL_SELF_MANAGED
and the backends are instance groups. The named port must be defined on each
backend instance group. This parameter has no meaning if the backends are NEGs. API sets a
default of "http" if not given.
Must be omitted when the loadBalancingScheme is INTERNAL (Internal TCP/UDP Load Balancing).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#port_name ComputeRegionBackendService#port_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#project ComputeRegionBackendService#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The protocol this RegionBackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. Possible values: ["HTTP", "HTTPS", "HTTP2", "SSL", "TCP", "UDP", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#protocol ComputeRegionBackendService#protocol}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created backend service should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#region ComputeRegionBackendService#region}

---

##### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "CLIENT_IP_NO_DESTINATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#session_affinity ComputeRegionBackendService#session_affinity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionBackendServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts">ComputeRegionBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#timeouts ComputeRegionBackendService#timeouts}

---

##### `timeout_sec`<sup>Optional</sup> <a name="timeout_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConfig.property.timeoutSec"></a>

```python
timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many seconds to wait for the backend before considering it a failed request.

Default is 30 seconds. Valid range is [1, 86400].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#timeout_sec ComputeRegionBackendService#timeout_sec}

---

### ComputeRegionBackendServiceConsistentHash <a name="ComputeRegionBackendServiceConsistentHash" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceConsistentHash(
  http_cookie: ComputeRegionBackendServiceConsistentHashHttpCookie = None,
  http_header_name: str = None,
  minimum_ring_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.property.httpCookie">http_cookie</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | http_cookie block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.property.httpHeaderName">http_header_name</a></code> | <code>str</code> | The hash based on the value of the specified header field. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.property.minimumRingSize">minimum_ring_size</a></code> | <code>typing.Union[int, float]</code> | The minimum number of virtual nodes to use for the hash ring. |

---

##### `http_cookie`<sup>Optional</sup> <a name="http_cookie" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.property.httpCookie"></a>

```python
http_cookie: ComputeRegionBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#http_cookie ComputeRegionBackendService#http_cookie}

---

##### `http_header_name`<sup>Optional</sup> <a name="http_header_name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.property.httpHeaderName"></a>

```python
http_header_name: str
```

- *Type:* str

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#http_header_name ComputeRegionBackendService#http_header_name}

---

##### `minimum_ring_size`<sup>Optional</sup> <a name="minimum_ring_size" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash.property.minimumRingSize"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#minimum_ring_size ComputeRegionBackendService#minimum_ring_size}

---

### ComputeRegionBackendServiceConsistentHashHttpCookie <a name="ComputeRegionBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie(
  name: str = None,
  path: str = None,
  ttl: ComputeRegionBackendServiceConsistentHashHttpCookieTtl = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.property.name">name</a></code> | <code>str</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.property.path">path</a></code> | <code>str</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | ttl block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#name ComputeRegionBackendService#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.property.path"></a>

```python
path: str
```

- *Type:* str

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#path ComputeRegionBackendService#path}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie.property.ttl"></a>

```python
ttl: ComputeRegionBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#ttl ComputeRegionBackendService#ttl}

---

### ComputeRegionBackendServiceConsistentHashHttpCookieTtl <a name="ComputeRegionBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#seconds ComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#nanos ComputeRegionBackendService#nanos}

---

### ComputeRegionBackendServiceFailoverPolicy <a name="ComputeRegionBackendServiceFailoverPolicy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy(
  disable_connection_drain_on_failover: typing.Union[bool, IResolvable] = None,
  drop_traffic_if_unhealthy: typing.Union[bool, IResolvable] = None,
  failover_ratio: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.property.disableConnectionDrainOnFailover">disable_connection_drain_on_failover</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | On failover or failback, this field indicates whether connection drain will be honored. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.property.dropTrafficIfUnhealthy">drop_traffic_if_unhealthy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This option is used only when no healthy VMs are detected in the primary and backup instance groups. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.property.failoverRatio">failover_ratio</a></code> | <code>typing.Union[int, float]</code> | The value of the field must be in [0, 1]. |

---

##### `disable_connection_drain_on_failover`<sup>Optional</sup> <a name="disable_connection_drain_on_failover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.property.disableConnectionDrainOnFailover"></a>

```python
disable_connection_drain_on_failover: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

On failover or failback, this field indicates whether connection drain will be honored.

Setting this to true has the following effect: connections
to the old active pool are not drained. Connections to the new active pool
use the timeout of 10 min (currently fixed). Setting to false has the
following effect: both old and new connections will have a drain timeout
of 10 min.
This can be set to true only if the protocol is TCP.
The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#disable_connection_drain_on_failover ComputeRegionBackendService#disable_connection_drain_on_failover}

---

##### `drop_traffic_if_unhealthy`<sup>Optional</sup> <a name="drop_traffic_if_unhealthy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.property.dropTrafficIfUnhealthy"></a>

```python
drop_traffic_if_unhealthy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This option is used only when no healthy VMs are detected in the primary and backup instance groups.

When set to true, traffic is dropped. When
set to false, new connections are sent across all VMs in the primary group.
The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#drop_traffic_if_unhealthy ComputeRegionBackendService#drop_traffic_if_unhealthy}

---

##### `failover_ratio`<sup>Optional</sup> <a name="failover_ratio" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy.property.failoverRatio"></a>

```python
failover_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The value of the field must be in [0, 1].

If the ratio of the healthy
VMs in the primary backend is at or below this number, traffic arriving
at the load-balanced IP will be directed to the failover backend.
In case where 'failoverRatio' is not set or all the VMs in the backup
backend are unhealthy, the traffic will be directed back to the primary
backend in the "force" mode, where traffic will be spread to the healthy
VMs with the best effort, or to all VMs when no VM is healthy.
This field is only used with l4 load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#failover_ratio ComputeRegionBackendService#failover_ratio}

---

### ComputeRegionBackendServiceIap <a name="ComputeRegionBackendServiceIap" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceIap(
  oauth2_client_id: str,
  oauth2_client_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap.property.oauth2ClientId">oauth2_client_id</a></code> | <code>str</code> | OAuth2 Client ID for IAP. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap.property.oauth2ClientSecret">oauth2_client_secret</a></code> | <code>str</code> | OAuth2 Client Secret for IAP. |

---

##### `oauth2_client_id`<sup>Required</sup> <a name="oauth2_client_id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap.property.oauth2ClientId"></a>

```python
oauth2_client_id: str
```

- *Type:* str

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#oauth2_client_id ComputeRegionBackendService#oauth2_client_id}

---

##### `oauth2_client_secret`<sup>Required</sup> <a name="oauth2_client_secret" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap.property.oauth2ClientSecret"></a>

```python
oauth2_client_secret: str
```

- *Type:* str

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#oauth2_client_secret ComputeRegionBackendService#oauth2_client_secret}

---

### ComputeRegionBackendServiceLogConfig <a name="ComputeRegionBackendServiceLogConfig" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceLogConfig(
  enable: typing.Union[bool, IResolvable] = None,
  sample_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to enable logging for the load balancer traffic served by this backend service. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | This field can only be specified if logging is enabled for this backend service. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#enable ComputeRegionBackendService#enable}

---

##### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#sample_rate ComputeRegionBackendService#sample_rate}

---

### ComputeRegionBackendServiceOutlierDetection <a name="ComputeRegionBackendServiceOutlierDetection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection(
  base_ejection_time: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime = None,
  consecutive_errors: typing.Union[int, float] = None,
  consecutive_gateway_failure: typing.Union[int, float] = None,
  enforcing_consecutive_errors: typing.Union[int, float] = None,
  enforcing_consecutive_gateway_failure: typing.Union[int, float] = None,
  enforcing_success_rate: typing.Union[int, float] = None,
  interval: ComputeRegionBackendServiceOutlierDetectionInterval = None,
  max_ejection_percent: typing.Union[int, float] = None,
  success_rate_minimum_hosts: typing.Union[int, float] = None,
  success_rate_request_volume: typing.Union[int, float] = None,
  success_rate_stdev_factor: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.baseEjectionTime">base_ejection_time</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | base_ejection_time block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.consecutiveErrors">consecutive_errors</a></code> | <code>typing.Union[int, float]</code> | Number of errors before a host is ejected from the connection pool. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.consecutiveGatewayFailure">consecutive_gateway_failure</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveErrors">enforcing_consecutive_errors</a></code> | <code>typing.Union[int, float]</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure">enforcing_consecutive_gateway_failure</a></code> | <code>typing.Union[int, float]</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.enforcingSuccessRate">enforcing_success_rate</a></code> | <code>typing.Union[int, float]</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.maxEjectionPercent">max_ejection_percent</a></code> | <code>typing.Union[int, float]</code> | Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.successRateMinimumHosts">success_rate_minimum_hosts</a></code> | <code>typing.Union[int, float]</code> | The number of hosts in a cluster that must have enough request volume to detect success rate outliers. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.successRateRequestVolume">success_rate_request_volume</a></code> | <code>typing.Union[int, float]</code> | The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.successRateStdevFactor">success_rate_stdev_factor</a></code> | <code>typing.Union[int, float]</code> | This factor is used to determine the ejection threshold for success rate outlier ejection. |

---

##### `base_ejection_time`<sup>Optional</sup> <a name="base_ejection_time" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.baseEjectionTime"></a>

```python
base_ejection_time: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#base_ejection_time ComputeRegionBackendService#base_ejection_time}

---

##### `consecutive_errors`<sup>Optional</sup> <a name="consecutive_errors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.consecutiveErrors"></a>

```python
consecutive_errors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#consecutive_errors ComputeRegionBackendService#consecutive_errors}

---

##### `consecutive_gateway_failure`<sup>Optional</sup> <a name="consecutive_gateway_failure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.consecutiveGatewayFailure"></a>

```python
consecutive_gateway_failure: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#consecutive_gateway_failure ComputeRegionBackendService#consecutive_gateway_failure}

---

##### `enforcing_consecutive_errors`<sup>Optional</sup> <a name="enforcing_consecutive_errors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveErrors"></a>

```python
enforcing_consecutive_errors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#enforcing_consecutive_errors ComputeRegionBackendService#enforcing_consecutive_errors}

---

##### `enforcing_consecutive_gateway_failure`<sup>Optional</sup> <a name="enforcing_consecutive_gateway_failure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure"></a>

```python
enforcing_consecutive_gateway_failure: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#enforcing_consecutive_gateway_failure ComputeRegionBackendService#enforcing_consecutive_gateway_failure}

---

##### `enforcing_success_rate`<sup>Optional</sup> <a name="enforcing_success_rate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.enforcingSuccessRate"></a>

```python
enforcing_success_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#enforcing_success_rate ComputeRegionBackendService#enforcing_success_rate}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.interval"></a>

```python
interval: ComputeRegionBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#interval ComputeRegionBackendService#interval}

---

##### `max_ejection_percent`<sup>Optional</sup> <a name="max_ejection_percent" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.maxEjectionPercent"></a>

```python
max_ejection_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#max_ejection_percent ComputeRegionBackendService#max_ejection_percent}

---

##### `success_rate_minimum_hosts`<sup>Optional</sup> <a name="success_rate_minimum_hosts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.successRateMinimumHosts"></a>

```python
success_rate_minimum_hosts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#success_rate_minimum_hosts ComputeRegionBackendService#success_rate_minimum_hosts}

---

##### `success_rate_request_volume`<sup>Optional</sup> <a name="success_rate_request_volume" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.successRateRequestVolume"></a>

```python
success_rate_request_volume: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#success_rate_request_volume ComputeRegionBackendService#success_rate_request_volume}

---

##### `success_rate_stdev_factor`<sup>Optional</sup> <a name="success_rate_stdev_factor" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection.property.successRateStdevFactor"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#success_rate_stdev_factor ComputeRegionBackendService#success_rate_stdev_factor}

---

### ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime <a name="ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#seconds ComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#nanos ComputeRegionBackendService#nanos}

---

### ComputeRegionBackendServiceOutlierDetectionInterval <a name="ComputeRegionBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#seconds ComputeRegionBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#nanos ComputeRegionBackendService#nanos}

---

### ComputeRegionBackendServiceTimeouts <a name="ComputeRegionBackendServiceTimeouts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#create ComputeRegionBackendService#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#delete ComputeRegionBackendService#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#update ComputeRegionBackendService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#create ComputeRegionBackendService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#delete ComputeRegionBackendService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#update ComputeRegionBackendService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionBackendServiceBackendList <a name="ComputeRegionBackendServiceBackendList" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceBackendList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionBackendServiceBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend">ComputeRegionBackendServiceBackend</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionBackendServiceBackend]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend">ComputeRegionBackendServiceBackend</a>]]

---


### ComputeRegionBackendServiceBackendOutputReference <a name="ComputeRegionBackendServiceBackendOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetBalancingMode">reset_balancing_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetCapacityScaler">reset_capacity_scaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetFailover">reset_failover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxConnections">reset_max_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint">reset_max_connections_per_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance">reset_max_connections_per_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxRate">reset_max_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerEndpoint">reset_max_rate_per_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerInstance">reset_max_rate_per_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxUtilization">reset_max_utilization</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_balancing_mode` <a name="reset_balancing_mode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetBalancingMode"></a>

```python
def reset_balancing_mode() -> None
```

##### `reset_capacity_scaler` <a name="reset_capacity_scaler" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetCapacityScaler"></a>

```python
def reset_capacity_scaler() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_failover` <a name="reset_failover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetFailover"></a>

```python
def reset_failover() -> None
```

##### `reset_max_connections` <a name="reset_max_connections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxConnections"></a>

```python
def reset_max_connections() -> None
```

##### `reset_max_connections_per_endpoint` <a name="reset_max_connections_per_endpoint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint"></a>

```python
def reset_max_connections_per_endpoint() -> None
```

##### `reset_max_connections_per_instance` <a name="reset_max_connections_per_instance" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance"></a>

```python
def reset_max_connections_per_instance() -> None
```

##### `reset_max_rate` <a name="reset_max_rate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxRate"></a>

```python
def reset_max_rate() -> None
```

##### `reset_max_rate_per_endpoint` <a name="reset_max_rate_per_endpoint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerEndpoint"></a>

```python
def reset_max_rate_per_endpoint() -> None
```

##### `reset_max_rate_per_instance` <a name="reset_max_rate_per_instance" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxRatePerInstance"></a>

```python
def reset_max_rate_per_instance() -> None
```

##### `reset_max_utilization` <a name="reset_max_utilization" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.resetMaxUtilization"></a>

```python
def reset_max_utilization() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.balancingModeInput">balancing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.capacityScalerInput">capacity_scaler_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.failoverInput">failover_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsInput">max_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput">max_connections_per_endpoint_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput">max_connections_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRateInput">max_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpointInput">max_rate_per_endpoint_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstanceInput">max_rate_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxUtilizationInput">max_utilization_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.balancingMode">balancing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.capacityScaler">capacity_scaler</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.failover">failover</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">max_connections_per_endpoint</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">max_connections_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRate">max_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint">max_rate_per_endpoint</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance">max_rate_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxUtilization">max_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend">ComputeRegionBackendServiceBackend</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `balancing_mode_input`<sup>Optional</sup> <a name="balancing_mode_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.balancingModeInput"></a>

```python
balancing_mode_input: str
```

- *Type:* str

---

##### `capacity_scaler_input`<sup>Optional</sup> <a name="capacity_scaler_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.capacityScalerInput"></a>

```python
capacity_scaler_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `failover_input`<sup>Optional</sup> <a name="failover_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.failoverInput"></a>

```python
failover_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `max_connections_input`<sup>Optional</sup> <a name="max_connections_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsInput"></a>

```python
max_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections_per_endpoint_input`<sup>Optional</sup> <a name="max_connections_per_endpoint_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput"></a>

```python
max_connections_per_endpoint_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections_per_instance_input`<sup>Optional</sup> <a name="max_connections_per_instance_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput"></a>

```python
max_connections_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_input`<sup>Optional</sup> <a name="max_rate_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRateInput"></a>

```python
max_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_per_endpoint_input`<sup>Optional</sup> <a name="max_rate_per_endpoint_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpointInput"></a>

```python
max_rate_per_endpoint_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_per_instance_input`<sup>Optional</sup> <a name="max_rate_per_instance_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstanceInput"></a>

```python
max_rate_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_utilization_input`<sup>Optional</sup> <a name="max_utilization_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxUtilizationInput"></a>

```python
max_utilization_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `balancing_mode`<sup>Required</sup> <a name="balancing_mode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.balancingMode"></a>

```python
balancing_mode: str
```

- *Type:* str

---

##### `capacity_scaler`<sup>Required</sup> <a name="capacity_scaler" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.capacityScaler"></a>

```python
capacity_scaler: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.failover"></a>

```python
failover: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections_per_endpoint`<sup>Required</sup> <a name="max_connections_per_endpoint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```python
max_connections_per_endpoint: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections_per_instance`<sup>Required</sup> <a name="max_connections_per_instance" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```python
max_connections_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate`<sup>Required</sup> <a name="max_rate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRate"></a>

```python
max_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_per_endpoint`<sup>Required</sup> <a name="max_rate_per_endpoint" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```python
max_rate_per_endpoint: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_rate_per_instance`<sup>Required</sup> <a name="max_rate_per_instance" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```python
max_rate_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_utilization`<sup>Required</sup> <a name="max_utilization" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.maxUtilization"></a>

```python
max_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackendOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionBackendServiceBackend]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceBackend">ComputeRegionBackendServiceBackend</a>]

---


### ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost">reset_include_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies">reset_include_named_cookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">reset_include_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString">reset_include_query_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist">reset_query_string_blacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">reset_query_string_whitelist</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_host` <a name="reset_include_host" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost"></a>

```python
def reset_include_host() -> None
```

##### `reset_include_named_cookies` <a name="reset_include_named_cookies" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies"></a>

```python
def reset_include_named_cookies() -> None
```

##### `reset_include_protocol` <a name="reset_include_protocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```python
def reset_include_protocol() -> None
```

##### `reset_include_query_string` <a name="reset_include_query_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString"></a>

```python
def reset_include_query_string() -> None
```

##### `reset_query_string_blacklist` <a name="reset_query_string_blacklist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist"></a>

```python
def reset_query_string_blacklist() -> None
```

##### `reset_query_string_whitelist` <a name="reset_query_string_whitelist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```python
def reset_query_string_whitelist() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput">include_host_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput">include_named_cookies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">include_protocol_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput">include_query_string_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput">query_string_blacklist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">query_string_whitelist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">include_host</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">include_named_cookies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">include_protocol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">include_query_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">query_string_blacklist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">query_string_whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_host_input`<sup>Optional</sup> <a name="include_host_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput"></a>

```python
include_host_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_named_cookies_input`<sup>Optional</sup> <a name="include_named_cookies_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput"></a>

```python
include_named_cookies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_protocol_input`<sup>Optional</sup> <a name="include_protocol_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```python
include_protocol_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_query_string_input`<sup>Optional</sup> <a name="include_query_string_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput"></a>

```python
include_query_string_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_string_blacklist_input`<sup>Optional</sup> <a name="query_string_blacklist_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput"></a>

```python
query_string_blacklist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_whitelist_input`<sup>Optional</sup> <a name="query_string_whitelist_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```python
query_string_whitelist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_host`<sup>Required</sup> <a name="include_host" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```python
include_host: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_named_cookies`<sup>Required</sup> <a name="include_named_cookies" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```python
include_named_cookies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_protocol`<sup>Required</sup> <a name="include_protocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```python
include_protocol: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_query_string`<sup>Required</sup> <a name="include_query_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```python
include_query_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_string_blacklist`<sup>Required</sup> <a name="query_string_blacklist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```python
query_string_blacklist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_whitelist`<sup>Required</sup> <a name="query_string_whitelist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```python
query_string_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList <a name="ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>]]

---


### ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode">reset_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```python
def reset_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```python
code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>]

---


### ComputeRegionBackendServiceCdnPolicyOutputReference <a name="ComputeRegionBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy">put_cache_key_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy">put_negative_caching_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy">reset_cache_key_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheMode">reset_cache_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetClientTtl">reset_client_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCaching">reset_negative_caching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy">reset_negative_caching_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetServeWhileStale">reset_serve_while_stale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">reset_signed_url_cache_max_age_sec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cache_key_policy` <a name="put_cache_key_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```python
def put_cache_key_policy(
  include_host: typing.Union[bool, IResolvable] = None,
  include_named_cookies: typing.List[str] = None,
  include_protocol: typing.Union[bool, IResolvable] = None,
  include_query_string: typing.Union[bool, IResolvable] = None,
  query_string_blacklist: typing.List[str] = None,
  query_string_whitelist: typing.List[str] = None
) -> None
```

###### `include_host`<sup>Optional</sup> <a name="include_host" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.includeHost"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#include_host ComputeRegionBackendService#include_host}

---

###### `include_named_cookies`<sup>Optional</sup> <a name="include_named_cookies" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.includeNamedCookies"></a>

- *Type:* typing.List[str]

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#include_named_cookies ComputeRegionBackendService#include_named_cookies}

---

###### `include_protocol`<sup>Optional</sup> <a name="include_protocol" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.includeProtocol"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#include_protocol ComputeRegionBackendService#include_protocol}

---

###### `include_query_string`<sup>Optional</sup> <a name="include_query_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.includeQueryString"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#include_query_string ComputeRegionBackendService#include_query_string}

---

###### `query_string_blacklist`<sup>Optional</sup> <a name="query_string_blacklist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.queryStringBlacklist"></a>

- *Type:* typing.List[str]

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#query_string_blacklist ComputeRegionBackendService#query_string_blacklist}

---

###### `query_string_whitelist`<sup>Optional</sup> <a name="query_string_whitelist" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.queryStringWhitelist"></a>

- *Type:* typing.List[str]

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#query_string_whitelist ComputeRegionBackendService#query_string_whitelist}

---

##### `put_negative_caching_policy` <a name="put_negative_caching_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```python
def put_negative_caching_policy(
  value: typing.Union[IResolvable, typing.List[ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>]]

---

##### `reset_cache_key_policy` <a name="reset_cache_key_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```python
def reset_cache_key_policy() -> None
```

##### `reset_cache_mode` <a name="reset_cache_mode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetCacheMode"></a>

```python
def reset_cache_mode() -> None
```

##### `reset_client_ttl` <a name="reset_client_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetClientTtl"></a>

```python
def reset_client_ttl() -> None
```

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_negative_caching` <a name="reset_negative_caching" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCaching"></a>

```python
def reset_negative_caching() -> None
```

##### `reset_negative_caching_policy` <a name="reset_negative_caching_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```python
def reset_negative_caching_policy() -> None
```

##### `reset_serve_while_stale` <a name="reset_serve_while_stale" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetServeWhileStale"></a>

```python
def reset_serve_while_stale() -> None
```

##### `reset_signed_url_cache_max_age_sec` <a name="reset_signed_url_cache_max_age_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```python
def reset_signed_url_cache_max_age_sec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">cache_key_policy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">negative_caching_policy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput">cache_key_policy_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheModeInput">cache_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtlInput">client_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtlInput">default_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingInput">negative_caching_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput">negative_caching_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput">serve_while_stale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">signed_url_cache_max_age_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode">cache_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl">client_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching">negative_caching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale">serve_while_stale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signed_url_cache_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_key_policy`<sup>Required</sup> <a name="cache_key_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```python
cache_key_policy: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `negative_caching_policy`<sup>Required</sup> <a name="negative_caching_policy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```python
negative_caching_policy: ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `cache_key_policy_input`<sup>Optional</sup> <a name="cache_key_policy_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```python
cache_key_policy_input: ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">ComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `cache_mode_input`<sup>Optional</sup> <a name="cache_mode_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheModeInput"></a>

```python
cache_mode_input: str
```

- *Type:* str

---

##### `client_ttl_input`<sup>Optional</sup> <a name="client_ttl_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtlInput"></a>

```python
client_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtlInput"></a>

```python
default_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negative_caching_input`<sup>Optional</sup> <a name="negative_caching_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingInput"></a>

```python
negative_caching_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `negative_caching_policy_input`<sup>Optional</sup> <a name="negative_caching_policy_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```python
negative_caching_policy_input: typing.Union[IResolvable, typing.List[ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">ComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>]]

---

##### `serve_while_stale_input`<sup>Optional</sup> <a name="serve_while_stale_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```python
serve_while_stale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signed_url_cache_max_age_sec_input`<sup>Optional</sup> <a name="signed_url_cache_max_age_sec_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```python
signed_url_cache_max_age_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_mode`<sup>Required</sup> <a name="cache_mode" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```python
cache_mode: str
```

- *Type:* str

---

##### `client_ttl`<sup>Required</sup> <a name="client_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```python
client_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negative_caching`<sup>Required</sup> <a name="negative_caching" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```python
negative_caching: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `serve_while_stale`<sup>Required</sup> <a name="serve_while_stale" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```python
serve_while_stale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signed_url_cache_max_age_sec`<sup>Required</sup> <a name="signed_url_cache_max_age_sec" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```python
signed_url_cache_max_age_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionBackendServiceCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCdnPolicy">ComputeRegionBackendServiceCdnPolicy</a>

---


### ComputeRegionBackendServiceCircuitBreakersOutputReference <a name="ComputeRegionBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxConnections">reset_max_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests">reset_max_pending_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequests">reset_max_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection">reset_max_requests_per_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRetries">reset_max_retries</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_connections` <a name="reset_max_connections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxConnections"></a>

```python
def reset_max_connections() -> None
```

##### `reset_max_pending_requests` <a name="reset_max_pending_requests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests"></a>

```python
def reset_max_pending_requests() -> None
```

##### `reset_max_requests` <a name="reset_max_requests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequests"></a>

```python
def reset_max_requests() -> None
```

##### `reset_max_requests_per_connection` <a name="reset_max_requests_per_connection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection"></a>

```python
def reset_max_requests_per_connection() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput">max_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput">max_pending_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput">max_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput">max_requests_per_connection_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">max_pending_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests">max_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">max_requests_per_connection</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_connections_input`<sup>Optional</sup> <a name="max_connections_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput"></a>

```python
max_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_requests_input`<sup>Optional</sup> <a name="max_pending_requests_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput"></a>

```python
max_pending_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_requests_input`<sup>Optional</sup> <a name="max_requests_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput"></a>

```python
max_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_requests_per_connection_input`<sup>Optional</sup> <a name="max_requests_per_connection_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput"></a>

```python
max_requests_per_connection_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_requests`<sup>Required</sup> <a name="max_pending_requests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```python
max_pending_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_requests`<sup>Required</sup> <a name="max_requests" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```python
max_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_requests_per_connection`<sup>Required</sup> <a name="max_requests_per_connection" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```python
max_requests_per_connection: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionBackendServiceCircuitBreakers
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceCircuitBreakers">ComputeRegionBackendServiceCircuitBreakers</a>

---


### ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference <a name="ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl">put_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ttl` <a name="put_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl"></a>

```python
def put_ttl(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
) -> None
```

###### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#seconds ComputeRegionBackendService#seconds}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#nanos ComputeRegionBackendService#nanos}

---

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference">ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput">ttl_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```python
ttl: ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference">ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput"></a>

```python
ttl_input: ComputeRegionBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a>

---


### ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionBackendServiceConsistentHashHttpCookieTtl
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---


### ComputeRegionBackendServiceConsistentHashOutputReference <a name="ComputeRegionBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie">put_http_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resetHttpCookie">reset_http_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resetHttpHeaderName">reset_http_header_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resetMinimumRingSize">reset_minimum_ring_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_http_cookie` <a name="put_http_cookie" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie"></a>

```python
def put_http_cookie(
  name: str = None,
  path: str = None,
  ttl: ComputeRegionBackendServiceConsistentHashHttpCookieTtl = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.name"></a>

- *Type:* str

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#name ComputeRegionBackendService#name}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.path"></a>

- *Type:* str

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#path ComputeRegionBackendService#path}

---

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.ttl"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieTtl">ComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#ttl ComputeRegionBackendService#ttl}

---

##### `reset_http_cookie` <a name="reset_http_cookie" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resetHttpCookie"></a>

```python
def reset_http_cookie() -> None
```

##### `reset_http_header_name` <a name="reset_http_header_name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resetHttpHeaderName"></a>

```python
def reset_http_header_name() -> None
```

##### `reset_minimum_ring_size` <a name="reset_minimum_ring_size" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.resetMinimumRingSize"></a>

```python
def reset_minimum_ring_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie">http_cookie</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference">ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookieInput">http_cookie_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput">http_header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput">minimum_ring_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName">http_header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize">minimum_ring_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_cookie`<sup>Required</sup> <a name="http_cookie" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```python
http_cookie: ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference">ComputeRegionBackendServiceConsistentHashHttpCookieOutputReference</a>

---

##### `http_cookie_input`<sup>Optional</sup> <a name="http_cookie_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookieInput"></a>

```python
http_cookie_input: ComputeRegionBackendServiceConsistentHashHttpCookie
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashHttpCookie">ComputeRegionBackendServiceConsistentHashHttpCookie</a>

---

##### `http_header_name_input`<sup>Optional</sup> <a name="http_header_name_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput"></a>

```python
http_header_name_input: str
```

- *Type:* str

---

##### `minimum_ring_size_input`<sup>Optional</sup> <a name="minimum_ring_size_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput"></a>

```python
minimum_ring_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_header_name`<sup>Required</sup> <a name="http_header_name" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```python
http_header_name: str
```

- *Type:* str

---

##### `minimum_ring_size`<sup>Required</sup> <a name="minimum_ring_size" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```python
minimum_ring_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionBackendServiceConsistentHash
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceConsistentHash">ComputeRegionBackendServiceConsistentHash</a>

---


### ComputeRegionBackendServiceFailoverPolicyOutputReference <a name="ComputeRegionBackendServiceFailoverPolicyOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resetDisableConnectionDrainOnFailover">reset_disable_connection_drain_on_failover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resetDropTrafficIfUnhealthy">reset_drop_traffic_if_unhealthy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resetFailoverRatio">reset_failover_ratio</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_connection_drain_on_failover` <a name="reset_disable_connection_drain_on_failover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resetDisableConnectionDrainOnFailover"></a>

```python
def reset_disable_connection_drain_on_failover() -> None
```

##### `reset_drop_traffic_if_unhealthy` <a name="reset_drop_traffic_if_unhealthy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resetDropTrafficIfUnhealthy"></a>

```python
def reset_drop_traffic_if_unhealthy() -> None
```

##### `reset_failover_ratio` <a name="reset_failover_ratio" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.resetFailoverRatio"></a>

```python
def reset_failover_ratio() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailoverInput">disable_connection_drain_on_failover_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthyInput">drop_traffic_if_unhealthy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatioInput">failover_ratio_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover">disable_connection_drain_on_failover</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy">drop_traffic_if_unhealthy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio">failover_ratio</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_connection_drain_on_failover_input`<sup>Optional</sup> <a name="disable_connection_drain_on_failover_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailoverInput"></a>

```python
disable_connection_drain_on_failover_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `drop_traffic_if_unhealthy_input`<sup>Optional</sup> <a name="drop_traffic_if_unhealthy_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthyInput"></a>

```python
drop_traffic_if_unhealthy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failover_ratio_input`<sup>Optional</sup> <a name="failover_ratio_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatioInput"></a>

```python
failover_ratio_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_connection_drain_on_failover`<sup>Required</sup> <a name="disable_connection_drain_on_failover" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover"></a>

```python
disable_connection_drain_on_failover: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `drop_traffic_if_unhealthy`<sup>Required</sup> <a name="drop_traffic_if_unhealthy" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy"></a>

```python
drop_traffic_if_unhealthy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failover_ratio`<sup>Required</sup> <a name="failover_ratio" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio"></a>

```python
failover_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionBackendServiceFailoverPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceFailoverPolicy">ComputeRegionBackendServiceFailoverPolicy</a>

---


### ComputeRegionBackendServiceIapOutputReference <a name="ComputeRegionBackendServiceIapOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">oauth2_client_secret_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientIdInput">oauth2_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretInput">oauth2_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId">oauth2_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret">oauth2_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth2_client_secret_sha256`<sup>Required</sup> <a name="oauth2_client_secret_sha256" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```python
oauth2_client_secret_sha256: str
```

- *Type:* str

---

##### `oauth2_client_id_input`<sup>Optional</sup> <a name="oauth2_client_id_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientIdInput"></a>

```python
oauth2_client_id_input: str
```

- *Type:* str

---

##### `oauth2_client_secret_input`<sup>Optional</sup> <a name="oauth2_client_secret_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretInput"></a>

```python
oauth2_client_secret_input: str
```

- *Type:* str

---

##### `oauth2_client_id`<sup>Required</sup> <a name="oauth2_client_id" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```python
oauth2_client_id: str
```

- *Type:* str

---

##### `oauth2_client_secret`<sup>Required</sup> <a name="oauth2_client_secret" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```python
oauth2_client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIapOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionBackendServiceIap
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceIap">ComputeRegionBackendServiceIap</a>

---


### ComputeRegionBackendServiceLogConfigOutputReference <a name="ComputeRegionBackendServiceLogConfigOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resetSampleRate">reset_sample_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_sample_rate` <a name="reset_sample_rate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.resetSampleRate"></a>

```python
def reset_sample_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.sampleRateInput">sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sample_rate_input`<sup>Optional</sup> <a name="sample_rate_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.sampleRateInput"></a>

```python
sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sample_rate`<sup>Required</sup> <a name="sample_rate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionBackendServiceLogConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceLogConfig">ComputeRegionBackendServiceLogConfig</a>

---


### ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference <a name="ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a>

---


### ComputeRegionBackendServiceOutlierDetectionOutputReference <a name="ComputeRegionBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime">put_base_ejection_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval">put_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime">reset_base_ejection_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors">reset_consecutive_errors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure">reset_consecutive_gateway_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors">reset_enforcing_consecutive_errors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure">reset_enforcing_consecutive_gateway_failure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate">reset_enforcing_success_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent">reset_max_ejection_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts">reset_success_rate_minimum_hosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume">reset_success_rate_request_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor">reset_success_rate_stdev_factor</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_base_ejection_time` <a name="put_base_ejection_time" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime"></a>

```python
def put_base_ejection_time(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
) -> None
```

###### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#seconds ComputeRegionBackendService#seconds}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#nanos ComputeRegionBackendService#nanos}

---

##### `put_interval` <a name="put_interval" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval"></a>

```python
def put_interval(
  seconds: typing.Union[int, float],
  nanos: typing.Union[int, float] = None
) -> None
```

###### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#seconds ComputeRegionBackendService#seconds}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.putInterval.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/compute_region_backend_service#nanos ComputeRegionBackendService#nanos}

---

##### `reset_base_ejection_time` <a name="reset_base_ejection_time" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime"></a>

```python
def reset_base_ejection_time() -> None
```

##### `reset_consecutive_errors` <a name="reset_consecutive_errors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors"></a>

```python
def reset_consecutive_errors() -> None
```

##### `reset_consecutive_gateway_failure` <a name="reset_consecutive_gateway_failure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure"></a>

```python
def reset_consecutive_gateway_failure() -> None
```

##### `reset_enforcing_consecutive_errors` <a name="reset_enforcing_consecutive_errors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors"></a>

```python
def reset_enforcing_consecutive_errors() -> None
```

##### `reset_enforcing_consecutive_gateway_failure` <a name="reset_enforcing_consecutive_gateway_failure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure"></a>

```python
def reset_enforcing_consecutive_gateway_failure() -> None
```

##### `reset_enforcing_success_rate` <a name="reset_enforcing_success_rate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate"></a>

```python
def reset_enforcing_success_rate() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_max_ejection_percent` <a name="reset_max_ejection_percent" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent"></a>

```python
def reset_max_ejection_percent() -> None
```

##### `reset_success_rate_minimum_hosts` <a name="reset_success_rate_minimum_hosts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts"></a>

```python
def reset_success_rate_minimum_hosts() -> None
```

##### `reset_success_rate_request_volume` <a name="reset_success_rate_request_volume" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume"></a>

```python
def reset_success_rate_request_volume() -> None
```

##### `reset_success_rate_stdev_factor` <a name="reset_success_rate_stdev_factor" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor"></a>

```python
def reset_success_rate_stdev_factor() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">base_ejection_time</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference">ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput">base_ejection_time_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput">consecutive_errors_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput">consecutive_gateway_failure_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput">enforcing_consecutive_errors_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput">enforcing_consecutive_gateway_failure_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput">enforcing_success_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.intervalInput">interval_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput">max_ejection_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput">success_rate_minimum_hosts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput">success_rate_request_volume_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput">success_rate_stdev_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">consecutive_errors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">consecutive_gateway_failure</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">enforcing_consecutive_errors</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">enforcing_consecutive_gateway_failure</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">enforcing_success_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">max_ejection_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">success_rate_minimum_hosts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">success_rate_request_volume</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">success_rate_stdev_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_ejection_time`<sup>Required</sup> <a name="base_ejection_time" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```python
base_ejection_time: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```python
interval: ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference">ComputeRegionBackendServiceOutlierDetectionIntervalOutputReference</a>

---

##### `base_ejection_time_input`<sup>Optional</sup> <a name="base_ejection_time_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput"></a>

```python
base_ejection_time_input: ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">ComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `consecutive_errors_input`<sup>Optional</sup> <a name="consecutive_errors_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput"></a>

```python
consecutive_errors_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consecutive_gateway_failure_input`<sup>Optional</sup> <a name="consecutive_gateway_failure_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput"></a>

```python
consecutive_gateway_failure_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_consecutive_errors_input`<sup>Optional</sup> <a name="enforcing_consecutive_errors_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput"></a>

```python
enforcing_consecutive_errors_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_consecutive_gateway_failure_input`<sup>Optional</sup> <a name="enforcing_consecutive_gateway_failure_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput"></a>

```python
enforcing_consecutive_gateway_failure_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_success_rate_input`<sup>Optional</sup> <a name="enforcing_success_rate_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput"></a>

```python
enforcing_success_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.intervalInput"></a>

```python
interval_input: ComputeRegionBackendServiceOutlierDetectionInterval
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionInterval">ComputeRegionBackendServiceOutlierDetectionInterval</a>

---

##### `max_ejection_percent_input`<sup>Optional</sup> <a name="max_ejection_percent_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput"></a>

```python
max_ejection_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_minimum_hosts_input`<sup>Optional</sup> <a name="success_rate_minimum_hosts_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput"></a>

```python
success_rate_minimum_hosts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_request_volume_input`<sup>Optional</sup> <a name="success_rate_request_volume_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput"></a>

```python
success_rate_request_volume_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_stdev_factor_input`<sup>Optional</sup> <a name="success_rate_stdev_factor_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput"></a>

```python
success_rate_stdev_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consecutive_errors`<sup>Required</sup> <a name="consecutive_errors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```python
consecutive_errors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consecutive_gateway_failure`<sup>Required</sup> <a name="consecutive_gateway_failure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```python
consecutive_gateway_failure: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_consecutive_errors`<sup>Required</sup> <a name="enforcing_consecutive_errors" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```python
enforcing_consecutive_errors: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_consecutive_gateway_failure`<sup>Required</sup> <a name="enforcing_consecutive_gateway_failure" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```python
enforcing_consecutive_gateway_failure: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforcing_success_rate`<sup>Required</sup> <a name="enforcing_success_rate" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```python
enforcing_success_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ejection_percent`<sup>Required</sup> <a name="max_ejection_percent" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```python
max_ejection_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_minimum_hosts`<sup>Required</sup> <a name="success_rate_minimum_hosts" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```python
success_rate_minimum_hosts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_request_volume`<sup>Required</sup> <a name="success_rate_request_volume" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```python
success_rate_request_volume: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_rate_stdev_factor`<sup>Required</sup> <a name="success_rate_stdev_factor" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```python
success_rate_stdev_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionBackendServiceOutlierDetection
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceOutlierDetection">ComputeRegionBackendServiceOutlierDetection</a>

---


### ComputeRegionBackendServiceTimeoutsOutputReference <a name="ComputeRegionBackendServiceTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_backend_service

computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts">ComputeRegionBackendServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionBackendServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionBackendService.ComputeRegionBackendServiceTimeouts">ComputeRegionBackendServiceTimeouts</a>]

---



