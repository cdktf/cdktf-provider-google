# `computeRegionTargetHttpsProxy` Submodule <a name="`computeRegionTargetHttpsProxy` Submodule" id="@cdktf/provider-google.computeRegionTargetHttpsProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionTargetHttpsProxy <a name="ComputeRegionTargetHttpsProxy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy google_compute_region_target_https_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_target_https_proxy.ComputeRegionTargetHttpsProxy;

ComputeRegionTargetHttpsProxy.Builder.create(Construct scope, java.lang.String id)
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
//  .description(java.lang.String)
//  .httpKeepAliveTimeoutSec(java.lang.Number)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .serverTlsPolicy(java.lang.String)
//  .sslCertificates(java.util.List<java.lang.String>)
//  .sslPolicy(java.lang.String)
//  .timeouts(ComputeRegionTargetHttpsProxyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.urlMap">urlMap</a></code> | <code>java.lang.String</code> | A reference to the RegionUrlMap resource that defines the mapping from URL to the RegionBackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.certificateManagerCertificates">certificateManagerCertificates</a></code> | <code>java.util.List<java.lang.String></code> | URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>java.lang.Number</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created target https proxy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.serverTlsPolicy">serverTlsPolicy</a></code> | <code>java.lang.String</code> | A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.sslCertificates">sslCertificates</a></code> | <code>java.util.List<java.lang.String></code> | URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | A reference to the Region SslPolicy resource that will be associated with the TargetHttpsProxy resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#name ComputeRegionTargetHttpsProxy#name}

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.urlMap"></a>

- *Type:* java.lang.String

A reference to the RegionUrlMap resource that defines the mapping from URL to the RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#url_map ComputeRegionTargetHttpsProxy#url_map}

---

##### `certificateManagerCertificates`<sup>Optional</sup> <a name="certificateManagerCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.certificateManagerCertificates"></a>

- *Type:* java.util.List<java.lang.String>

URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.

sslCertificates and certificateManagerCertificates can't be defined together.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#certificate_manager_certificates ComputeRegionTargetHttpsProxy#certificate_manager_certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#description ComputeRegionTargetHttpsProxy#description}

---

##### `httpKeepAliveTimeoutSec`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.httpKeepAliveTimeoutSec"></a>

- *Type:* java.lang.Number

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value (600 seconds) will be used. For Regioanl
HTTP(S) load balancer, the minimum allowed value is 5 seconds and the
maximum allowed value is 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#http_keep_alive_timeout_sec ComputeRegionTargetHttpsProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#region ComputeRegionTargetHttpsProxy#region}

---

##### `serverTlsPolicy`<sup>Optional</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.serverTlsPolicy"></a>

- *Type:* java.lang.String

A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.

If you remove this field from your configuration at the same time as
deleting or recreating a referenced ServerTlsPolicy resource, you will
receive a resourceInUseByAnotherResource error. Use lifecycle.create_before_destroy
within the ServerTlsPolicy resource to avoid this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#server_tls_policy ComputeRegionTargetHttpsProxy#server_tls_policy}

---

##### `sslCertificates`<sup>Optional</sup> <a name="sslCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.sslCertificates"></a>

- *Type:* java.util.List<java.lang.String>

URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.

At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.
sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#ssl_certificates ComputeRegionTargetHttpsProxy#ssl_certificates}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.sslPolicy"></a>

- *Type:* java.lang.String

A reference to the Region SslPolicy resource that will be associated with the TargetHttpsProxy resource.

If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#ssl_policy ComputeRegionTargetHttpsProxy#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#timeouts ComputeRegionTargetHttpsProxy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetCertificateManagerCertificates">resetCertificateManagerCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetHttpKeepAliveTimeoutSec">resetHttpKeepAliveTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetServerTlsPolicy">resetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetSslCertificates">resetSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts"></a>

```java
public void putTimeouts(ComputeRegionTargetHttpsProxyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

---

##### `resetCertificateManagerCertificates` <a name="resetCertificateManagerCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetCertificateManagerCertificates"></a>

```java
public void resetCertificateManagerCertificates()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHttpKeepAliveTimeoutSec` <a name="resetHttpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetHttpKeepAliveTimeoutSec"></a>

```java
public void resetHttpKeepAliveTimeoutSec()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServerTlsPolicy` <a name="resetServerTlsPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetServerTlsPolicy"></a>

```java
public void resetServerTlsPolicy()
```

##### `resetSslCertificates` <a name="resetSslCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetSslCertificates"></a>

```java
public void resetSslCertificates()
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetSslPolicy"></a>

