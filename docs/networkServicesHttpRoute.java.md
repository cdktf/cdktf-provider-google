# `networkServicesHttpRoute` Submodule <a name="`networkServicesHttpRoute` Submodule" id="@cdktf/provider-google.networkServicesHttpRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesHttpRoute <a name="NetworkServicesHttpRoute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route google_network_services_http_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRoute;

NetworkServicesHttpRoute.Builder.create(Construct scope, java.lang.String id)
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
    .hostnames(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<NetworkServicesHttpRouteRules>)
//  .description(java.lang.String)
//  .gateways(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .meshes(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesHttpRouteTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.gateways">gateways</a></code> | <code>java.util.List<java.lang.String></code> | Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#id NetworkServicesHttpRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.meshes">meshes</a></code> | <code>java.util.List<java.lang.String></code> | Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#project NetworkServicesHttpRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.hostnames"></a>

- *Type:* java.util.List<java.lang.String>

Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#hostnames NetworkServicesHttpRoute#hostnames}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the HttpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#name NetworkServicesHttpRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#rules NetworkServicesHttpRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#description NetworkServicesHttpRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.gateways"></a>

- *Type:* java.util.List<java.lang.String>

Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#gateways NetworkServicesHttpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#id NetworkServicesHttpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the HttpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#labels NetworkServicesHttpRoute#labels}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.meshes"></a>

- *Type:* java.util.List<java.lang.String>

Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>.
The attached Mesh should be of a type SIDECAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#meshes NetworkServicesHttpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#project NetworkServicesHttpRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#timeouts NetworkServicesHttpRoute#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetGateways">resetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetMeshes">resetMeshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<NetworkServicesHttpRouteRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesHttpRouteTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGateways` <a name="resetGateways" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetGateways"></a>

```java
public void resetGateways()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMeshes` <a name="resetMeshes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetMeshes"></a>

```java
public void resetMeshes()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesHttpRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRoute;

NetworkServicesHttpRoute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRoute;

NetworkServicesHttpRoute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRoute;

NetworkServicesHttpRoute.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRoute;

NetworkServicesHttpRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesHttpRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkServicesHttpRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesHttpRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesHttpRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesHttpRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList">NetworkServicesHttpRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference">NetworkServicesHttpRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.gatewaysInput">gatewaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.hostnamesInput">hostnamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.meshesInput">meshesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.gateways">gateways</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.meshes">meshes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.rules"></a>

```java
public NetworkServicesHttpRouteRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList">NetworkServicesHttpRouteRulesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.timeouts"></a>

```java
public NetworkServicesHttpRouteTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference">NetworkServicesHttpRouteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gatewaysInput`<sup>Optional</sup> <a name="gatewaysInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.gatewaysInput"></a>

```java
public java.util.List<java.lang.String> getGatewaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.hostnamesInput"></a>

```java
public java.util.List<java.lang.String> getHostnamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `meshesInput`<sup>Optional</sup> <a name="meshesInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.meshesInput"></a>

```java
public java.util.List<java.lang.String> getMeshesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gateways`<sup>Required</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.gateways"></a>

```java
public java.util.List<java.lang.String> getGateways();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `meshes`<sup>Required</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.meshes"></a>

```java
public java.util.List<java.lang.String> getMeshes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRoute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesHttpRouteConfig <a name="NetworkServicesHttpRouteConfig" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteConfig;

