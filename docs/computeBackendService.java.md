# `computeBackendService` Submodule <a name="`computeBackendService` Submodule" id="@cdktf/provider-google.computeBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendService <a name="ComputeBackendService" id="@cdktf/provider-google.computeBackendService.ComputeBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service google_compute_backend_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendService;

ComputeBackendService.Builder.create(Construct scope, java.lang.String id)
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
//  .affinityCookieTtlSec(java.lang.Number)
//  .backend(IResolvable)
//  .backend(java.util.List<ComputeBackendServiceBackend>)
//  .cdnPolicy(ComputeBackendServiceCdnPolicy)
//  .circuitBreakers(ComputeBackendServiceCircuitBreakers)
//  .compressionMode(java.lang.String)
//  .connectionDrainingTimeoutSec(java.lang.Number)
//  .consistentHash(ComputeBackendServiceConsistentHash)
//  .customRequestHeaders(java.util.List<java.lang.String>)
//  .customResponseHeaders(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .edgeSecurityPolicy(java.lang.String)
//  .enableCdn(java.lang.Boolean)
//  .enableCdn(IResolvable)
//  .healthChecks(java.util.List<java.lang.String>)
//  .iap(ComputeBackendServiceIap)
//  .id(java.lang.String)
//  .ipAddressSelectionPolicy(java.lang.String)
//  .loadBalancingScheme(java.lang.String)
//  .localityLbPolicies(IResolvable)
//  .localityLbPolicies(java.util.List<ComputeBackendServiceLocalityLbPolicies>)
//  .localityLbPolicy(java.lang.String)
//  .logConfig(ComputeBackendServiceLogConfig)
//  .outlierDetection(ComputeBackendServiceOutlierDetection)
//  .portName(java.lang.String)
//  .project(java.lang.String)
//  .protocol(java.lang.String)
//  .securityPolicy(java.lang.String)
//  .securitySettings(ComputeBackendServiceSecuritySettings)
//  .serviceLbPolicy(java.lang.String)
//  .sessionAffinity(java.lang.String)
//  .strongSessionAffinityCookie(ComputeBackendServiceStrongSessionAffinityCookie)
//  .timeouts(ComputeBackendServiceTimeouts)
//  .timeoutSec(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>java.lang.Number</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.backend">backend</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>></code> | backend block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.compressionMode">compressionMode</a></code> | <code>java.lang.String</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>java.lang.Number</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.customRequestHeaders">customRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Headers that the HTTP/S load balancer should add to proxied requests. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.customResponseHeaders">customResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>java.lang.String</code> | The resource URL for the edge security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.enableCdn">enableCdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enable Cloud CDN for this BackendService. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.healthChecks">healthChecks</a></code> | <code>java.util.List<java.lang.String></code> | The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#id ComputeBackendService#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>java.lang.String</code> | Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | Indicates whether the backend service will be used with internal or external load balancing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.localityLbPolicies">localityLbPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>></code> | locality_lb_policies block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.localityLbPolicy">localityLbPolicy</a></code> | <code>java.lang.String</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.portName">portName</a></code> | <code>java.lang.String</code> | Name of backend port. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#project ComputeBackendService#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol this BackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.securitySettings">securitySettings</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.serviceLbPolicy">serviceLbPolicy</a></code> | <code>java.lang.String</code> | URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a></code> | strong_session_affinity_cookie block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | The backend service timeout has a different meaning depending on the type of load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `affinityCookieTtlSec`<sup>Optional</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.affinityCookieTtlSec"></a>

- *Type:* java.lang.Number

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#affinity_cookie_ttl_sec ComputeBackendService#affinity_cookie_ttl_sec}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.backend"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>>

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#backend ComputeBackendService#backend}

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.cdnPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#cdn_policy ComputeBackendService#cdn_policy}

---

##### `circuitBreakers`<sup>Optional</sup> <a name="circuitBreakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.circuitBreakers"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#circuit_breakers ComputeBackendService#circuit_breakers}

---

##### `compressionMode`<sup>Optional</sup> <a name="compressionMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.compressionMode"></a>

- *Type:* java.lang.String

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#compression_mode ComputeBackendService#compression_mode}

---

##### `connectionDrainingTimeoutSec`<sup>Optional</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.connectionDrainingTimeoutSec"></a>

- *Type:* java.lang.Number

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#connection_draining_timeout_sec ComputeBackendService#connection_draining_timeout_sec}

---

##### `consistentHash`<sup>Optional</sup> <a name="consistentHash" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.consistentHash"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#consistent_hash ComputeBackendService#consistent_hash}

---

##### `customRequestHeaders`<sup>Optional</sup> <a name="customRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.customRequestHeaders"></a>

- *Type:* java.util.List<java.lang.String>

Headers that the HTTP/S load balancer should add to proxied requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#custom_request_headers ComputeBackendService#custom_request_headers}

---

##### `customResponseHeaders`<sup>Optional</sup> <a name="customResponseHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.customResponseHeaders"></a>

- *Type:* java.util.List<java.lang.String>

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#custom_response_headers ComputeBackendService#custom_response_headers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#description ComputeBackendService#description}

---

##### `edgeSecurityPolicy`<sup>Optional</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.edgeSecurityPolicy"></a>

- *Type:* java.lang.String

The resource URL for the edge security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#edge_security_policy ComputeBackendService#edge_security_policy}

---

##### `enableCdn`<sup>Optional</sup> <a name="enableCdn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.enableCdn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enable Cloud CDN for this BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#enable_cdn ComputeBackendService#enable_cdn}

---

##### `healthChecks`<sup>Optional</sup> <a name="healthChecks" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.healthChecks"></a>

- *Type:* java.util.List<java.lang.String>

The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService.

Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

For internal load balancing, a URL to a HealthCheck resource must be specified instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#health_checks ComputeBackendService#health_checks}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.iap"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#iap ComputeBackendService#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#id ComputeBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressSelectionPolicy`<sup>Optional</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.ipAddressSelectionPolicy"></a>

- *Type:* java.lang.String

Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC).

Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#ip_address_selection_policy ComputeBackendService#ip_address_selection_policy}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* java.lang.String

Indicates whether the backend service will be used with internal or external load balancing.

A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED", "INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#load_balancing_scheme ComputeBackendService#load_balancing_scheme}

---

##### `localityLbPolicies`<sup>Optional</sup> <a name="localityLbPolicies" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.localityLbPolicies"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>>

locality_lb_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#locality_lb_policies ComputeBackendService#locality_lb_policies}

---

##### `localityLbPolicy`<sup>Optional</sup> <a name="localityLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.localityLbPolicy"></a>

- *Type:* java.lang.String

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
  reported weights. Only applicable to loadBalancingScheme
  EXTERNAL. If set, the Backend Service must
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

locality_lb_policy is applicable to either:

* A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
  and loadBalancingScheme set to INTERNAL_MANAGED.
* A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
* A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
  Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
  Network Load Balancing. The default is MAGLEV.

If session_affinity is not NONE, and locality_lb_policy is not set to MAGLEV, WEIGHTED_MAGLEV,
or RING_HASH, session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#locality_lb_policy ComputeBackendService#locality_lb_policy}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#log_config ComputeBackendService#log_config}

---

##### `outlierDetection`<sup>Optional</sup> <a name="outlierDetection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.outlierDetection"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#outlier_detection ComputeBackendService#outlier_detection}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.portName"></a>

- *Type:* java.lang.String

Name of backend port.

The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#port_name ComputeBackendService#port_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#project ComputeBackendService#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

The protocol this BackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. **NOTE**: With protocol “UNSPECIFIED”,
the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
with TCP/UDP/L3_DEFAULT Forwarding Rule protocol. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#protocol ComputeBackendService#protocol}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.securityPolicy"></a>

- *Type:* java.lang.String

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#security_policy ComputeBackendService#security_policy}

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.securitySettings"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#security_settings ComputeBackendService#security_settings}

---

##### `serviceLbPolicy`<sup>Optional</sup> <a name="serviceLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.serviceLbPolicy"></a>

- *Type:* java.lang.String

URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#service_lb_policy ComputeBackendService#service_lb_policy}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.sessionAffinity"></a>

- *Type:* java.lang.String

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "STRONG_COOKIE_AFFINITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#session_affinity ComputeBackendService#session_affinity}

---

##### `strongSessionAffinityCookie`<sup>Optional</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.strongSessionAffinityCookie"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a>

strong_session_affinity_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#strong_session_affinity_cookie ComputeBackendService#strong_session_affinity_cookie}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#timeouts ComputeBackendService#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.Initializer.parameter.timeoutSec"></a>

- *Type:* java.lang.Number

The backend service timeout has a different meaning depending on the type of load balancer.

For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
The default is 30 seconds.
The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#timeout_sec ComputeBackendService#timeout_sec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putBackend">putBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy">putCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers">putCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putConsistentHash">putConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putIap">putIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putLocalityLbPolicies">putLocalityLbPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection">putOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putSecuritySettings">putSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putStrongSessionAffinityCookie">putStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetAffinityCookieTtlSec">resetAffinityCookieTtlSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCdnPolicy">resetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCircuitBreakers">resetCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCompressionMode">resetCompressionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetConnectionDrainingTimeoutSec">resetConnectionDrainingTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetConsistentHash">resetConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomRequestHeaders">resetCustomRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomResponseHeaders">resetCustomResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetEdgeSecurityPolicy">resetEdgeSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetEnableCdn">resetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetHealthChecks">resetHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetIap">resetIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetIpAddressSelectionPolicy">resetIpAddressSelectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLocalityLbPolicies">resetLocalityLbPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLocalityLbPolicy">resetLocalityLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetOutlierDetection">resetOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSecuritySettings">resetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetServiceLbPolicy">resetServiceLbPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetStrongSessionAffinityCookie">resetStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackend` <a name="putBackend" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putBackend"></a>