```java
public void resetSslPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionTargetHttpsProxy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_target_https_proxy.ComputeRegionTargetHttpsProxy;

ComputeRegionTargetHttpsProxy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_target_https_proxy.ComputeRegionTargetHttpsProxy;

ComputeRegionTargetHttpsProxy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_target_https_proxy.ComputeRegionTargetHttpsProxy;

ComputeRegionTargetHttpsProxy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_target_https_proxy.ComputeRegionTargetHttpsProxy;

ComputeRegionTargetHttpsProxy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeRegionTargetHttpsProxy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeRegionTargetHttpsProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeRegionTargetHttpsProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeRegionTargetHttpsProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionTargetHttpsProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.proxyId">proxyId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference">ComputeRegionTargetHttpsProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.certificateManagerCertificatesInput">certificateManagerCertificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput">httpKeepAliveTimeoutSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.serverTlsPolicyInput">serverTlsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificatesInput">sslCertificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslPolicyInput">sslPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMapInput">urlMapInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.certificateManagerCertificates">certificateManagerCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificates">sslCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMap">urlMap</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `proxyId`<sup>Required</sup> <a name="proxyId" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.proxyId"></a>

```java
public java.lang.Number getProxyId();
```

- *Type:* java.lang.Number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeouts"></a>

```java
public ComputeRegionTargetHttpsProxyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference">ComputeRegionTargetHttpsProxyTimeoutsOutputReference</a>

---

##### `certificateManagerCertificatesInput`<sup>Optional</sup> <a name="certificateManagerCertificatesInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.certificateManagerCertificatesInput"></a>

```java
public java.util.List<java.lang.String> getCertificateManagerCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `httpKeepAliveTimeoutSecInput`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSecInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.httpKeepAliveTimeoutSecInput"></a>

```java
public java.lang.Number getHttpKeepAliveTimeoutSecInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serverTlsPolicyInput`<sup>Optional</sup> <a name="serverTlsPolicyInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.serverTlsPolicyInput"></a>

```java
public java.lang.String getServerTlsPolicyInput();
```

- *Type:* java.lang.String

---

##### `sslCertificatesInput`<sup>Optional</sup> <a name="sslCertificatesInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificatesInput"></a>

```java
public java.util.List<java.lang.String> getSslCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslPolicyInput"></a>

```java
public java.lang.String getSslPolicyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

---

##### `urlMapInput`<sup>Optional</sup> <a name="urlMapInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMapInput"></a>

```java
public java.lang.String getUrlMapInput();
```

- *Type:* java.lang.String

---

##### `certificateManagerCertificates`<sup>Required</sup> <a name="certificateManagerCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.certificateManagerCertificates"></a>

```java
public java.util.List<java.lang.String> getCertificateManagerCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `httpKeepAliveTimeoutSec`<sup>Required</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.httpKeepAliveTimeoutSec"></a>

```java
public java.lang.Number getHttpKeepAliveTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serverTlsPolicy`<sup>Required</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.serverTlsPolicy"></a>

```java
public java.lang.String getServerTlsPolicy();
```

- *Type:* java.lang.String

---

##### `sslCertificates`<sup>Required</sup> <a name="sslCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificates"></a>

```java
public java.util.List<java.lang.String> getSslCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslPolicy"></a>

```java
public java.lang.String getSslPolicy();
```

- *Type:* java.lang.String

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMap"></a>

```java
public java.lang.String getUrlMap();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionTargetHttpsProxyConfig <a name="ComputeRegionTargetHttpsProxyConfig" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_target_https_proxy.ComputeRegionTargetHttpsProxyConfig;

ComputeRegionTargetHttpsProxyConfig.builder()
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
//  .description(java.lang.String)
//  .httpKeepAliveTimeoutSec(java.lang.Number)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .serverTlsPolicy(java.lang.String)
//  .sslCertificates(java.util.List<java.lang.String>)
//  .sslPolicy(java.lang.String)
//  .timeouts(ComputeRegionTargetHttpsProxyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.urlMap">urlMap</a></code> | <code>java.lang.String</code> | A reference to the RegionUrlMap resource that defines the mapping from URL to the RegionBackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.certificateManagerCertificates">certificateManagerCertificates</a></code> | <code>java.util.List<java.lang.String></code> | URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec">httpKeepAliveTimeoutSec</a></code> | <code>java.lang.Number</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created target https proxy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>java.lang.String</code> | A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslCertificates">sslCertificates</a></code> | <code>java.util.List<java.lang.String></code> | URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | A reference to the Region SslPolicy resource that will be associated with the TargetHttpsProxy resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#name ComputeRegionTargetHttpsProxy#name}

