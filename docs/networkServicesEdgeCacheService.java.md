# `networkServicesEdgeCacheService` Submodule <a name="`networkServicesEdgeCacheService` Submodule" id="@cdktf/provider-google.networkServicesEdgeCacheService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesEdgeCacheService <a name="NetworkServicesEdgeCacheService" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service google_network_services_edge_cache_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheService;

NetworkServicesEdgeCacheService.Builder.create(Construct scope, java.lang.String id)
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
    .routing(NetworkServicesEdgeCacheServiceRouting)
//  .description(java.lang.String)
//  .disableHttp2(java.lang.Boolean)
//  .disableHttp2(IResolvable)
//  .disableQuic(java.lang.Boolean)
//  .disableQuic(IResolvable)
//  .edgeSecurityPolicy(java.lang.String)
//  .edgeSslCertificates(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .logConfig(NetworkServicesEdgeCacheServiceLogConfig)
//  .project(java.lang.String)
//  .requireTls(java.lang.Boolean)
//  .requireTls(IResolvable)
//  .sslPolicy(java.lang.String)
//  .timeouts(NetworkServicesEdgeCacheServiceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.routing">routing</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.disableHttp2">disableHttp2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables HTTP/2. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.disableQuic">disableQuic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | HTTP/3 (IETF QUIC) and Google QUIC are enabled by default. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>java.lang.String</code> | Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.edgeSslCertificates">edgeSslCertificates</a></code> | <code>java.util.List<java.lang.String></code> | URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#id NetworkServicesEdgeCacheService#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#project NetworkServicesEdgeCacheService#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.requireTls">requireTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require TLS (HTTPS) for all clients connecting to this service. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | URL of the SslPolicy resource that will be associated with the EdgeCacheService. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts">NetworkServicesEdgeCacheServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#name NetworkServicesEdgeCacheService#name}

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.routing"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#routing NetworkServicesEdgeCacheService#routing}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#description NetworkServicesEdgeCacheService#description}

---

##### `disableHttp2`<sup>Optional</sup> <a name="disableHttp2" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.disableHttp2"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables HTTP/2.

HTTP/2 (h2) is enabled by default and recommended for performance. HTTP/2 improves connection re-use and reduces connection setup overhead by sending multiple streams over the same connection.

Some legacy HTTP clients may have issues with HTTP/2 connections due to broken HTTP/2 implementations. Setting this to true will prevent HTTP/2 from being advertised and negotiated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#disable_http2 NetworkServicesEdgeCacheService#disable_http2}

---

##### `disableQuic`<sup>Optional</sup> <a name="disableQuic" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.disableQuic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

HTTP/3 (IETF QUIC) and Google QUIC are enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#disable_quic NetworkServicesEdgeCacheService#disable_quic}

---

##### `edgeSecurityPolicy`<sup>Optional</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.edgeSecurityPolicy"></a>

- *Type:* java.lang.String

Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#edge_security_policy NetworkServicesEdgeCacheService#edge_security_policy}

---

##### `edgeSslCertificates`<sup>Optional</sup> <a name="edgeSslCertificates" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.edgeSslCertificates"></a>

- *Type:* java.util.List<java.lang.String>

URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService.

Note that only "global" certificates with a "scope" of "EDGE_CACHE" can be attached to an EdgeCacheService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#edge_ssl_certificates NetworkServicesEdgeCacheService#edge_ssl_certificates}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#id NetworkServicesEdgeCacheService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the EdgeCache resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#labels NetworkServicesEdgeCacheService#labels}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#log_config NetworkServicesEdgeCacheService#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#project NetworkServicesEdgeCacheService#project}.

---

##### `requireTls`<sup>Optional</sup> <a name="requireTls" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.requireTls"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require TLS (HTTPS) for all clients connecting to this service.

Clients who connect over HTTP (port 80) will receive a HTTP 301 to the same URL over HTTPS (port 443).
You must have at least one (1) edgeSslCertificate specified to enable this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#require_tls NetworkServicesEdgeCacheService#require_tls}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.sslPolicy"></a>

- *Type:* java.lang.String

URL of the SslPolicy resource that will be associated with the EdgeCacheService.

If not set, the EdgeCacheService has no SSL policy configured, and will default to the "COMPATIBLE" policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#ssl_policy NetworkServicesEdgeCacheService#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts">NetworkServicesEdgeCacheServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#timeouts NetworkServicesEdgeCacheService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putRouting">putRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetDisableHttp2">resetDisableHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetDisableQuic">resetDisableQuic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetEdgeSecurityPolicy">resetEdgeSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetEdgeSslCertificates">resetEdgeSslCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetRequireTls">resetRequireTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putLogConfig"></a>