```java
public void putBackend(IResolvable OR java.util.List<ComputeBackendServiceBackend> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putBackend.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>>

---

##### `putCdnPolicy` <a name="putCdnPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy"></a>

```java
public void putCdnPolicy(ComputeBackendServiceCdnPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

---

##### `putCircuitBreakers` <a name="putCircuitBreakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers"></a>

```java
public void putCircuitBreakers(ComputeBackendServiceCircuitBreakers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putCircuitBreakers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

---

##### `putConsistentHash` <a name="putConsistentHash" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putConsistentHash"></a>

```java
public void putConsistentHash(ComputeBackendServiceConsistentHash value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putConsistentHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

---

##### `putIap` <a name="putIap" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putIap"></a>

```java
public void putIap(ComputeBackendServiceIap value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

---

##### `putLocalityLbPolicies` <a name="putLocalityLbPolicies" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLocalityLbPolicies"></a>

```java
public void putLocalityLbPolicies(IResolvable OR java.util.List<ComputeBackendServiceLocalityLbPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLocalityLbPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLogConfig"></a>

```java
public void putLogConfig(ComputeBackendServiceLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

---

##### `putOutlierDetection` <a name="putOutlierDetection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection"></a>

```java
public void putOutlierDetection(ComputeBackendServiceOutlierDetection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putOutlierDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

---

##### `putSecuritySettings` <a name="putSecuritySettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putSecuritySettings"></a>

```java
public void putSecuritySettings(ComputeBackendServiceSecuritySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putSecuritySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

---

##### `putStrongSessionAffinityCookie` <a name="putStrongSessionAffinityCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putStrongSessionAffinityCookie"></a>

```java
public void putStrongSessionAffinityCookie(ComputeBackendServiceStrongSessionAffinityCookie value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putStrongSessionAffinityCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putTimeouts"></a>

```java
public void putTimeouts(ComputeBackendServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>

---

##### `resetAffinityCookieTtlSec` <a name="resetAffinityCookieTtlSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetAffinityCookieTtlSec"></a>

```java
public void resetAffinityCookieTtlSec()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetCdnPolicy` <a name="resetCdnPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCdnPolicy"></a>

```java
public void resetCdnPolicy()
```

##### `resetCircuitBreakers` <a name="resetCircuitBreakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCircuitBreakers"></a>

```java
public void resetCircuitBreakers()
```

##### `resetCompressionMode` <a name="resetCompressionMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCompressionMode"></a>

```java
public void resetCompressionMode()
```

##### `resetConnectionDrainingTimeoutSec` <a name="resetConnectionDrainingTimeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetConnectionDrainingTimeoutSec"></a>

```java
public void resetConnectionDrainingTimeoutSec()
```

##### `resetConsistentHash` <a name="resetConsistentHash" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetConsistentHash"></a>

```java
public void resetConsistentHash()
```

##### `resetCustomRequestHeaders` <a name="resetCustomRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomRequestHeaders"></a>

```java
public void resetCustomRequestHeaders()
```

##### `resetCustomResponseHeaders` <a name="resetCustomResponseHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetCustomResponseHeaders"></a>

```java
public void resetCustomResponseHeaders()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEdgeSecurityPolicy` <a name="resetEdgeSecurityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetEdgeSecurityPolicy"></a>

```java
public void resetEdgeSecurityPolicy()
```

##### `resetEnableCdn` <a name="resetEnableCdn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetEnableCdn"></a>

```java
public void resetEnableCdn()
```

##### `resetHealthChecks` <a name="resetHealthChecks" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetHealthChecks"></a>

```java
public void resetHealthChecks()
```

##### `resetIap` <a name="resetIap" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetIap"></a>

```java
public void resetIap()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddressSelectionPolicy` <a name="resetIpAddressSelectionPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetIpAddressSelectionPolicy"></a>

```java
public void resetIpAddressSelectionPolicy()
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLoadBalancingScheme"></a>

```java
public void resetLoadBalancingScheme()
```

##### `resetLocalityLbPolicies` <a name="resetLocalityLbPolicies" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLocalityLbPolicies"></a>

```java
public void resetLocalityLbPolicies()
```

##### `resetLocalityLbPolicy` <a name="resetLocalityLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLocalityLbPolicy"></a>

```java
public void resetLocalityLbPolicy()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetOutlierDetection` <a name="resetOutlierDetection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetOutlierDetection"></a>

```java
public void resetOutlierDetection()
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetPortName"></a>

```java
public void resetPortName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetProject"></a>

```java
public void resetProject()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSecurityPolicy"></a>

```java
public void resetSecurityPolicy()
```

##### `resetSecuritySettings` <a name="resetSecuritySettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSecuritySettings"></a>

```java
public void resetSecuritySettings()
```

##### `resetServiceLbPolicy` <a name="resetServiceLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetServiceLbPolicy"></a>

```java
public void resetServiceLbPolicy()
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetSessionAffinity"></a>

```java
public void resetSessionAffinity()
```

##### `resetStrongSessionAffinityCookie` <a name="resetStrongSessionAffinityCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetStrongSessionAffinityCookie"></a>

```java
public void resetStrongSessionAffinityCookie()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.resetTimeoutSec"></a>

```java
public void resetTimeoutSec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeBackendService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendService;

ComputeBackendService.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendService;

ComputeBackendService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendService;

ComputeBackendService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendService;

ComputeBackendService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeBackendService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeBackendService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeBackendService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList">ComputeBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference">ComputeBackendServiceCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference">ComputeBackendServiceCircuitBreakersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference">ComputeBackendServiceConsistentHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.generatedId">generatedId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference">ComputeBackendServiceIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicies">localityLbPolicies</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList">ComputeBackendServiceLocalityLbPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference">ComputeBackendServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference">ComputeBackendServiceOutlierDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference">ComputeBackendServiceSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference">ComputeBackendServiceStrongSessionAffinityCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference">ComputeBackendServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.affinityCookieTtlSecInput">affinityCookieTtlSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.backendInput">backendInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdnPolicyInput">cdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.circuitBreakersInput">circuitBreakersInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.compressionModeInput">compressionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connectionDrainingTimeoutSecInput">connectionDrainingTimeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.consistentHashInput">consistentHashInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customRequestHeadersInput">customRequestHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customResponseHeadersInput">customResponseHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.edgeSecurityPolicyInput">edgeSecurityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.enableCdnInput">enableCdnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.healthChecksInput">healthChecksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.iapInput">iapInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.ipAddressSelectionPolicyInput">ipAddressSelectionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPoliciesInput">localityLbPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicyInput">localityLbPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.outlierDetectionInput">outlierDetectionInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.portNameInput">portNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securityPolicyInput">securityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securitySettingsInput">securitySettingsInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.serviceLbPolicyInput">serviceLbPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.strongSessionAffinityCookieInput">strongSessionAffinityCookieInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutSecInput">timeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.compressionMode">compressionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customRequestHeaders">customRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customResponseHeaders">customResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.enableCdn">enableCdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.healthChecks">healthChecks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicy">localityLbPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.serviceLbPolicy">serviceLbPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.backend"></a>

```java
public ComputeBackendServiceBackendList getBackend();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList">ComputeBackendServiceBackendList</a>

---

##### `cdnPolicy`<sup>Required</sup> <a name="cdnPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdnPolicy"></a>

```java
public ComputeBackendServiceCdnPolicyOutputReference getCdnPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference">ComputeBackendServiceCdnPolicyOutputReference</a>

---

##### `circuitBreakers`<sup>Required</sup> <a name="circuitBreakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.circuitBreakers"></a>

```java
public ComputeBackendServiceCircuitBreakersOutputReference getCircuitBreakers();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference">ComputeBackendServiceCircuitBreakersOutputReference</a>

---

##### `consistentHash`<sup>Required</sup> <a name="consistentHash" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.consistentHash"></a>

```java
public ComputeBackendServiceConsistentHashOutputReference getConsistentHash();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference">ComputeBackendServiceConsistentHashOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `generatedId`<sup>Required</sup> <a name="generatedId" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.generatedId"></a>

```java
public java.lang.Number getGeneratedId();
```

- *Type:* java.lang.Number

---

##### `iap`<sup>Required</sup> <a name="iap" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.iap"></a>

```java
public ComputeBackendServiceIapOutputReference getIap();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference">ComputeBackendServiceIapOutputReference</a>

---

##### `localityLbPolicies`<sup>Required</sup> <a name="localityLbPolicies" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicies"></a>

```java
public ComputeBackendServiceLocalityLbPoliciesList getLocalityLbPolicies();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList">ComputeBackendServiceLocalityLbPoliciesList</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.logConfig"></a>

```java
public ComputeBackendServiceLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference">ComputeBackendServiceLogConfigOutputReference</a>

---

##### `outlierDetection`<sup>Required</sup> <a name="outlierDetection" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.outlierDetection"></a>

```java
public ComputeBackendServiceOutlierDetectionOutputReference getOutlierDetection();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference">ComputeBackendServiceOutlierDetectionOutputReference</a>

---

##### `securitySettings`<sup>Required</sup> <a name="securitySettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securitySettings"></a>

```java
public ComputeBackendServiceSecuritySettingsOutputReference getSecuritySettings();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference">ComputeBackendServiceSecuritySettingsOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `strongSessionAffinityCookie`<sup>Required</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.strongSessionAffinityCookie"></a>

```java
public ComputeBackendServiceStrongSessionAffinityCookieOutputReference getStrongSessionAffinityCookie();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference">ComputeBackendServiceStrongSessionAffinityCookieOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeouts"></a>

```java
public ComputeBackendServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference">ComputeBackendServiceTimeoutsOutputReference</a>

---

##### `affinityCookieTtlSecInput`<sup>Optional</sup> <a name="affinityCookieTtlSecInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.affinityCookieTtlSecInput"></a>

```java
public java.lang.Number getAffinityCookieTtlSecInput();
```

- *Type:* java.lang.Number

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.backendInput"></a>

```java
public java.lang.Object getBackendInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>>

---

##### `cdnPolicyInput`<sup>Optional</sup> <a name="cdnPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.cdnPolicyInput"></a>

```java
public ComputeBackendServiceCdnPolicy getCdnPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

---

##### `circuitBreakersInput`<sup>Optional</sup> <a name="circuitBreakersInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.circuitBreakersInput"></a>

```java
public ComputeBackendServiceCircuitBreakers getCircuitBreakersInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

---

##### `compressionModeInput`<sup>Optional</sup> <a name="compressionModeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.compressionModeInput"></a>

```java
public java.lang.String getCompressionModeInput();
```

- *Type:* java.lang.String

---

##### `connectionDrainingTimeoutSecInput`<sup>Optional</sup> <a name="connectionDrainingTimeoutSecInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connectionDrainingTimeoutSecInput"></a>

```java
public java.lang.Number getConnectionDrainingTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `consistentHashInput`<sup>Optional</sup> <a name="consistentHashInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.consistentHashInput"></a>

```java
public ComputeBackendServiceConsistentHash getConsistentHashInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

---

##### `customRequestHeadersInput`<sup>Optional</sup> <a name="customRequestHeadersInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customRequestHeadersInput"></a>

```java
public java.util.List<java.lang.String> getCustomRequestHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customResponseHeadersInput`<sup>Optional</sup> <a name="customResponseHeadersInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customResponseHeadersInput"></a>

```java
public java.util.List<java.lang.String> getCustomResponseHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `edgeSecurityPolicyInput`<sup>Optional</sup> <a name="edgeSecurityPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.edgeSecurityPolicyInput"></a>

```java
public java.lang.String getEdgeSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `enableCdnInput`<sup>Optional</sup> <a name="enableCdnInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.enableCdnInput"></a>

```java
public java.lang.Object getEnableCdnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthChecksInput`<sup>Optional</sup> <a name="healthChecksInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.healthChecksInput"></a>

```java
public java.util.List<java.lang.String> getHealthChecksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iapInput`<sup>Optional</sup> <a name="iapInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.iapInput"></a>

```java
public ComputeBackendServiceIap getIapInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressSelectionPolicyInput`<sup>Optional</sup> <a name="ipAddressSelectionPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.ipAddressSelectionPolicyInput"></a>

```java
public java.lang.String getIpAddressSelectionPolicyInput();
```

- *Type:* java.lang.String

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.loadBalancingSchemeInput"></a>

```java
public java.lang.String getLoadBalancingSchemeInput();
```

- *Type:* java.lang.String

---

##### `localityLbPoliciesInput`<sup>Optional</sup> <a name="localityLbPoliciesInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPoliciesInput"></a>

```java
public java.lang.Object getLocalityLbPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>>

---

##### `localityLbPolicyInput`<sup>Optional</sup> <a name="localityLbPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicyInput"></a>

```java
public java.lang.String getLocalityLbPolicyInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.logConfigInput"></a>

```java
public ComputeBackendServiceLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outlierDetectionInput`<sup>Optional</sup> <a name="outlierDetectionInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.outlierDetectionInput"></a>

```java
public ComputeBackendServiceOutlierDetection getOutlierDetectionInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.portNameInput"></a>

```java
public java.lang.String getPortNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securityPolicyInput"></a>

```java
public java.lang.String getSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `securitySettingsInput`<sup>Optional</sup> <a name="securitySettingsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securitySettingsInput"></a>

```java
public ComputeBackendServiceSecuritySettings getSecuritySettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

---

##### `serviceLbPolicyInput`<sup>Optional</sup> <a name="serviceLbPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.serviceLbPolicyInput"></a>

```java
public java.lang.String getServiceLbPolicyInput();
```

- *Type:* java.lang.String

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.sessionAffinityInput"></a>

```java
public java.lang.String getSessionAffinityInput();
```

- *Type:* java.lang.String

---

##### `strongSessionAffinityCookieInput`<sup>Optional</sup> <a name="strongSessionAffinityCookieInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.strongSessionAffinityCookieInput"></a>

```java
public ComputeBackendServiceStrongSessionAffinityCookie getStrongSessionAffinityCookieInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a>

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutSecInput"></a>

```java
public java.lang.Number getTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>

---

##### `affinityCookieTtlSec`<sup>Required</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.affinityCookieTtlSec"></a>

```java
public java.lang.Number getAffinityCookieTtlSec();
```

- *Type:* java.lang.Number

---

##### `compressionMode`<sup>Required</sup> <a name="compressionMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.compressionMode"></a>

```java
public java.lang.String getCompressionMode();
```

- *Type:* java.lang.String

---

##### `connectionDrainingTimeoutSec`<sup>Required</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.connectionDrainingTimeoutSec"></a>

```java
public java.lang.Number getConnectionDrainingTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `customRequestHeaders`<sup>Required</sup> <a name="customRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getCustomRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customResponseHeaders`<sup>Required</sup> <a name="customResponseHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.customResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getCustomResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `edgeSecurityPolicy`<sup>Required</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.edgeSecurityPolicy"></a>

```java
public java.lang.String getEdgeSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `enableCdn`<sup>Required</sup> <a name="enableCdn" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.enableCdn"></a>

```java
public java.lang.Object getEnableCdn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthChecks`<sup>Required</sup> <a name="healthChecks" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.healthChecks"></a>

```java
public java.util.List<java.lang.String> getHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddressSelectionPolicy`<sup>Required</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.ipAddressSelectionPolicy"></a>

```java
public java.lang.String getIpAddressSelectionPolicy();
```

- *Type:* java.lang.String

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

---

##### `localityLbPolicy`<sup>Required</sup> <a name="localityLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.localityLbPolicy"></a>

```java
public java.lang.String getLocalityLbPolicy();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `serviceLbPolicy`<sup>Required</sup> <a name="serviceLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.serviceLbPolicy"></a>

```java
public java.lang.String getServiceLbPolicy();
```

- *Type:* java.lang.String

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeBackendService.ComputeBackendService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendServiceBackend <a name="ComputeBackendServiceBackend" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceBackend;

ComputeBackendServiceBackend.builder()
    .group(java.lang.String)
//  .balancingMode(java.lang.String)
//  .capacityScaler(java.lang.Number)
//  .description(java.lang.String)
//  .maxConnections(java.lang.Number)
//  .maxConnectionsPerEndpoint(java.lang.Number)
//  .maxConnectionsPerInstance(java.lang.Number)
//  .maxRate(java.lang.Number)
//  .maxRatePerEndpoint(java.lang.Number)
//  .maxRatePerInstance(java.lang.Number)
//  .maxUtilization(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.group">group</a></code> | <code>java.lang.String</code> | The fully-qualified URL of an Instance Group or Network Endpoint Group resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.balancingMode">balancingMode</a></code> | <code>java.lang.String</code> | Specifies the balancing mode for this backend. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.capacityScaler">capacityScaler</a></code> | <code>java.lang.Number</code> | A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnectionsPerEndpoint">maxConnectionsPerEndpoint</a></code> | <code>java.lang.Number</code> | The max number of simultaneous connections that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnectionsPerInstance">maxConnectionsPerInstance</a></code> | <code>java.lang.Number</code> | The max number of simultaneous connections that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | The max requests per second (RPS) of the group. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRatePerEndpoint">maxRatePerEndpoint</a></code> | <code>java.lang.Number</code> | The max requests per second (RPS) that a single backend network endpoint can handle. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRatePerInstance">maxRatePerInstance</a></code> | <code>java.lang.Number</code> | The max requests per second (RPS) that a single backend instance can handle. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxUtilization">maxUtilization</a></code> | <code>java.lang.Number</code> | Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. Valid range is [0.0, 1.0]. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#group ComputeBackendService#group}

---

##### `balancingMode`<sup>Optional</sup> <a name="balancingMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.balancingMode"></a>

```java
public java.lang.String getBalancingMode();
```

- *Type:* java.lang.String

Specifies the balancing mode for this backend.

For global HTTP(S) or TCP/SSL load balancing, the default is
UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S))
and CONNECTION (for TCP/SSL).

See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes. Default value: "UTILIZATION" Possible values: ["UTILIZATION", "RATE", "CONNECTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#balancing_mode ComputeBackendService#balancing_mode}

---

##### `capacityScaler`<sup>Optional</sup> <a name="capacityScaler" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.capacityScaler"></a>

```java
public java.lang.Number getCapacityScaler();
```

- *Type:* java.lang.Number

A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION).

Default value is 1, which means the group will serve up to 100%
of its configured capacity (depending on balancingMode). A
setting of 0 means the group is completely drained, offering
0% of its available Capacity. Valid range is [0.0,1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#capacity_scaler ComputeBackendService#capacity_scaler}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#description ComputeBackendService#description}

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_connections ComputeBackendService#max_connections}

---

##### `maxConnectionsPerEndpoint`<sup>Optional</sup> <a name="maxConnectionsPerEndpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnectionsPerEndpoint"></a>

```java
public java.lang.Number getMaxConnectionsPerEndpoint();
```

- *Type:* java.lang.Number

The max number of simultaneous connections that a single backend network endpoint can handle.

This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either
maxConnections or maxConnectionsPerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_connections_per_endpoint ComputeBackendService#max_connections_per_endpoint}

---

##### `maxConnectionsPerInstance`<sup>Optional</sup> <a name="maxConnectionsPerInstance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxConnectionsPerInstance"></a>

```java
public java.lang.Number getMaxConnectionsPerInstance();
```

- *Type:* java.lang.Number

The max number of simultaneous connections that a single backend instance can handle.

This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.

For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_connections_per_instance ComputeBackendService#max_connections_per_instance}

---

##### `maxRate`<sup>Optional</sup> <a name="maxRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

The max requests per second (RPS) of the group.

Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. For RATE mode, either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_rate ComputeBackendService#max_rate}

---

##### `maxRatePerEndpoint`<sup>Optional</sup> <a name="maxRatePerEndpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRatePerEndpoint"></a>

```java
public java.lang.Number getMaxRatePerEndpoint();
```

- *Type:* java.lang.Number

The max requests per second (RPS) that a single backend network endpoint can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_rate_per_endpoint ComputeBackendService#max_rate_per_endpoint}

---

##### `maxRatePerInstance`<sup>Optional</sup> <a name="maxRatePerInstance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxRatePerInstance"></a>

```java
public java.lang.Number getMaxRatePerInstance();
```

- *Type:* java.lang.Number

The max requests per second (RPS) that a single backend instance can handle.

This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_rate_per_instance ComputeBackendService#max_rate_per_instance}

---

##### `maxUtilization`<sup>Optional</sup> <a name="maxUtilization" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend.property.maxUtilization"></a>

```java
public java.lang.Number getMaxUtilization();
```

- *Type:* java.lang.Number

Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. Valid range is [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_utilization ComputeBackendService#max_utilization}

---

### ComputeBackendServiceCdnPolicy <a name="ComputeBackendServiceCdnPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceCdnPolicy;

ComputeBackendServiceCdnPolicy.builder()
//  .bypassCacheOnRequestHeaders(IResolvable)
//  .bypassCacheOnRequestHeaders(java.util.List<ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders>)
//  .cacheKeyPolicy(ComputeBackendServiceCdnPolicyCacheKeyPolicy)
//  .cacheMode(java.lang.String)
//  .clientTtl(java.lang.Number)
//  .defaultTtl(java.lang.Number)
//  .maxTtl(java.lang.Number)
//  .negativeCaching(java.lang.Boolean)
//  .negativeCaching(IResolvable)
//  .negativeCachingPolicy(IResolvable)
//  .negativeCachingPolicy(java.util.List<ComputeBackendServiceCdnPolicyNegativeCachingPolicy>)
//  .serveWhileStale(java.lang.Number)
//  .signedUrlCacheMaxAgeSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.bypassCacheOnRequestHeaders">bypassCacheOnRequestHeaders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>></code> | bypass_cache_on_request_headers block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.cacheMode">cacheMode</a></code> | <code>java.lang.String</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.clientTtl">clientTtl</a></code> | <code>java.lang.Number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.negativeCaching">negativeCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>></code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.serveWhileStale">serveWhileStale</a></code> | <code>java.lang.Number</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>java.lang.Number</code> | Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s). |

---

##### `bypassCacheOnRequestHeaders`<sup>Optional</sup> <a name="bypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.bypassCacheOnRequestHeaders"></a>

```java
public java.lang.Object getBypassCacheOnRequestHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>>

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#bypass_cache_on_request_headers ComputeBackendService#bypass_cache_on_request_headers}

---

##### `cacheKeyPolicy`<sup>Optional</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.cacheKeyPolicy"></a>

```java
public ComputeBackendServiceCdnPolicyCacheKeyPolicy getCacheKeyPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#cache_key_policy ComputeBackendService#cache_key_policy}

---

##### `cacheMode`<sup>Optional</sup> <a name="cacheMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.cacheMode"></a>

```java
public java.lang.String getCacheMode();
```

- *Type:* java.lang.String

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#cache_mode ComputeBackendService#cache_mode}

---

##### `clientTtl`<sup>Optional</sup> <a name="clientTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.clientTtl"></a>

```java
public java.lang.Number getClientTtl();
```

- *Type:* java.lang.Number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#client_ttl ComputeBackendService#client_ttl}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#default_ttl ComputeBackendService#default_ttl}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_ttl ComputeBackendService#max_ttl}

---

##### `negativeCaching`<sup>Optional</sup> <a name="negativeCaching" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.negativeCaching"></a>

```java
public java.lang.Object getNegativeCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#negative_caching ComputeBackendService#negative_caching}

---

##### `negativeCachingPolicy`<sup>Optional</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.negativeCachingPolicy"></a>

```java
public java.lang.Object getNegativeCachingPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>>

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#negative_caching_policy ComputeBackendService#negative_caching_policy}

---

##### `serveWhileStale`<sup>Optional</sup> <a name="serveWhileStale" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.serveWhileStale"></a>

```java
public java.lang.Number getServeWhileStale();
```

- *Type:* java.lang.Number

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#serve_while_stale ComputeBackendService#serve_while_stale}

---

##### `signedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```java
public java.lang.Number getSignedUrlCacheMaxAgeSec();
```

- *Type:* java.lang.Number

Maximum number of seconds the response to a signed URL request will be considered fresh, defaults to 1hr (3600s).

After this
time period, the response will be revalidated before
being served.

When serving responses to signed URL requests, Cloud CDN will
internally behave as though all responses from this backend had a
"Cache-Control: public, max-age=[TTL]" header, regardless of any
existing Cache-Control header. The actual headers served in
responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#signed_url_cache_max_age_sec ComputeBackendService#signed_url_cache_max_age_sec}

---

### ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders <a name="ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders;

ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.builder()
    .headerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.property.headerName">headerName</a></code> | <code>java.lang.String</code> | The header field name to match on when bypassing cache. Values are case-insensitive. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

The header field name to match on when bypassing cache. Values are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#header_name ComputeBackendService#header_name}

---

### ComputeBackendServiceCdnPolicyCacheKeyPolicy <a name="ComputeBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceCdnPolicyCacheKeyPolicy;

ComputeBackendServiceCdnPolicyCacheKeyPolicy.builder()
//  .includeHost(java.lang.Boolean)
//  .includeHost(IResolvable)
//  .includeHttpHeaders(java.util.List<java.lang.String>)
//  .includeNamedCookies(java.util.List<java.lang.String>)
//  .includeProtocol(java.lang.Boolean)
//  .includeProtocol(IResolvable)
//  .includeQueryString(java.lang.Boolean)
//  .includeQueryString(IResolvable)
//  .queryStringBlacklist(java.util.List<java.lang.String>)
//  .queryStringWhitelist(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost">includeHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHttpHeaders">includeHttpHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Allows HTTP request headers (by name) to be used in the cache key. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies">includeNamedCookies</a></code> | <code>java.util.List<java.lang.String></code> | Names of cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol">includeProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, http and https requests will be cached separately. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString">includeQueryString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist">queryStringBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | Names of query string parameters to exclude in cache keys. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Names of query string parameters to include in cache keys. |

---

##### `includeHost`<sup>Optional</sup> <a name="includeHost" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHost"></a>

```java
public java.lang.Object getIncludeHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true requests to different hosts will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#include_host ComputeBackendService#include_host}

---

##### `includeHttpHeaders`<sup>Optional</sup> <a name="includeHttpHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeHttpHeaders"></a>

```java
public java.util.List<java.lang.String> getIncludeHttpHeaders();
```

- *Type:* java.util.List<java.lang.String>

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#include_http_headers ComputeBackendService#include_http_headers}

---

##### `includeNamedCookies`<sup>Optional</sup> <a name="includeNamedCookies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeNamedCookies"></a>

```java
public java.util.List<java.lang.String> getIncludeNamedCookies();
```

- *Type:* java.util.List<java.lang.String>

Names of cookies to include in cache keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#include_named_cookies ComputeBackendService#include_named_cookies}

---

##### `includeProtocol`<sup>Optional</sup> <a name="includeProtocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```java
public java.lang.Object getIncludeProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#include_protocol ComputeBackendService#include_protocol}

---

##### `includeQueryString`<sup>Optional</sup> <a name="includeQueryString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.includeQueryString"></a>

```java
public java.lang.Object getIncludeQueryString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist.

If neither is set, the entire query
string will be included.

If false, the query string will be excluded from the cache
key entirely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#include_query_string ComputeBackendService#include_query_string}

---

##### `queryStringBlacklist`<sup>Optional</sup> <a name="queryStringBlacklist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringBlacklist"></a>

```java
public java.util.List<java.lang.String> getQueryStringBlacklist();
```

- *Type:* java.util.List<java.lang.String>

Names of query string parameters to exclude in cache keys.

All other parameters will be included. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#query_string_blacklist ComputeBackendService#query_string_blacklist}

---

##### `queryStringWhitelist`<sup>Optional</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Names of query string parameters to include in cache keys.

All other parameters will be excluded. Either specify
query_string_whitelist or query_string_blacklist, not both.
'&' and '=' will be percent encoded and not treated as
delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#query_string_whitelist ComputeBackendService#query_string_whitelist}

---

### ComputeBackendServiceCdnPolicyNegativeCachingPolicy <a name="ComputeBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceCdnPolicyNegativeCachingPolicy;

ComputeBackendServiceCdnPolicyNegativeCachingPolicy.builder()
//  .code(java.lang.Number)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.code">code</a></code> | <code>java.lang.Number</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#code ComputeBackendService#code}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#ttl ComputeBackendService#ttl}

---

### ComputeBackendServiceCircuitBreakers <a name="ComputeBackendServiceCircuitBreakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceCircuitBreakers;

ComputeBackendServiceCircuitBreakers.builder()
//  .maxConnections(java.lang.Number)
//  .maxPendingRequests(java.lang.Number)
//  .maxRequests(java.lang.Number)
//  .maxRequestsPerConnection(java.lang.Number)
//  .maxRetries(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | The maximum number of connections to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxPendingRequests">maxPendingRequests</a></code> | <code>java.lang.Number</code> | The maximum number of pending requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRequests">maxRequests</a></code> | <code>java.lang.Number</code> | The maximum number of parallel requests to the backend cluster. Defaults to 1024. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRequestsPerConnection">maxRequestsPerConnection</a></code> | <code>java.lang.Number</code> | Maximum requests for a single backend connection. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of parallel retries to the backend cluster. Defaults to 3. |

---

##### `maxConnections`<sup>Optional</sup> <a name="maxConnections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

The maximum number of connections to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_connections ComputeBackendService#max_connections}

---

##### `maxPendingRequests`<sup>Optional</sup> <a name="maxPendingRequests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxPendingRequests"></a>

```java
public java.lang.Number getMaxPendingRequests();
```

- *Type:* java.lang.Number

The maximum number of pending requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_pending_requests ComputeBackendService#max_pending_requests}

---

##### `maxRequests`<sup>Optional</sup> <a name="maxRequests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRequests"></a>

```java
public java.lang.Number getMaxRequests();
```

- *Type:* java.lang.Number

The maximum number of parallel requests to the backend cluster. Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_requests ComputeBackendService#max_requests}

---

##### `maxRequestsPerConnection`<sup>Optional</sup> <a name="maxRequestsPerConnection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRequestsPerConnection"></a>

```java
public java.lang.Number getMaxRequestsPerConnection();
```

- *Type:* java.lang.Number

Maximum requests for a single backend connection.

This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_requests_per_connection ComputeBackendService#max_requests_per_connection}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

The maximum number of parallel retries to the backend cluster. Defaults to 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_retries ComputeBackendService#max_retries}

---

### ComputeBackendServiceConfig <a name="ComputeBackendServiceConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceConfig;

ComputeBackendServiceConfig.builder()
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
//  .affinityCookieTtlSec(java.lang.Number)
//  .backend(IResolvable)
//  .backend(java.util.List<ComputeBackendServiceBackend>)
//  .cdnPolicy(ComputeBackendServiceCdnPolicy)
//  .circuitBreakers(ComputeBackendServiceCircuitBreakers)
//  .compressionMode(java.lang.String)
//  .connectionDrainingTimeoutSec(java.lang.Number)
//  .consistentHash(ComputeBackendServiceConsistentHash)
//  .customRequestHeaders(java.util.List<java.lang.String>)
//  .customResponseHeaders(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .edgeSecurityPolicy(java.lang.String)
//  .enableCdn(java.lang.Boolean)
//  .enableCdn(IResolvable)
//  .healthChecks(java.util.List<java.lang.String>)
//  .iap(ComputeBackendServiceIap)
//  .id(java.lang.String)
//  .ipAddressSelectionPolicy(java.lang.String)
//  .loadBalancingScheme(java.lang.String)
//  .localityLbPolicies(IResolvable)
//  .localityLbPolicies(java.util.List<ComputeBackendServiceLocalityLbPolicies>)
//  .localityLbPolicy(java.lang.String)
//  .logConfig(ComputeBackendServiceLogConfig)
//  .outlierDetection(ComputeBackendServiceOutlierDetection)
//  .portName(java.lang.String)
//  .project(java.lang.String)
//  .protocol(java.lang.String)
//  .securityPolicy(java.lang.String)
//  .securitySettings(ComputeBackendServiceSecuritySettings)
//  .serviceLbPolicy(java.lang.String)
//  .sessionAffinity(java.lang.String)
//  .strongSessionAffinityCookie(ComputeBackendServiceStrongSessionAffinityCookie)
//  .timeouts(ComputeBackendServiceTimeouts)
//  .timeoutSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>java.lang.Number</code> | Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.backend">backend</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>></code> | backend block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a></code> | circuit_breakers block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.compressionMode">compressionMode</a></code> | <code>java.lang.String</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>java.lang.Number</code> | Time for which instance will be drained (not accept new connections, but still work to finish started). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.consistentHash">consistentHash</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a></code> | consistent_hash block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customRequestHeaders">customRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Headers that the HTTP/S load balancer should add to proxied requests. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customResponseHeaders">customResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>java.lang.String</code> | The resource URL for the edge security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.enableCdn">enableCdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, enable Cloud CDN for this BackendService. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.healthChecks">healthChecks</a></code> | <code>java.util.List<java.lang.String></code> | The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#id ComputeBackendService#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>java.lang.String</code> | Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC). |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | Indicates whether the backend service will be used with internal or external load balancing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.localityLbPolicies">localityLbPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>></code> | locality_lb_policies block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.localityLbPolicy">localityLbPolicy</a></code> | <code>java.lang.String</code> | The load balancing algorithm used within the scope of the locality. The possible values are:. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a></code> | outlier_detection block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.portName">portName</a></code> | <code>java.lang.String</code> | Name of backend port. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#project ComputeBackendService#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The protocol this BackendService uses to communicate with backends. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | The security policy associated with this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.serviceLbPolicy">serviceLbPolicy</a></code> | <code>java.lang.String</code> | URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | Type of session affinity to use. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a></code> | strong_session_affinity_cookie block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | The backend service timeout has a different meaning depending on the type of load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `affinityCookieTtlSec`<sup>Optional</sup> <a name="affinityCookieTtlSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.affinityCookieTtlSec"></a>

```java
public java.lang.Number getAffinityCookieTtlSec();
```

- *Type:* java.lang.Number

Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE.

If set to 0, the cookie is non-persistent and lasts
only until the end of the browser session (or equivalent). The
maximum allowed value for TTL is one day.

When the load balancing scheme is INTERNAL, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#affinity_cookie_ttl_sec ComputeBackendService#affinity_cookie_ttl_sec}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.backend"></a>

```java
public java.lang.Object getBackend();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>>

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#backend ComputeBackendService#backend}

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.cdnPolicy"></a>

```java
public ComputeBackendServiceCdnPolicy getCdnPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#cdn_policy ComputeBackendService#cdn_policy}

---

##### `circuitBreakers`<sup>Optional</sup> <a name="circuitBreakers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.circuitBreakers"></a>

```java
public ComputeBackendServiceCircuitBreakers getCircuitBreakers();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

circuit_breakers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#circuit_breakers ComputeBackendService#circuit_breakers}

---

##### `compressionMode`<sup>Optional</sup> <a name="compressionMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.compressionMode"></a>

```java
public java.lang.String getCompressionMode();
```

- *Type:* java.lang.String

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#compression_mode ComputeBackendService#compression_mode}

---

##### `connectionDrainingTimeoutSec`<sup>Optional</sup> <a name="connectionDrainingTimeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.connectionDrainingTimeoutSec"></a>

```java
public java.lang.Number getConnectionDrainingTimeoutSec();
```

- *Type:* java.lang.Number

Time for which instance will be drained (not accept new connections, but still work to finish started).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#connection_draining_timeout_sec ComputeBackendService#connection_draining_timeout_sec}

---

##### `consistentHash`<sup>Optional</sup> <a name="consistentHash" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.consistentHash"></a>

```java
public ComputeBackendServiceConsistentHash getConsistentHash();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

consistent_hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#consistent_hash ComputeBackendService#consistent_hash}

---

##### `customRequestHeaders`<sup>Optional</sup> <a name="customRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getCustomRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

Headers that the HTTP/S load balancer should add to proxied requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#custom_request_headers ComputeBackendService#custom_request_headers}

---

##### `customResponseHeaders`<sup>Optional</sup> <a name="customResponseHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.customResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getCustomResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#custom_response_headers ComputeBackendService#custom_response_headers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#description ComputeBackendService#description}

---

##### `edgeSecurityPolicy`<sup>Optional</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.edgeSecurityPolicy"></a>

```java
public java.lang.String getEdgeSecurityPolicy();
```

- *Type:* java.lang.String

The resource URL for the edge security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#edge_security_policy ComputeBackendService#edge_security_policy}

---

##### `enableCdn`<sup>Optional</sup> <a name="enableCdn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.enableCdn"></a>

```java
public java.lang.Object getEnableCdn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, enable Cloud CDN for this BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#enable_cdn ComputeBackendService#enable_cdn}

---

##### `healthChecks`<sup>Optional</sup> <a name="healthChecks" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.healthChecks"></a>

```java
public java.util.List<java.lang.String> getHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

The set of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService.

Currently at most one health
check can be specified.

A health check must be specified unless the backend service uses an internet
or serverless NEG as a backend.

For internal load balancing, a URL to a HealthCheck resource must be specified instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#health_checks ComputeBackendService#health_checks}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.iap"></a>

```java
public ComputeBackendServiceIap getIap();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#iap ComputeBackendService#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#id ComputeBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressSelectionPolicy`<sup>Optional</sup> <a name="ipAddressSelectionPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.ipAddressSelectionPolicy"></a>

```java
public java.lang.String getIpAddressSelectionPolicy();
```

- *Type:* java.lang.String

Specifies preference of traffic to the backend (from the proxy and from the client for proxyless gRPC).

Possible values: ["IPV4_ONLY", "PREFER_IPV6", "IPV6_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#ip_address_selection_policy ComputeBackendService#ip_address_selection_policy}

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

Indicates whether the backend service will be used with internal or external load balancing.

A backend service created for one type of
load balancing cannot be used with the other. For more information, refer to
[Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL_SELF_MANAGED", "INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#load_balancing_scheme ComputeBackendService#load_balancing_scheme}

---

##### `localityLbPolicies`<sup>Optional</sup> <a name="localityLbPolicies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.localityLbPolicies"></a>

```java
public java.lang.Object getLocalityLbPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>>

locality_lb_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#locality_lb_policies ComputeBackendService#locality_lb_policies}

---

##### `localityLbPolicy`<sup>Optional</sup> <a name="localityLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.localityLbPolicy"></a>

```java
public java.lang.String getLocalityLbPolicy();
```

- *Type:* java.lang.String

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
  reported weights. Only applicable to loadBalancingScheme
  EXTERNAL. If set, the Backend Service must
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

locality_lb_policy is applicable to either:

* A regional backend service with the service_protocol set to HTTP, HTTPS, or HTTP2,
  and loadBalancingScheme set to INTERNAL_MANAGED.
* A global backend service with the load_balancing_scheme set to INTERNAL_SELF_MANAGED.
* A regional backend service with loadBalancingScheme set to EXTERNAL (External Network
  Load Balancing). Only MAGLEV and WEIGHTED_MAGLEV values are possible for External
  Network Load Balancing. The default is MAGLEV.

If session_affinity is not NONE, and locality_lb_policy is not set to MAGLEV, WEIGHTED_MAGLEV,
or RING_HASH, session affinity settings will not take effect.

Only ROUND_ROBIN and RING_HASH are supported when the backend service is referenced
by a URL map that is bound to target gRPC proxy that has validate_for_proxyless
field set to true. Possible values: ["ROUND_ROBIN", "LEAST_REQUEST", "RING_HASH", "RANDOM", "ORIGINAL_DESTINATION", "MAGLEV", "WEIGHTED_MAGLEV"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#locality_lb_policy ComputeBackendService#locality_lb_policy}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.logConfig"></a>

```java
public ComputeBackendServiceLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#log_config ComputeBackendService#log_config}

---

##### `outlierDetection`<sup>Optional</sup> <a name="outlierDetection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.outlierDetection"></a>

```java
public ComputeBackendServiceOutlierDetection getOutlierDetection();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

outlier_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#outlier_detection ComputeBackendService#outlier_detection}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

Name of backend port.

The same name should appear in the instance
groups referenced by this service. Required when the load balancing
scheme is EXTERNAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#port_name ComputeBackendService#port_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#project ComputeBackendService#project}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The protocol this BackendService uses to communicate with backends.

The default is HTTP. **NOTE**: HTTP2 is only valid for beta HTTP/2 load balancer
types and may result in errors if used with the GA API. **NOTE**: With protocol “UNSPECIFIED”,
the backend service can be used by Layer 4 Internal Load Balancing or Network Load Balancing
with TCP/UDP/L3_DEFAULT Forwarding Rule protocol. Possible values: ["HTTP", "HTTPS", "HTTP2", "TCP", "SSL", "GRPC", "UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#protocol ComputeBackendService#protocol}

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

The security policy associated with this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#security_policy ComputeBackendService#security_policy}

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.securitySettings"></a>

```java
public ComputeBackendServiceSecuritySettings getSecuritySettings();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#security_settings ComputeBackendService#security_settings}

---

##### `serviceLbPolicy`<sup>Optional</sup> <a name="serviceLbPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.serviceLbPolicy"></a>

```java
public java.lang.String getServiceLbPolicy();
```

- *Type:* java.lang.String

URL to networkservices.ServiceLbPolicy resource. Can only be set if load balancing scheme is EXTERNAL, EXTERNAL_MANAGED, INTERNAL_MANAGED or INTERNAL_SELF_MANAGED and the scope is global.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#service_lb_policy ComputeBackendService#service_lb_policy}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

Type of session affinity to use.

The default is NONE. Session affinity is
not applicable if the protocol is UDP. Possible values: ["NONE", "CLIENT_IP", "CLIENT_IP_PORT_PROTO", "CLIENT_IP_PROTO", "GENERATED_COOKIE", "HEADER_FIELD", "HTTP_COOKIE", "STRONG_COOKIE_AFFINITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#session_affinity ComputeBackendService#session_affinity}

---

##### `strongSessionAffinityCookie`<sup>Optional</sup> <a name="strongSessionAffinityCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.strongSessionAffinityCookie"></a>

```java
public ComputeBackendServiceStrongSessionAffinityCookie getStrongSessionAffinityCookie();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a>

strong_session_affinity_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#strong_session_affinity_cookie ComputeBackendService#strong_session_affinity_cookie}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.timeouts"></a>

```java
public ComputeBackendServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#timeouts ComputeBackendService#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConfig.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

The backend service timeout has a different meaning depending on the type of load balancer.

For more information see, [Backend service settings](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices).
The default is 30 seconds.
The full range of timeout values allowed goes from 1 through 2,147,483,647 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#timeout_sec ComputeBackendService#timeout_sec}

---

### ComputeBackendServiceConsistentHash <a name="ComputeBackendServiceConsistentHash" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceConsistentHash;

ComputeBackendServiceConsistentHash.builder()
//  .httpCookie(ComputeBackendServiceConsistentHashHttpCookie)
//  .httpHeaderName(java.lang.String)
//  .minimumRingSize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.httpCookie">httpCookie</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a></code> | http_cookie block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.httpHeaderName">httpHeaderName</a></code> | <code>java.lang.String</code> | The hash based on the value of the specified header field. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.minimumRingSize">minimumRingSize</a></code> | <code>java.lang.Number</code> | The minimum number of virtual nodes to use for the hash ring. |

---

##### `httpCookie`<sup>Optional</sup> <a name="httpCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.httpCookie"></a>

```java
public ComputeBackendServiceConsistentHashHttpCookie getHttpCookie();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a>

http_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#http_cookie ComputeBackendService#http_cookie}

---

##### `httpHeaderName`<sup>Optional</sup> <a name="httpHeaderName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.httpHeaderName"></a>

```java
public java.lang.String getHttpHeaderName();
```

- *Type:* java.lang.String

The hash based on the value of the specified header field.

This field is applicable if the sessionAffinity is set to HEADER_FIELD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#http_header_name ComputeBackendService#http_header_name}

---

##### `minimumRingSize`<sup>Optional</sup> <a name="minimumRingSize" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash.property.minimumRingSize"></a>

```java
public java.lang.Number getMinimumRingSize();
```

- *Type:* java.lang.Number

The minimum number of virtual nodes to use for the hash ring.

Larger ring sizes result in more granular load
distributions. If the number of hosts in the load balancing pool
is larger than the ring size, each host will be assigned a single
virtual node.
Defaults to 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#minimum_ring_size ComputeBackendService#minimum_ring_size}

---

### ComputeBackendServiceConsistentHashHttpCookie <a name="ComputeBackendServiceConsistentHashHttpCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceConsistentHashHttpCookie;

ComputeBackendServiceConsistentHashHttpCookie.builder()
//  .name(java.lang.String)
//  .path(java.lang.String)
//  .ttl(ComputeBackendServiceConsistentHashHttpCookieTtl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.name">name</a></code> | <code>java.lang.String</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.path">path</a></code> | <code>java.lang.String</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | ttl block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#path ComputeBackendService#path}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie.property.ttl"></a>

```java
public ComputeBackendServiceConsistentHashHttpCookieTtl getTtl();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#ttl ComputeBackendService#ttl}

---

### ComputeBackendServiceConsistentHashHttpCookieTtl <a name="ComputeBackendServiceConsistentHashHttpCookieTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceConsistentHashHttpCookieTtl;

ComputeBackendServiceConsistentHashHttpCookieTtl.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

### ComputeBackendServiceIap <a name="ComputeBackendServiceIap" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceIap;

ComputeBackendServiceIap.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .oauth2ClientId(java.lang.String)
//  .oauth2ClientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the serving infrastructure will authenticate and authorize all incoming requests. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.oauth2ClientId">oauth2ClientId</a></code> | <code>java.lang.String</code> | OAuth2 Client ID for IAP. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>java.lang.String</code> | OAuth2 Client Secret for IAP. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the serving infrastructure will authenticate and authorize all incoming requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#enabled ComputeBackendService#enabled}

---

##### `oauth2ClientId`<sup>Optional</sup> <a name="oauth2ClientId" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.oauth2ClientId"></a>

```java
public java.lang.String getOauth2ClientId();
```

- *Type:* java.lang.String

OAuth2 Client ID for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#oauth2_client_id ComputeBackendService#oauth2_client_id}

---

##### `oauth2ClientSecret`<sup>Optional</sup> <a name="oauth2ClientSecret" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap.property.oauth2ClientSecret"></a>

```java
public java.lang.String getOauth2ClientSecret();
```

- *Type:* java.lang.String

OAuth2 Client Secret for IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#oauth2_client_secret ComputeBackendService#oauth2_client_secret}

---

### ComputeBackendServiceLocalityLbPolicies <a name="ComputeBackendServiceLocalityLbPolicies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceLocalityLbPolicies;

ComputeBackendServiceLocalityLbPolicies.builder()
//  .customPolicy(ComputeBackendServiceLocalityLbPoliciesCustomPolicy)
//  .policy(ComputeBackendServiceLocalityLbPoliciesPolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | policy block. |

---

##### `customPolicy`<sup>Optional</sup> <a name="customPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.property.customPolicy"></a>

```java
public ComputeBackendServiceLocalityLbPoliciesCustomPolicy getCustomPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#custom_policy ComputeBackendService#custom_policy}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies.property.policy"></a>

```java
public ComputeBackendServiceLocalityLbPoliciesPolicy getPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#policy ComputeBackendService#policy}

---

### ComputeBackendServiceLocalityLbPoliciesCustomPolicy <a name="ComputeBackendServiceLocalityLbPoliciesCustomPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceLocalityLbPoliciesCustomPolicy;

ComputeBackendServiceLocalityLbPoliciesCustomPolicy.builder()
    .name(java.lang.String)
//  .data(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.name">name</a></code> | <code>java.lang.String</code> | Identifies the custom policy. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.data">data</a></code> | <code>java.lang.String</code> | An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifies the custom policy.

The value should match the type the custom implementation is registered
with on the gRPC clients. It should follow protocol buffer
message naming conventions and include the full path (e.g.
myorg.CustomLbPolicy). The maximum length is 256 characters.

Note that specifying the same custom policy more than once for a
backend is not a valid configuration and will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

An optional, arbitrary JSON object with configuration data, understood by a locally installed custom policy implementation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#data ComputeBackendService#data}

---

### ComputeBackendServiceLocalityLbPoliciesPolicy <a name="ComputeBackendServiceLocalityLbPoliciesPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceLocalityLbPoliciesPolicy;

ComputeBackendServiceLocalityLbPoliciesPolicy.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy.property.name">name</a></code> | <code>java.lang.String</code> | The name of a locality load balancer policy to be used. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

### ComputeBackendServiceLogConfig <a name="ComputeBackendServiceLogConfig" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceLogConfig;

ComputeBackendServiceLogConfig.builder()
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .sampleRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable logging for the load balancer traffic served by this backend service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | This field can only be specified if logging is enabled for this backend service. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable logging for the load balancer traffic served by this backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#enable ComputeBackendService#enable}

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

This field can only be specified if logging is enabled for this backend service.

The value of
the field must be in [0, 1]. This configures the sampling rate of requests to the load balancer
where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported.
The default value is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#sample_rate ComputeBackendService#sample_rate}

---

### ComputeBackendServiceOutlierDetection <a name="ComputeBackendServiceOutlierDetection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceOutlierDetection;

ComputeBackendServiceOutlierDetection.builder()
//  .baseEjectionTime(ComputeBackendServiceOutlierDetectionBaseEjectionTime)
//  .consecutiveErrors(java.lang.Number)
//  .consecutiveGatewayFailure(java.lang.Number)
//  .enforcingConsecutiveErrors(java.lang.Number)
//  .enforcingConsecutiveGatewayFailure(java.lang.Number)
//  .enforcingSuccessRate(java.lang.Number)
//  .interval(ComputeBackendServiceOutlierDetectionInterval)
//  .maxEjectionPercent(java.lang.Number)
//  .successRateMinimumHosts(java.lang.Number)
//  .successRateRequestVolume(java.lang.Number)
//  .successRateStdevFactor(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.baseEjectionTime">baseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | base_ejection_time block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.consecutiveErrors">consecutiveErrors</a></code> | <code>java.lang.Number</code> | Number of errors before a host is ejected from the connection pool. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.consecutiveGatewayFailure">consecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingConsecutiveErrors">enforcingConsecutiveErrors</a></code> | <code>java.lang.Number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure">enforcingConsecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingSuccessRate">enforcingSuccessRate</a></code> | <code>java.lang.Number</code> | The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>java.lang.Number</code> | Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateMinimumHosts">successRateMinimumHosts</a></code> | <code>java.lang.Number</code> | The number of hosts in a cluster that must have enough request volume to detect success rate outliers. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateRequestVolume">successRateRequestVolume</a></code> | <code>java.lang.Number</code> | The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateStdevFactor">successRateStdevFactor</a></code> | <code>java.lang.Number</code> | This factor is used to determine the ejection threshold for success rate outlier ejection. |

---

##### `baseEjectionTime`<sup>Optional</sup> <a name="baseEjectionTime" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.baseEjectionTime"></a>

```java
public ComputeBackendServiceOutlierDetectionBaseEjectionTime getBaseEjectionTime();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

base_ejection_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#base_ejection_time ComputeBackendService#base_ejection_time}

---

##### `consecutiveErrors`<sup>Optional</sup> <a name="consecutiveErrors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.consecutiveErrors"></a>

```java
public java.lang.Number getConsecutiveErrors();
```

- *Type:* java.lang.Number

Number of errors before a host is ejected from the connection pool.

When the
backend host is accessed over HTTP, a 5xx return code qualifies as an error.
Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#consecutive_errors ComputeBackendService#consecutive_errors}

---

##### `consecutiveGatewayFailure`<sup>Optional</sup> <a name="consecutiveGatewayFailure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.consecutiveGatewayFailure"></a>

```java
public java.lang.Number getConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

The number of consecutive gateway failures (502, 503, 504 status or connection errors that are mapped to one of those status codes) before a consecutive gateway failure ejection occurs.

Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#consecutive_gateway_failure ComputeBackendService#consecutive_gateway_failure}

---

##### `enforcingConsecutiveErrors`<sup>Optional</sup> <a name="enforcingConsecutiveErrors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingConsecutiveErrors"></a>

```java
public java.lang.Number getEnforcingConsecutiveErrors();
```

- *Type:* java.lang.Number

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive 5xx.

This setting can be used to disable
ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#enforcing_consecutive_errors ComputeBackendService#enforcing_consecutive_errors}

---

##### `enforcingConsecutiveGatewayFailure`<sup>Optional</sup> <a name="enforcingConsecutiveGatewayFailure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingConsecutiveGatewayFailure"></a>

```java
public java.lang.Number getEnforcingConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

The percentage chance that a host will be actually ejected when an outlier status is detected through consecutive gateway failures.

This setting can be
used to disable ejection or to ramp it up slowly. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#enforcing_consecutive_gateway_failure ComputeBackendService#enforcing_consecutive_gateway_failure}

---

##### `enforcingSuccessRate`<sup>Optional</sup> <a name="enforcingSuccessRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.enforcingSuccessRate"></a>

```java
public java.lang.Number getEnforcingSuccessRate();
```

- *Type:* java.lang.Number

The percentage chance that a host will be actually ejected when an outlier status is detected through success rate statistics.

This setting can be used to
disable ejection or to ramp it up slowly. Defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#enforcing_success_rate ComputeBackendService#enforcing_success_rate}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.interval"></a>

```java
public ComputeBackendServiceOutlierDetectionInterval getInterval();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#interval ComputeBackendService#interval}

---

##### `maxEjectionPercent`<sup>Optional</sup> <a name="maxEjectionPercent" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.maxEjectionPercent"></a>

```java
public java.lang.Number getMaxEjectionPercent();
```

- *Type:* java.lang.Number

Maximum percentage of hosts in the load balancing pool for the backend service that can be ejected. Defaults to 10%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#max_ejection_percent ComputeBackendService#max_ejection_percent}

---

##### `successRateMinimumHosts`<sup>Optional</sup> <a name="successRateMinimumHosts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateMinimumHosts"></a>

```java
public java.lang.Number getSuccessRateMinimumHosts();
```

- *Type:* java.lang.Number

The number of hosts in a cluster that must have enough request volume to detect success rate outliers.

If the number of hosts is less than this setting, outlier
detection via success rate statistics is not performed for any host in the
cluster. Defaults to 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#success_rate_minimum_hosts ComputeBackendService#success_rate_minimum_hosts}

---

##### `successRateRequestVolume`<sup>Optional</sup> <a name="successRateRequestVolume" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateRequestVolume"></a>

```java
public java.lang.Number getSuccessRateRequestVolume();
```

- *Type:* java.lang.Number

The minimum number of total requests that must be collected in one interval (as defined by the interval duration above) to include this host in success rate based outlier detection.

If the volume is lower than this setting, outlier
detection via success rate statistics is not performed for that host. Defaults
to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#success_rate_request_volume ComputeBackendService#success_rate_request_volume}

---

##### `successRateStdevFactor`<sup>Optional</sup> <a name="successRateStdevFactor" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection.property.successRateStdevFactor"></a>

```java
public java.lang.Number getSuccessRateStdevFactor();
```

- *Type:* java.lang.Number

This factor is used to determine the ejection threshold for success rate outlier ejection.

The ejection threshold is the difference between the mean success
rate, and the product of this factor and the standard deviation of the mean
success rate: mean - (stdev * success_rate_stdev_factor). This factor is divided
by a thousand to get a double. That is, if the desired factor is 1.9, the
runtime value should be 1900. Defaults to 1900.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#success_rate_stdev_factor ComputeBackendService#success_rate_stdev_factor}

---

### ComputeBackendServiceOutlierDetectionBaseEjectionTime <a name="ComputeBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceOutlierDetectionBaseEjectionTime;

ComputeBackendServiceOutlierDetectionBaseEjectionTime.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

### ComputeBackendServiceOutlierDetectionInterval <a name="ComputeBackendServiceOutlierDetectionInterval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceOutlierDetectionInterval;

ComputeBackendServiceOutlierDetectionInterval.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations
less than one second are represented with a 0 'seconds' field and a positive
'nanos' field. Must be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

### ComputeBackendServiceSecuritySettings <a name="ComputeBackendServiceSecuritySettings" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceSecuritySettings;

ComputeBackendServiceSecuritySettings.builder()
//  .awsV4Authentication(ComputeBackendServiceSecuritySettingsAwsV4Authentication)
//  .clientTlsPolicy(java.lang.String)
//  .subjectAltNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.awsV4Authentication">awsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | aws_v4_authentication block. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.clientTlsPolicy">clientTlsPolicy</a></code> | <code>java.lang.String</code> | ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.subjectAltNames">subjectAltNames</a></code> | <code>java.util.List<java.lang.String></code> | A list of alternate names to verify the subject identity in the certificate. |

---

##### `awsV4Authentication`<sup>Optional</sup> <a name="awsV4Authentication" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.awsV4Authentication"></a>

```java
public ComputeBackendServiceSecuritySettingsAwsV4Authentication getAwsV4Authentication();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

aws_v4_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#aws_v4_authentication ComputeBackendService#aws_v4_authentication}

---

##### `clientTlsPolicy`<sup>Optional</sup> <a name="clientTlsPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.clientTlsPolicy"></a>

```java
public java.lang.String getClientTlsPolicy();
```

- *Type:* java.lang.String

ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service.

This resource itself does not affect
configuration unless it is attached to a backend service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#client_tls_policy ComputeBackendService#client_tls_policy}

---

##### `subjectAltNames`<sup>Optional</sup> <a name="subjectAltNames" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings.property.subjectAltNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAltNames();
```

- *Type:* java.util.List<java.lang.String>

A list of alternate names to verify the subject identity in the certificate.

If specified, the client will verify that the server certificate's subject
alt name matches one of the specified values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#subject_alt_names ComputeBackendService#subject_alt_names}

---

### ComputeBackendServiceSecuritySettingsAwsV4Authentication <a name="ComputeBackendServiceSecuritySettingsAwsV4Authentication" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceSecuritySettingsAwsV4Authentication;

ComputeBackendServiceSecuritySettingsAwsV4Authentication.builder()
//  .accessKey(java.lang.String)
//  .accessKeyId(java.lang.String)
//  .accessKeyVersion(java.lang.String)
//  .originRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The access key used for s3 bucket authentication. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | The identifier of an access key used for s3 bucket authentication. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyVersion">accessKeyVersion</a></code> | <code>java.lang.String</code> | The optional version identifier for the access key. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.originRegion">originRegion</a></code> | <code>java.lang.String</code> | The name of the cloud region of your origin. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

The access key used for s3 bucket authentication.

Required for updating or creating a backend that uses AWS v4 signature authentication, but will not be returned as part of the configuration when queried with a REST API GET request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#access_key ComputeBackendService#access_key}

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

The identifier of an access key used for s3 bucket authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#access_key_id ComputeBackendService#access_key_id}

---

##### `accessKeyVersion`<sup>Optional</sup> <a name="accessKeyVersion" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.accessKeyVersion"></a>

```java
public java.lang.String getAccessKeyVersion();
```

- *Type:* java.lang.String

The optional version identifier for the access key.

You can use this to keep track of different iterations of your access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#access_key_version ComputeBackendService#access_key_version}

---

##### `originRegion`<sup>Optional</sup> <a name="originRegion" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication.property.originRegion"></a>

```java
public java.lang.String getOriginRegion();
```

- *Type:* java.lang.String

The name of the cloud region of your origin.

This is a free-form field with the name of the region your cloud uses to host your origin.
For example, "us-east-1" for AWS or "us-ashburn-1" for OCI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#origin_region ComputeBackendService#origin_region}

---

### ComputeBackendServiceStrongSessionAffinityCookie <a name="ComputeBackendServiceStrongSessionAffinityCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceStrongSessionAffinityCookie;

ComputeBackendServiceStrongSessionAffinityCookie.builder()
//  .name(java.lang.String)
//  .path(java.lang.String)
//  .ttl(ComputeBackendServiceStrongSessionAffinityCookieTtl)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.property.name">name</a></code> | <code>java.lang.String</code> | Name of the cookie. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.property.path">path</a></code> | <code>java.lang.String</code> | Path to set for the cookie. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | ttl block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#name ComputeBackendService#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to set for the cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#path ComputeBackendService#path}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie.property.ttl"></a>

```java
public ComputeBackendServiceStrongSessionAffinityCookieTtl getTtl();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#ttl ComputeBackendService#ttl}

---

### ComputeBackendServiceStrongSessionAffinityCookieTtl <a name="ComputeBackendServiceStrongSessionAffinityCookieTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceStrongSessionAffinityCookieTtl;

ComputeBackendServiceStrongSessionAffinityCookieTtl.builder()
    .seconds(java.lang.Number)
//  .nanos(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#seconds ComputeBackendService#seconds}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#nanos ComputeBackendService#nanos}

---

### ComputeBackendServiceTimeouts <a name="ComputeBackendServiceTimeouts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceTimeouts;

ComputeBackendServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#create ComputeBackendService#create}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#delete ComputeBackendService#delete}. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#update ComputeBackendService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#create ComputeBackendService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#delete ComputeBackendService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_service#update ComputeBackendService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendServiceBackendList <a name="ComputeBackendServiceBackendList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceBackendList;

new ComputeBackendServiceBackendList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.get"></a>

```java
public ComputeBackendServiceBackendOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>>

---


### ComputeBackendServiceBackendOutputReference <a name="ComputeBackendServiceBackendOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceBackendOutputReference;

new ComputeBackendServiceBackendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetBalancingMode">resetBalancingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetCapacityScaler">resetCapacityScaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint">resetMaxConnectionsPerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance">resetMaxConnectionsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRate">resetMaxRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRatePerEndpoint">resetMaxRatePerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRatePerInstance">resetMaxRatePerInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxUtilization">resetMaxUtilization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBalancingMode` <a name="resetBalancingMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetBalancingMode"></a>

```java
public void resetBalancingMode()
```

##### `resetCapacityScaler` <a name="resetCapacityScaler" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetCapacityScaler"></a>

```java
public void resetCapacityScaler()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnections"></a>

```java
public void resetMaxConnections()
```

##### `resetMaxConnectionsPerEndpoint` <a name="resetMaxConnectionsPerEndpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerEndpoint"></a>

```java
public void resetMaxConnectionsPerEndpoint()
```

##### `resetMaxConnectionsPerInstance` <a name="resetMaxConnectionsPerInstance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxConnectionsPerInstance"></a>

```java
public void resetMaxConnectionsPerInstance()
```

##### `resetMaxRate` <a name="resetMaxRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRate"></a>

```java
public void resetMaxRate()
```

##### `resetMaxRatePerEndpoint` <a name="resetMaxRatePerEndpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRatePerEndpoint"></a>

```java
public void resetMaxRatePerEndpoint()
```

##### `resetMaxRatePerInstance` <a name="resetMaxRatePerInstance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxRatePerInstance"></a>

```java
public void resetMaxRatePerInstance()
```

##### `resetMaxUtilization` <a name="resetMaxUtilization" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.resetMaxUtilization"></a>

```java
public void resetMaxUtilization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.balancingModeInput">balancingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.capacityScalerInput">capacityScalerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput">maxConnectionsPerEndpointInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput">maxConnectionsPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRateInput">maxRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerEndpointInput">maxRatePerEndpointInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerInstanceInput">maxRatePerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxUtilizationInput">maxUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.balancingMode">balancingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.capacityScaler">capacityScaler</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">maxConnectionsPerEndpoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">maxConnectionsPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint">maxRatePerEndpoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerInstance">maxRatePerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxUtilization">maxUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `balancingModeInput`<sup>Optional</sup> <a name="balancingModeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.balancingModeInput"></a>

```java
public java.lang.String getBalancingModeInput();
```

- *Type:* java.lang.String

---

##### `capacityScalerInput`<sup>Optional</sup> <a name="capacityScalerInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.capacityScalerInput"></a>

```java
public java.lang.Number getCapacityScalerInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsInput"></a>

```java
public java.lang.Number getMaxConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerEndpointInput`<sup>Optional</sup> <a name="maxConnectionsPerEndpointInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpointInput"></a>

```java
public java.lang.Number getMaxConnectionsPerEndpointInput();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerInstanceInput`<sup>Optional</sup> <a name="maxConnectionsPerInstanceInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstanceInput"></a>

```java
public java.lang.Number getMaxConnectionsPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `maxRateInput`<sup>Optional</sup> <a name="maxRateInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRateInput"></a>

```java
public java.lang.Number getMaxRateInput();
```

- *Type:* java.lang.Number

---

##### `maxRatePerEndpointInput`<sup>Optional</sup> <a name="maxRatePerEndpointInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerEndpointInput"></a>

```java
public java.lang.Number getMaxRatePerEndpointInput();
```

- *Type:* java.lang.Number

---

##### `maxRatePerInstanceInput`<sup>Optional</sup> <a name="maxRatePerInstanceInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerInstanceInput"></a>

```java
public java.lang.Number getMaxRatePerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `maxUtilizationInput`<sup>Optional</sup> <a name="maxUtilizationInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxUtilizationInput"></a>

```java
public java.lang.Number getMaxUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `balancingMode`<sup>Required</sup> <a name="balancingMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.balancingMode"></a>

```java
public java.lang.String getBalancingMode();
```

- *Type:* java.lang.String

---

##### `capacityScaler`<sup>Required</sup> <a name="capacityScaler" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.capacityScaler"></a>

```java
public java.lang.Number getCapacityScaler();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerEndpoint`<sup>Required</sup> <a name="maxConnectionsPerEndpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```java
public java.lang.Number getMaxConnectionsPerEndpoint();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerInstance`<sup>Required</sup> <a name="maxConnectionsPerInstance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```java
public java.lang.Number getMaxConnectionsPerInstance();
```

- *Type:* java.lang.Number

---

##### `maxRate`<sup>Required</sup> <a name="maxRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

---

##### `maxRatePerEndpoint`<sup>Required</sup> <a name="maxRatePerEndpoint" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```java
public java.lang.Number getMaxRatePerEndpoint();
```

- *Type:* java.lang.Number

---

##### `maxRatePerInstance`<sup>Required</sup> <a name="maxRatePerInstance" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```java
public java.lang.Number getMaxRatePerInstance();
```

- *Type:* java.lang.Number

---

##### `maxUtilization`<sup>Required</sup> <a name="maxUtilization" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.maxUtilization"></a>

```java
public java.lang.Number getMaxUtilization();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackendOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceBackend">ComputeBackendServiceBackend</a>

---


### ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList <a name="ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList;

new ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get"></a>

```java
public ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>>

---


### ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference <a name="ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference;

new ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>

---


### ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference;

new ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost">resetIncludeHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders">resetIncludeHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies">resetIncludeNamedCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">resetIncludeProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString">resetIncludeQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist">resetQueryStringBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">resetQueryStringWhitelist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeHost` <a name="resetIncludeHost" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHost"></a>

```java
public void resetIncludeHost()
```

##### `resetIncludeHttpHeaders` <a name="resetIncludeHttpHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders"></a>

```java
public void resetIncludeHttpHeaders()
```

##### `resetIncludeNamedCookies` <a name="resetIncludeNamedCookies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeNamedCookies"></a>

```java
public void resetIncludeNamedCookies()
```

##### `resetIncludeProtocol` <a name="resetIncludeProtocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```java
public void resetIncludeProtocol()
```

##### `resetIncludeQueryString` <a name="resetIncludeQueryString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetIncludeQueryString"></a>

```java
public void resetIncludeQueryString()
```

##### `resetQueryStringBlacklist` <a name="resetQueryStringBlacklist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringBlacklist"></a>

```java
public void resetQueryStringBlacklist()
```

##### `resetQueryStringWhitelist` <a name="resetQueryStringWhitelist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```java
public void resetQueryStringWhitelist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput">includeHostInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput">includeHttpHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput">includeNamedCookiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">includeProtocolInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput">includeQueryStringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput">queryStringBlacklistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">queryStringWhitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">includeHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders">includeHttpHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">includeNamedCookies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">includeProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">includeQueryString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">queryStringBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeHostInput`<sup>Optional</sup> <a name="includeHostInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHostInput"></a>

```java
public java.lang.Object getIncludeHostInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeHttpHeadersInput`<sup>Optional</sup> <a name="includeHttpHeadersInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput"></a>

```java
public java.util.List<java.lang.String> getIncludeHttpHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeNamedCookiesInput`<sup>Optional</sup> <a name="includeNamedCookiesInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookiesInput"></a>

```java
public java.util.List<java.lang.String> getIncludeNamedCookiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeProtocolInput`<sup>Optional</sup> <a name="includeProtocolInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```java
public java.lang.Object getIncludeProtocolInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeQueryStringInput`<sup>Optional</sup> <a name="includeQueryStringInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryStringInput"></a>

```java
public java.lang.Object getIncludeQueryStringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryStringBlacklistInput`<sup>Optional</sup> <a name="queryStringBlacklistInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklistInput"></a>

```java
public java.util.List<java.lang.String> getQueryStringBlacklistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringWhitelistInput`<sup>Optional</sup> <a name="queryStringWhitelistInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeHost`<sup>Required</sup> <a name="includeHost" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```java
public java.lang.Object getIncludeHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeHttpHeaders`<sup>Required</sup> <a name="includeHttpHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders"></a>

```java
public java.util.List<java.lang.String> getIncludeHttpHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeNamedCookies`<sup>Required</sup> <a name="includeNamedCookies" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```java
public java.util.List<java.lang.String> getIncludeNamedCookies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeProtocol`<sup>Required</sup> <a name="includeProtocol" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```java
public java.lang.Object getIncludeProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeQueryString`<sup>Required</sup> <a name="includeQueryString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```java
public java.lang.Object getIncludeQueryString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryStringBlacklist`<sup>Required</sup> <a name="queryStringBlacklist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```java
public java.util.List<java.lang.String> getQueryStringBlacklist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringWhitelist`<sup>Required</sup> <a name="queryStringWhitelist" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceCdnPolicyCacheKeyPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### ComputeBackendServiceCdnPolicyNegativeCachingPolicyList <a name="ComputeBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList;

new ComputeBackendServiceCdnPolicyNegativeCachingPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```java
public ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>>

---


### ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference;

new ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```java
public void resetCode()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```java
public java.lang.Number getCodeInput();
```

- *Type:* java.lang.Number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>

---


### ComputeBackendServiceCdnPolicyOutputReference <a name="ComputeBackendServiceCdnPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceCdnPolicyOutputReference;

new ComputeBackendServiceCdnPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders">putBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy">putCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy">putNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders">resetBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy">resetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetCacheMode">resetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetClientTtl">resetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetNegativeCaching">resetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy">resetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetServeWhileStale">resetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">resetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBypassCacheOnRequestHeaders` <a name="putBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders"></a>

```java
public void putBypassCacheOnRequestHeaders(IResolvable OR java.util.List<ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putBypassCacheOnRequestHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>>

---

##### `putCacheKeyPolicy` <a name="putCacheKeyPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```java
public void putCacheKeyPolicy(ComputeBackendServiceCdnPolicyCacheKeyPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `putNegativeCachingPolicy` <a name="putNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```java
public void putNegativeCachingPolicy(IResolvable OR java.util.List<ComputeBackendServiceCdnPolicyNegativeCachingPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>>

---

##### `resetBypassCacheOnRequestHeaders` <a name="resetBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders"></a>

```java
public void resetBypassCacheOnRequestHeaders()
```

##### `resetCacheKeyPolicy` <a name="resetCacheKeyPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```java
public void resetCacheKeyPolicy()
```

##### `resetCacheMode` <a name="resetCacheMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetCacheMode"></a>

```java
public void resetCacheMode()
```

##### `resetClientTtl` <a name="resetClientTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetClientTtl"></a>

```java
public void resetClientTtl()
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNegativeCaching` <a name="resetNegativeCaching" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetNegativeCaching"></a>

```java
public void resetNegativeCaching()
```

##### `resetNegativeCachingPolicy` <a name="resetNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```java
public void resetNegativeCachingPolicy()
```

##### `resetServeWhileStale` <a name="resetServeWhileStale" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetServeWhileStale"></a>

```java
public void resetServeWhileStale()
```

##### `resetSignedUrlCacheMaxAgeSec` <a name="resetSignedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```java
public void resetSignedUrlCacheMaxAgeSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders">bypassCacheOnRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference">ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList">ComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput">bypassCacheOnRequestHeadersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput">cacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheModeInput">cacheModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.clientTtlInput">clientTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingInput">negativeCachingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput">negativeCachingPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput">serveWhileStaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">signedUrlCacheMaxAgeSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheMode">cacheMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.clientTtl">clientTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching">negativeCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale">serveWhileStale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bypassCacheOnRequestHeaders`<sup>Required</sup> <a name="bypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders"></a>

```java
public ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList getBypassCacheOnRequestHeaders();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeadersList</a>

---

##### `cacheKeyPolicy`<sup>Required</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```java
public ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference getCacheKeyPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference">ComputeBackendServiceCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `negativeCachingPolicy`<sup>Required</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```java
public ComputeBackendServiceCdnPolicyNegativeCachingPolicyList getNegativeCachingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicyList">ComputeBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `bypassCacheOnRequestHeadersInput`<sup>Optional</sup> <a name="bypassCacheOnRequestHeadersInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput"></a>

```java
public java.lang.Object getBypassCacheOnRequestHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendServiceCdnPolicyBypassCacheOnRequestHeaders</a>>

---

##### `cacheKeyPolicyInput`<sup>Optional</sup> <a name="cacheKeyPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```java
public ComputeBackendServiceCdnPolicyCacheKeyPolicy getCacheKeyPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyCacheKeyPolicy">ComputeBackendServiceCdnPolicyCacheKeyPolicy</a>

---

##### `cacheModeInput`<sup>Optional</sup> <a name="cacheModeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheModeInput"></a>

```java
public java.lang.String getCacheModeInput();
```

- *Type:* java.lang.String

---

##### `clientTtlInput`<sup>Optional</sup> <a name="clientTtlInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.clientTtlInput"></a>

```java
public java.lang.Number getClientTtlInput();
```

- *Type:* java.lang.Number

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.defaultTtlInput"></a>

```java
public java.lang.Number getDefaultTtlInput();
```

- *Type:* java.lang.Number

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `negativeCachingInput`<sup>Optional</sup> <a name="negativeCachingInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingInput"></a>

```java
public java.lang.Object getNegativeCachingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `negativeCachingPolicyInput`<sup>Optional</sup> <a name="negativeCachingPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```java
public java.lang.Object getNegativeCachingPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyNegativeCachingPolicy">ComputeBackendServiceCdnPolicyNegativeCachingPolicy</a>>

---

##### `serveWhileStaleInput`<sup>Optional</sup> <a name="serveWhileStaleInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```java
public java.lang.Number getServeWhileStaleInput();
```

- *Type:* java.lang.Number

---

##### `signedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSecInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```java
public java.lang.Number getSignedUrlCacheMaxAgeSecInput();
```

- *Type:* java.lang.Number

---

##### `cacheMode`<sup>Required</sup> <a name="cacheMode" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```java
public java.lang.String getCacheMode();
```

- *Type:* java.lang.String

---

##### `clientTtl`<sup>Required</sup> <a name="clientTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```java
public java.lang.Number getClientTtl();
```

- *Type:* java.lang.Number

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `negativeCaching`<sup>Required</sup> <a name="negativeCaching" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```java
public java.lang.Object getNegativeCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serveWhileStale`<sup>Required</sup> <a name="serveWhileStale" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```java
public java.lang.Number getServeWhileStale();
```

- *Type:* java.lang.Number

---

##### `signedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```java
public java.lang.Number getSignedUrlCacheMaxAgeSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceCdnPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCdnPolicy">ComputeBackendServiceCdnPolicy</a>

---


### ComputeBackendServiceCircuitBreakersOutputReference <a name="ComputeBackendServiceCircuitBreakersOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceCircuitBreakersOutputReference;

new ComputeBackendServiceCircuitBreakersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxConnections">resetMaxConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests">resetMaxPendingRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequests">resetMaxRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection">resetMaxRequestsPerConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConnections` <a name="resetMaxConnections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxConnections"></a>

```java
public void resetMaxConnections()
```

##### `resetMaxPendingRequests` <a name="resetMaxPendingRequests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxPendingRequests"></a>

```java
public void resetMaxPendingRequests()
```

##### `resetMaxRequests` <a name="resetMaxRequests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequests"></a>

```java
public void resetMaxRequests()
```

##### `resetMaxRequestsPerConnection` <a name="resetMaxRequestsPerConnection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRequestsPerConnection"></a>

```java
public void resetMaxRequestsPerConnection()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput">maxConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput">maxPendingRequestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput">maxRequestsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput">maxRequestsPerConnectionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">maxPendingRequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests">maxRequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">maxRequestsPerConnection</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="maxConnectionsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxConnectionsInput"></a>

```java
public java.lang.Number getMaxConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `maxPendingRequestsInput`<sup>Optional</sup> <a name="maxPendingRequestsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequestsInput"></a>

```java
public java.lang.Number getMaxPendingRequestsInput();
```

- *Type:* java.lang.Number

---

##### `maxRequestsInput`<sup>Optional</sup> <a name="maxRequestsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsInput"></a>

```java
public java.lang.Number getMaxRequestsInput();
```

- *Type:* java.lang.Number

---

##### `maxRequestsPerConnectionInput`<sup>Optional</sup> <a name="maxRequestsPerConnectionInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnectionInput"></a>

```java
public java.lang.Number getMaxRequestsPerConnectionInput();
```

- *Type:* java.lang.Number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `maxPendingRequests`<sup>Required</sup> <a name="maxPendingRequests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```java
public java.lang.Number getMaxPendingRequests();
```

- *Type:* java.lang.Number

---

##### `maxRequests`<sup>Required</sup> <a name="maxRequests" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```java
public java.lang.Number getMaxRequests();
```

- *Type:* java.lang.Number

---

##### `maxRequestsPerConnection`<sup>Required</sup> <a name="maxRequestsPerConnection" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```java
public java.lang.Number getMaxRequestsPerConnection();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceCircuitBreakers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceCircuitBreakers">ComputeBackendServiceCircuitBreakers</a>

---


### ComputeBackendServiceConsistentHashHttpCookieOutputReference <a name="ComputeBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceConsistentHashHttpCookieOutputReference;

new ComputeBackendServiceConsistentHashHttpCookieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl">putTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTtl` <a name="putTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl"></a>

```java
public void putTtl(ComputeBackendServiceConsistentHashHttpCookieTtl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference">ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput">ttlInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```java
public ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference getTtl();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference">ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.ttlInput"></a>

```java
public ComputeBackendServiceConsistentHashHttpCookieTtl getTtlInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceConsistentHashHttpCookie getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a>

---


### ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference;

new ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceConsistentHashHttpCookieTtl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieTtl">ComputeBackendServiceConsistentHashHttpCookieTtl</a>

---


### ComputeBackendServiceConsistentHashOutputReference <a name="ComputeBackendServiceConsistentHashOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceConsistentHashOutputReference;

new ComputeBackendServiceConsistentHashOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.putHttpCookie">putHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetHttpCookie">resetHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetHttpHeaderName">resetHttpHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetMinimumRingSize">resetMinimumRingSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttpCookie` <a name="putHttpCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.putHttpCookie"></a>

```java
public void putHttpCookie(ComputeBackendServiceConsistentHashHttpCookie value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.putHttpCookie.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a>

---

##### `resetHttpCookie` <a name="resetHttpCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetHttpCookie"></a>

```java
public void resetHttpCookie()
```

##### `resetHttpHeaderName` <a name="resetHttpHeaderName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetHttpHeaderName"></a>

```java
public void resetHttpHeaderName()
```

##### `resetMinimumRingSize` <a name="resetMinimumRingSize" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.resetMinimumRingSize"></a>

```java
public void resetMinimumRingSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpCookie">httpCookie</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference">ComputeBackendServiceConsistentHashHttpCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpCookieInput">httpCookieInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput">httpHeaderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput">minimumRingSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName">httpHeaderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize">minimumRingSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpCookie`<sup>Required</sup> <a name="httpCookie" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```java
public ComputeBackendServiceConsistentHashHttpCookieOutputReference getHttpCookie();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookieOutputReference">ComputeBackendServiceConsistentHashHttpCookieOutputReference</a>

---

##### `httpCookieInput`<sup>Optional</sup> <a name="httpCookieInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpCookieInput"></a>

```java
public ComputeBackendServiceConsistentHashHttpCookie getHttpCookieInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashHttpCookie">ComputeBackendServiceConsistentHashHttpCookie</a>

---

##### `httpHeaderNameInput`<sup>Optional</sup> <a name="httpHeaderNameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpHeaderNameInput"></a>

```java
public java.lang.String getHttpHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `minimumRingSizeInput`<sup>Optional</sup> <a name="minimumRingSizeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.minimumRingSizeInput"></a>

```java
public java.lang.Number getMinimumRingSizeInput();
```

- *Type:* java.lang.Number

---

##### `httpHeaderName`<sup>Required</sup> <a name="httpHeaderName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```java
public java.lang.String getHttpHeaderName();
```

- *Type:* java.lang.String

---

##### `minimumRingSize`<sup>Required</sup> <a name="minimumRingSize" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```java
public java.lang.Number getMinimumRingSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceConsistentHash getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceConsistentHash">ComputeBackendServiceConsistentHash</a>

---


### ComputeBackendServiceIapOutputReference <a name="ComputeBackendServiceIapOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceIapOutputReference;

new ComputeBackendServiceIapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resetOauth2ClientId">resetOauth2ClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resetOauth2ClientSecret">resetOauth2ClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOauth2ClientId` <a name="resetOauth2ClientId" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resetOauth2ClientId"></a>

```java
public void resetOauth2ClientId()
```

##### `resetOauth2ClientSecret` <a name="resetOauth2ClientSecret" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.resetOauth2ClientSecret"></a>

```java
public void resetOauth2ClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">oauth2ClientSecretSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientIdInput">oauth2ClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecretInput">oauth2ClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientId">oauth2ClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oauth2ClientSecretSha256`<sup>Required</sup> <a name="oauth2ClientSecretSha256" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```java
public java.lang.String getOauth2ClientSecretSha256();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oauth2ClientIdInput`<sup>Optional</sup> <a name="oauth2ClientIdInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientIdInput"></a>

```java
public java.lang.String getOauth2ClientIdInput();
```

- *Type:* java.lang.String

---

##### `oauth2ClientSecretInput`<sup>Optional</sup> <a name="oauth2ClientSecretInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecretInput"></a>

```java
public java.lang.String getOauth2ClientSecretInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oauth2ClientId`<sup>Required</sup> <a name="oauth2ClientId" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```java
public java.lang.String getOauth2ClientId();
```

- *Type:* java.lang.String

---

##### `oauth2ClientSecret`<sup>Required</sup> <a name="oauth2ClientSecret" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```java
public java.lang.String getOauth2ClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceIapOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceIap getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceIap">ComputeBackendServiceIap</a>

---


### ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference <a name="ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference;

new ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.resetData"></a>

```java
public void resetData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceLocalityLbPoliciesCustomPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---


### ComputeBackendServiceLocalityLbPoliciesList <a name="ComputeBackendServiceLocalityLbPoliciesList" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceLocalityLbPoliciesList;

new ComputeBackendServiceLocalityLbPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.get"></a>

```java
public ComputeBackendServiceLocalityLbPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>>

---


### ComputeBackendServiceLocalityLbPoliciesOutputReference <a name="ComputeBackendServiceLocalityLbPoliciesOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceLocalityLbPoliciesOutputReference;

new ComputeBackendServiceLocalityLbPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy">putCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resetCustomPolicy">resetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPolicy` <a name="putCustomPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy"></a>

```java
public void putCustomPolicy(ComputeBackendServiceLocalityLbPoliciesCustomPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy"></a>

```java
public void putPolicy(ComputeBackendServiceLocalityLbPoliciesPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a>

---

##### `resetCustomPolicy` <a name="resetCustomPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resetCustomPolicy"></a>

```java
public void resetCustomPolicy()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.resetPolicy"></a>

```java
public void resetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference">ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference">ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicyInput">customPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.policyInput">policyInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customPolicy`<sup>Required</sup> <a name="customPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicy"></a>

```java
public ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference getCustomPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference">ComputeBackendServiceLocalityLbPoliciesCustomPolicyOutputReference</a>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.policy"></a>

```java
public ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference getPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference">ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference</a>

---

##### `customPolicyInput`<sup>Optional</sup> <a name="customPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.customPolicyInput"></a>

```java
public ComputeBackendServiceLocalityLbPoliciesCustomPolicy getCustomPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesCustomPolicy">ComputeBackendServiceLocalityLbPoliciesCustomPolicy</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.policyInput"></a>

```java
public ComputeBackendServiceLocalityLbPoliciesPolicy getPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPolicies">ComputeBackendServiceLocalityLbPolicies</a>

---


### ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference <a name="ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference;

new ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicyOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceLocalityLbPoliciesPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLocalityLbPoliciesPolicy">ComputeBackendServiceLocalityLbPoliciesPolicy</a>

---


### ComputeBackendServiceLogConfigOutputReference <a name="ComputeBackendServiceLogConfigOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceLogConfigOutputReference;

new ComputeBackendServiceLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.resetSampleRate"></a>

```java
public void resetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.sampleRateInput"></a>

```java
public java.lang.Number getSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfigOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceLogConfig">ComputeBackendServiceLogConfig</a>

---


### ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference;

new ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceOutlierDetectionBaseEjectionTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### ComputeBackendServiceOutlierDetectionIntervalOutputReference <a name="ComputeBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceOutlierDetectionIntervalOutputReference;

new ComputeBackendServiceOutlierDetectionIntervalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceOutlierDetectionInterval getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a>

---


### ComputeBackendServiceOutlierDetectionOutputReference <a name="ComputeBackendServiceOutlierDetectionOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceOutlierDetectionOutputReference;

new ComputeBackendServiceOutlierDetectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime">putBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putInterval">putInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime">resetBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors">resetConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure">resetConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors">resetEnforcingConsecutiveErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure">resetEnforcingConsecutiveGatewayFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate">resetEnforcingSuccessRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent">resetMaxEjectionPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts">resetSuccessRateMinimumHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume">resetSuccessRateRequestVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor">resetSuccessRateStdevFactor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseEjectionTime` <a name="putBaseEjectionTime" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime"></a>

```java
public void putBaseEjectionTime(ComputeBackendServiceOutlierDetectionBaseEjectionTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putBaseEjectionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `putInterval` <a name="putInterval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putInterval"></a>

```java
public void putInterval(ComputeBackendServiceOutlierDetectionInterval value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.putInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a>

---

##### `resetBaseEjectionTime` <a name="resetBaseEjectionTime" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetBaseEjectionTime"></a>

```java
public void resetBaseEjectionTime()
```

##### `resetConsecutiveErrors` <a name="resetConsecutiveErrors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveErrors"></a>

```java
public void resetConsecutiveErrors()
```

##### `resetConsecutiveGatewayFailure` <a name="resetConsecutiveGatewayFailure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetConsecutiveGatewayFailure"></a>

```java
public void resetConsecutiveGatewayFailure()
```

##### `resetEnforcingConsecutiveErrors` <a name="resetEnforcingConsecutiveErrors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveErrors"></a>

```java
public void resetEnforcingConsecutiveErrors()
```

##### `resetEnforcingConsecutiveGatewayFailure` <a name="resetEnforcingConsecutiveGatewayFailure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingConsecutiveGatewayFailure"></a>

```java
public void resetEnforcingConsecutiveGatewayFailure()
```

##### `resetEnforcingSuccessRate` <a name="resetEnforcingSuccessRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetEnforcingSuccessRate"></a>

```java
public void resetEnforcingSuccessRate()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetMaxEjectionPercent` <a name="resetMaxEjectionPercent" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetMaxEjectionPercent"></a>

```java
public void resetMaxEjectionPercent()
```

##### `resetSuccessRateMinimumHosts` <a name="resetSuccessRateMinimumHosts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateMinimumHosts"></a>

```java
public void resetSuccessRateMinimumHosts()
```

##### `resetSuccessRateRequestVolume` <a name="resetSuccessRateRequestVolume" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateRequestVolume"></a>

```java
public void resetSuccessRateRequestVolume()
```

##### `resetSuccessRateStdevFactor` <a name="resetSuccessRateStdevFactor" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.resetSuccessRateStdevFactor"></a>

```java
public void resetSuccessRateStdevFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">baseEjectionTime</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference">ComputeBackendServiceOutlierDetectionIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput">baseEjectionTimeInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput">consecutiveErrorsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput">consecutiveGatewayFailureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput">enforcingConsecutiveErrorsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput">enforcingConsecutiveGatewayFailureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput">enforcingSuccessRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.intervalInput">intervalInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput">maxEjectionPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput">successRateMinimumHostsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput">successRateRequestVolumeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput">successRateStdevFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">consecutiveErrors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">consecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">enforcingConsecutiveErrors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">enforcingConsecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">enforcingSuccessRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">successRateMinimumHosts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">successRateRequestVolume</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">successRateStdevFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseEjectionTime`<sup>Required</sup> <a name="baseEjectionTime" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```java
public ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference getBaseEjectionTime();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference">ComputeBackendServiceOutlierDetectionBaseEjectionTimeOutputReference</a>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```java
public ComputeBackendServiceOutlierDetectionIntervalOutputReference getInterval();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionIntervalOutputReference">ComputeBackendServiceOutlierDetectionIntervalOutputReference</a>

---

##### `baseEjectionTimeInput`<sup>Optional</sup> <a name="baseEjectionTimeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.baseEjectionTimeInput"></a>

```java
public ComputeBackendServiceOutlierDetectionBaseEjectionTime getBaseEjectionTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionBaseEjectionTime">ComputeBackendServiceOutlierDetectionBaseEjectionTime</a>

---

##### `consecutiveErrorsInput`<sup>Optional</sup> <a name="consecutiveErrorsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrorsInput"></a>

```java
public java.lang.Number getConsecutiveErrorsInput();
```

- *Type:* java.lang.Number

---

##### `consecutiveGatewayFailureInput`<sup>Optional</sup> <a name="consecutiveGatewayFailureInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailureInput"></a>

```java
public java.lang.Number getConsecutiveGatewayFailureInput();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveErrorsInput`<sup>Optional</sup> <a name="enforcingConsecutiveErrorsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrorsInput"></a>

```java
public java.lang.Number getEnforcingConsecutiveErrorsInput();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveGatewayFailureInput`<sup>Optional</sup> <a name="enforcingConsecutiveGatewayFailureInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailureInput"></a>

```java
public java.lang.Number getEnforcingConsecutiveGatewayFailureInput();
```

- *Type:* java.lang.Number

---

##### `enforcingSuccessRateInput`<sup>Optional</sup> <a name="enforcingSuccessRateInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRateInput"></a>

```java
public java.lang.Number getEnforcingSuccessRateInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.intervalInput"></a>

```java
public ComputeBackendServiceOutlierDetectionInterval getIntervalInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionInterval">ComputeBackendServiceOutlierDetectionInterval</a>

---

##### `maxEjectionPercentInput`<sup>Optional</sup> <a name="maxEjectionPercentInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercentInput"></a>

```java
public java.lang.Number getMaxEjectionPercentInput();
```

- *Type:* java.lang.Number

---

##### `successRateMinimumHostsInput`<sup>Optional</sup> <a name="successRateMinimumHostsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHostsInput"></a>

```java
public java.lang.Number getSuccessRateMinimumHostsInput();
```

- *Type:* java.lang.Number

---

##### `successRateRequestVolumeInput`<sup>Optional</sup> <a name="successRateRequestVolumeInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolumeInput"></a>

```java
public java.lang.Number getSuccessRateRequestVolumeInput();
```

- *Type:* java.lang.Number

---

##### `successRateStdevFactorInput`<sup>Optional</sup> <a name="successRateStdevFactorInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactorInput"></a>

```java
public java.lang.Number getSuccessRateStdevFactorInput();
```

- *Type:* java.lang.Number

---

##### `consecutiveErrors`<sup>Required</sup> <a name="consecutiveErrors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```java
public java.lang.Number getConsecutiveErrors();
```

- *Type:* java.lang.Number

---

##### `consecutiveGatewayFailure`<sup>Required</sup> <a name="consecutiveGatewayFailure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```java
public java.lang.Number getConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveErrors`<sup>Required</sup> <a name="enforcingConsecutiveErrors" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```java
public java.lang.Number getEnforcingConsecutiveErrors();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveGatewayFailure`<sup>Required</sup> <a name="enforcingConsecutiveGatewayFailure" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```java
public java.lang.Number getEnforcingConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

---

##### `enforcingSuccessRate`<sup>Required</sup> <a name="enforcingSuccessRate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```java
public java.lang.Number getEnforcingSuccessRate();
```

- *Type:* java.lang.Number

---

##### `maxEjectionPercent`<sup>Required</sup> <a name="maxEjectionPercent" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```java
public java.lang.Number getMaxEjectionPercent();
```

- *Type:* java.lang.Number

---

##### `successRateMinimumHosts`<sup>Required</sup> <a name="successRateMinimumHosts" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```java
public java.lang.Number getSuccessRateMinimumHosts();
```

- *Type:* java.lang.Number

---

##### `successRateRequestVolume`<sup>Required</sup> <a name="successRateRequestVolume" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```java
public java.lang.Number getSuccessRateRequestVolume();
```

- *Type:* java.lang.Number

---

##### `successRateStdevFactor`<sup>Required</sup> <a name="successRateStdevFactor" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```java
public java.lang.Number getSuccessRateStdevFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceOutlierDetection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceOutlierDetection">ComputeBackendServiceOutlierDetection</a>

---


### ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference <a name="ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference;

new ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyVersion">resetAccessKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetOriginRegion">resetOriginRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyId"></a>

```java
public void resetAccessKeyId()
```

##### `resetAccessKeyVersion` <a name="resetAccessKeyVersion" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetAccessKeyVersion"></a>

```java
public void resetAccessKeyVersion()
```

##### `resetOriginRegion` <a name="resetOriginRegion" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.resetOriginRegion"></a>

```java
public void resetOriginRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersionInput">accessKeyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegionInput">originRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersion">accessKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegion">originRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `accessKeyVersionInput`<sup>Optional</sup> <a name="accessKeyVersionInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersionInput"></a>

```java
public java.lang.String getAccessKeyVersionInput();
```

- *Type:* java.lang.String

---

##### `originRegionInput`<sup>Optional</sup> <a name="originRegionInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegionInput"></a>

```java
public java.lang.String getOriginRegionInput();
```

- *Type:* java.lang.String

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `accessKeyVersion`<sup>Required</sup> <a name="accessKeyVersion" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.accessKeyVersion"></a>

```java
public java.lang.String getAccessKeyVersion();
```

- *Type:* java.lang.String

---

##### `originRegion`<sup>Required</sup> <a name="originRegion" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.originRegion"></a>

```java
public java.lang.String getOriginRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceSecuritySettingsAwsV4Authentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---


### ComputeBackendServiceSecuritySettingsOutputReference <a name="ComputeBackendServiceSecuritySettingsOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceSecuritySettingsOutputReference;

new ComputeBackendServiceSecuritySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication">putAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resetAwsV4Authentication">resetAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resetClientTlsPolicy">resetClientTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resetSubjectAltNames">resetSubjectAltNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsV4Authentication` <a name="putAwsV4Authentication" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication"></a>

```java
public void putAwsV4Authentication(ComputeBackendServiceSecuritySettingsAwsV4Authentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.putAwsV4Authentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---

##### `resetAwsV4Authentication` <a name="resetAwsV4Authentication" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resetAwsV4Authentication"></a>

```java
public void resetAwsV4Authentication()
```

##### `resetClientTlsPolicy` <a name="resetClientTlsPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resetClientTlsPolicy"></a>

```java
public void resetClientTlsPolicy()
```

##### `resetSubjectAltNames` <a name="resetSubjectAltNames" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.resetSubjectAltNames"></a>

```java
public void resetSubjectAltNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.awsV4Authentication">awsV4Authentication</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference">ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.awsV4AuthenticationInput">awsV4AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicyInput">clientTlsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNamesInput">subjectAltNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy">clientTlsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames">subjectAltNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsV4Authentication`<sup>Required</sup> <a name="awsV4Authentication" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.awsV4Authentication"></a>

```java
public ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference getAwsV4Authentication();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference">ComputeBackendServiceSecuritySettingsAwsV4AuthenticationOutputReference</a>

---

##### `awsV4AuthenticationInput`<sup>Optional</sup> <a name="awsV4AuthenticationInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.awsV4AuthenticationInput"></a>

```java
public ComputeBackendServiceSecuritySettingsAwsV4Authentication getAwsV4AuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsAwsV4Authentication">ComputeBackendServiceSecuritySettingsAwsV4Authentication</a>

---

##### `clientTlsPolicyInput`<sup>Optional</sup> <a name="clientTlsPolicyInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicyInput"></a>

```java
public java.lang.String getClientTlsPolicyInput();
```

- *Type:* java.lang.String

---

##### `subjectAltNamesInput`<sup>Optional</sup> <a name="subjectAltNamesInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNamesInput"></a>

```java
public java.util.List<java.lang.String> getSubjectAltNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientTlsPolicy`<sup>Required</sup> <a name="clientTlsPolicy" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.clientTlsPolicy"></a>

```java
public java.lang.String getClientTlsPolicy();
```

- *Type:* java.lang.String

---

##### `subjectAltNames`<sup>Required</sup> <a name="subjectAltNames" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.subjectAltNames"></a>

```java
public java.util.List<java.lang.String> getSubjectAltNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettingsOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceSecuritySettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceSecuritySettings">ComputeBackendServiceSecuritySettings</a>

---


### ComputeBackendServiceStrongSessionAffinityCookieOutputReference <a name="ComputeBackendServiceStrongSessionAffinityCookieOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceStrongSessionAffinityCookieOutputReference;

new ComputeBackendServiceStrongSessionAffinityCookieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl">putTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTtl` <a name="putTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl"></a>

```java
public void putTtl(ComputeBackendServiceStrongSessionAffinityCookieTtl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference">ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput">ttlInput</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl"></a>

```java
public ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference getTtl();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference">ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.ttlInput"></a>

```java
public ComputeBackendServiceStrongSessionAffinityCookieTtl getTtlInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceStrongSessionAffinityCookie getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookie">ComputeBackendServiceStrongSessionAffinityCookie</a>

---


### ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference <a name="ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference;

new ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos">resetNanos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.resetNanos"></a>

```java
public void resetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue"></a>

```java
public ComputeBackendServiceStrongSessionAffinityCookieTtl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceStrongSessionAffinityCookieTtl">ComputeBackendServiceStrongSessionAffinityCookieTtl</a>

---


### ComputeBackendServiceTimeoutsOutputReference <a name="ComputeBackendServiceTimeoutsOutputReference" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_backend_service.ComputeBackendServiceTimeoutsOutputReference;

new ComputeBackendServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeBackendService.ComputeBackendServiceTimeouts">ComputeBackendServiceTimeouts</a>

---