---

##### `urlMap`<sup>Required</sup> <a name="urlMap" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.urlMap"></a>

```java
public java.lang.String getUrlMap();
```

- *Type:* java.lang.String

A reference to the RegionUrlMap resource that defines the mapping from URL to the RegionBackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#url_map ComputeRegionTargetHttpsProxy#url_map}

---

##### `certificateManagerCertificates`<sup>Optional</sup> <a name="certificateManagerCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.certificateManagerCertificates"></a>

```java
public java.util.List<java.lang.String> getCertificateManagerCertificates();
```

- *Type:* java.util.List<java.lang.String>

URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.

sslCertificates and certificateManagerCertificates can't be defined together.
Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#certificate_manager_certificates ComputeRegionTargetHttpsProxy#certificate_manager_certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#description ComputeRegionTargetHttpsProxy#description}

---

##### `httpKeepAliveTimeoutSec`<sup>Optional</sup> <a name="httpKeepAliveTimeoutSec" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.httpKeepAliveTimeoutSec"></a>

```java
public java.lang.Number getHttpKeepAliveTimeoutSec();
```

- *Type:* java.lang.Number

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value (600 seconds) will be used. For Regioanl
HTTP(S) load balancer, the minimum allowed value is 5 seconds and the
maximum allowed value is 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#http_keep_alive_timeout_sec ComputeRegionTargetHttpsProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#region ComputeRegionTargetHttpsProxy#region}

---

##### `serverTlsPolicy`<sup>Optional</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.serverTlsPolicy"></a>

```java
public java.lang.String getServerTlsPolicy();
```

- *Type:* java.lang.String

A URL referring to a networksecurity.ServerTlsPolicy resource that describes how the proxy should authenticate inbound traffic. serverTlsPolicy only applies to a global TargetHttpsProxy attached to globalForwardingRules with the loadBalancingScheme set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED. For details which ServerTlsPolicy resources are accepted with INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED loadBalancingScheme consult ServerTlsPolicy documentation. If left blank, communications are not encrypted.

If you remove this field from your configuration at the same time as
deleting or recreating a referenced ServerTlsPolicy resource, you will
receive a resourceInUseByAnotherResource error. Use lifecycle.create_before_destroy
within the ServerTlsPolicy resource to avoid this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#server_tls_policy ComputeRegionTargetHttpsProxy#server_tls_policy}

---

##### `sslCertificates`<sup>Optional</sup> <a name="sslCertificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslCertificates"></a>

```java
public java.util.List<java.lang.String> getSslCertificates();
```

- *Type:* java.util.List<java.lang.String>

URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.

At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.
sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#ssl_certificates ComputeRegionTargetHttpsProxy#ssl_certificates}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslPolicy"></a>

```java
public java.lang.String getSslPolicy();
```

- *Type:* java.lang.String

A reference to the Region SslPolicy resource that will be associated with the TargetHttpsProxy resource.

If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#ssl_policy ComputeRegionTargetHttpsProxy#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.timeouts"></a>

```java
public ComputeRegionTargetHttpsProxyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#timeouts ComputeRegionTargetHttpsProxy#timeouts}

---

### ComputeRegionTargetHttpsProxyTimeouts <a name="ComputeRegionTargetHttpsProxyTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_target_https_proxy.ComputeRegionTargetHttpsProxyTimeouts;

ComputeRegionTargetHttpsProxyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#create ComputeRegionTargetHttpsProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#delete ComputeRegionTargetHttpsProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#update ComputeRegionTargetHttpsProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#create ComputeRegionTargetHttpsProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#delete ComputeRegionTargetHttpsProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/compute_region_target_https_proxy#update ComputeRegionTargetHttpsProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionTargetHttpsProxyTimeoutsOutputReference <a name="ComputeRegionTargetHttpsProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_target_https_proxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference;

new ComputeRegionTargetHttpsProxyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

---