NetworkServicesHttpRouteConfig.builder()
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
    .hostnames(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .rules(IResolvable)
    .rules(java.util.List<NetworkServicesHttpRouteRules>)
//  .description(java.lang.String)
//  .gateways(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .meshes(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesHttpRouteTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>></code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.gateways">gateways</a></code> | <code>java.util.List<java.lang.String></code> | Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#id NetworkServicesHttpRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the HttpRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.meshes">meshes</a></code> | <code>java.util.List<java.lang.String></code> | Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#project NetworkServicesHttpRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#hostnames NetworkServicesHttpRoute#hostnames}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the HttpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#name NetworkServicesHttpRoute#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#rules NetworkServicesHttpRoute#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#description NetworkServicesHttpRoute#description}

---

##### `gateways`<sup>Optional</sup> <a name="gateways" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.gateways"></a>

```java
public java.util.List<java.lang.String> getGateways();
```

- *Type:* java.util.List<java.lang.String>

Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#gateways NetworkServicesHttpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#id NetworkServicesHttpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the HttpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#labels NetworkServicesHttpRoute#labels}

---

##### `meshes`<sup>Optional</sup> <a name="meshes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.meshes"></a>

```java
public java.util.List<java.lang.String> getMeshes();
```

- *Type:* java.util.List<java.lang.String>

Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>.
The attached Mesh should be of a type SIDECAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#meshes NetworkServicesHttpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#project NetworkServicesHttpRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteConfig.property.timeouts"></a>

```java
public NetworkServicesHttpRouteTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#timeouts NetworkServicesHttpRoute#timeouts}

---

### NetworkServicesHttpRouteRules <a name="NetworkServicesHttpRouteRules" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRules;

NetworkServicesHttpRouteRules.builder()
//  .action(NetworkServicesHttpRouteRulesAction)
//  .matches(IResolvable)
//  .matches(java.util.List<NetworkServicesHttpRouteRulesMatches>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.property.matches">matches</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>></code> | matches block. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.property.action"></a>

```java
public NetworkServicesHttpRouteRulesAction getAction();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#action NetworkServicesHttpRoute#action}

---

##### `matches`<sup>Optional</sup> <a name="matches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules.property.matches"></a>

```java
public java.lang.Object getMatches();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>>

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#matches NetworkServicesHttpRoute#matches}

---

### NetworkServicesHttpRouteRulesAction <a name="NetworkServicesHttpRouteRulesAction" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesAction;

NetworkServicesHttpRouteRulesAction.builder()
//  .corsPolicy(NetworkServicesHttpRouteRulesActionCorsPolicy)
//  .destinations(IResolvable)
//  .destinations(java.util.List<NetworkServicesHttpRouteRulesActionDestinations>)
//  .faultInjectionPolicy(NetworkServicesHttpRouteRulesActionFaultInjectionPolicy)
//  .redirect(NetworkServicesHttpRouteRulesActionRedirect)
//  .requestHeaderModifier(NetworkServicesHttpRouteRulesActionRequestHeaderModifier)
//  .requestMirrorPolicy(NetworkServicesHttpRouteRulesActionRequestMirrorPolicy)
//  .responseHeaderModifier(NetworkServicesHttpRouteRulesActionResponseHeaderModifier)
//  .retryPolicy(NetworkServicesHttpRouteRulesActionRetryPolicy)
//  .timeout(java.lang.String)
//  .urlRewrite(NetworkServicesHttpRouteRulesActionUrlRewrite)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.corsPolicy">corsPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | cors_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.destinations">destinations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>></code> | destinations block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.faultInjectionPolicy">faultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | fault_injection_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.requestHeaderModifier">requestHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | request_header_modifier block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.requestMirrorPolicy">requestMirrorPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | request_mirror_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.responseHeaderModifier">responseHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | response_header_modifier block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Specifies the timeout for selected route. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.urlRewrite">urlRewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | url_rewrite block. |

---

##### `corsPolicy`<sup>Optional</sup> <a name="corsPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.corsPolicy"></a>

```java
public NetworkServicesHttpRouteRulesActionCorsPolicy getCorsPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a>

cors_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#cors_policy NetworkServicesHttpRoute#cors_policy}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.destinations"></a>

```java
public java.lang.Object getDestinations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>>

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#destinations NetworkServicesHttpRoute#destinations}

---

##### `faultInjectionPolicy`<sup>Optional</sup> <a name="faultInjectionPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.faultInjectionPolicy"></a>

```java
public NetworkServicesHttpRouteRulesActionFaultInjectionPolicy getFaultInjectionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

fault_injection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#fault_injection_policy NetworkServicesHttpRoute#fault_injection_policy}

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.redirect"></a>

```java
public NetworkServicesHttpRouteRulesActionRedirect getRedirect();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#redirect NetworkServicesHttpRoute#redirect}

---

##### `requestHeaderModifier`<sup>Optional</sup> <a name="requestHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.requestHeaderModifier"></a>

```java
public NetworkServicesHttpRouteRulesActionRequestHeaderModifier getRequestHeaderModifier();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

request_header_modifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#request_header_modifier NetworkServicesHttpRoute#request_header_modifier}

---

##### `requestMirrorPolicy`<sup>Optional</sup> <a name="requestMirrorPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.requestMirrorPolicy"></a>

```java
public NetworkServicesHttpRouteRulesActionRequestMirrorPolicy getRequestMirrorPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

request_mirror_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#request_mirror_policy NetworkServicesHttpRoute#request_mirror_policy}

---

##### `responseHeaderModifier`<sup>Optional</sup> <a name="responseHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.responseHeaderModifier"></a>

```java
public NetworkServicesHttpRouteRulesActionResponseHeaderModifier getResponseHeaderModifier();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

response_header_modifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#response_header_modifier NetworkServicesHttpRoute#response_header_modifier}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.retryPolicy"></a>

```java
public NetworkServicesHttpRouteRulesActionRetryPolicy getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#retry_policy NetworkServicesHttpRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Specifies the timeout for selected route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#timeout NetworkServicesHttpRoute#timeout}

---

##### `urlRewrite`<sup>Optional</sup> <a name="urlRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction.property.urlRewrite"></a>

```java
public NetworkServicesHttpRouteRulesActionUrlRewrite getUrlRewrite();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a>

url_rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#url_rewrite NetworkServicesHttpRoute#url_rewrite}

---

### NetworkServicesHttpRouteRulesActionCorsPolicy <a name="NetworkServicesHttpRouteRulesActionCorsPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionCorsPolicy;

NetworkServicesHttpRouteRulesActionCorsPolicy.builder()
//  .allowCredentials(java.lang.Boolean)
//  .allowCredentials(IResolvable)
//  .allowHeaders(java.util.List<java.lang.String>)
//  .allowMethods(java.util.List<java.lang.String>)
//  .allowOriginRegexes(java.util.List<java.lang.String>)
//  .allowOrigins(java.util.List<java.lang.String>)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .exposeHeaders(java.util.List<java.lang.String>)
//  .maxAge(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | In response to a preflight request, setting this to true indicates that the actual request can include user credentials. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the content for Access-Control-Allow-Headers header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the content for Access-Control-Allow-Methods header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOriginRegexes">allowOriginRegexes</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the regular expression patterns that match allowed origins. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of origins that will be allowed to do CORS requests. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the CORS policy is disabled. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the content for Access-Control-Expose-Headers header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.maxAge">maxAge</a></code> | <code>java.lang.String</code> | Specifies how long result of a preflight request can be cached in seconds. |

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowCredentials"></a>

```java
public java.lang.Object getAllowCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

In response to a preflight request, setting this to true indicates that the actual request can include user credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#allow_credentials NetworkServicesHttpRoute#allow_credentials}

---

##### `allowHeaders`<sup>Optional</sup> <a name="allowHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

Specifies the content for Access-Control-Allow-Headers header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#allow_headers NetworkServicesHttpRoute#allow_headers}

---

##### `allowMethods`<sup>Optional</sup> <a name="allowMethods" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

Specifies the content for Access-Control-Allow-Methods header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#allow_methods NetworkServicesHttpRoute#allow_methods}

---

##### `allowOriginRegexes`<sup>Optional</sup> <a name="allowOriginRegexes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOriginRegexes"></a>

```java
public java.util.List<java.lang.String> getAllowOriginRegexes();
```

- *Type:* java.util.List<java.lang.String>

Specifies the regular expression patterns that match allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#allow_origin_regexes NetworkServicesHttpRoute#allow_origin_regexes}

---

##### `allowOrigins`<sup>Optional</sup> <a name="allowOrigins" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of origins that will be allowed to do CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#allow_origins NetworkServicesHttpRoute#allow_origins}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the CORS policy is disabled.

The default value is false, which indicates that the CORS policy is in effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#disabled NetworkServicesHttpRoute#disabled}

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

Specifies the content for Access-Control-Expose-Headers header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#expose_headers NetworkServicesHttpRoute#expose_headers}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy.property.maxAge"></a>

```java
public java.lang.String getMaxAge();
```

- *Type:* java.lang.String

Specifies how long result of a preflight request can be cached in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#max_age NetworkServicesHttpRoute#max_age}

---

### NetworkServicesHttpRouteRulesActionDestinations <a name="NetworkServicesHttpRouteRulesActionDestinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionDestinations;

NetworkServicesHttpRouteRulesActionDestinations.builder()
//  .serviceName(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.property.weight">weight</a></code> | <code>java.lang.Number</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#service_name NetworkServicesHttpRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#weight NetworkServicesHttpRoute#weight}

---

### NetworkServicesHttpRouteRulesActionFaultInjectionPolicy <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy;

NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.builder()
//  .abort(NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort)
//  .delay(NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.abort">abort</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | abort block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.delay">delay</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | delay block. |

---

##### `abort`<sup>Optional</sup> <a name="abort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.abort"></a>

```java
public NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort getAbort();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

abort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#abort NetworkServicesHttpRoute#abort}

---

##### `delay`<sup>Optional</sup> <a name="delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy.property.delay"></a>

```java
public NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay getDelay();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

delay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#delay NetworkServicesHttpRoute#delay}

---

### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort;

NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.builder()
//  .httpStatus(java.lang.Number)
//  .percentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus">httpStatus</a></code> | <code>java.lang.Number</code> | The HTTP status code used to abort the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | The percentage of traffic which will be aborted. |

---

##### `httpStatus`<sup>Optional</sup> <a name="httpStatus" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus"></a>

```java
public java.lang.Number getHttpStatus();
```

- *Type:* java.lang.Number

The HTTP status code used to abort the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#http_status NetworkServicesHttpRoute#http_status}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

The percentage of traffic which will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#percentage NetworkServicesHttpRoute#percentage}

---

### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay;

NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.builder()
//  .fixedDelay(java.lang.String)
//  .percentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay">fixedDelay</a></code> | <code>java.lang.String</code> | Specify a fixed delay before forwarding the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | The percentage of traffic on which delay will be injected. |

---

##### `fixedDelay`<sup>Optional</sup> <a name="fixedDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay"></a>

```java
public java.lang.String getFixedDelay();
```

- *Type:* java.lang.String

Specify a fixed delay before forwarding the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#fixed_delay NetworkServicesHttpRoute#fixed_delay}

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

The percentage of traffic on which delay will be injected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#percentage NetworkServicesHttpRoute#percentage}

---

### NetworkServicesHttpRouteRulesActionRedirect <a name="NetworkServicesHttpRouteRulesActionRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionRedirect;

NetworkServicesHttpRouteRulesActionRedirect.builder()
//  .hostRedirect(java.lang.String)
//  .httpsRedirect(java.lang.Boolean)
//  .httpsRedirect(IResolvable)
//  .pathRedirect(java.lang.String)
//  .portRedirect(java.lang.Number)
//  .prefixRewrite(java.lang.String)
//  .responseCode(java.lang.String)
//  .stripQuery(java.lang.Boolean)
//  .stripQuery(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.hostRedirect">hostRedirect</a></code> | <code>java.lang.String</code> | The host that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.httpsRedirect">httpsRedirect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the URL scheme in the redirected request is set to https. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.pathRedirect">pathRedirect</a></code> | <code>java.lang.String</code> | The path that will be used in the redirect response instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.portRedirect">portRedirect</a></code> | <code>java.lang.Number</code> | The port that will be used in the redirected request instead of the one that was supplied in the request. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.prefixRewrite">prefixRewrite</a></code> | <code>java.lang.String</code> | Indicates that during redirection, the matched prefix (or path) should be swapped with this value. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.responseCode">responseCode</a></code> | <code>java.lang.String</code> | The HTTP Status code to use for the redirect. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.stripQuery">stripQuery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. |

---

##### `hostRedirect`<sup>Optional</sup> <a name="hostRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.hostRedirect"></a>

```java
public java.lang.String getHostRedirect();
```

- *Type:* java.lang.String

The host that will be used in the redirect response instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#host_redirect NetworkServicesHttpRoute#host_redirect}

---

##### `httpsRedirect`<sup>Optional</sup> <a name="httpsRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.httpsRedirect"></a>

```java
public java.lang.Object getHttpsRedirect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the URL scheme in the redirected request is set to https.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#https_redirect NetworkServicesHttpRoute#https_redirect}

---

##### `pathRedirect`<sup>Optional</sup> <a name="pathRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.pathRedirect"></a>

```java
public java.lang.String getPathRedirect();
```

- *Type:* java.lang.String

The path that will be used in the redirect response instead of the one that was supplied in the request.

pathRedirect can not be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#path_redirect NetworkServicesHttpRoute#path_redirect}

---

##### `portRedirect`<sup>Optional</sup> <a name="portRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.portRedirect"></a>

```java
public java.lang.Number getPortRedirect();
```

- *Type:* java.lang.Number

The port that will be used in the redirected request instead of the one that was supplied in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#port_redirect NetworkServicesHttpRoute#port_redirect}

---

##### `prefixRewrite`<sup>Optional</sup> <a name="prefixRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.prefixRewrite"></a>

```java
public java.lang.String getPrefixRewrite();
```

- *Type:* java.lang.String

Indicates that during redirection, the matched prefix (or path) should be swapped with this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#prefix_rewrite NetworkServicesHttpRoute#prefix_rewrite}

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.responseCode"></a>

```java
public java.lang.String getResponseCode();
```

- *Type:* java.lang.String

The HTTP Status code to use for the redirect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#response_code NetworkServicesHttpRoute#response_code}

---

##### `stripQuery`<sup>Optional</sup> <a name="stripQuery" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect.property.stripQuery"></a>

```java
public java.lang.Object getStripQuery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#strip_query NetworkServicesHttpRoute#strip_query}

---

### NetworkServicesHttpRouteRulesActionRequestHeaderModifier <a name="NetworkServicesHttpRouteRulesActionRequestHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionRequestHeaderModifier;

NetworkServicesHttpRouteRulesActionRequestHeaderModifier.builder()
//  .add(java.util.Map<java.lang.String, java.lang.String>)
//  .remove(java.util.List<java.lang.String>)
//  .set(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.add">add</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Add the headers with given map where key is the name of the header, value is the value of the header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.remove">remove</a></code> | <code>java.util.List<java.lang.String></code> | Remove headers (matching by header names) specified in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.set">set</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.add"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Add the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#add NetworkServicesHttpRoute#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.remove"></a>

```java
public java.util.List<java.lang.String> getRemove();
```

- *Type:* java.util.List<java.lang.String>

Remove headers (matching by header names) specified in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#remove NetworkServicesHttpRoute#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier.property.set"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSet();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#set NetworkServicesHttpRoute#set}

---

### NetworkServicesHttpRouteRulesActionRequestMirrorPolicy <a name="NetworkServicesHttpRouteRulesActionRequestMirrorPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy;

NetworkServicesHttpRouteRulesActionRequestMirrorPolicy.builder()
//  .destination(NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | destination block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy.property.destination"></a>

```java
public NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination getDestination();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#destination NetworkServicesHttpRoute#destination}

---

### NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination <a name="NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination;

NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.builder()
//  .serviceName(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.weight">weight</a></code> | <code>java.lang.Number</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#service_name NetworkServicesHttpRoute#service_name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#weight NetworkServicesHttpRoute#weight}

---

### NetworkServicesHttpRouteRulesActionResponseHeaderModifier <a name="NetworkServicesHttpRouteRulesActionResponseHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionResponseHeaderModifier;

NetworkServicesHttpRouteRulesActionResponseHeaderModifier.builder()
//  .add(java.util.Map<java.lang.String, java.lang.String>)
//  .remove(java.util.List<java.lang.String>)
//  .set(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.add">add</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Add the headers with given map where key is the name of the header, value is the value of the header. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.remove">remove</a></code> | <code>java.util.List<java.lang.String></code> | Remove headers (matching by header names) specified in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.set">set</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. |

---

##### `add`<sup>Optional</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.add"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Add the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#add NetworkServicesHttpRoute#add}

---

##### `remove`<sup>Optional</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.remove"></a>

```java
public java.util.List<java.lang.String> getRemove();
```

- *Type:* java.util.List<java.lang.String>

Remove headers (matching by header names) specified in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#remove NetworkServicesHttpRoute#remove}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier.property.set"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSet();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#set NetworkServicesHttpRoute#set}

---

### NetworkServicesHttpRouteRulesActionRetryPolicy <a name="NetworkServicesHttpRouteRulesActionRetryPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionRetryPolicy;

NetworkServicesHttpRouteRulesActionRetryPolicy.builder()
//  .numRetries(java.lang.Number)
//  .perTryTimeout(java.lang.String)
//  .retryConditions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.numRetries">numRetries</a></code> | <code>java.lang.Number</code> | Specifies the allowed number of retries. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.perTryTimeout">perTryTimeout</a></code> | <code>java.lang.String</code> | Specifies a non-zero timeout per retry attempt. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.retryConditions">retryConditions</a></code> | <code>java.util.List<java.lang.String></code> | Specifies one or more conditions when this retry policy applies. |

---

##### `numRetries`<sup>Optional</sup> <a name="numRetries" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.numRetries"></a>

```java
public java.lang.Number getNumRetries();
```

- *Type:* java.lang.Number

Specifies the allowed number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#num_retries NetworkServicesHttpRoute#num_retries}

---

##### `perTryTimeout`<sup>Optional</sup> <a name="perTryTimeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.perTryTimeout"></a>

```java
public java.lang.String getPerTryTimeout();
```

- *Type:* java.lang.String

Specifies a non-zero timeout per retry attempt.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#per_try_timeout NetworkServicesHttpRoute#per_try_timeout}

---

##### `retryConditions`<sup>Optional</sup> <a name="retryConditions" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy.property.retryConditions"></a>

```java
public java.util.List<java.lang.String> getRetryConditions();
```

- *Type:* java.util.List<java.lang.String>

Specifies one or more conditions when this retry policy applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#retry_conditions NetworkServicesHttpRoute#retry_conditions}

---

### NetworkServicesHttpRouteRulesActionUrlRewrite <a name="NetworkServicesHttpRouteRulesActionUrlRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionUrlRewrite;

NetworkServicesHttpRouteRulesActionUrlRewrite.builder()
//  .hostRewrite(java.lang.String)
//  .pathPrefixRewrite(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.property.hostRewrite">hostRewrite</a></code> | <code>java.lang.String</code> | Prior to forwarding the request to the selected destination, the requests host header is replaced by this value. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.property.pathPrefixRewrite">pathPrefixRewrite</a></code> | <code>java.lang.String</code> | Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value. |

---

##### `hostRewrite`<sup>Optional</sup> <a name="hostRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.property.hostRewrite"></a>

```java
public java.lang.String getHostRewrite();
```

- *Type:* java.lang.String

Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#host_rewrite NetworkServicesHttpRoute#host_rewrite}

---

##### `pathPrefixRewrite`<sup>Optional</sup> <a name="pathPrefixRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite.property.pathPrefixRewrite"></a>

```java
public java.lang.String getPathPrefixRewrite();
```

- *Type:* java.lang.String

Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#path_prefix_rewrite NetworkServicesHttpRoute#path_prefix_rewrite}

---

### NetworkServicesHttpRouteRulesMatches <a name="NetworkServicesHttpRouteRulesMatches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesMatches;

NetworkServicesHttpRouteRulesMatches.builder()
//  .fullPathMatch(java.lang.String)
//  .headers(IResolvable)
//  .headers(java.util.List<NetworkServicesHttpRouteRulesMatchesHeaders>)
//  .ignoreCase(java.lang.Boolean)
//  .ignoreCase(IResolvable)
//  .prefixMatch(java.lang.String)
//  .queryParameters(IResolvable)
//  .queryParameters(java.util.List<NetworkServicesHttpRouteRulesMatchesQueryParameters>)
//  .regexMatch(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.fullPathMatch">fullPathMatch</a></code> | <code>java.lang.String</code> | The HTTP request path value should exactly match this value. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>></code> | headers block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.prefixMatch">prefixMatch</a></code> | <code>java.lang.String</code> | The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.queryParameters">queryParameters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>></code> | query_parameters block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.regexMatch">regexMatch</a></code> | <code>java.lang.String</code> | The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL. |

---

##### `fullPathMatch`<sup>Optional</sup> <a name="fullPathMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.fullPathMatch"></a>

```java
public java.lang.String getFullPathMatch();
```

- *Type:* java.lang.String

The HTTP request path value should exactly match this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#full_path_match NetworkServicesHttpRoute#full_path_match}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>>

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#headers NetworkServicesHttpRoute#headers}

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#ignore_case NetworkServicesHttpRoute#ignore_case}

---

##### `prefixMatch`<sup>Optional</sup> <a name="prefixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.prefixMatch"></a>

```java
public java.lang.String getPrefixMatch();
```

- *Type:* java.lang.String

The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#prefix_match NetworkServicesHttpRoute#prefix_match}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.queryParameters"></a>

```java
public java.lang.Object getQueryParameters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>>

query_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#query_parameters NetworkServicesHttpRoute#query_parameters}

---

##### `regexMatch`<sup>Optional</sup> <a name="regexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches.property.regexMatch"></a>

```java
public java.lang.String getRegexMatch();
```

- *Type:* java.lang.String

The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL.

For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#regex_match NetworkServicesHttpRoute#regex_match}

---

### NetworkServicesHttpRouteRulesMatchesHeaders <a name="NetworkServicesHttpRouteRulesMatchesHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesMatchesHeaders;

NetworkServicesHttpRouteRulesMatchesHeaders.builder()
//  .exactMatch(java.lang.String)
//  .header(java.lang.String)
//  .invertMatch(java.lang.Boolean)
//  .invertMatch(IResolvable)
//  .prefixMatch(java.lang.String)
//  .presentMatch(java.lang.Boolean)
//  .presentMatch(IResolvable)
//  .rangeMatch(NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch)
//  .regexMatch(java.lang.String)
//  .suffixMatch(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.exactMatch">exactMatch</a></code> | <code>java.lang.String</code> | The value of the header should match exactly the content of exactMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.header">header</a></code> | <code>java.lang.String</code> | The name of the HTTP header to match against. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.invertMatch">invertMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If specified, the match result will be inverted before checking. Default value is set to false. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.prefixMatch">prefixMatch</a></code> | <code>java.lang.String</code> | The value of the header must start with the contents of prefixMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.presentMatch">presentMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A header with headerName must exist. The match takes place whether or not the header has a value. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.rangeMatch">rangeMatch</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | range_match block. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.regexMatch">regexMatch</a></code> | <code>java.lang.String</code> | The value of the header must match the regular expression specified in regexMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.suffixMatch">suffixMatch</a></code> | <code>java.lang.String</code> | The value of the header must end with the contents of suffixMatch. |

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.exactMatch"></a>

```java
public java.lang.String getExactMatch();
```

- *Type:* java.lang.String

The value of the header should match exactly the content of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#exact_match NetworkServicesHttpRoute#exact_match}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

The name of the HTTP header to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#header NetworkServicesHttpRoute#header}

---

##### `invertMatch`<sup>Optional</sup> <a name="invertMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.invertMatch"></a>

```java
public java.lang.Object getInvertMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If specified, the match result will be inverted before checking. Default value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#invert_match NetworkServicesHttpRoute#invert_match}

---

##### `prefixMatch`<sup>Optional</sup> <a name="prefixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.prefixMatch"></a>

```java
public java.lang.String getPrefixMatch();
```

- *Type:* java.lang.String

The value of the header must start with the contents of prefixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#prefix_match NetworkServicesHttpRoute#prefix_match}

---

##### `presentMatch`<sup>Optional</sup> <a name="presentMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.presentMatch"></a>

```java
public java.lang.Object getPresentMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A header with headerName must exist. The match takes place whether or not the header has a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#present_match NetworkServicesHttpRoute#present_match}

---

##### `rangeMatch`<sup>Optional</sup> <a name="rangeMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.rangeMatch"></a>

```java
public NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch getRangeMatch();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

range_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#range_match NetworkServicesHttpRoute#range_match}

---

##### `regexMatch`<sup>Optional</sup> <a name="regexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.regexMatch"></a>

```java
public java.lang.String getRegexMatch();
```

- *Type:* java.lang.String

The value of the header must match the regular expression specified in regexMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#regex_match NetworkServicesHttpRoute#regex_match}

---

##### `suffixMatch`<sup>Optional</sup> <a name="suffixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders.property.suffixMatch"></a>

```java
public java.lang.String getSuffixMatch();
```

- *Type:* java.lang.String

The value of the header must end with the contents of suffixMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#suffix_match NetworkServicesHttpRoute#suffix_match}

---

### NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch <a name="NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch;

NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.builder()
    .end(java.lang.Number)
    .start(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.end">end</a></code> | <code>java.lang.Number</code> | End of the range (exclusive). |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.start">start</a></code> | <code>java.lang.Number</code> | Start of the range (inclusive). |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

End of the range (exclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#end NetworkServicesHttpRoute#end}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

Start of the range (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#start NetworkServicesHttpRoute#start}

---

### NetworkServicesHttpRouteRulesMatchesQueryParameters <a name="NetworkServicesHttpRouteRulesMatchesQueryParameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesMatchesQueryParameters;

NetworkServicesHttpRouteRulesMatchesQueryParameters.builder()
//  .exactMatch(java.lang.String)
//  .presentMatch(java.lang.Boolean)
//  .presentMatch(IResolvable)
//  .queryParameter(java.lang.String)
//  .regexMatch(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.exactMatch">exactMatch</a></code> | <code>java.lang.String</code> | The value of the query parameter must exactly match the contents of exactMatch. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.presentMatch">presentMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.queryParameter">queryParameter</a></code> | <code>java.lang.String</code> | The name of the query parameter to match. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.regexMatch">regexMatch</a></code> | <code>java.lang.String</code> | The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax. |

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.exactMatch"></a>

```java
public java.lang.String getExactMatch();
```

- *Type:* java.lang.String

The value of the query parameter must exactly match the contents of exactMatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#exact_match NetworkServicesHttpRoute#exact_match}

---

##### `presentMatch`<sup>Optional</sup> <a name="presentMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.presentMatch"></a>

```java
public java.lang.Object getPresentMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#present_match NetworkServicesHttpRoute#present_match}

---

##### `queryParameter`<sup>Optional</sup> <a name="queryParameter" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.queryParameter"></a>

```java
public java.lang.String getQueryParameter();
```

- *Type:* java.lang.String

The name of the query parameter to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#query_parameter NetworkServicesHttpRoute#query_parameter}

---

##### `regexMatch`<sup>Optional</sup> <a name="regexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters.property.regexMatch"></a>

```java
public java.lang.String getRegexMatch();
```

- *Type:* java.lang.String

The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#regex_match NetworkServicesHttpRoute#regex_match}

---

### NetworkServicesHttpRouteTimeouts <a name="NetworkServicesHttpRouteTimeouts" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteTimeouts;

NetworkServicesHttpRouteTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#create NetworkServicesHttpRoute#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#delete NetworkServicesHttpRoute#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#update NetworkServicesHttpRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#create NetworkServicesHttpRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#delete NetworkServicesHttpRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_http_route#update NetworkServicesHttpRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference <a name="NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference;

new NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowHeaders">resetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowMethods">resetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOriginRegexes">resetAllowOriginRegexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOrigins">resetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowCredentials"></a>

```java
public void resetAllowCredentials()
```

##### `resetAllowHeaders` <a name="resetAllowHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowHeaders"></a>

```java
public void resetAllowHeaders()
```

##### `resetAllowMethods` <a name="resetAllowMethods" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowMethods"></a>

```java
public void resetAllowMethods()
```

##### `resetAllowOriginRegexes` <a name="resetAllowOriginRegexes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOriginRegexes"></a>

```java
public void resetAllowOriginRegexes()
```

##### `resetAllowOrigins` <a name="resetAllowOrigins" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetAllowOrigins"></a>

```java
public void resetAllowOrigins()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetExposeHeaders"></a>

```java
public void resetExposeHeaders()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.resetMaxAge"></a>

```java
public void resetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeadersInput">allowHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethodsInput">allowMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexesInput">allowOriginRegexesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginsInput">allowOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexes">allowOriginRegexes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentialsInput"></a>

```java
public java.lang.Object getAllowCredentialsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHeadersInput`<sup>Optional</sup> <a name="allowHeadersInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethodsInput`<sup>Optional</sup> <a name="allowMethodsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOriginRegexesInput`<sup>Optional</sup> <a name="allowOriginRegexesInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexesInput"></a>

```java
public java.util.List<java.lang.String> getAllowOriginRegexesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOriginsInput`<sup>Optional</sup> <a name="allowOriginsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposeHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAgeInput"></a>

```java
public java.lang.String getMaxAgeInput();
```

- *Type:* java.lang.String

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowCredentials"></a>

```java
public java.lang.Object getAllowCredentials();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOriginRegexes`<sup>Required</sup> <a name="allowOriginRegexes" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOriginRegexes"></a>

```java
public java.util.List<java.lang.String> getAllowOriginRegexes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.maxAge"></a>

```java
public java.lang.String getMaxAge();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesActionCorsPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a>

---


### NetworkServicesHttpRouteRulesActionDestinationsList <a name="NetworkServicesHttpRouteRulesActionDestinationsList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionDestinationsList;

new NetworkServicesHttpRouteRulesActionDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.get"></a>

```java
public NetworkServicesHttpRouteRulesActionDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>>

---


### NetworkServicesHttpRouteRulesActionDestinationsOutputReference <a name="NetworkServicesHttpRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionDestinationsOutputReference;

new NetworkServicesHttpRouteRulesActionDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>

---


### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference;

new NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus">resetHttpStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpStatus` <a name="resetHttpStatus" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus"></a>

```java
public void resetHttpStatus()
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage"></a>

```java
public void resetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput">httpStatusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus">httpStatus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpStatusInput`<sup>Optional</sup> <a name="httpStatusInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput"></a>

```java
public java.lang.Number getHttpStatusInput();
```

- *Type:* java.lang.Number

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `httpStatus`<sup>Required</sup> <a name="httpStatus" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus"></a>

```java
public java.lang.Number getHttpStatus();
```

- *Type:* java.lang.Number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---


### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference;

new NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay">resetFixedDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixedDelay` <a name="resetFixedDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay"></a>

```java
public void resetFixedDelay()
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage"></a>

```java
public void resetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput">fixedDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay">fixedDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedDelayInput`<sup>Optional</sup> <a name="fixedDelayInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput"></a>

```java
public java.lang.String getFixedDelayInput();
```

- *Type:* java.lang.String

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `fixedDelay`<sup>Required</sup> <a name="fixedDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay"></a>

```java
public java.lang.String getFixedDelay();
```

- *Type:* java.lang.String

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---


### NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference <a name="NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference;

new NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort">putAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay">putDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort">resetAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay">resetDelay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbort` <a name="putAbort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort"></a>

```java
public void putAbort(NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putAbort.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `putDelay` <a name="putDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay"></a>

```java
public void putDelay(NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.putDelay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `resetAbort` <a name="resetAbort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort"></a>

```java
public void resetAbort()
```

##### `resetDelay` <a name="resetDelay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay"></a>

```java
public void resetDelay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abort">abort</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delay">delay</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput">abortInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput">delayInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `abort`<sup>Required</sup> <a name="abort" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abort"></a>

```java
public NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference getAbort();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference</a>

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delay"></a>

```java
public NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference getDelay();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference</a>

---

##### `abortInput`<sup>Optional</sup> <a name="abortInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput"></a>

```java
public NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort getAbortInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput"></a>

```java
public NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay getDelayInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesActionFaultInjectionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---


### NetworkServicesHttpRouteRulesActionOutputReference <a name="NetworkServicesHttpRouteRulesActionOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionOutputReference;

new NetworkServicesHttpRouteRulesActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy">putCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy">putFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier">putRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy">putRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier">putResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite">putUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetCorsPolicy">resetCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetFaultInjectionPolicy">resetFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRedirect">resetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRequestHeaderModifier">resetRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRequestMirrorPolicy">resetRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetResponseHeaderModifier">resetResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetUrlRewrite">resetUrlRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCorsPolicy` <a name="putCorsPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy"></a>

```java
public void putCorsPolicy(NetworkServicesHttpRouteRulesActionCorsPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putCorsPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a>

---

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putDestinations"></a>

```java
public void putDestinations(IResolvable OR java.util.List<NetworkServicesHttpRouteRulesActionDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>>

---

##### `putFaultInjectionPolicy` <a name="putFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy"></a>

```java
public void putFaultInjectionPolicy(NetworkServicesHttpRouteRulesActionFaultInjectionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putFaultInjectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---

##### `putRedirect` <a name="putRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect"></a>

```java
public void putRedirect(NetworkServicesHttpRouteRulesActionRedirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a>

---

##### `putRequestHeaderModifier` <a name="putRequestHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier"></a>

```java
public void putRequestHeaderModifier(NetworkServicesHttpRouteRulesActionRequestHeaderModifier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestHeaderModifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---

##### `putRequestMirrorPolicy` <a name="putRequestMirrorPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy"></a>

```java
public void putRequestMirrorPolicy(NetworkServicesHttpRouteRulesActionRequestMirrorPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRequestMirrorPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---

##### `putResponseHeaderModifier` <a name="putResponseHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier"></a>

```java
public void putResponseHeaderModifier(NetworkServicesHttpRouteRulesActionResponseHeaderModifier value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putResponseHeaderModifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy"></a>

```java
public void putRetryPolicy(NetworkServicesHttpRouteRulesActionRetryPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a>

---

##### `putUrlRewrite` <a name="putUrlRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite"></a>

```java
public void putUrlRewrite(NetworkServicesHttpRouteRulesActionUrlRewrite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.putUrlRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a>

---

##### `resetCorsPolicy` <a name="resetCorsPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetCorsPolicy"></a>

```java
public void resetCorsPolicy()
```

##### `resetDestinations` <a name="resetDestinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetFaultInjectionPolicy` <a name="resetFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetFaultInjectionPolicy"></a>

```java
public void resetFaultInjectionPolicy()
```

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRedirect"></a>

```java
public void resetRedirect()
```

##### `resetRequestHeaderModifier` <a name="resetRequestHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRequestHeaderModifier"></a>

```java
public void resetRequestHeaderModifier()
```

##### `resetRequestMirrorPolicy` <a name="resetRequestMirrorPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRequestMirrorPolicy"></a>

```java
public void resetRequestMirrorPolicy()
```

##### `resetResponseHeaderModifier` <a name="resetResponseHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetResponseHeaderModifier"></a>

```java
public void resetResponseHeaderModifier()
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetRetryPolicy"></a>

```java
public void resetRetryPolicy()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetUrlRewrite` <a name="resetUrlRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.resetUrlRewrite"></a>

```java
public void resetUrlRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicy">corsPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference">NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList">NetworkServicesHttpRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicy">faultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference">NetworkServicesHttpRouteRulesActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifier">requestHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference">NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicy">requestMirrorPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifier">responseHeaderModifier</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference">NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference">NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.urlRewrite">urlRewrite</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference">NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicyInput">corsPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicyInput">faultInjectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.redirectInput">redirectInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifierInput">requestHeaderModifierInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicyInput">requestMirrorPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifierInput">responseHeaderModifierInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.urlRewriteInput">urlRewriteInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `corsPolicy`<sup>Required</sup> <a name="corsPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicy"></a>

```java
public NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference getCorsPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference">NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.destinations"></a>

```java
public NetworkServicesHttpRouteRulesActionDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinationsList">NetworkServicesHttpRouteRulesActionDestinationsList</a>

---

##### `faultInjectionPolicy`<sup>Required</sup> <a name="faultInjectionPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicy"></a>

```java
public NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference getFaultInjectionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference">NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.redirect"></a>

```java
public NetworkServicesHttpRouteRulesActionRedirectOutputReference getRedirect();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference">NetworkServicesHttpRouteRulesActionRedirectOutputReference</a>

---

##### `requestHeaderModifier`<sup>Required</sup> <a name="requestHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifier"></a>

```java
public NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference getRequestHeaderModifier();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference">NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference</a>

---

##### `requestMirrorPolicy`<sup>Required</sup> <a name="requestMirrorPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicy"></a>

```java
public NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference getRequestMirrorPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference</a>

---

##### `responseHeaderModifier`<sup>Required</sup> <a name="responseHeaderModifier" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifier"></a>

```java
public NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference getResponseHeaderModifier();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference">NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicy"></a>

```java
public NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference getRetryPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference">NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference</a>

---

##### `urlRewrite`<sup>Required</sup> <a name="urlRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.urlRewrite"></a>

```java
public NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference getUrlRewrite();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference">NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference</a>

---

##### `corsPolicyInput`<sup>Optional</sup> <a name="corsPolicyInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.corsPolicyInput"></a>

```java
public NetworkServicesHttpRouteRulesActionCorsPolicy getCorsPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionCorsPolicy">NetworkServicesHttpRouteRulesActionCorsPolicy</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.destinationsInput"></a>

```java
public java.lang.Object getDestinationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionDestinations">NetworkServicesHttpRouteRulesActionDestinations</a>>

---

##### `faultInjectionPolicyInput`<sup>Optional</sup> <a name="faultInjectionPolicyInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.faultInjectionPolicyInput"></a>

```java
public NetworkServicesHttpRouteRulesActionFaultInjectionPolicy getFaultInjectionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionFaultInjectionPolicy">NetworkServicesHttpRouteRulesActionFaultInjectionPolicy</a>

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.redirectInput"></a>

```java
public NetworkServicesHttpRouteRulesActionRedirect getRedirectInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a>

---

##### `requestHeaderModifierInput`<sup>Optional</sup> <a name="requestHeaderModifierInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestHeaderModifierInput"></a>

```java
public NetworkServicesHttpRouteRulesActionRequestHeaderModifier getRequestHeaderModifierInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---

##### `requestMirrorPolicyInput`<sup>Optional</sup> <a name="requestMirrorPolicyInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.requestMirrorPolicyInput"></a>

```java
public NetworkServicesHttpRouteRulesActionRequestMirrorPolicy getRequestMirrorPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---

##### `responseHeaderModifierInput`<sup>Optional</sup> <a name="responseHeaderModifierInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.responseHeaderModifierInput"></a>

```java
public NetworkServicesHttpRouteRulesActionResponseHeaderModifier getResponseHeaderModifierInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.retryPolicyInput"></a>

```java
public NetworkServicesHttpRouteRulesActionRetryPolicy getRetryPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `urlRewriteInput`<sup>Optional</sup> <a name="urlRewriteInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.urlRewriteInput"></a>

```java
public NetworkServicesHttpRouteRulesActionUrlRewrite getUrlRewriteInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a>

---


### NetworkServicesHttpRouteRulesActionRedirectOutputReference <a name="NetworkServicesHttpRouteRulesActionRedirectOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionRedirectOutputReference;

new NetworkServicesHttpRouteRulesActionRedirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHostRedirect">resetHostRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHttpsRedirect">resetHttpsRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPathRedirect">resetPathRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPortRedirect">resetPortRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPrefixRewrite">resetPrefixRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetResponseCode">resetResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetStripQuery">resetStripQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostRedirect` <a name="resetHostRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHostRedirect"></a>

```java
public void resetHostRedirect()
```

##### `resetHttpsRedirect` <a name="resetHttpsRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetHttpsRedirect"></a>

```java
public void resetHttpsRedirect()
```

##### `resetPathRedirect` <a name="resetPathRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPathRedirect"></a>

```java
public void resetPathRedirect()
```

##### `resetPortRedirect` <a name="resetPortRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPortRedirect"></a>

```java
public void resetPortRedirect()
```

##### `resetPrefixRewrite` <a name="resetPrefixRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetPrefixRewrite"></a>

```java
public void resetPrefixRewrite()
```

##### `resetResponseCode` <a name="resetResponseCode" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetResponseCode"></a>

```java
public void resetResponseCode()
```

##### `resetStripQuery` <a name="resetStripQuery" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.resetStripQuery"></a>

```java
public void resetStripQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirectInput">hostRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirectInput">httpsRedirectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirectInput">pathRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirectInput">portRedirectInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewriteInput">prefixRewriteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQueryInput">stripQueryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirect">hostRedirect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirect">httpsRedirect</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirect">pathRedirect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirect">portRedirect</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewrite">prefixRewrite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCode">responseCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQuery">stripQuery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostRedirectInput`<sup>Optional</sup> <a name="hostRedirectInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirectInput"></a>

```java
public java.lang.String getHostRedirectInput();
```

- *Type:* java.lang.String

---

##### `httpsRedirectInput`<sup>Optional</sup> <a name="httpsRedirectInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirectInput"></a>

```java
public java.lang.Object getHttpsRedirectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathRedirectInput`<sup>Optional</sup> <a name="pathRedirectInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirectInput"></a>

```java
public java.lang.String getPathRedirectInput();
```

- *Type:* java.lang.String

---

##### `portRedirectInput`<sup>Optional</sup> <a name="portRedirectInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirectInput"></a>

```java
public java.lang.Number getPortRedirectInput();
```

- *Type:* java.lang.Number

---

##### `prefixRewriteInput`<sup>Optional</sup> <a name="prefixRewriteInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewriteInput"></a>

```java
public java.lang.String getPrefixRewriteInput();
```

- *Type:* java.lang.String

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCodeInput"></a>

```java
public java.lang.String getResponseCodeInput();
```

- *Type:* java.lang.String

---

##### `stripQueryInput`<sup>Optional</sup> <a name="stripQueryInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQueryInput"></a>

```java
public java.lang.Object getStripQueryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostRedirect`<sup>Required</sup> <a name="hostRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.hostRedirect"></a>

```java
public java.lang.String getHostRedirect();
```

- *Type:* java.lang.String

---

##### `httpsRedirect`<sup>Required</sup> <a name="httpsRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.httpsRedirect"></a>

```java
public java.lang.Object getHttpsRedirect();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pathRedirect`<sup>Required</sup> <a name="pathRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.pathRedirect"></a>

```java
public java.lang.String getPathRedirect();
```

- *Type:* java.lang.String

---

##### `portRedirect`<sup>Required</sup> <a name="portRedirect" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.portRedirect"></a>

```java
public java.lang.Number getPortRedirect();
```

- *Type:* java.lang.Number

---

##### `prefixRewrite`<sup>Required</sup> <a name="prefixRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.prefixRewrite"></a>

```java
public java.lang.String getPrefixRewrite();
```

- *Type:* java.lang.String

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.responseCode"></a>

```java
public java.lang.String getResponseCode();
```

- *Type:* java.lang.String

---

##### `stripQuery`<sup>Required</sup> <a name="stripQuery" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.stripQuery"></a>

```java
public java.lang.Object getStripQuery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirectOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesActionRedirect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRedirect">NetworkServicesHttpRouteRulesActionRedirect</a>

---


### NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference <a name="NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference;

new NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetAdd"></a>

```java
public void resetAdd()
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetRemove"></a>

```java
public void resetRemove()
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.resetSet"></a>

```java
public void resetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.addInput">addInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.removeInput">removeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.setInput">setInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.add">add</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.remove">remove</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.set">set</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.addInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.removeInput"></a>

```java
public java.util.List<java.lang.String> getRemoveInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.setInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSetInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.add"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.remove"></a>

```java
public java.util.List<java.lang.String> getRemove();
```

- *Type:* java.util.List<java.lang.String>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.set"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSet();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesActionRequestHeaderModifier getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestHeaderModifier">NetworkServicesHttpRouteRulesActionRequestHeaderModifier</a>

---


### NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference <a name="NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference;

new NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---


### NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference <a name="NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference;

new NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resetDestination">resetDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination"></a>

```java
public void putDestination(NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.resetDestination"></a>

```java
public void resetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destination"></a>

```java
public NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.destinationInput"></a>

```java
public NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination getDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination">NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesActionRequestMirrorPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRequestMirrorPolicy">NetworkServicesHttpRouteRulesActionRequestMirrorPolicy</a>

---


### NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference <a name="NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference;

new NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetAdd">resetAdd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetRemove">resetRemove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetSet">resetSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdd` <a name="resetAdd" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetAdd"></a>

```java
public void resetAdd()
```

##### `resetRemove` <a name="resetRemove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetRemove"></a>

```java
public void resetRemove()
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.resetSet"></a>

```java
public void resetSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.addInput">addInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.removeInput">removeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.setInput">setInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.add">add</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.remove">remove</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.set">set</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.addInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAddInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `removeInput`<sup>Optional</sup> <a name="removeInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.removeInput"></a>

```java
public java.util.List<java.lang.String> getRemoveInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.setInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSetInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.add"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAdd();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `remove`<sup>Required</sup> <a name="remove" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.remove"></a>

```java
public java.util.List<java.lang.String> getRemove();
```

- *Type:* java.util.List<java.lang.String>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.set"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSet();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesActionResponseHeaderModifier getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionResponseHeaderModifier">NetworkServicesHttpRouteRulesActionResponseHeaderModifier</a>

---


### NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference <a name="NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference;

new NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetNumRetries">resetNumRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetPerTryTimeout">resetPerTryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetRetryConditions">resetRetryConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumRetries` <a name="resetNumRetries" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetNumRetries"></a>

```java
public void resetNumRetries()
```

##### `resetPerTryTimeout` <a name="resetPerTryTimeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetPerTryTimeout"></a>

```java
public void resetPerTryTimeout()
```

##### `resetRetryConditions` <a name="resetRetryConditions" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.resetRetryConditions"></a>

```java
public void resetRetryConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput">numRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeoutInput">perTryTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput">retryConditionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetries">numRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeout">perTryTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditions">retryConditions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numRetriesInput`<sup>Optional</sup> <a name="numRetriesInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput"></a>

```java
public java.lang.Number getNumRetriesInput();
```

- *Type:* java.lang.Number

---

##### `perTryTimeoutInput`<sup>Optional</sup> <a name="perTryTimeoutInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeoutInput"></a>

```java
public java.lang.String getPerTryTimeoutInput();
```

- *Type:* java.lang.String

---

##### `retryConditionsInput`<sup>Optional</sup> <a name="retryConditionsInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput"></a>

```java
public java.util.List<java.lang.String> getRetryConditionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `numRetries`<sup>Required</sup> <a name="numRetries" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.numRetries"></a>

```java
public java.lang.Number getNumRetries();
```

- *Type:* java.lang.Number

---

##### `perTryTimeout`<sup>Required</sup> <a name="perTryTimeout" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.perTryTimeout"></a>

```java
public java.lang.String getPerTryTimeout();
```

- *Type:* java.lang.String

---

##### `retryConditions`<sup>Required</sup> <a name="retryConditions" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.retryConditions"></a>

```java
public java.util.List<java.lang.String> getRetryConditions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesActionRetryPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionRetryPolicy">NetworkServicesHttpRouteRulesActionRetryPolicy</a>

---


### NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference <a name="NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference;

new NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetHostRewrite">resetHostRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetPathPrefixRewrite">resetPathPrefixRewrite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostRewrite` <a name="resetHostRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetHostRewrite"></a>

```java
public void resetHostRewrite()
```

##### `resetPathPrefixRewrite` <a name="resetPathPrefixRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.resetPathPrefixRewrite"></a>

```java
public void resetPathPrefixRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewriteInput">hostRewriteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewriteInput">pathPrefixRewriteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewrite">hostRewrite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewrite">pathPrefixRewrite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostRewriteInput`<sup>Optional</sup> <a name="hostRewriteInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewriteInput"></a>

```java
public java.lang.String getHostRewriteInput();
```

- *Type:* java.lang.String

---

##### `pathPrefixRewriteInput`<sup>Optional</sup> <a name="pathPrefixRewriteInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewriteInput"></a>

```java
public java.lang.String getPathPrefixRewriteInput();
```

- *Type:* java.lang.String

---

##### `hostRewrite`<sup>Required</sup> <a name="hostRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.hostRewrite"></a>

```java
public java.lang.String getHostRewrite();
```

- *Type:* java.lang.String

---

##### `pathPrefixRewrite`<sup>Required</sup> <a name="pathPrefixRewrite" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.pathPrefixRewrite"></a>

```java
public java.lang.String getPathPrefixRewrite();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesActionUrlRewrite getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionUrlRewrite">NetworkServicesHttpRouteRulesActionUrlRewrite</a>

---


### NetworkServicesHttpRouteRulesList <a name="NetworkServicesHttpRouteRulesList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesList;

new NetworkServicesHttpRouteRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.get"></a>

```java
public NetworkServicesHttpRouteRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>>

---


### NetworkServicesHttpRouteRulesMatchesHeadersList <a name="NetworkServicesHttpRouteRulesMatchesHeadersList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesMatchesHeadersList;

new NetworkServicesHttpRouteRulesMatchesHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.get"></a>

```java
public NetworkServicesHttpRouteRulesMatchesHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>>

---


### NetworkServicesHttpRouteRulesMatchesHeadersOutputReference <a name="NetworkServicesHttpRouteRulesMatchesHeadersOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference;

new NetworkServicesHttpRouteRulesMatchesHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch">putRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetInvertMatch">resetInvertMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPrefixMatch">resetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPresentMatch">resetPresentMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRangeMatch">resetRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRegexMatch">resetRegexMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetSuffixMatch">resetSuffixMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRangeMatch` <a name="putRangeMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch"></a>

```java
public void putRangeMatch(NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.putRangeMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetExactMatch"></a>

```java
public void resetExactMatch()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetInvertMatch` <a name="resetInvertMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetInvertMatch"></a>

```java
public void resetInvertMatch()
```

##### `resetPrefixMatch` <a name="resetPrefixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPrefixMatch"></a>

```java
public void resetPrefixMatch()
```

##### `resetPresentMatch` <a name="resetPresentMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetPresentMatch"></a>

```java
public void resetPresentMatch()
```

##### `resetRangeMatch` <a name="resetRangeMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRangeMatch"></a>

```java
public void resetRangeMatch()
```

##### `resetRegexMatch` <a name="resetRegexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetRegexMatch"></a>

```java
public void resetRegexMatch()
```

##### `resetSuffixMatch` <a name="resetSuffixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.resetSuffixMatch"></a>

```java
public void resetSuffixMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatch">rangeMatch</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatchInput">exactMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.headerInput">headerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatchInput">invertMatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatchInput">prefixMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatchInput">presentMatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatchInput">rangeMatchInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatchInput">regexMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatchInput">suffixMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatch">exactMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.header">header</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatch">invertMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatch">presentMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatch">regexMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatch">suffixMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rangeMatch`<sup>Required</sup> <a name="rangeMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatch"></a>

```java
public NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference getRangeMatch();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference</a>

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatchInput"></a>

```java
public java.lang.String getExactMatchInput();
```

- *Type:* java.lang.String

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.headerInput"></a>

```java
public java.lang.String getHeaderInput();
```

- *Type:* java.lang.String

---

##### `invertMatchInput`<sup>Optional</sup> <a name="invertMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatchInput"></a>

```java
public java.lang.Object getInvertMatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixMatchInput`<sup>Optional</sup> <a name="prefixMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatchInput"></a>

```java
public java.lang.String getPrefixMatchInput();
```

- *Type:* java.lang.String

---

##### `presentMatchInput`<sup>Optional</sup> <a name="presentMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatchInput"></a>

```java
public java.lang.Object getPresentMatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rangeMatchInput`<sup>Optional</sup> <a name="rangeMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.rangeMatchInput"></a>

```java
public NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch getRangeMatchInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---

##### `regexMatchInput`<sup>Optional</sup> <a name="regexMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatchInput"></a>

```java
public java.lang.String getRegexMatchInput();
```

- *Type:* java.lang.String

---

##### `suffixMatchInput`<sup>Optional</sup> <a name="suffixMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatchInput"></a>

```java
public java.lang.String getSuffixMatchInput();
```

- *Type:* java.lang.String

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.exactMatch"></a>

```java
public java.lang.String getExactMatch();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

---

##### `invertMatch`<sup>Required</sup> <a name="invertMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.invertMatch"></a>

```java
public java.lang.Object getInvertMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.prefixMatch"></a>

```java
public java.lang.String getPrefixMatch();
```

- *Type:* java.lang.String

---

##### `presentMatch`<sup>Required</sup> <a name="presentMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.presentMatch"></a>

```java
public java.lang.Object getPresentMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regexMatch`<sup>Required</sup> <a name="regexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.regexMatch"></a>

```java
public java.lang.String getRegexMatch();
```

- *Type:* java.lang.String

---

##### `suffixMatch`<sup>Required</sup> <a name="suffixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.suffixMatch"></a>

```java
public java.lang.String getSuffixMatch();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>

---


### NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference <a name="NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference;

new NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.endInput">endInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.startInput">startInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.end">end</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.start">start</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.endInput"></a>

```java
public java.lang.Number getEndInput();
```

- *Type:* java.lang.Number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.startInput"></a>

```java
public java.lang.Number getStartInput();
```

- *Type:* java.lang.Number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference.property.internalValue"></a>

```java
public NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch">NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch</a>

---


### NetworkServicesHttpRouteRulesMatchesList <a name="NetworkServicesHttpRouteRulesMatchesList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesMatchesList;

new NetworkServicesHttpRouteRulesMatchesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.get"></a>

```java
public NetworkServicesHttpRouteRulesMatchesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>>

---


### NetworkServicesHttpRouteRulesMatchesOutputReference <a name="NetworkServicesHttpRouteRulesMatchesOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesMatchesOutputReference;

new NetworkServicesHttpRouteRulesMatchesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters">putQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetFullPathMatch">resetFullPathMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetPrefixMatch">resetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetRegexMatch">resetRegexMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders"></a>

```java
public void putHeaders(IResolvable OR java.util.List<NetworkServicesHttpRouteRulesMatchesHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putHeaders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>>

---

##### `putQueryParameters` <a name="putQueryParameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters"></a>

```java
public void putQueryParameters(IResolvable OR java.util.List<NetworkServicesHttpRouteRulesMatchesQueryParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.putQueryParameters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>>

---

##### `resetFullPathMatch` <a name="resetFullPathMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetFullPathMatch"></a>

```java
public void resetFullPathMatch()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetIgnoreCase"></a>

```java
public void resetIgnoreCase()
```

##### `resetPrefixMatch` <a name="resetPrefixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetPrefixMatch"></a>

```java
public void resetPrefixMatch()
```

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetQueryParameters"></a>

```java
public void resetQueryParameters()
```

##### `resetRegexMatch` <a name="resetRegexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.resetRegexMatch"></a>

```java
public void resetRegexMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList">NetworkServicesHttpRouteRulesMatchesHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParameters">queryParameters</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList">NetworkServicesHttpRouteRulesMatchesQueryParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatchInput">fullPathMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatchInput">prefixMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParametersInput">queryParametersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatchInput">regexMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatch">fullPathMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCase">ignoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatch">prefixMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatch">regexMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.headers"></a>

```java
public NetworkServicesHttpRouteRulesMatchesHeadersList getHeaders();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeadersList">NetworkServicesHttpRouteRulesMatchesHeadersList</a>

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParameters"></a>

```java
public NetworkServicesHttpRouteRulesMatchesQueryParametersList getQueryParameters();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList">NetworkServicesHttpRouteRulesMatchesQueryParametersList</a>

---

##### `fullPathMatchInput`<sup>Optional</sup> <a name="fullPathMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatchInput"></a>

```java
public java.lang.String getFullPathMatchInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesHeaders">NetworkServicesHttpRouteRulesMatchesHeaders</a>>

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCaseInput"></a>

```java
public java.lang.Object getIgnoreCaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixMatchInput`<sup>Optional</sup> <a name="prefixMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatchInput"></a>

```java
public java.lang.String getPrefixMatchInput();
```

- *Type:* java.lang.String

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.queryParametersInput"></a>

```java
public java.lang.Object getQueryParametersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>>

---

##### `regexMatchInput`<sup>Optional</sup> <a name="regexMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatchInput"></a>

```java
public java.lang.String getRegexMatchInput();
```

- *Type:* java.lang.String

---

##### `fullPathMatch`<sup>Required</sup> <a name="fullPathMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.fullPathMatch"></a>

```java
public java.lang.String getFullPathMatch();
```

- *Type:* java.lang.String

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.ignoreCase"></a>

```java
public java.lang.Object getIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixMatch`<sup>Required</sup> <a name="prefixMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.prefixMatch"></a>

```java
public java.lang.String getPrefixMatch();
```

- *Type:* java.lang.String

---

##### `regexMatch`<sup>Required</sup> <a name="regexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.regexMatch"></a>

```java
public java.lang.String getRegexMatch();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>

---


### NetworkServicesHttpRouteRulesMatchesQueryParametersList <a name="NetworkServicesHttpRouteRulesMatchesQueryParametersList" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesMatchesQueryParametersList;

new NetworkServicesHttpRouteRulesMatchesQueryParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.get"></a>

```java
public NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>>

---


### NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference <a name="NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference;

new NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetPresentMatch">resetPresentMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetQueryParameter">resetQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetRegexMatch">resetRegexMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetExactMatch"></a>

```java
public void resetExactMatch()
```

##### `resetPresentMatch` <a name="resetPresentMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetPresentMatch"></a>

```java
public void resetPresentMatch()
```

##### `resetQueryParameter` <a name="resetQueryParameter" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetQueryParameter"></a>

```java
public void resetQueryParameter()
```

##### `resetRegexMatch` <a name="resetRegexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.resetRegexMatch"></a>

```java
public void resetRegexMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatchInput">exactMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatchInput">presentMatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameterInput">queryParameterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatchInput">regexMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatch">exactMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatch">presentMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameter">queryParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatch">regexMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatchInput"></a>

```java
public java.lang.String getExactMatchInput();
```

- *Type:* java.lang.String

---

##### `presentMatchInput`<sup>Optional</sup> <a name="presentMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatchInput"></a>

```java
public java.lang.Object getPresentMatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryParameterInput`<sup>Optional</sup> <a name="queryParameterInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameterInput"></a>

```java
public java.lang.String getQueryParameterInput();
```

- *Type:* java.lang.String

---

##### `regexMatchInput`<sup>Optional</sup> <a name="regexMatchInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatchInput"></a>

```java
public java.lang.String getRegexMatchInput();
```

- *Type:* java.lang.String

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.exactMatch"></a>

```java
public java.lang.String getExactMatch();
```

- *Type:* java.lang.String

---

##### `presentMatch`<sup>Required</sup> <a name="presentMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.presentMatch"></a>

```java
public java.lang.Object getPresentMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queryParameter`<sup>Required</sup> <a name="queryParameter" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.queryParameter"></a>

```java
public java.lang.String getQueryParameter();
```

- *Type:* java.lang.String

---

##### `regexMatch`<sup>Required</sup> <a name="regexMatch" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.regexMatch"></a>

```java
public java.lang.String getRegexMatch();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesQueryParameters">NetworkServicesHttpRouteRulesMatchesQueryParameters</a>

---


### NetworkServicesHttpRouteRulesOutputReference <a name="NetworkServicesHttpRouteRulesOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteRulesOutputReference;

new NetworkServicesHttpRouteRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putMatches">putMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resetMatches">resetMatches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction"></a>

```java
public void putAction(NetworkServicesHttpRouteRulesAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a>

---

##### `putMatches` <a name="putMatches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putMatches"></a>

```java
public void putMatches(IResolvable OR java.util.List<NetworkServicesHttpRouteRulesMatches> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetMatches` <a name="resetMatches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.resetMatches"></a>

```java
public void resetMatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference">NetworkServicesHttpRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.matches">matches</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList">NetworkServicesHttpRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.matchesInput">matchesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.action"></a>

```java
public NetworkServicesHttpRouteRulesActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesActionOutputReference">NetworkServicesHttpRouteRulesActionOutputReference</a>

---

##### `matches`<sup>Required</sup> <a name="matches" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.matches"></a>

```java
public NetworkServicesHttpRouteRulesMatchesList getMatches();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatchesList">NetworkServicesHttpRouteRulesMatchesList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.actionInput"></a>

```java
public NetworkServicesHttpRouteRulesAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesAction">NetworkServicesHttpRouteRulesAction</a>

---

##### `matchesInput`<sup>Optional</sup> <a name="matchesInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.matchesInput"></a>

```java
public java.lang.Object getMatchesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesMatches">NetworkServicesHttpRouteRulesMatches</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteRules">NetworkServicesHttpRouteRules</a>

---


### NetworkServicesHttpRouteTimeoutsOutputReference <a name="NetworkServicesHttpRouteTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_http_route.NetworkServicesHttpRouteTimeoutsOutputReference;

new NetworkServicesHttpRouteTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesHttpRoute.NetworkServicesHttpRouteTimeouts">NetworkServicesHttpRouteTimeouts</a>

---