```java
public void putLogConfig(NetworkServicesEdgeCacheServiceLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a>

---

##### `putRouting` <a name="putRouting" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putRouting"></a>

```java
public void putRouting(NetworkServicesEdgeCacheServiceRouting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesEdgeCacheServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts">NetworkServicesEdgeCacheServiceTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableHttp2` <a name="resetDisableHttp2" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetDisableHttp2"></a>

```java
public void resetDisableHttp2()
```

##### `resetDisableQuic` <a name="resetDisableQuic" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetDisableQuic"></a>

```java
public void resetDisableQuic()
```

##### `resetEdgeSecurityPolicy` <a name="resetEdgeSecurityPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetEdgeSecurityPolicy"></a>

```java
public void resetEdgeSecurityPolicy()
```

##### `resetEdgeSslCertificates` <a name="resetEdgeSslCertificates" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetEdgeSslCertificates"></a>

```java
public void resetEdgeSslCertificates()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetProject"></a>

```java
public void resetProject()
```

##### `resetRequireTls` <a name="resetRequireTls" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetRequireTls"></a>

```java
public void resetRequireTls()
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetSslPolicy"></a>

```java
public void resetSslPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesEdgeCacheService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheService;

NetworkServicesEdgeCacheService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheService;

NetworkServicesEdgeCacheService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheService;

NetworkServicesEdgeCacheService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheService;

NetworkServicesEdgeCacheService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesEdgeCacheService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkServicesEdgeCacheService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesEdgeCacheService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesEdgeCacheService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesEdgeCacheService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.ipv4Addresses">ipv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference">NetworkServicesEdgeCacheServiceLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference">NetworkServicesEdgeCacheServiceRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference">NetworkServicesEdgeCacheServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableHttp2Input">disableHttp2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableQuicInput">disableQuicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSecurityPolicyInput">edgeSecurityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSslCertificatesInput">edgeSslCertificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.requireTlsInput">requireTlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.routingInput">routingInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.sslPolicyInput">sslPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts">NetworkServicesEdgeCacheServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableHttp2">disableHttp2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableQuic">disableQuic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSslCertificates">edgeSslCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.requireTls">requireTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.ipv4Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.ipv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.logConfig"></a>

```java
public NetworkServicesEdgeCacheServiceLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference">NetworkServicesEdgeCacheServiceLogConfigOutputReference</a>

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.routing"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingOutputReference getRouting();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference">NetworkServicesEdgeCacheServiceRoutingOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.timeouts"></a>

```java
public NetworkServicesEdgeCacheServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference">NetworkServicesEdgeCacheServiceTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableHttp2Input`<sup>Optional</sup> <a name="disableHttp2Input" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableHttp2Input"></a>

```java
public java.lang.Object getDisableHttp2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableQuicInput`<sup>Optional</sup> <a name="disableQuicInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableQuicInput"></a>

```java
public java.lang.Object getDisableQuicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `edgeSecurityPolicyInput`<sup>Optional</sup> <a name="edgeSecurityPolicyInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSecurityPolicyInput"></a>

```java
public java.lang.String getEdgeSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `edgeSslCertificatesInput`<sup>Optional</sup> <a name="edgeSslCertificatesInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSslCertificatesInput"></a>

```java
public java.util.List<java.lang.String> getEdgeSslCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.logConfigInput"></a>

```java
public NetworkServicesEdgeCacheServiceLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `requireTlsInput`<sup>Optional</sup> <a name="requireTlsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.requireTlsInput"></a>

```java
public java.lang.Object getRequireTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.routingInput"></a>

```java
public NetworkServicesEdgeCacheServiceRouting getRoutingInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a>

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.sslPolicyInput"></a>

```java
public java.lang.String getSslPolicyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts">NetworkServicesEdgeCacheServiceTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableHttp2`<sup>Required</sup> <a name="disableHttp2" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableHttp2"></a>

```java
public java.lang.Object getDisableHttp2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableQuic`<sup>Required</sup> <a name="disableQuic" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.disableQuic"></a>

```java
public java.lang.Object getDisableQuic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `edgeSecurityPolicy`<sup>Required</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSecurityPolicy"></a>

```java
public java.lang.String getEdgeSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `edgeSslCertificates`<sup>Required</sup> <a name="edgeSslCertificates" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.edgeSslCertificates"></a>

```java
public java.util.List<java.lang.String> getEdgeSslCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `requireTls`<sup>Required</sup> <a name="requireTls" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.requireTls"></a>

```java
public java.lang.Object getRequireTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.sslPolicy"></a>

```java
public java.lang.String getSslPolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesEdgeCacheServiceConfig <a name="NetworkServicesEdgeCacheServiceConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceConfig;

NetworkServicesEdgeCacheServiceConfig.builder()
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
    .routing(NetworkServicesEdgeCacheServiceRouting)
//  .description(java.lang.String)
//  .disableHttp2(java.lang.Boolean)
//  .disableHttp2(IResolvable)
//  .disableQuic(java.lang.Boolean)
//  .disableQuic(IResolvable)
//  .edgeSecurityPolicy(java.lang.String)
//  .edgeSslCertificates(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .logConfig(NetworkServicesEdgeCacheServiceLogConfig)
//  .project(java.lang.String)
//  .requireTls(java.lang.Boolean)
//  .requireTls(IResolvable)
//  .sslPolicy(java.lang.String)
//  .timeouts(NetworkServicesEdgeCacheServiceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.routing">routing</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a></code> | routing block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.disableHttp2">disableHttp2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables HTTP/2. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.disableQuic">disableQuic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | HTTP/3 (IETF QUIC) and Google QUIC are enabled by default. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>java.lang.String</code> | Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.edgeSslCertificates">edgeSslCertificates</a></code> | <code>java.util.List<java.lang.String></code> | URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#id NetworkServicesEdgeCacheService#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#project NetworkServicesEdgeCacheService#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.requireTls">requireTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require TLS (HTTPS) for all clients connecting to this service. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | URL of the SslPolicy resource that will be associated with the EdgeCacheService. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts">NetworkServicesEdgeCacheServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#name NetworkServicesEdgeCacheService#name}

---

##### `routing`<sup>Required</sup> <a name="routing" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.routing"></a>

```java
public NetworkServicesEdgeCacheServiceRouting getRouting();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a>

routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#routing NetworkServicesEdgeCacheService#routing}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#description NetworkServicesEdgeCacheService#description}

---

##### `disableHttp2`<sup>Optional</sup> <a name="disableHttp2" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.disableHttp2"></a>

```java
public java.lang.Object getDisableHttp2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables HTTP/2.

HTTP/2 (h2) is enabled by default and recommended for performance. HTTP/2 improves connection re-use and reduces connection setup overhead by sending multiple streams over the same connection.

Some legacy HTTP clients may have issues with HTTP/2 connections due to broken HTTP/2 implementations. Setting this to true will prevent HTTP/2 from being advertised and negotiated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#disable_http2 NetworkServicesEdgeCacheService#disable_http2}

---

##### `disableQuic`<sup>Optional</sup> <a name="disableQuic" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.disableQuic"></a>

```java
public java.lang.Object getDisableQuic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

HTTP/3 (IETF QUIC) and Google QUIC are enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#disable_quic NetworkServicesEdgeCacheService#disable_quic}

---

##### `edgeSecurityPolicy`<sup>Optional</sup> <a name="edgeSecurityPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.edgeSecurityPolicy"></a>

```java
public java.lang.String getEdgeSecurityPolicy();
```

- *Type:* java.lang.String

Resource URL that points at the Cloud Armor edge security policy that is applied on each request against the EdgeCacheService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#edge_security_policy NetworkServicesEdgeCacheService#edge_security_policy}

---

##### `edgeSslCertificates`<sup>Optional</sup> <a name="edgeSslCertificates" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.edgeSslCertificates"></a>

```java
public java.util.List<java.lang.String> getEdgeSslCertificates();
```

- *Type:* java.util.List<java.lang.String>

URLs to sslCertificate resources that are used to authenticate connections between users and the EdgeCacheService.

Note that only "global" certificates with a "scope" of "EDGE_CACHE" can be attached to an EdgeCacheService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#edge_ssl_certificates NetworkServicesEdgeCacheService#edge_ssl_certificates}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#id NetworkServicesEdgeCacheService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the EdgeCache resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#labels NetworkServicesEdgeCacheService#labels}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.logConfig"></a>

```java
public NetworkServicesEdgeCacheServiceLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#log_config NetworkServicesEdgeCacheService#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#project NetworkServicesEdgeCacheService#project}.

---

##### `requireTls`<sup>Optional</sup> <a name="requireTls" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.requireTls"></a>

```java
public java.lang.Object getRequireTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require TLS (HTTPS) for all clients connecting to this service.

Clients who connect over HTTP (port 80) will receive a HTTP 301 to the same URL over HTTPS (port 443).
You must have at least one (1) edgeSslCertificate specified to enable this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#require_tls NetworkServicesEdgeCacheService#require_tls}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.sslPolicy"></a>

```java
public java.lang.String getSslPolicy();
```

- *Type:* java.lang.String

URL of the SslPolicy resource that will be associated with the EdgeCacheService.

If not set, the EdgeCacheService has no SSL policy configured, and will default to the "COMPATIBLE" policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#ssl_policy NetworkServicesEdgeCacheService#ssl_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceConfig.property.timeouts"></a>

```java
public NetworkServicesEdgeCacheServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts">NetworkServicesEdgeCacheServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#timeouts NetworkServicesEdgeCacheService#timeouts}

---

### NetworkServicesEdgeCacheServiceLogConfig <a name="NetworkServicesEdgeCacheServiceLogConfig" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceLogConfig;

NetworkServicesEdgeCacheServiceLogConfig.builder()
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .sampleRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to enable logging for traffic served by this service. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | Configures the sampling rate of requests, where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0, and the value of the field must be in [0, 1]. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to enable logging for traffic served by this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#enable NetworkServicesEdgeCacheService#enable}

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

Configures the sampling rate of requests, where 1.0 means all logged requests are reported and 0.0 means no logged requests are reported. The default value is 1.0, and the value of the field must be in [0, 1].

This field can only be specified if logging is enabled for this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#sample_rate NetworkServicesEdgeCacheService#sample_rate}

---

### NetworkServicesEdgeCacheServiceRouting <a name="NetworkServicesEdgeCacheServiceRouting" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRouting;

NetworkServicesEdgeCacheServiceRouting.builder()
    .hostRule(IResolvable)
    .hostRule(java.util.List<NetworkServicesEdgeCacheServiceRoutingHostRule>)
    .pathMatcher(IResolvable)
    .pathMatcher(java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcher>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting.property.hostRule">hostRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule">NetworkServicesEdgeCacheServiceRoutingHostRule</a>></code> | host_rule block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting.property.pathMatcher">pathMatcher</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher">NetworkServicesEdgeCacheServiceRoutingPathMatcher</a>></code> | path_matcher block. |

---

##### `hostRule`<sup>Required</sup> <a name="hostRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting.property.hostRule"></a>

```java
public java.lang.Object getHostRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule">NetworkServicesEdgeCacheServiceRoutingHostRule</a>>

host_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#host_rule NetworkServicesEdgeCacheService#host_rule}

---

##### `pathMatcher`<sup>Required</sup> <a name="pathMatcher" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting.property.pathMatcher"></a>

```java
public java.lang.Object getPathMatcher();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher">NetworkServicesEdgeCacheServiceRoutingPathMatcher</a>>

path_matcher block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#path_matcher NetworkServicesEdgeCacheService#path_matcher}

---

### NetworkServicesEdgeCacheServiceRoutingHostRule <a name="NetworkServicesEdgeCacheServiceRoutingHostRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingHostRule;

NetworkServicesEdgeCacheServiceRoutingHostRule.builder()
    .hosts(java.util.List<java.lang.String>)
    .pathMatcher(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | The list of host patterns to match. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.property.pathMatcher">pathMatcher</a></code> | <code>java.lang.String</code> | The name of the pathMatcher associated with this hostRule. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the hostRule. |

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

The list of host patterns to match.

Host patterns must be valid hostnames. Ports are not allowed. Wildcard hosts are supported in the suffix or prefix form. * matches any string of ([a-z0-9-.]*). It does not match the empty string.

When multiple hosts are specified, hosts are matched in the following priority:

1. Exact domain names: ''www.foo.com''.
2. Suffix domain wildcards: ''*.foo.com'' or ''*-bar.foo.com''.
3. Prefix domain wildcards: ''foo.*'' or ''foo-*''.
4. Special wildcard ''*'' matching any domain.

Notes:

```
The wildcard will not match the empty string. e.g. ''*-bar.foo.com'' will match ''baz-bar.foo.com'' but not ''-bar.foo.com''. The longest wildcards match first. Only a single host in the entire service can match on ''*''. A domain must be unique across all configured hosts within a service.

Hosts are matched against the HTTP Host header, or for HTTP/2 and HTTP/3, the ":authority" header, from the incoming request.

You may specify up to 10 hosts.
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#hosts NetworkServicesEdgeCacheService#hosts}

---

##### `pathMatcher`<sup>Required</sup> <a name="pathMatcher" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.property.pathMatcher"></a>

```java
public java.lang.String getPathMatcher();
```

- *Type:* java.lang.String

The name of the pathMatcher associated with this hostRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#path_matcher NetworkServicesEdgeCacheService#path_matcher}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the hostRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#description NetworkServicesEdgeCacheService#description}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcher <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcher" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcher;

NetworkServicesEdgeCacheServiceRoutingPathMatcher.builder()
    .name(java.lang.String)
    .routeRule(IResolvable)
    .routeRule(java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule>)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.property.name">name</a></code> | <code>java.lang.String</code> | The name to which this PathMatcher is referred by the HostRule. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.property.routeRule">routeRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>></code> | route_rule block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name to which this PathMatcher is referred by the HostRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#name NetworkServicesEdgeCacheService#name}

---

##### `routeRule`<sup>Required</sup> <a name="routeRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.property.routeRule"></a>

```java
public java.lang.Object getRouteRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>>

route_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#route_rule NetworkServicesEdgeCacheService#route_rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#description NetworkServicesEdgeCacheService#description}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.builder()
    .matchRule(IResolvable)
    .matchRule(java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule>)
    .priority(java.lang.String)
//  .description(java.lang.String)
//  .headerAction(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction)
//  .origin(java.lang.String)
//  .routeAction(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction)
//  .routeMethods(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods)
//  .urlRedirect(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.matchRule">matchRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>></code> | match_rule block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.priority">priority</a></code> | <code>java.lang.String</code> | The priority of this route rule, where 1 is the highest priority. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the routeRule. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.headerAction">headerAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.origin">origin</a></code> | <code>java.lang.String</code> | The Origin resource that requests to this route should fetch from when a matching response is not in cache. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.routeAction">routeAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a></code> | route_action block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.routeMethods">routeMethods</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a></code> | route_methods block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.urlRedirect">urlRedirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a></code> | url_redirect block. |

---

##### `matchRule`<sup>Required</sup> <a name="matchRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.matchRule"></a>

```java
public java.lang.Object getMatchRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>>

match_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#match_rule NetworkServicesEdgeCacheService#match_rule}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

The priority of this route rule, where 1 is the highest priority.

You cannot configure two or more routeRules with the same priority. Priority for each rule must be set to a number between 1 and 999 inclusive.

Priority numbers can have gaps, which enable you to add or remove rules in the future without affecting the rest of the rules. For example, 1, 2, 3, 4, 5, 9, 12, 16 is a valid series of priority numbers
to which you could add rules numbered from 6 to 8, 10 to 11, and 13 to 15 in the future without any impact on existing rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#priority NetworkServicesEdgeCacheService#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the routeRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#description NetworkServicesEdgeCacheService#description}

---

##### `headerAction`<sup>Optional</sup> <a name="headerAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.headerAction"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction getHeaderAction();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#header_action NetworkServicesEdgeCacheService#header_action}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

The Origin resource that requests to this route should fetch from when a matching response is not in cache.

Origins can be defined as short names ("my-origin") or fully-qualified resource URLs - e.g. "networkservices.googleapis.com/projects/my-project/global/edgecacheorigins/my-origin"

Only one of origin or urlRedirect can be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#origin NetworkServicesEdgeCacheService#origin}

---

##### `routeAction`<sup>Optional</sup> <a name="routeAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.routeAction"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction getRouteAction();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a>

route_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#route_action NetworkServicesEdgeCacheService#route_action}

---

##### `routeMethods`<sup>Optional</sup> <a name="routeMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.routeMethods"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods getRouteMethods();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a>

route_methods block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#route_methods NetworkServicesEdgeCacheService#route_methods}

---

##### `urlRedirect`<sup>Optional</sup> <a name="urlRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule.property.urlRedirect"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect getUrlRedirect();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a>

url_redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#url_redirect NetworkServicesEdgeCacheService#url_redirect}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.builder()
//  .requestHeaderToAdd(IResolvable)
//  .requestHeaderToAdd(java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd>)
//  .requestHeaderToRemove(IResolvable)
//  .requestHeaderToRemove(java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove>)
//  .responseHeaderToAdd(IResolvable)
//  .responseHeaderToAdd(java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd>)
//  .responseHeaderToRemove(IResolvable)
//  .responseHeaderToRemove(java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.requestHeaderToAdd">requestHeaderToAdd</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>></code> | request_header_to_add block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.requestHeaderToRemove">requestHeaderToRemove</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>></code> | request_header_to_remove block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.responseHeaderToAdd">responseHeaderToAdd</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>></code> | response_header_to_add block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.responseHeaderToRemove">responseHeaderToRemove</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>></code> | response_header_to_remove block. |

---

##### `requestHeaderToAdd`<sup>Optional</sup> <a name="requestHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.requestHeaderToAdd"></a>

```java
public java.lang.Object getRequestHeaderToAdd();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>>

request_header_to_add block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#request_header_to_add NetworkServicesEdgeCacheService#request_header_to_add}

---

##### `requestHeaderToRemove`<sup>Optional</sup> <a name="requestHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.requestHeaderToRemove"></a>

```java
public java.lang.Object getRequestHeaderToRemove();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>>

request_header_to_remove block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#request_header_to_remove NetworkServicesEdgeCacheService#request_header_to_remove}

---

##### `responseHeaderToAdd`<sup>Optional</sup> <a name="responseHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.responseHeaderToAdd"></a>

```java
public java.lang.Object getResponseHeaderToAdd();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>>

response_header_to_add block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#response_header_to_add NetworkServicesEdgeCacheService#response_header_to_add}

---

##### `responseHeaderToRemove`<sup>Optional</sup> <a name="responseHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction.property.responseHeaderToRemove"></a>

```java
public java.lang.Object getResponseHeaderToRemove();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>>

response_header_to_remove block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#response_header_to_remove NetworkServicesEdgeCacheService#response_header_to_remove}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.builder()
    .headerName(java.lang.String)
    .headerValue(java.lang.String)
//  .replace(java.lang.Boolean)
//  .replace(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.headerName">headerName</a></code> | <code>java.lang.String</code> | The name of the header to add. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | The value of the header to add. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.replace">replace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to replace all existing headers with the same name. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

The name of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#header_name NetworkServicesEdgeCacheService#header_name}

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

The value of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#header_value NetworkServicesEdgeCacheService#header_value}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd.property.replace"></a>

```java
public java.lang.Object getReplace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to replace all existing headers with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#replace NetworkServicesEdgeCacheService#replace}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove.builder()
    .headerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove.property.headerName">headerName</a></code> | <code>java.lang.String</code> | The name of the header to remove. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

The name of the header to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#header_name NetworkServicesEdgeCacheService#header_name}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.builder()
    .headerName(java.lang.String)
    .headerValue(java.lang.String)
//  .replace(java.lang.Boolean)
//  .replace(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.headerName">headerName</a></code> | <code>java.lang.String</code> | The name of the header to add. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | The value of the header to add. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.replace">replace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to replace all existing headers with the same name. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

The name of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#header_name NetworkServicesEdgeCacheService#header_name}

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

The value of the header to add.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#header_value NetworkServicesEdgeCacheService#header_value}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd.property.replace"></a>

```java
public java.lang.Object getReplace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to replace all existing headers with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#replace NetworkServicesEdgeCacheService#replace}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove.builder()
    .headerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove.property.headerName">headerName</a></code> | <code>java.lang.String</code> | Headers to remove from the response prior to sending it back to the client. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

Headers to remove from the response prior to sending it back to the client.

Response headers are only sent to the client, and do not have an effect on the cache serving the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#header_name NetworkServicesEdgeCacheService#header_name}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.builder()
//  .fullPathMatch(java.lang.String)
//  .headerMatch(IResolvable)
//  .headerMatch(java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch>)
//  .ignoreCase(java.lang.Boolean)
//  .ignoreCase(IResolvable)
//  .pathTemplateMatch(java.lang.String)
//  .prefixMatch(java.lang.String)
//  .queryParameterMatch(IResolvable)
//  .queryParameterMatch(java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.fullPathMatch">fullPathMatch</a></code> | <code>java.lang.String</code> | For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.headerMatch">headerMatch</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>></code> | header_match block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that prefixMatch and fullPathMatch matches are case sensitive. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.pathTemplateMatch">pathTemplateMatch</a></code> | <code>java.lang.String</code> | For satisfying the matchRule condition, the path of the request must match the wildcard pattern specified in pathTemplateMatch after removing any query parameters and anchor that may be part of the original URL. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.prefixMatch">prefixMatch</a></code> | <code>java.lang.String</code> | For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.queryParameterMatch">queryParameterMatch</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>></code> | query_parameter_match block. |

---

##### `fullPathMatch`<sup>Optional</sup> <a name="fullPathMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.fullPathMatch"></a>

```java
public java.lang.String getFullPathMatch();
```

- *Type:* java.lang.String

For satisfying the matchRule condition, the path of the request must exactly match the value specified in fullPathMatch after removing any query parameters and anchor that may be part of the original URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#full_path_match NetworkServicesEdgeCacheService#full_path_match}

---

##### `headerMatch`<sup>Optional</sup> <a name="headerMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.headerMatch"></a>

```java
public java.lang.Object getHeaderMatch();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>>

header_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#header_match NetworkServicesEdgeCacheService#header_match}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that prefixMatch and fullPathMatch matches are case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#ignore_case NetworkServicesEdgeCacheService#ignore_case}

---

##### `pathTemplateMatch`<sup>Optional</sup> <a name="pathTemplateMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.pathTemplateMatch"></a>

```java
public java.lang.String getPathTemplateMatch();
```

- *Type:* java.lang.String

For satisfying the matchRule condition, the path of the request must match the wildcard pattern specified in pathTemplateMatch after removing any query parameters and anchor that may be part of the original URL.

pathTemplateMatch must be between 1 and 255 characters
(inclusive).  The pattern specified by pathTemplateMatch may
have at most 5 wildcard operators and at most 5 variable
captures in total.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#path_template_match NetworkServicesEdgeCacheService#path_template_match}

---

##### `prefixMatch`<sup>Optional</sup> <a name="prefixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.prefixMatch"></a>

```java
public java.lang.String getPrefixMatch();
```

- *Type:* java.lang.String

For satisfying the matchRule condition, the request's path must begin with the specified prefixMatch.

prefixMatch must begin with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#prefix_match NetworkServicesEdgeCacheService#prefix_match}

---

##### `queryParameterMatch`<sup>Optional</sup> <a name="queryParameterMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule.property.queryParameterMatch"></a>

```java
public java.lang.Object getQueryParameterMatch();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>>

query_parameter_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#query_parameter_match NetworkServicesEdgeCacheService#query_parameter_match}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.builder()
    .headerName(java.lang.String)
//  .exactMatch(java.lang.String)
//  .invertMatch(java.lang.Boolean)
//  .invertMatch(IResolvable)
//  .prefixMatch(java.lang.String)
//  .presentMatch(java.lang.Boolean)
//  .presentMatch(IResolvable)
//  .suffixMatch(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.headerName">headerName</a></code> | <code>java.lang.String</code> | The header name to match on. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.exactMatch">exactMatch</a></code> | <code>java.lang.String</code> | The value of the header should exactly match contents of exactMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.invertMatch">invertMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to false (default), the headerMatch is considered a match if the match criteria above are met. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.prefixMatch">prefixMatch</a></code> | <code>java.lang.String</code> | The value of the header must start with the contents of prefixMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.presentMatch">presentMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A header with the contents of headerName must exist. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.suffixMatch">suffixMatch</a></code> | <code>java.lang.String</code> | The value of the header must end with the contents of suffixMatch. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

The header name to match on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#header_name NetworkServicesEdgeCacheService#header_name}

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.exactMatch"></a>

```java
public java.lang.String getExactMatch();
```

- *Type:* java.lang.String

The value of the header should exactly match contents of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#exact_match NetworkServicesEdgeCacheService#exact_match}

---

##### `invertMatch`<sup>Optional</sup> <a name="invertMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.invertMatch"></a>

```java
public java.lang.Object getInvertMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to false (default), the headerMatch is considered a match if the match criteria above are met.

If set to true, the headerMatch is considered a match if the match criteria above are NOT met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#invert_match NetworkServicesEdgeCacheService#invert_match}

---

##### `prefixMatch`<sup>Optional</sup> <a name="prefixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.prefixMatch"></a>

```java
public java.lang.String getPrefixMatch();
```

- *Type:* java.lang.String

The value of the header must start with the contents of prefixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#prefix_match NetworkServicesEdgeCacheService#prefix_match}

---

##### `presentMatch`<sup>Optional</sup> <a name="presentMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.presentMatch"></a>

```java
public java.lang.Object getPresentMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A header with the contents of headerName must exist.

The match takes place whether or not the request's header has a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#present_match NetworkServicesEdgeCacheService#present_match}

---

##### `suffixMatch`<sup>Optional</sup> <a name="suffixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch.property.suffixMatch"></a>

```java
public java.lang.String getSuffixMatch();
```

- *Type:* java.lang.String

The value of the header must end with the contents of suffixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#suffix_match NetworkServicesEdgeCacheService#suffix_match}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.builder()
    .name(java.lang.String)
//  .exactMatch(java.lang.String)
//  .presentMatch(java.lang.Boolean)
//  .presentMatch(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.name">name</a></code> | <code>java.lang.String</code> | The name of the query parameter to match. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.exactMatch">exactMatch</a></code> | <code>java.lang.String</code> | The queryParameterMatch matches if the value of the parameter exactly matches the contents of exactMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.presentMatch">presentMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that the queryParameterMatch matches if the request contains the query parameter, irrespective of whether the parameter has a value or not. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the query parameter to match.

The query parameter must exist in the request, in the absence of which the request match fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#name NetworkServicesEdgeCacheService#name}

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.exactMatch"></a>

```java
public java.lang.String getExactMatch();
```

- *Type:* java.lang.String

The queryParameterMatch matches if the value of the parameter exactly matches the contents of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#exact_match NetworkServicesEdgeCacheService#exact_match}

---

##### `presentMatch`<sup>Optional</sup> <a name="presentMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch.property.presentMatch"></a>

```java
public java.lang.Object getPresentMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that the queryParameterMatch matches if the request contains the query parameter, irrespective of whether the parameter has a value or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#present_match NetworkServicesEdgeCacheService#present_match}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.builder()
//  .cdnPolicy(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy)
//  .compressionMode(java.lang.String)
//  .corsPolicy(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy)
//  .urlRewrite(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.compressionMode">compressionMode</a></code> | <code>java.lang.String</code> | Setting the compression mode to automatic enables dynamic compression for every eligible response. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.corsPolicy">corsPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a></code> | cors_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.urlRewrite">urlRewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a></code> | url_rewrite block. |

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.cdnPolicy"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy getCdnPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#cdn_policy NetworkServicesEdgeCacheService#cdn_policy}

---

##### `compressionMode`<sup>Optional</sup> <a name="compressionMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.compressionMode"></a>

```java
public java.lang.String getCompressionMode();
```

- *Type:* java.lang.String

Setting the compression mode to automatic enables dynamic compression for every eligible response.

When dynamic compression is enabled, it is recommended to also set a cache policy to maximize efficiency. Possible values: ["DISABLED", "AUTOMATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#compression_mode NetworkServicesEdgeCacheService#compression_mode}

---

##### `corsPolicy`<sup>Optional</sup> <a name="corsPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.corsPolicy"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy getCorsPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a>

cors_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#cors_policy NetworkServicesEdgeCacheService#cors_policy}

---

##### `urlRewrite`<sup>Optional</sup> <a name="urlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction.property.urlRewrite"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite getUrlRewrite();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#url_rewrite NetworkServicesEdgeCacheService#url_rewrite}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.builder()
//  .addSignatures(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures)
//  .cacheKeyPolicy(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy)
//  .cacheMode(java.lang.String)
//  .clientTtl(java.lang.String)
//  .defaultTtl(java.lang.String)
//  .maxTtl(java.lang.String)
//  .negativeCaching(java.lang.Boolean)
//  .negativeCaching(IResolvable)
//  .negativeCachingPolicy(java.util.Map<java.lang.String, java.lang.String>)
//  .signedRequestKeyset(java.lang.String)
//  .signedRequestMaximumExpirationTtl(java.lang.String)
//  .signedRequestMode(java.lang.String)
//  .signedTokenOptions(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.addSignatures">addSignatures</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a></code> | add_signatures block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.cacheMode">cacheMode</a></code> | <code>java.lang.String</code> | Cache modes allow users to control the behaviour of the cache, what content it should cache automatically, whether to respect origin headers, or whether to unconditionally cache all responses. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.clientTtl">clientTtl</a></code> | <code>java.lang.String</code> | Specifies a separate client (e.g. browser client) TTL, separate from the TTL used by the edge caches. Leaving this empty will use the same cache TTL for both the CDN and the client-facing response. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.String</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.negativeCaching">negativeCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestKeyset">signedRequestKeyset</a></code> | <code>java.lang.String</code> | The EdgeCacheKeyset containing the set of public keys used to validate signed requests at the edge. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestMaximumExpirationTtl">signedRequestMaximumExpirationTtl</a></code> | <code>java.lang.String</code> | Limit how far into the future the expiration time of a signed request may be. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestMode">signedRequestMode</a></code> | <code>java.lang.String</code> | Whether to enforce signed requests. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedTokenOptions">signedTokenOptions</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a></code> | signed_token_options block. |

---

##### `addSignatures`<sup>Optional</sup> <a name="addSignatures" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.addSignatures"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures getAddSignatures();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a>

add_signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#add_signatures NetworkServicesEdgeCacheService#add_signatures}

---

##### `cacheKeyPolicy`<sup>Optional</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.cacheKeyPolicy"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy getCacheKeyPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#cache_key_policy NetworkServicesEdgeCacheService#cache_key_policy}

---

##### `cacheMode`<sup>Optional</sup> <a name="cacheMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.cacheMode"></a>

```java
public java.lang.String getCacheMode();
```

- *Type:* java.lang.String

Cache modes allow users to control the behaviour of the cache, what content it should cache automatically, whether to respect origin headers, or whether to unconditionally cache all responses.

For all cache modes, Cache-Control headers will be passed to the client. Use clientTtl to override what is sent to the client. Possible values: ["CACHE_ALL_STATIC", "USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "BYPASS_CACHE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#cache_mode NetworkServicesEdgeCacheService#cache_mode}

---

##### `clientTtl`<sup>Optional</sup> <a name="clientTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.clientTtl"></a>

```java
public java.lang.String getClientTtl();
```

- *Type:* java.lang.String

Specifies a separate client (e.g. browser client) TTL, separate from the TTL used by the edge caches. Leaving this empty will use the same cache TTL for both the CDN and the client-facing response.

* The TTL must be > 0 and <= 86400s (1 day)
* The clientTtl cannot be larger than the defaultTtl (if set)
* Fractions of a second are not allowed.

Omit this field to use the defaultTtl, or the max-age set by the origin, as the client-facing TTL.

When the cache mode is set to "USE_ORIGIN_HEADERS" or "BYPASS_CACHE", you must omit this field.
A duration in seconds terminated by 's'. Example: "3s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#client_ttl NetworkServicesEdgeCacheService#client_ttl}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.defaultTtl"></a>

```java
public java.lang.String getDefaultTtl();
```

- *Type:* java.lang.String

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Defaults to 3600s (1 hour).

* The TTL must be >= 0 and <= 31,536,000 seconds (1 year)
* Setting a TTL of "0" means "always revalidate" (equivalent to must-revalidate)
* The value of defaultTTL cannot be set to a value greater than that of maxTTL.
* Fractions of a second are not allowed.
* When the cacheMode is set to FORCE_CACHE_ALL, the defaultTTL will overwrite the TTL set in all responses.

Note that infrequently accessed objects may be evicted from the cache before the defined TTL. Objects that expire will be revalidated with the origin.

When the cache mode is set to "USE_ORIGIN_HEADERS" or "BYPASS_CACHE", you must omit this field.

A duration in seconds terminated by 's'. Example: "3s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#default_ttl NetworkServicesEdgeCacheService#default_ttl}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

Specifies the maximum allowed TTL for cached content served by this origin.

Defaults to 86400s (1 day).

Cache directives that attempt to set a max-age or s-maxage higher than this, or an Expires header more than maxTtl seconds in the future will be capped at the value of maxTTL, as if it were the value of an s-maxage Cache-Control directive.

* The TTL must be >= 0 and <= 31,536,000 seconds (1 year)
* Setting a TTL of "0" means "always revalidate"
* The value of maxTtl must be equal to or greater than defaultTtl.
* Fractions of a second are not allowed.

When the cache mode is set to "USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", or "BYPASS_CACHE", you must omit this field.

A duration in seconds terminated by 's'. Example: "3s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#max_ttl NetworkServicesEdgeCacheService#max_ttl}

---

##### `negativeCaching`<sup>Optional</sup> <a name="negativeCaching" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.negativeCaching"></a>

```java
public java.lang.Object getNegativeCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

This can reduce the load on your origin and improve end-user experience by reducing response latency.

By default, the CDNPolicy will apply the following default TTLs to these status codes:

* HTTP 300 (Multiple Choice), 301, 308 (Permanent Redirects): 10m
* HTTP 404 (Not Found), 410 (Gone), 451 (Unavailable For Legal Reasons): 120s
* HTTP 405 (Method Not Found), 414 (URI Too Long), 501 (Not Implemented): 60s

These defaults can be overridden in negativeCachingPolicy

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#negative_caching NetworkServicesEdgeCacheService#negative_caching}

---

##### `negativeCachingPolicy`<sup>Optional</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.negativeCachingPolicy"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNegativeCachingPolicy();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Sets a cache TTL for the specified HTTP status code. negativeCaching must be enabled to configure negativeCachingPolicy.

* Omitting the policy and leaving negativeCaching enabled will use the default TTLs for each status code, defined in negativeCaching.
* TTLs must be >= 0 (where 0 is "always revalidate") and <= 86400s (1 day)

Note that when specifying an explicit negativeCachingPolicy, you should take care to specify a cache TTL for all response codes that you wish to cache. The CDNPolicy will not apply any default negative caching when a policy exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#negative_caching_policy NetworkServicesEdgeCacheService#negative_caching_policy}

---

##### `signedRequestKeyset`<sup>Optional</sup> <a name="signedRequestKeyset" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestKeyset"></a>

```java
public java.lang.String getSignedRequestKeyset();
```

- *Type:* java.lang.String

The EdgeCacheKeyset containing the set of public keys used to validate signed requests at the edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#signed_request_keyset NetworkServicesEdgeCacheService#signed_request_keyset}

---

##### `signedRequestMaximumExpirationTtl`<sup>Optional</sup> <a name="signedRequestMaximumExpirationTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestMaximumExpirationTtl"></a>

```java
public java.lang.String getSignedRequestMaximumExpirationTtl();
```

- *Type:* java.lang.String

Limit how far into the future the expiration time of a signed request may be.

When set, a signed request is rejected if its expiration time is later than now + signedRequestMaximumExpirationTtl, where now is the time at which the signed request is first handled by the CDN.

* The TTL must be > 0.
* Fractions of a second are not allowed.

By default, signedRequestMaximumExpirationTtl is not set and the expiration time of a signed request may be arbitrarily far into future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#signed_request_maximum_expiration_ttl NetworkServicesEdgeCacheService#signed_request_maximum_expiration_ttl}

---

##### `signedRequestMode`<sup>Optional</sup> <a name="signedRequestMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedRequestMode"></a>

```java
public java.lang.String getSignedRequestMode();
```

- *Type:* java.lang.String

Whether to enforce signed requests.

The default value is DISABLED, which means all content is public, and does not authorize access.

You must also set a signedRequestKeyset to enable signed requests.

When set to REQUIRE_SIGNATURES, all matching requests will have their signature validated. Requests that were not signed with the corresponding private key, or that are otherwise invalid (expired, do not match the signature, IP address, or header) will be rejected with a HTTP 403 and (if enabled) logged. Possible values: ["DISABLED", "REQUIRE_SIGNATURES", "REQUIRE_TOKENS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#signed_request_mode NetworkServicesEdgeCacheService#signed_request_mode}

---

##### `signedTokenOptions`<sup>Optional</sup> <a name="signedTokenOptions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy.property.signedTokenOptions"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions getSignedTokenOptions();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a>

signed_token_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#signed_token_options NetworkServicesEdgeCacheService#signed_token_options}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.builder()
    .actions(java.util.List<java.lang.String>)
//  .copiedParameters(java.util.List<java.lang.String>)
//  .keyset(java.lang.String)
//  .tokenQueryParameter(java.lang.String)
//  .tokenTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | The actions to take to add signatures to responses. Possible values: ["GENERATE_COOKIE", "GENERATE_TOKEN_HLS_COOKIELESS", "PROPAGATE_TOKEN_HLS_COOKIELESS"]. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.copiedParameters">copiedParameters</a></code> | <code>java.util.List<java.lang.String></code> | The parameters to copy from the verified token to the generated token. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.keyset">keyset</a></code> | <code>java.lang.String</code> | The keyset to use for signature generation. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.tokenQueryParameter">tokenQueryParameter</a></code> | <code>java.lang.String</code> | The query parameter in which to put the generated token. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | The duration the token is valid starting from the moment the token is first generated. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

The actions to take to add signatures to responses. Possible values: ["GENERATE_COOKIE", "GENERATE_TOKEN_HLS_COOKIELESS", "PROPAGATE_TOKEN_HLS_COOKIELESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#actions NetworkServicesEdgeCacheService#actions}

---

##### `copiedParameters`<sup>Optional</sup> <a name="copiedParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.copiedParameters"></a>

```java
public java.util.List<java.lang.String> getCopiedParameters();
```

- *Type:* java.util.List<java.lang.String>

The parameters to copy from the verified token to the generated token.

Only the following parameters may be copied:

* 'PathGlobs'
* 'paths'
* 'acl'
* 'URLPrefix'
* 'IPRanges'
* 'SessionID'
* 'id'
* 'Data'
* 'data'
* 'payload'
* 'Headers'

You may specify up to 6 parameters to copy.  A given parameter is be copied only if the parameter exists in the verified token.  Parameter names are matched exactly as specified.  The order of the parameters does not matter.  Duplicates are not allowed.

This field may only be specified when the GENERATE_COOKIE or GENERATE_TOKEN_HLS_COOKIELESS actions are specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#copied_parameters NetworkServicesEdgeCacheService#copied_parameters}

---

##### `keyset`<sup>Optional</sup> <a name="keyset" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.keyset"></a>

```java
public java.lang.String getKeyset();
```

- *Type:* java.lang.String

The keyset to use for signature generation.

The following are both valid paths to an EdgeCacheKeyset resource:

* 'projects/project/locations/global/edgeCacheKeysets/yourKeyset'
* 'yourKeyset'

This must be specified when the GENERATE_COOKIE or GENERATE_TOKEN_HLS_COOKIELESS actions are specified.  This field may not be specified otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#keyset NetworkServicesEdgeCacheService#keyset}

---

##### `tokenQueryParameter`<sup>Optional</sup> <a name="tokenQueryParameter" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.tokenQueryParameter"></a>

```java
public java.lang.String getTokenQueryParameter();
```

- *Type:* java.lang.String

The query parameter in which to put the generated token.

If not specified, defaults to 'edge-cache-token'.

If specified, the name must be 1-64 characters long and match the regular expression '[a-zA-Z](%5Ba-zA-Z0-9_-%5D)*' which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.

This field may only be set when the GENERATE_TOKEN_HLS_COOKIELESS or PROPAGATE_TOKEN_HLS_COOKIELESS actions are specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#token_query_parameter NetworkServicesEdgeCacheService#token_query_parameter}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures.property.tokenTtl"></a>

```java
public java.lang.String getTokenTtl();
```

- *Type:* java.lang.String

The duration the token is valid starting from the moment the token is first generated.

Defaults to '86400s' (1 day).

The TTL must be >= 0 and <= 604,800 seconds (1 week).

This field may only be specified when the GENERATE_COOKIE or GENERATE_TOKEN_HLS_COOKIELESS actions are specified.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#token_ttl NetworkServicesEdgeCacheService#token_ttl}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.builder()
//  .excludedQueryParameters(java.util.List<java.lang.String>)
//  .excludeHost(java.lang.Boolean)
//  .excludeHost(IResolvable)
//  .excludeQueryString(java.lang.Boolean)
//  .excludeQueryString(IResolvable)
//  .includedCookieNames(java.util.List<java.lang.String>)
//  .includedHeaderNames(java.util.List<java.lang.String>)
//  .includedQueryParameters(java.util.List<java.lang.String>)
//  .includeProtocol(java.lang.Boolean)
//  .includeProtocol(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludedQueryParameters">excludedQueryParameters</a></code> | <code>java.util.List<java.lang.String></code> | Names of query string parameters to exclude from cache keys. All other parameters will be included. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludeHost">excludeHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, requests to different hosts will be cached separately. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludeQueryString">excludeQueryString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, exclude query string parameters from the cache key. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedCookieNames">includedCookieNames</a></code> | <code>java.util.List<java.lang.String></code> | Names of Cookies to include in cache keys. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedHeaderNames">includedHeaderNames</a></code> | <code>java.util.List<java.lang.String></code> | Names of HTTP request headers to include in cache keys. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedQueryParameters">includedQueryParameters</a></code> | <code>java.util.List<java.lang.String></code> | Names of query string parameters to include in cache keys. All other parameters will be excluded. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includeProtocol">includeProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, http and https requests will be cached separately. |

---

##### `excludedQueryParameters`<sup>Optional</sup> <a name="excludedQueryParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludedQueryParameters"></a>

```java
public java.util.List<java.lang.String> getExcludedQueryParameters();
```

- *Type:* java.util.List<java.lang.String>

Names of query string parameters to exclude from cache keys. All other parameters will be included.

Either specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#excluded_query_parameters NetworkServicesEdgeCacheService#excluded_query_parameters}

---

##### `excludeHost`<sup>Optional</sup> <a name="excludeHost" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludeHost"></a>

```java
public java.lang.Object getExcludeHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, requests to different hosts will be cached separately.

Note: this should only be enabled if hosts share the same origin and content. Removing the host from the cache key may inadvertently result in different objects being cached than intended, depending on which route the first user matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#exclude_host NetworkServicesEdgeCacheService#exclude_host}

---

##### `excludeQueryString`<sup>Optional</sup> <a name="excludeQueryString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.excludeQueryString"></a>

```java
public java.lang.Object getExcludeQueryString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, exclude query string parameters from the cache key.

If false (the default), include the query string parameters in
the cache key according to includeQueryParameters and
excludeQueryParameters. If neither includeQueryParameters nor
excludeQueryParameters is set, the entire query string will be
included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#exclude_query_string NetworkServicesEdgeCacheService#exclude_query_string}

---

##### `includedCookieNames`<sup>Optional</sup> <a name="includedCookieNames" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedCookieNames"></a>

```java
public java.util.List<java.lang.String> getIncludedCookieNames();
```

- *Type:* java.util.List<java.lang.String>

Names of Cookies to include in cache keys.

The cookie name and cookie value of each cookie named will be used as part of the cache key.

Cookie names:

* must be valid RFC 6265 "cookie-name" tokens
* are case sensitive
* cannot start with "Edge-Cache-" (case insensitive)

Note that specifying several cookies, and/or cookies that have a large range of values (e.g., per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.

You may specify up to three cookie names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#included_cookie_names NetworkServicesEdgeCacheService#included_cookie_names}

---

##### `includedHeaderNames`<sup>Optional</sup> <a name="includedHeaderNames" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedHeaderNames"></a>

```java
public java.util.List<java.lang.String> getIncludedHeaderNames();
```

- *Type:* java.util.List<java.lang.String>

Names of HTTP request headers to include in cache keys.

The value of the header field will be used as part of the cache key.

* Header names must be valid HTTP RFC 7230 header field values.
* Header field names are case insensitive
* To include the HTTP method, use ":method"

Note that specifying several headers, and/or headers that have a large range of values (e.g. per-user) will dramatically impact the cache hit rate, and may result in a higher eviction rate and reduced performance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#included_header_names NetworkServicesEdgeCacheService#included_header_names}

---

##### `includedQueryParameters`<sup>Optional</sup> <a name="includedQueryParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includedQueryParameters"></a>

```java
public java.util.List<java.lang.String> getIncludedQueryParameters();
```

- *Type:* java.util.List<java.lang.String>

Names of query string parameters to include in cache keys. All other parameters will be excluded.

Either specify includedQueryParameters or excludedQueryParameters, not both. '&' and '=' will be percent encoded and not treated as delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#included_query_parameters NetworkServicesEdgeCacheService#included_query_parameters}

---

##### `includeProtocol`<sup>Optional</sup> <a name="includeProtocol" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy.property.includeProtocol"></a>

```java
public java.lang.Object getIncludeProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, http and https requests will be cached separately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#include_protocol NetworkServicesEdgeCacheService#include_protocol}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.builder()
//  .allowedSignatureAlgorithms(java.util.List<java.lang.String>)
//  .tokenQueryParameter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.property.allowedSignatureAlgorithms">allowedSignatureAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | The allowed signature algorithms to use. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.property.tokenQueryParameter">tokenQueryParameter</a></code> | <code>java.lang.String</code> | The query parameter in which to find the token. |

---

##### `allowedSignatureAlgorithms`<sup>Optional</sup> <a name="allowedSignatureAlgorithms" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.property.allowedSignatureAlgorithms"></a>

```java
public java.util.List<java.lang.String> getAllowedSignatureAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

The allowed signature algorithms to use.

Defaults to using only ED25519.

You may specify up to 3 signature algorithms to use. Possible values: ["ED25519", "HMAC_SHA_256", "HMAC_SHA1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#allowed_signature_algorithms NetworkServicesEdgeCacheService#allowed_signature_algorithms}

---

##### `tokenQueryParameter`<sup>Optional</sup> <a name="tokenQueryParameter" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions.property.tokenQueryParameter"></a>

```java
public java.lang.String getTokenQueryParameter();
```

- *Type:* java.lang.String

The query parameter in which to find the token.

The name must be 1-64 characters long and match the regular expression '[a-zA-Z](%5Ba-zA-Z0-9_-%5D)*' which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.

Defaults to 'edge-cache-token'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#token_query_parameter NetworkServicesEdgeCacheService#token_query_parameter}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.builder()
    .maxAge(java.lang.String)
//  .allowCredentials(java.lang.Boolean)
//  .allowCredentials(IResolvable)
//  .allowHeaders(java.util.List<java.lang.String>)
//  .allowMethods(java.util.List<java.lang.String>)
//  .allowOrigins(java.util.List<java.lang.String>)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .exposeHeaders(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.maxAge">maxAge</a></code> | <code>java.lang.String</code> | Specifies how long results of a preflight request can be cached by a client in seconds. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | In response to a preflight request, setting this to true indicates that the actual request can include user credentials. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the content for the Access-Control-Allow-Headers response header. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the content for the Access-Control-Allow-Methods response header. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of origins that will be allowed to do CORS requests. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, specifies the CORS policy is disabled. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the content for the Access-Control-Allow-Headers response header. |

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.maxAge"></a>

```java
public java.lang.String getMaxAge();
```

- *Type:* java.lang.String

Specifies how long results of a preflight request can be cached by a client in seconds.

Note that many browser clients enforce a maximum TTL of 600s (10 minutes).

* Setting the value to -1 forces a pre-flight check for all requests (not recommended)
* A maximum TTL of 86400s can be set, but note that (as above) some clients may force pre-flight checks at a more regular interval.
* This translates to the Access-Control-Max-Age header.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#max_age NetworkServicesEdgeCacheService#max_age}

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowCredentials"></a>

```java
public java.lang.Object getAllowCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

In response to a preflight request, setting this to true indicates that the actual request can include user credentials.

This translates to the Access-Control-Allow-Credentials response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#allow_credentials NetworkServicesEdgeCacheService#allow_credentials}

---

##### `allowHeaders`<sup>Optional</sup> <a name="allowHeaders" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

Specifies the content for the Access-Control-Allow-Headers response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#allow_headers NetworkServicesEdgeCacheService#allow_headers}

---

##### `allowMethods`<sup>Optional</sup> <a name="allowMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

Specifies the content for the Access-Control-Allow-Methods response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#allow_methods NetworkServicesEdgeCacheService#allow_methods}

---

##### `allowOrigins`<sup>Optional</sup> <a name="allowOrigins" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of origins that will be allowed to do CORS requests.

This translates to the Access-Control-Allow-Origin response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#allow_origins NetworkServicesEdgeCacheService#allow_origins}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, specifies the CORS policy is disabled.

The default value is false, which indicates that the CORS policy is in effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#disabled NetworkServicesEdgeCacheService#disabled}

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

Specifies the content for the Access-Control-Allow-Headers response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#expose_headers NetworkServicesEdgeCacheService#expose_headers}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.builder()
//  .hostRewrite(java.lang.String)
//  .pathPrefixRewrite(java.lang.String)
//  .pathTemplateRewrite(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.hostRewrite">hostRewrite</a></code> | <code>java.lang.String</code> | Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of hostRewrite. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.pathPrefixRewrite">pathPrefixRewrite</a></code> | <code>java.lang.String</code> | Prior to forwarding the request to the selected origin, the matching portion of the request's path is replaced by pathPrefixRewrite. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.pathTemplateRewrite">pathTemplateRewrite</a></code> | <code>java.lang.String</code> | Prior to forwarding the request to the selected origin, if the request matched a pathTemplateMatch, the matching portion of the request's path is replaced re-written using the pattern specified by pathTemplateRewrite. |

---

##### `hostRewrite`<sup>Optional</sup> <a name="hostRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.hostRewrite"></a>

```java
public java.lang.String getHostRewrite();
```

- *Type:* java.lang.String

Prior to forwarding the request to the selected origin, the request's host header is replaced with contents of hostRewrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#host_rewrite NetworkServicesEdgeCacheService#host_rewrite}

---

##### `pathPrefixRewrite`<sup>Optional</sup> <a name="pathPrefixRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.pathPrefixRewrite"></a>

```java
public java.lang.String getPathPrefixRewrite();
```

- *Type:* java.lang.String

Prior to forwarding the request to the selected origin, the matching portion of the request's path is replaced by pathPrefixRewrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#path_prefix_rewrite NetworkServicesEdgeCacheService#path_prefix_rewrite}

---

##### `pathTemplateRewrite`<sup>Optional</sup> <a name="pathTemplateRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite.property.pathTemplateRewrite"></a>

```java
public java.lang.String getPathTemplateRewrite();
```

- *Type:* java.lang.String

Prior to forwarding the request to the selected origin, if the request matched a pathTemplateMatch, the matching portion of the request's path is replaced re-written using the pattern specified by pathTemplateRewrite.

pathTemplateRewrite must be between 1 and 255 characters
(inclusive), must start with a '/', and must only use variables
captured by the route's pathTemplate matchers.

pathTemplateRewrite may only be used when all of a route's
MatchRules specify pathTemplate.

Only one of pathPrefixRewrite and pathTemplateRewrite may be
specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#path_template_rewrite NetworkServicesEdgeCacheService#path_template_rewrite}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods.builder()
//  .allowedMethods(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | The non-empty set of HTTP methods that are allowed for this route. |

---

##### `allowedMethods`<sup>Optional</sup> <a name="allowedMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

The non-empty set of HTTP methods that are allowed for this route.

Any combination of "GET", "HEAD", "OPTIONS", "PUT", "POST", "DELETE", and "PATCH".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#allowed_methods NetworkServicesEdgeCacheService#allowed_methods}

---

### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect;

NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.builder()
//  .hostRedirect(java.lang.String)
//  .httpsRedirect(java.lang.Boolean)
//  .httpsRedirect(IResolvable)
//  .pathRedirect(java.lang.String)
//  .prefixRedirect(java.lang.String)
//  .redirectResponseCode(java.lang.String)
//  .stripQuery(java.lang.Boolean)
//  .stripQuery(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.hostRedirect">hostRedirect</a></code> | <code>java.lang.String</code> | The host that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.httpsRedirect">httpsRedirect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the URL scheme in the redirected request is set to https. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.pathRedirect">pathRedirect</a></code> | <code>java.lang.String</code> | The path that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.prefixRedirect">prefixRedirect</a></code> | <code>java.lang.String</code> | The prefix that replaces the prefixMatch specified in the routeRule, retaining the remaining portion of the URL before redirecting the request. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.redirectResponseCode">redirectResponseCode</a></code> | <code>java.lang.String</code> | The HTTP Status code to use for this RedirectAction. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.stripQuery">stripQuery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. |

---

##### `hostRedirect`<sup>Optional</sup> <a name="hostRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.hostRedirect"></a>

```java
public java.lang.String getHostRedirect();
```

- *Type:* java.lang.String

The host that will be used in the redirect response instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#host_redirect NetworkServicesEdgeCacheService#host_redirect}

---

##### `httpsRedirect`<sup>Optional</sup> <a name="httpsRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.httpsRedirect"></a>

```java
public java.lang.Object getHttpsRedirect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the URL scheme in the redirected request is set to https.

If set to false, the URL scheme of the redirected request will remain the same as that of the request.

This can only be set if there is at least one (1) edgeSslCertificate set on the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#https_redirect NetworkServicesEdgeCacheService#https_redirect}

---

##### `pathRedirect`<sup>Optional</sup> <a name="pathRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.pathRedirect"></a>

```java
public java.lang.String getPathRedirect();
```

- *Type:* java.lang.String

The path that will be used in the redirect response instead of the one that was supplied in the request.

pathRedirect cannot be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

The path value must be between 1 and 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#path_redirect NetworkServicesEdgeCacheService#path_redirect}

---

##### `prefixRedirect`<sup>Optional</sup> <a name="prefixRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.prefixRedirect"></a>

```java
public java.lang.String getPrefixRedirect();
```

- *Type:* java.lang.String

The prefix that replaces the prefixMatch specified in the routeRule, retaining the remaining portion of the URL before redirecting the request.

prefixRedirect cannot be supplied together with pathRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#prefix_redirect NetworkServicesEdgeCacheService#prefix_redirect}

---

##### `redirectResponseCode`<sup>Optional</sup> <a name="redirectResponseCode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.redirectResponseCode"></a>

```java
public java.lang.String getRedirectResponseCode();
```

- *Type:* java.lang.String

The HTTP Status code to use for this RedirectAction.

The supported values are:

* 'MOVED_PERMANENTLY_DEFAULT', which is the default value and corresponds to 301.
* 'FOUND', which corresponds to 302.
* 'SEE_OTHER' which corresponds to 303.
* 'TEMPORARY_REDIRECT', which corresponds to 307. in this case, the request method will be retained.
* 'PERMANENT_REDIRECT', which corresponds to 308. in this case, the request method will be retained. Possible values: ["MOVED_PERMANENTLY_DEFAULT", "FOUND", "SEE_OTHER", "TEMPORARY_REDIRECT", "PERMANENT_REDIRECT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#redirect_response_code NetworkServicesEdgeCacheService#redirect_response_code}

---

##### `stripQuery`<sup>Optional</sup> <a name="stripQuery" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect.property.stripQuery"></a>

```java
public java.lang.Object getStripQuery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.

If set to false, the query portion of the original URL is retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#strip_query NetworkServicesEdgeCacheService#strip_query}

---

### NetworkServicesEdgeCacheServiceTimeouts <a name="NetworkServicesEdgeCacheServiceTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceTimeouts;

NetworkServicesEdgeCacheServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#create NetworkServicesEdgeCacheService#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#delete NetworkServicesEdgeCacheService#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#update NetworkServicesEdgeCacheService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#create NetworkServicesEdgeCacheService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#delete NetworkServicesEdgeCacheService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/network_services_edge_cache_service#update NetworkServicesEdgeCacheService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesEdgeCacheServiceLogConfigOutputReference <a name="NetworkServicesEdgeCacheServiceLogConfigOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceLogConfigOutputReference;

new NetworkServicesEdgeCacheServiceLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.resetSampleRate"></a>

```java
public void resetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.sampleRateInput"></a>

```java
public java.lang.Number getSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfigOutputReference.property.internalValue"></a>

```java
public NetworkServicesEdgeCacheServiceLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceLogConfig">NetworkServicesEdgeCacheServiceLogConfig</a>

---


### NetworkServicesEdgeCacheServiceRoutingHostRuleList <a name="NetworkServicesEdgeCacheServiceRoutingHostRuleList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingHostRuleList;

new NetworkServicesEdgeCacheServiceRoutingHostRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.get"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule">NetworkServicesEdgeCacheServiceRoutingHostRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule">NetworkServicesEdgeCacheServiceRoutingHostRule</a>>

---


### NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference;

new NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.hostsInput">hostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.pathMatcherInput">pathMatcherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.pathMatcher">pathMatcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule">NetworkServicesEdgeCacheServiceRoutingHostRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.hostsInput"></a>

```java
public java.util.List<java.lang.String> getHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathMatcherInput`<sup>Optional</sup> <a name="pathMatcherInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.pathMatcherInput"></a>

```java
public java.lang.String getPathMatcherInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathMatcher`<sup>Required</sup> <a name="pathMatcher" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.pathMatcher"></a>

```java
public java.lang.String getPathMatcher();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule">NetworkServicesEdgeCacheServiceRoutingHostRule</a>

---


### NetworkServicesEdgeCacheServiceRoutingOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingOutputReference;

new NetworkServicesEdgeCacheServiceRoutingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.putHostRule">putHostRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.putPathMatcher">putPathMatcher</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostRule` <a name="putHostRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.putHostRule"></a>

```java
public void putHostRule(IResolvable OR java.util.List<NetworkServicesEdgeCacheServiceRoutingHostRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.putHostRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule">NetworkServicesEdgeCacheServiceRoutingHostRule</a>>

---

##### `putPathMatcher` <a name="putPathMatcher" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.putPathMatcher"></a>

```java
public void putPathMatcher(IResolvable OR java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcher> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.putPathMatcher.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher">NetworkServicesEdgeCacheServiceRoutingPathMatcher</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.hostRule">hostRule</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList">NetworkServicesEdgeCacheServiceRoutingHostRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.pathMatcher">pathMatcher</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList">NetworkServicesEdgeCacheServiceRoutingPathMatcherList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.hostRuleInput">hostRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule">NetworkServicesEdgeCacheServiceRoutingHostRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.pathMatcherInput">pathMatcherInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher">NetworkServicesEdgeCacheServiceRoutingPathMatcher</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostRule`<sup>Required</sup> <a name="hostRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.hostRule"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingHostRuleList getHostRule();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRuleList">NetworkServicesEdgeCacheServiceRoutingHostRuleList</a>

---

##### `pathMatcher`<sup>Required</sup> <a name="pathMatcher" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.pathMatcher"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherList getPathMatcher();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList">NetworkServicesEdgeCacheServiceRoutingPathMatcherList</a>

---

##### `hostRuleInput`<sup>Optional</sup> <a name="hostRuleInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.hostRuleInput"></a>

```java
public java.lang.Object getHostRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingHostRule">NetworkServicesEdgeCacheServiceRoutingHostRule</a>>

---

##### `pathMatcherInput`<sup>Optional</sup> <a name="pathMatcherInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.pathMatcherInput"></a>

```java
public java.lang.Object getPathMatcherInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher">NetworkServicesEdgeCacheServiceRoutingPathMatcher</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingOutputReference.property.internalValue"></a>

```java
public NetworkServicesEdgeCacheServiceRouting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRouting">NetworkServicesEdgeCacheServiceRouting</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherList;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.get"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher">NetworkServicesEdgeCacheServiceRoutingPathMatcher</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher">NetworkServicesEdgeCacheServiceRoutingPathMatcher</a>>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.putRouteRule">putRouteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRouteRule` <a name="putRouteRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.putRouteRule"></a>

```java
public void putRouteRule(IResolvable OR java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.putRouteRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.routeRule">routeRule</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.routeRuleInput">routeRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher">NetworkServicesEdgeCacheServiceRoutingPathMatcher</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `routeRule`<sup>Required</sup> <a name="routeRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.routeRule"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList getRouteRule();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `routeRuleInput`<sup>Optional</sup> <a name="routeRuleInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.routeRuleInput"></a>

```java
public java.lang.Object getRouteRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcher">NetworkServicesEdgeCacheServiceRoutingPathMatcher</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToAdd">putRequestHeaderToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToRemove">putRequestHeaderToRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToAdd">putResponseHeaderToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToRemove">putResponseHeaderToRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetRequestHeaderToAdd">resetRequestHeaderToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetRequestHeaderToRemove">resetRequestHeaderToRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetResponseHeaderToAdd">resetResponseHeaderToAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetResponseHeaderToRemove">resetResponseHeaderToRemove</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestHeaderToAdd` <a name="putRequestHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToAdd"></a>

```java
public void putRequestHeaderToAdd(IResolvable OR java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToAdd.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>>

---

##### `putRequestHeaderToRemove` <a name="putRequestHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToRemove"></a>

```java
public void putRequestHeaderToRemove(IResolvable OR java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putRequestHeaderToRemove.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>>

---

##### `putResponseHeaderToAdd` <a name="putResponseHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToAdd"></a>

```java
public void putResponseHeaderToAdd(IResolvable OR java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToAdd.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>>

---

##### `putResponseHeaderToRemove` <a name="putResponseHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToRemove"></a>

```java
public void putResponseHeaderToRemove(IResolvable OR java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.putResponseHeaderToRemove.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>>

---

##### `resetRequestHeaderToAdd` <a name="resetRequestHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetRequestHeaderToAdd"></a>

```java
public void resetRequestHeaderToAdd()
```

##### `resetRequestHeaderToRemove` <a name="resetRequestHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetRequestHeaderToRemove"></a>

```java
public void resetRequestHeaderToRemove()
```

##### `resetResponseHeaderToAdd` <a name="resetResponseHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetResponseHeaderToAdd"></a>

```java
public void resetResponseHeaderToAdd()
```

##### `resetResponseHeaderToRemove` <a name="resetResponseHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.resetResponseHeaderToRemove"></a>

```java
public void resetResponseHeaderToRemove()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToAdd">requestHeaderToAdd</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToRemove">requestHeaderToRemove</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToAdd">responseHeaderToAdd</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToRemove">responseHeaderToRemove</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToAddInput">requestHeaderToAddInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToRemoveInput">requestHeaderToRemoveInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToAddInput">responseHeaderToAddInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToRemoveInput">responseHeaderToRemoveInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestHeaderToAdd`<sup>Required</sup> <a name="requestHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToAdd"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList getRequestHeaderToAdd();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList</a>

---

##### `requestHeaderToRemove`<sup>Required</sup> <a name="requestHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToRemove"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList getRequestHeaderToRemove();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList</a>

---

##### `responseHeaderToAdd`<sup>Required</sup> <a name="responseHeaderToAdd" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToAdd"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList getResponseHeaderToAdd();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList</a>

---

##### `responseHeaderToRemove`<sup>Required</sup> <a name="responseHeaderToRemove" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToRemove"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList getResponseHeaderToRemove();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList</a>

---

##### `requestHeaderToAddInput`<sup>Optional</sup> <a name="requestHeaderToAddInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToAddInput"></a>

```java
public java.lang.Object getRequestHeaderToAddInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>>

---

##### `requestHeaderToRemoveInput`<sup>Optional</sup> <a name="requestHeaderToRemoveInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.requestHeaderToRemoveInput"></a>

```java
public java.lang.Object getRequestHeaderToRemoveInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>>

---

##### `responseHeaderToAddInput`<sup>Optional</sup> <a name="responseHeaderToAddInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToAddInput"></a>

```java
public java.lang.Object getResponseHeaderToAddInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>>

---

##### `responseHeaderToRemoveInput`<sup>Optional</sup> <a name="responseHeaderToRemoveInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.responseHeaderToRemoveInput"></a>

```java
public java.lang.Object getResponseHeaderToRemoveInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference.property.internalValue"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.get"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resetReplace">resetReplace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReplace` <a name="resetReplace" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.resetReplace"></a>

```java
public void resetReplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.replaceInput">replaceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.replace">replace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerValueInput"></a>

```java
public java.lang.String getHeaderValueInput();
```

- *Type:* java.lang.String

---

##### `replaceInput`<sup>Optional</sup> <a name="replaceInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.replaceInput"></a>

```java
public java.lang.Object getReplaceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.replace"></a>

```java
public java.lang.Object getReplace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAddOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToAdd</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.get"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemoveOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.get"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resetReplace">resetReplace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReplace` <a name="resetReplace" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.resetReplace"></a>

```java
public void resetReplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.replaceInput">replaceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.replace">replace</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerValueInput"></a>

```java
public java.lang.String getHeaderValueInput();
```

- *Type:* java.lang.String

---

##### `replaceInput`<sup>Optional</sup> <a name="replaceInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.replaceInput"></a>

```java
public java.lang.Object getReplaceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.replace"></a>

```java
public java.lang.Object getReplace();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAddOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.get"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemoveOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToRemove</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.get"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.get"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetInvertMatch">resetInvertMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetPrefixMatch">resetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetPresentMatch">resetPresentMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetSuffixMatch">resetSuffixMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetExactMatch"></a>

```java
public void resetExactMatch()
```

##### `resetInvertMatch` <a name="resetInvertMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetInvertMatch"></a>

```java
public void resetInvertMatch()
```

##### `resetPrefixMatch` <a name="resetPrefixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetPrefixMatch"></a>

```java
public void resetPrefixMatch()
```

##### `resetPresentMatch` <a name="resetPresentMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetPresentMatch"></a>

```java
public void resetPresentMatch()
```

##### `resetSuffixMatch` <a name="resetSuffixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.resetSuffixMatch"></a>

```java
public void resetSuffixMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.exactMatchInput">exactMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.invertMatchInput">invertMatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.prefixMatchInput">prefixMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.presentMatchInput">presentMatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.suffixMatchInput">suffixMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.exactMatch">exactMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.invertMatch">invertMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.presentMatch">presentMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.suffixMatch">suffixMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.exactMatchInput"></a>

```java
public java.lang.String getExactMatchInput();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `invertMatchInput`<sup>Optional</sup> <a name="invertMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.invertMatchInput"></a>

```java
public java.lang.Object getInvertMatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixMatchInput`<sup>Optional</sup> <a name="prefixMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.prefixMatchInput"></a>

```java
public java.lang.String getPrefixMatchInput();
```

- *Type:* java.lang.String

---

##### `presentMatchInput`<sup>Optional</sup> <a name="presentMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.presentMatchInput"></a>

```java
public java.lang.Object getPresentMatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suffixMatchInput`<sup>Optional</sup> <a name="suffixMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.suffixMatchInput"></a>

```java
public java.lang.String getSuffixMatchInput();
```

- *Type:* java.lang.String

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.exactMatch"></a>

```java
public java.lang.String getExactMatch();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `invertMatch`<sup>Required</sup> <a name="invertMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.invertMatch"></a>

```java
public java.lang.Object getInvertMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.prefixMatch"></a>

```java
public java.lang.String getPrefixMatch();
```

- *Type:* java.lang.String

---

##### `presentMatch`<sup>Required</sup> <a name="presentMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.presentMatch"></a>

```java
public java.lang.Object getPresentMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suffixMatch`<sup>Required</sup> <a name="suffixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.suffixMatch"></a>

```java
public java.lang.String getSuffixMatch();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.get"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putHeaderMatch">putHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putQueryParameterMatch">putQueryParameterMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetFullPathMatch">resetFullPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetHeaderMatch">resetHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetPathTemplateMatch">resetPathTemplateMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetPrefixMatch">resetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetQueryParameterMatch">resetQueryParameterMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaderMatch` <a name="putHeaderMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putHeaderMatch"></a>

```java
public void putHeaderMatch(IResolvable OR java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putHeaderMatch.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>>

---

##### `putQueryParameterMatch` <a name="putQueryParameterMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putQueryParameterMatch"></a>

```java
public void putQueryParameterMatch(IResolvable OR java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.putQueryParameterMatch.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>>

---

##### `resetFullPathMatch` <a name="resetFullPathMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetFullPathMatch"></a>

```java
public void resetFullPathMatch()
```

##### `resetHeaderMatch` <a name="resetHeaderMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetHeaderMatch"></a>

```java
public void resetHeaderMatch()
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetIgnoreCase"></a>

```java
public void resetIgnoreCase()
```

##### `resetPathTemplateMatch` <a name="resetPathTemplateMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetPathTemplateMatch"></a>

```java
public void resetPathTemplateMatch()
```

##### `resetPrefixMatch` <a name="resetPrefixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetPrefixMatch"></a>

```java
public void resetPrefixMatch()
```

##### `resetQueryParameterMatch` <a name="resetQueryParameterMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.resetQueryParameterMatch"></a>

```java
public void resetQueryParameterMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.headerMatch">headerMatch</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.queryParameterMatch">queryParameterMatch</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fullPathMatchInput">fullPathMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.headerMatchInput">headerMatchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.pathTemplateMatchInput">pathTemplateMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.prefixMatchInput">prefixMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.queryParameterMatchInput">queryParameterMatchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fullPathMatch">fullPathMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.pathTemplateMatch">pathTemplateMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerMatch`<sup>Required</sup> <a name="headerMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.headerMatch"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList getHeaderMatch();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatchList</a>

---

##### `queryParameterMatch`<sup>Required</sup> <a name="queryParameterMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.queryParameterMatch"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList getQueryParameterMatch();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList</a>

---

##### `fullPathMatchInput`<sup>Optional</sup> <a name="fullPathMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fullPathMatchInput"></a>

```java
public java.lang.String getFullPathMatchInput();
```

- *Type:* java.lang.String

---

##### `headerMatchInput`<sup>Optional</sup> <a name="headerMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.headerMatchInput"></a>

```java
public java.lang.Object getHeaderMatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleHeaderMatch</a>>

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.ignoreCaseInput"></a>

```java
public java.lang.Object getIgnoreCaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathTemplateMatchInput`<sup>Optional</sup> <a name="pathTemplateMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.pathTemplateMatchInput"></a>

```java
public java.lang.String getPathTemplateMatchInput();
```

- *Type:* java.lang.String

---

##### `prefixMatchInput`<sup>Optional</sup> <a name="prefixMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.prefixMatchInput"></a>

```java
public java.lang.String getPrefixMatchInput();
```

- *Type:* java.lang.String

---

##### `queryParameterMatchInput`<sup>Optional</sup> <a name="queryParameterMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.queryParameterMatchInput"></a>

```java
public java.lang.Object getQueryParameterMatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>>

---

##### `fullPathMatch`<sup>Required</sup> <a name="fullPathMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.fullPathMatch"></a>

```java
public java.lang.String getFullPathMatch();
```

- *Type:* java.lang.String

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathTemplateMatch`<sup>Required</sup> <a name="pathTemplateMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.pathTemplateMatch"></a>

```java
public java.lang.String getPathTemplateMatch();
```

- *Type:* java.lang.String

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.prefixMatch"></a>

```java
public java.lang.String getPrefixMatch();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.get"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resetPresentMatch">resetPresentMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resetExactMatch"></a>

```java
public void resetExactMatch()
```

##### `resetPresentMatch` <a name="resetPresentMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.resetPresentMatch"></a>

```java
public void resetPresentMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.exactMatchInput">exactMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.presentMatchInput">presentMatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.exactMatch">exactMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.presentMatch">presentMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.exactMatchInput"></a>

```java
public java.lang.String getExactMatchInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `presentMatchInput`<sup>Optional</sup> <a name="presentMatchInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.presentMatchInput"></a>

```java
public java.lang.Object getPresentMatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.exactMatch"></a>

```java
public java.lang.String getExactMatch();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `presentMatch`<sup>Required</sup> <a name="presentMatch" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.presentMatch"></a>

```java
public java.lang.Object getPresentMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatchOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putHeaderAction">putHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putMatchRule">putMatchRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteAction">putRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteMethods">putRouteMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putUrlRedirect">putUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetHeaderAction">resetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetRouteAction">resetRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetRouteMethods">resetRouteMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetUrlRedirect">resetUrlRedirect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaderAction` <a name="putHeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putHeaderAction"></a>

```java
public void putHeaderAction(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a>

---

##### `putMatchRule` <a name="putMatchRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putMatchRule"></a>

```java
public void putMatchRule(IResolvable OR java.util.List<NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putMatchRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>>

---

##### `putRouteAction` <a name="putRouteAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteAction"></a>

```java
public void putRouteAction(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a>

---

##### `putRouteMethods` <a name="putRouteMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteMethods"></a>

```java
public void putRouteMethods(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putRouteMethods.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a>

---

##### `putUrlRedirect` <a name="putUrlRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putUrlRedirect"></a>

```java
public void putUrlRedirect(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.putUrlRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHeaderAction` <a name="resetHeaderAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetHeaderAction"></a>

```java
public void resetHeaderAction()
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetOrigin"></a>

```java
public void resetOrigin()
```

##### `resetRouteAction` <a name="resetRouteAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetRouteAction"></a>

```java
public void resetRouteAction()
```

##### `resetRouteMethods` <a name="resetRouteMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetRouteMethods"></a>

```java
public void resetRouteMethods()
```

##### `resetUrlRedirect` <a name="resetUrlRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.resetUrlRedirect"></a>

```java
public void resetUrlRedirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.headerAction">headerAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.matchRule">matchRule</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeAction">routeAction</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeMethods">routeMethods</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.urlRedirect">urlRedirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.headerActionInput">headerActionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.matchRuleInput">matchRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.originInput">originInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeActionInput">routeActionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeMethodsInput">routeMethodsInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.urlRedirectInput">urlRedirectInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.origin">origin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerAction`<sup>Required</sup> <a name="headerAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.headerAction"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference getHeaderAction();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionOutputReference</a>

---

##### `matchRule`<sup>Required</sup> <a name="matchRule" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.matchRule"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList getMatchRule();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleList</a>

---

##### `routeAction`<sup>Required</sup> <a name="routeAction" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeAction"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference getRouteAction();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference</a>

---

##### `routeMethods`<sup>Required</sup> <a name="routeMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeMethods"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference getRouteMethods();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference</a>

---

##### `urlRedirect`<sup>Required</sup> <a name="urlRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.urlRedirect"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference getUrlRedirect();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `headerActionInput`<sup>Optional</sup> <a name="headerActionInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.headerActionInput"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction getHeaderActionInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleHeaderAction</a>

---

##### `matchRuleInput`<sup>Optional</sup> <a name="matchRuleInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.matchRuleInput"></a>

```java
public java.lang.Object getMatchRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleMatchRule</a>>

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.originInput"></a>

```java
public java.lang.String getOriginInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `routeActionInput`<sup>Optional</sup> <a name="routeActionInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeActionInput"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction getRouteActionInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a>

---

##### `routeMethodsInput`<sup>Optional</sup> <a name="routeMethodsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.routeMethodsInput"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods getRouteMethodsInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a>

---

##### `urlRedirectInput`<sup>Optional</sup> <a name="urlRedirectInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.urlRedirectInput"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect getUrlRedirectInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRule</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetCopiedParameters">resetCopiedParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetKeyset">resetKeyset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetTokenQueryParameter">resetTokenQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCopiedParameters` <a name="resetCopiedParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetCopiedParameters"></a>

```java
public void resetCopiedParameters()
```

##### `resetKeyset` <a name="resetKeyset" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetKeyset"></a>

```java
public void resetKeyset()
```

##### `resetTokenQueryParameter` <a name="resetTokenQueryParameter" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetTokenQueryParameter"></a>

```java
public void resetTokenQueryParameter()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.copiedParametersInput">copiedParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.keysetInput">keysetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenQueryParameterInput">tokenQueryParameterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.copiedParameters">copiedParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.keyset">keyset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenQueryParameter">tokenQueryParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `copiedParametersInput`<sup>Optional</sup> <a name="copiedParametersInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.copiedParametersInput"></a>

```java
public java.util.List<java.lang.String> getCopiedParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keysetInput`<sup>Optional</sup> <a name="keysetInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.keysetInput"></a>

```java
public java.lang.String getKeysetInput();
```

- *Type:* java.lang.String

---

##### `tokenQueryParameterInput`<sup>Optional</sup> <a name="tokenQueryParameterInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenQueryParameterInput"></a>

```java
public java.lang.String getTokenQueryParameterInput();
```

- *Type:* java.lang.String

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenTtlInput"></a>

```java
public java.lang.String getTokenTtlInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `copiedParameters`<sup>Required</sup> <a name="copiedParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.copiedParameters"></a>

```java
public java.util.List<java.lang.String> getCopiedParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keyset`<sup>Required</sup> <a name="keyset" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.keyset"></a>

```java
public java.lang.String getKeyset();
```

- *Type:* java.lang.String

---

##### `tokenQueryParameter`<sup>Required</sup> <a name="tokenQueryParameter" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenQueryParameter"></a>

```java
public java.lang.String getTokenQueryParameter();
```

- *Type:* java.lang.String

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.tokenTtl"></a>

```java
public java.lang.String getTokenTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference.property.internalValue"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludedQueryParameters">resetExcludedQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludeHost">resetExcludeHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludeQueryString">resetExcludeQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedCookieNames">resetIncludedCookieNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedHeaderNames">resetIncludedHeaderNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedQueryParameters">resetIncludedQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol">resetIncludeProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedQueryParameters` <a name="resetExcludedQueryParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludedQueryParameters"></a>

```java
public void resetExcludedQueryParameters()
```

##### `resetExcludeHost` <a name="resetExcludeHost" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludeHost"></a>

```java
public void resetExcludeHost()
```

##### `resetExcludeQueryString` <a name="resetExcludeQueryString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetExcludeQueryString"></a>

```java
public void resetExcludeQueryString()
```

##### `resetIncludedCookieNames` <a name="resetIncludedCookieNames" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedCookieNames"></a>

```java
public void resetIncludedCookieNames()
```

##### `resetIncludedHeaderNames` <a name="resetIncludedHeaderNames" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedHeaderNames"></a>

```java
public void resetIncludedHeaderNames()
```

##### `resetIncludedQueryParameters` <a name="resetIncludedQueryParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludedQueryParameters"></a>

```java
public void resetIncludedQueryParameters()
```

##### `resetIncludeProtocol` <a name="resetIncludeProtocol" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.resetIncludeProtocol"></a>

```java
public void resetIncludeProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludedQueryParametersInput">excludedQueryParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeHostInput">excludeHostInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeQueryStringInput">excludeQueryStringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedCookieNamesInput">includedCookieNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedHeaderNamesInput">includedHeaderNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedQueryParametersInput">includedQueryParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput">includeProtocolInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludedQueryParameters">excludedQueryParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeHost">excludeHost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeQueryString">excludeQueryString</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedCookieNames">includedCookieNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedHeaderNames">includedHeaderNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedQueryParameters">includedQueryParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">includeProtocol</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludedQueryParametersInput`<sup>Optional</sup> <a name="excludedQueryParametersInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludedQueryParametersInput"></a>

```java
public java.util.List<java.lang.String> getExcludedQueryParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeHostInput`<sup>Optional</sup> <a name="excludeHostInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeHostInput"></a>

```java
public java.lang.Object getExcludeHostInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeQueryStringInput`<sup>Optional</sup> <a name="excludeQueryStringInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeQueryStringInput"></a>

```java
public java.lang.Object getExcludeQueryStringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includedCookieNamesInput`<sup>Optional</sup> <a name="includedCookieNamesInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedCookieNamesInput"></a>

```java
public java.util.List<java.lang.String> getIncludedCookieNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedHeaderNamesInput`<sup>Optional</sup> <a name="includedHeaderNamesInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedHeaderNamesInput"></a>

```java
public java.util.List<java.lang.String> getIncludedHeaderNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedQueryParametersInput`<sup>Optional</sup> <a name="includedQueryParametersInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedQueryParametersInput"></a>

```java
public java.util.List<java.lang.String> getIncludedQueryParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeProtocolInput`<sup>Optional</sup> <a name="includeProtocolInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocolInput"></a>

```java
public java.lang.Object getIncludeProtocolInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedQueryParameters`<sup>Required</sup> <a name="excludedQueryParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludedQueryParameters"></a>

```java
public java.util.List<java.lang.String> getExcludedQueryParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeHost`<sup>Required</sup> <a name="excludeHost" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeHost"></a>

```java
public java.lang.Object getExcludeHost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludeQueryString`<sup>Required</sup> <a name="excludeQueryString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.excludeQueryString"></a>

```java
public java.lang.Object getExcludeQueryString();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includedCookieNames`<sup>Required</sup> <a name="includedCookieNames" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedCookieNames"></a>

```java
public java.util.List<java.lang.String> getIncludedCookieNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedHeaderNames`<sup>Required</sup> <a name="includedHeaderNames" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedHeaderNames"></a>

```java
public java.util.List<java.lang.String> getIncludedHeaderNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedQueryParameters`<sup>Required</sup> <a name="includedQueryParameters" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includedQueryParameters"></a>

```java
public java.util.List<java.lang.String> getIncludedQueryParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeProtocol`<sup>Required</sup> <a name="includeProtocol" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```java
public java.lang.Object getIncludeProtocol();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putAddSignatures">putAddSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putCacheKeyPolicy">putCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putSignedTokenOptions">putSignedTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetAddSignatures">resetAddSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetCacheKeyPolicy">resetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetCacheMode">resetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetClientTtl">resetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetNegativeCaching">resetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetNegativeCachingPolicy">resetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestKeyset">resetSignedRequestKeyset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestMaximumExpirationTtl">resetSignedRequestMaximumExpirationTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestMode">resetSignedRequestMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedTokenOptions">resetSignedTokenOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddSignatures` <a name="putAddSignatures" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putAddSignatures"></a>

```java
public void putAddSignatures(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putAddSignatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a>

---

##### `putCacheKeyPolicy` <a name="putCacheKeyPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```java
public void putCacheKeyPolicy(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a>

---

##### `putSignedTokenOptions` <a name="putSignedTokenOptions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putSignedTokenOptions"></a>

```java
public void putSignedTokenOptions(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.putSignedTokenOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a>

---

##### `resetAddSignatures` <a name="resetAddSignatures" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetAddSignatures"></a>

```java
public void resetAddSignatures()
```

##### `resetCacheKeyPolicy` <a name="resetCacheKeyPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```java
public void resetCacheKeyPolicy()
```

##### `resetCacheMode` <a name="resetCacheMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetCacheMode"></a>

```java
public void resetCacheMode()
```

##### `resetClientTtl` <a name="resetClientTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetClientTtl"></a>

```java
public void resetClientTtl()
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNegativeCaching` <a name="resetNegativeCaching" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetNegativeCaching"></a>

```java
public void resetNegativeCaching()
```

##### `resetNegativeCachingPolicy` <a name="resetNegativeCachingPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```java
public void resetNegativeCachingPolicy()
```

##### `resetSignedRequestKeyset` <a name="resetSignedRequestKeyset" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestKeyset"></a>

```java
public void resetSignedRequestKeyset()
```

##### `resetSignedRequestMaximumExpirationTtl` <a name="resetSignedRequestMaximumExpirationTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestMaximumExpirationTtl"></a>

```java
public void resetSignedRequestMaximumExpirationTtl()
```

##### `resetSignedRequestMode` <a name="resetSignedRequestMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedRequestMode"></a>

```java
public void resetSignedRequestMode()
```

##### `resetSignedTokenOptions` <a name="resetSignedTokenOptions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.resetSignedTokenOptions"></a>

```java
public void resetSignedTokenOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.addSignatures">addSignatures</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedTokenOptions">signedTokenOptions</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.addSignaturesInput">addSignaturesInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheKeyPolicyInput">cacheKeyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheModeInput">cacheModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.clientTtlInput">clientTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingInput">negativeCachingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingPolicyInput">negativeCachingPolicyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestKeysetInput">signedRequestKeysetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMaximumExpirationTtlInput">signedRequestMaximumExpirationTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestModeInput">signedRequestModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedTokenOptionsInput">signedTokenOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheMode">cacheMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.clientTtl">clientTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCaching">negativeCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestKeyset">signedRequestKeyset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMaximumExpirationTtl">signedRequestMaximumExpirationTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMode">signedRequestMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addSignatures`<sup>Required</sup> <a name="addSignatures" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.addSignatures"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference getAddSignatures();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignaturesOutputReference</a>

---

##### `cacheKeyPolicy`<sup>Required</sup> <a name="cacheKeyPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference getCacheKeyPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `signedTokenOptions`<sup>Required</sup> <a name="signedTokenOptions" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedTokenOptions"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference getSignedTokenOptions();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference</a>

---

##### `addSignaturesInput`<sup>Optional</sup> <a name="addSignaturesInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.addSignaturesInput"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures getAddSignaturesInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyAddSignatures</a>

---

##### `cacheKeyPolicyInput`<sup>Optional</sup> <a name="cacheKeyPolicyInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy getCacheKeyPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyCacheKeyPolicy</a>

---

##### `cacheModeInput`<sup>Optional</sup> <a name="cacheModeInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheModeInput"></a>

```java
public java.lang.String getCacheModeInput();
```

- *Type:* java.lang.String

---

##### `clientTtlInput`<sup>Optional</sup> <a name="clientTtlInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.clientTtlInput"></a>

```java
public java.lang.String getClientTtlInput();
```

- *Type:* java.lang.String

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.defaultTtlInput"></a>

```java
public java.lang.String getDefaultTtlInput();
```

- *Type:* java.lang.String

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.maxTtlInput"></a>

```java
public java.lang.String getMaxTtlInput();
```

- *Type:* java.lang.String

---

##### `negativeCachingInput`<sup>Optional</sup> <a name="negativeCachingInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingInput"></a>

```java
public java.lang.Object getNegativeCachingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `negativeCachingPolicyInput`<sup>Optional</sup> <a name="negativeCachingPolicyInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNegativeCachingPolicyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `signedRequestKeysetInput`<sup>Optional</sup> <a name="signedRequestKeysetInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestKeysetInput"></a>

```java
public java.lang.String getSignedRequestKeysetInput();
```

- *Type:* java.lang.String

---

##### `signedRequestMaximumExpirationTtlInput`<sup>Optional</sup> <a name="signedRequestMaximumExpirationTtlInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMaximumExpirationTtlInput"></a>

```java
public java.lang.String getSignedRequestMaximumExpirationTtlInput();
```

- *Type:* java.lang.String

---

##### `signedRequestModeInput`<sup>Optional</sup> <a name="signedRequestModeInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestModeInput"></a>

```java
public java.lang.String getSignedRequestModeInput();
```

- *Type:* java.lang.String

---

##### `signedTokenOptionsInput`<sup>Optional</sup> <a name="signedTokenOptionsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedTokenOptionsInput"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions getSignedTokenOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a>

---

##### `cacheMode`<sup>Required</sup> <a name="cacheMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.cacheMode"></a>

```java
public java.lang.String getCacheMode();
```

- *Type:* java.lang.String

---

##### `clientTtl`<sup>Required</sup> <a name="clientTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.clientTtl"></a>

```java
public java.lang.String getClientTtl();
```

- *Type:* java.lang.String

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.defaultTtl"></a>

```java
public java.lang.String getDefaultTtl();
```

- *Type:* java.lang.String

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

---

##### `negativeCaching`<sup>Required</sup> <a name="negativeCaching" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCaching"></a>

```java
public java.lang.Object getNegativeCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `negativeCachingPolicy`<sup>Required</sup> <a name="negativeCachingPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNegativeCachingPolicy();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `signedRequestKeyset`<sup>Required</sup> <a name="signedRequestKeyset" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestKeyset"></a>

```java
public java.lang.String getSignedRequestKeyset();
```

- *Type:* java.lang.String

---

##### `signedRequestMaximumExpirationTtl`<sup>Required</sup> <a name="signedRequestMaximumExpirationTtl" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMaximumExpirationTtl"></a>

```java
public java.lang.String getSignedRequestMaximumExpirationTtl();
```

- *Type:* java.lang.String

---

##### `signedRequestMode`<sup>Required</sup> <a name="signedRequestMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.signedRequestMode"></a>

```java
public java.lang.String getSignedRequestMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference.property.internalValue"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resetAllowedSignatureAlgorithms">resetAllowedSignatureAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resetTokenQueryParameter">resetTokenQueryParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedSignatureAlgorithms` <a name="resetAllowedSignatureAlgorithms" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resetAllowedSignatureAlgorithms"></a>

```java
public void resetAllowedSignatureAlgorithms()
```

##### `resetTokenQueryParameter` <a name="resetTokenQueryParameter" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.resetTokenQueryParameter"></a>

```java
public void resetTokenQueryParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.allowedSignatureAlgorithmsInput">allowedSignatureAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.tokenQueryParameterInput">tokenQueryParameterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.allowedSignatureAlgorithms">allowedSignatureAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.tokenQueryParameter">tokenQueryParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedSignatureAlgorithmsInput`<sup>Optional</sup> <a name="allowedSignatureAlgorithmsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.allowedSignatureAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedSignatureAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenQueryParameterInput`<sup>Optional</sup> <a name="tokenQueryParameterInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.tokenQueryParameterInput"></a>

```java
public java.lang.String getTokenQueryParameterInput();
```

- *Type:* java.lang.String

---

##### `allowedSignatureAlgorithms`<sup>Required</sup> <a name="allowedSignatureAlgorithms" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.allowedSignatureAlgorithms"></a>

```java
public java.util.List<java.lang.String> getAllowedSignatureAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenQueryParameter`<sup>Required</sup> <a name="tokenQueryParameter" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.tokenQueryParameter"></a>

```java
public java.lang.String getTokenQueryParameter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptionsOutputReference.property.internalValue"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicySignedTokenOptions</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowHeaders">resetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowMethods">resetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowOrigins">resetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowCredentials"></a>

```java
public void resetAllowCredentials()
```

##### `resetAllowHeaders` <a name="resetAllowHeaders" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowHeaders"></a>

```java
public void resetAllowHeaders()
```

##### `resetAllowMethods` <a name="resetAllowMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowMethods"></a>

```java
public void resetAllowMethods()
```

##### `resetAllowOrigins` <a name="resetAllowOrigins" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetAllowOrigins"></a>

```java
public void resetAllowOrigins()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.resetExposeHeaders"></a>

```java
public void resetExposeHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowHeadersInput">allowHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowMethodsInput">allowMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowOriginsInput">allowOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowCredentialsInput"></a>

```java
public java.lang.Object getAllowCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHeadersInput`<sup>Optional</sup> <a name="allowHeadersInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethodsInput`<sup>Optional</sup> <a name="allowMethodsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOriginsInput`<sup>Optional</sup> <a name="allowOriginsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.exposeHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposeHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.maxAgeInput"></a>

```java
public java.lang.String getMaxAgeInput();
```

- *Type:* java.lang.String

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowCredentials"></a>

```java
public java.lang.Object getAllowCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.maxAge"></a>

```java
public java.lang.String getMaxAge();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference.property.internalValue"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCdnPolicy">putCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCorsPolicy">putCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putUrlRewrite">putUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCdnPolicy">resetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCompressionMode">resetCompressionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCorsPolicy">resetCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetUrlRewrite">resetUrlRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCdnPolicy` <a name="putCdnPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCdnPolicy"></a>

```java
public void putCdnPolicy(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a>

---

##### `putCorsPolicy` <a name="putCorsPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCorsPolicy"></a>

```java
public void putCorsPolicy(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putCorsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a>

---

##### `putUrlRewrite` <a name="putUrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putUrlRewrite"></a>

```java
public void putUrlRewrite(NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a>

---

##### `resetCdnPolicy` <a name="resetCdnPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCdnPolicy"></a>

```java
public void resetCdnPolicy()
```

##### `resetCompressionMode` <a name="resetCompressionMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCompressionMode"></a>

```java
public void resetCompressionMode()
```

##### `resetCorsPolicy` <a name="resetCorsPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetCorsPolicy"></a>

```java
public void resetCorsPolicy()
```

##### `resetUrlRewrite` <a name="resetUrlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.resetUrlRewrite"></a>

```java
public void resetUrlRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.corsPolicy">corsPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.urlRewrite">urlRewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.cdnPolicyInput">cdnPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.compressionModeInput">compressionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.corsPolicyInput">corsPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.urlRewriteInput">urlRewriteInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.compressionMode">compressionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cdnPolicy`<sup>Required</sup> <a name="cdnPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.cdnPolicy"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference getCdnPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicyOutputReference</a>

---

##### `corsPolicy`<sup>Required</sup> <a name="corsPolicy" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.corsPolicy"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference getCorsPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicyOutputReference</a>

---

##### `urlRewrite`<sup>Required</sup> <a name="urlRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.urlRewrite"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference getUrlRewrite();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference</a>

---

##### `cdnPolicyInput`<sup>Optional</sup> <a name="cdnPolicyInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.cdnPolicyInput"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy getCdnPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCdnPolicy</a>

---

##### `compressionModeInput`<sup>Optional</sup> <a name="compressionModeInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.compressionModeInput"></a>

```java
public java.lang.String getCompressionModeInput();
```

- *Type:* java.lang.String

---

##### `corsPolicyInput`<sup>Optional</sup> <a name="corsPolicyInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.corsPolicyInput"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy getCorsPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionCorsPolicy</a>

---

##### `urlRewriteInput`<sup>Optional</sup> <a name="urlRewriteInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.urlRewriteInput"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite getUrlRewriteInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a>

---

##### `compressionMode`<sup>Required</sup> <a name="compressionMode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.compressionMode"></a>

```java
public java.lang.String getCompressionMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionOutputReference.property.internalValue"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteAction</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetHostRewrite">resetHostRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetPathPrefixRewrite">resetPathPrefixRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetPathTemplateRewrite">resetPathTemplateRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostRewrite` <a name="resetHostRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetHostRewrite"></a>

```java
public void resetHostRewrite()
```

##### `resetPathPrefixRewrite` <a name="resetPathPrefixRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetPathPrefixRewrite"></a>

```java
public void resetPathPrefixRewrite()
```

##### `resetPathTemplateRewrite` <a name="resetPathTemplateRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.resetPathTemplateRewrite"></a>

```java
public void resetPathTemplateRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.hostRewriteInput">hostRewriteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathPrefixRewriteInput">pathPrefixRewriteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathTemplateRewriteInput">pathTemplateRewriteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.hostRewrite">hostRewrite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathPrefixRewrite">pathPrefixRewrite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathTemplateRewrite">pathTemplateRewrite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostRewriteInput`<sup>Optional</sup> <a name="hostRewriteInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.hostRewriteInput"></a>

```java
public java.lang.String getHostRewriteInput();
```

- *Type:* java.lang.String

---

##### `pathPrefixRewriteInput`<sup>Optional</sup> <a name="pathPrefixRewriteInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathPrefixRewriteInput"></a>

```java
public java.lang.String getPathPrefixRewriteInput();
```

- *Type:* java.lang.String

---

##### `pathTemplateRewriteInput`<sup>Optional</sup> <a name="pathTemplateRewriteInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathTemplateRewriteInput"></a>

```java
public java.lang.String getPathTemplateRewriteInput();
```

- *Type:* java.lang.String

---

##### `hostRewrite`<sup>Required</sup> <a name="hostRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.hostRewrite"></a>

```java
public java.lang.String getHostRewrite();
```

- *Type:* java.lang.String

---

##### `pathPrefixRewrite`<sup>Required</sup> <a name="pathPrefixRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathPrefixRewrite"></a>

```java
public java.lang.String getPathPrefixRewrite();
```

- *Type:* java.lang.String

---

##### `pathTemplateRewrite`<sup>Required</sup> <a name="pathTemplateRewrite" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.pathTemplateRewrite"></a>

```java
public java.lang.String getPathTemplateRewrite();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewriteOutputReference.property.internalValue"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteActionUrlRewrite</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.resetAllowedMethods">resetAllowedMethods</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedMethods` <a name="resetAllowedMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.resetAllowedMethods"></a>

```java
public void resetAllowedMethods()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.allowedMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethodsOutputReference.property.internalValue"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleRouteMethods</a>

---


### NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference <a name="NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference;

new NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetHostRedirect">resetHostRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetHttpsRedirect">resetHttpsRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetPathRedirect">resetPathRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetPrefixRedirect">resetPrefixRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetRedirectResponseCode">resetRedirectResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetStripQuery">resetStripQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostRedirect` <a name="resetHostRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetHostRedirect"></a>

```java
public void resetHostRedirect()
```

##### `resetHttpsRedirect` <a name="resetHttpsRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetHttpsRedirect"></a>

```java
public void resetHttpsRedirect()
```

##### `resetPathRedirect` <a name="resetPathRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetPathRedirect"></a>

```java
public void resetPathRedirect()
```

##### `resetPrefixRedirect` <a name="resetPrefixRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetPrefixRedirect"></a>

```java
public void resetPrefixRedirect()
```

##### `resetRedirectResponseCode` <a name="resetRedirectResponseCode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetRedirectResponseCode"></a>

```java
public void resetRedirectResponseCode()
```

##### `resetStripQuery` <a name="resetStripQuery" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.resetStripQuery"></a>

```java
public void resetStripQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.hostRedirectInput">hostRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.httpsRedirectInput">httpsRedirectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.pathRedirectInput">pathRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.prefixRedirectInput">prefixRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.redirectResponseCodeInput">redirectResponseCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.stripQueryInput">stripQueryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.hostRedirect">hostRedirect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.httpsRedirect">httpsRedirect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.pathRedirect">pathRedirect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.prefixRedirect">prefixRedirect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.redirectResponseCode">redirectResponseCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.stripQuery">stripQuery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostRedirectInput`<sup>Optional</sup> <a name="hostRedirectInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.hostRedirectInput"></a>

```java
public java.lang.String getHostRedirectInput();
```

- *Type:* java.lang.String

---

##### `httpsRedirectInput`<sup>Optional</sup> <a name="httpsRedirectInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.httpsRedirectInput"></a>

```java
public java.lang.Object getHttpsRedirectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathRedirectInput`<sup>Optional</sup> <a name="pathRedirectInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.pathRedirectInput"></a>

```java
public java.lang.String getPathRedirectInput();
```

- *Type:* java.lang.String

---

##### `prefixRedirectInput`<sup>Optional</sup> <a name="prefixRedirectInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.prefixRedirectInput"></a>

```java
public java.lang.String getPrefixRedirectInput();
```

- *Type:* java.lang.String

---

##### `redirectResponseCodeInput`<sup>Optional</sup> <a name="redirectResponseCodeInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.redirectResponseCodeInput"></a>

```java
public java.lang.String getRedirectResponseCodeInput();
```

- *Type:* java.lang.String

---

##### `stripQueryInput`<sup>Optional</sup> <a name="stripQueryInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.stripQueryInput"></a>

```java
public java.lang.Object getStripQueryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostRedirect`<sup>Required</sup> <a name="hostRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.hostRedirect"></a>

```java
public java.lang.String getHostRedirect();
```

- *Type:* java.lang.String

---

##### `httpsRedirect`<sup>Required</sup> <a name="httpsRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.httpsRedirect"></a>

```java
public java.lang.Object getHttpsRedirect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathRedirect`<sup>Required</sup> <a name="pathRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.pathRedirect"></a>

```java
public java.lang.String getPathRedirect();
```

- *Type:* java.lang.String

---

##### `prefixRedirect`<sup>Required</sup> <a name="prefixRedirect" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.prefixRedirect"></a>

```java
public java.lang.String getPrefixRedirect();
```

- *Type:* java.lang.String

---

##### `redirectResponseCode`<sup>Required</sup> <a name="redirectResponseCode" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.redirectResponseCode"></a>

```java
public java.lang.String getRedirectResponseCode();
```

- *Type:* java.lang.String

---

##### `stripQuery`<sup>Required</sup> <a name="stripQuery" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.stripQuery"></a>

```java
public java.lang.Object getStripQuery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirectOutputReference.property.internalValue"></a>

```java
public NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect">NetworkServicesEdgeCacheServiceRoutingPathMatcherRouteRuleUrlRedirect</a>

---


### NetworkServicesEdgeCacheServiceTimeoutsOutputReference <a name="NetworkServicesEdgeCacheServiceTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_service.NetworkServicesEdgeCacheServiceTimeoutsOutputReference;

new NetworkServicesEdgeCacheServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts">NetworkServicesEdgeCacheServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesEdgeCacheService.NetworkServicesEdgeCacheServiceTimeouts">NetworkServicesEdgeCacheServiceTimeouts</a>

---



