# `networkConnectivityServiceConnectionPolicy` Submodule <a name="`networkConnectivityServiceConnectionPolicy` Submodule" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityServiceConnectionPolicy <a name="NetworkConnectivityServiceConnectionPolicy" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy google_network_connectivity_service_connection_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicy;

NetworkConnectivityServiceConnectionPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .network(java.lang.String)
    .serviceClass(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .pscConfig(NetworkConnectivityServiceConnectionPolicyPscConfig)
//  .timeouts(NetworkConnectivityServiceConnectionPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the ServiceConnectionPolicy. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.serviceClass">serviceClass</a></code> | <code>java.lang.String</code> | The service class identifier for which this ServiceConnectionPolicy is for. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#id NetworkConnectivityServiceConnectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#project NetworkConnectivityServiceConnectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the ServiceConnectionPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#location NetworkConnectivityServiceConnectionPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#name NetworkConnectivityServiceConnectionPolicy#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#network NetworkConnectivityServiceConnectionPolicy#network}

---

##### `serviceClass`<sup>Required</sup> <a name="serviceClass" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.serviceClass"></a>

- *Type:* java.lang.String

The service class identifier for which this ServiceConnectionPolicy is for.

The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#service_class NetworkConnectivityServiceConnectionPolicy#service_class}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#description NetworkConnectivityServiceConnectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#id NetworkConnectivityServiceConnectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#labels NetworkConnectivityServiceConnectionPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#project NetworkConnectivityServiceConnectionPolicy#project}.

---

##### `pscConfig`<sup>Optional</sup> <a name="pscConfig" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.pscConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#psc_config NetworkConnectivityServiceConnectionPolicy#psc_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#timeouts NetworkConnectivityServiceConnectionPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putPscConfig">putPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetPscConfig">resetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPscConfig` <a name="putPscConfig" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putPscConfig"></a>

```java
public void putPscConfig(NetworkConnectivityServiceConnectionPolicyPscConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putTimeouts"></a>

```java
public void putTimeouts(NetworkConnectivityServiceConnectionPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetPscConfig` <a name="resetPscConfig" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetPscConfig"></a>

```java
public void resetPscConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivityServiceConnectionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicy;

NetworkConnectivityServiceConnectionPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicy;

NetworkConnectivityServiceConnectionPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicy;

NetworkConnectivityServiceConnectionPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicy;

NetworkConnectivityServiceConnectionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkConnectivityServiceConnectionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkConnectivityServiceConnectionPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkConnectivityServiceConnectionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkConnectivityServiceConnectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityServiceConnectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.infrastructure">infrastructure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference">NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.pscConnections">pscConnections</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList">NetworkConnectivityServiceConnectionPolicyPscConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference">NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.pscConfigInput">pscConfigInput</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.serviceClassInput">serviceClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.serviceClass">serviceClass</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `infrastructure`<sup>Required</sup> <a name="infrastructure" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.infrastructure"></a>

```java
public java.lang.String getInfrastructure();
```

- *Type:* java.lang.String

---

##### `pscConfig`<sup>Required</sup> <a name="pscConfig" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.pscConfig"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference getPscConfig();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference">NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference</a>

---

##### `pscConnections`<sup>Required</sup> <a name="pscConnections" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.pscConnections"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConnectionsList getPscConnections();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList">NetworkConnectivityServiceConnectionPolicyPscConnectionsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.timeouts"></a>

```java
public NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference">NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pscConfigInput`<sup>Optional</sup> <a name="pscConfigInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.pscConfigInput"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConfig getPscConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a>

---

##### `serviceClassInput`<sup>Optional</sup> <a name="serviceClassInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.serviceClassInput"></a>

```java
public java.lang.String getServiceClassInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceClass`<sup>Required</sup> <a name="serviceClass" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.serviceClass"></a>

```java
public java.lang.String getServiceClass();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityServiceConnectionPolicyConfig <a name="NetworkConnectivityServiceConnectionPolicyConfig" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyConfig;

NetworkConnectivityServiceConnectionPolicyConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .network(java.lang.String)
    .serviceClass(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .pscConfig(NetworkConnectivityServiceConnectionPolicyPscConfig)
//  .timeouts(NetworkConnectivityServiceConnectionPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the ServiceConnectionPolicy. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.network">network</a></code> | <code>java.lang.String</code> | The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.serviceClass">serviceClass</a></code> | <code>java.lang.String</code> | The service class identifier for which this ServiceConnectionPolicy is for. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Free-text description of the resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#id NetworkConnectivityServiceConnectionPolicy#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#project NetworkConnectivityServiceConnectionPolicy#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.pscConfig">pscConfig</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the ServiceConnectionPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#location NetworkConnectivityServiceConnectionPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#name NetworkConnectivityServiceConnectionPolicy#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#network NetworkConnectivityServiceConnectionPolicy#network}

---

##### `serviceClass`<sup>Required</sup> <a name="serviceClass" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.serviceClass"></a>

```java
public java.lang.String getServiceClass();
```

- *Type:* java.lang.String

The service class identifier for which this ServiceConnectionPolicy is for.

The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#service_class NetworkConnectivityServiceConnectionPolicy#service_class}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#description NetworkConnectivityServiceConnectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#id NetworkConnectivityServiceConnectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#labels NetworkConnectivityServiceConnectionPolicy#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#project NetworkConnectivityServiceConnectionPolicy#project}.

---

##### `pscConfig`<sup>Optional</sup> <a name="pscConfig" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.pscConfig"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConfig getPscConfig();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#psc_config NetworkConnectivityServiceConnectionPolicy#psc_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyConfig.property.timeouts"></a>

```java
public NetworkConnectivityServiceConnectionPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#timeouts NetworkConnectivityServiceConnectionPolicy#timeouts}

---

### NetworkConnectivityServiceConnectionPolicyPscConfig <a name="NetworkConnectivityServiceConnectionPolicyPscConfig" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyPscConfig;

NetworkConnectivityServiceConnectionPolicyPscConfig.builder()
    .subnetworks(java.util.List<java.lang.String>)
//  .limit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig.property.subnetworks">subnetworks</a></code> | <code>java.util.List<java.lang.String></code> | IDs of the subnetworks or fully qualified identifiers for the subnetworks. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig.property.limit">limit</a></code> | <code>java.lang.String</code> | Max number of PSC connections for this policy. |

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig.property.subnetworks"></a>

```java
public java.util.List<java.lang.String> getSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

IDs of the subnetworks or fully qualified identifiers for the subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#subnetworks NetworkConnectivityServiceConnectionPolicy#subnetworks}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig.property.limit"></a>

```java
public java.lang.String getLimit();
```

- *Type:* java.lang.String

Max number of PSC connections for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#limit NetworkConnectivityServiceConnectionPolicy#limit}

---

### NetworkConnectivityServiceConnectionPolicyPscConnections <a name="NetworkConnectivityServiceConnectionPolicyPscConnections" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyPscConnections;

NetworkConnectivityServiceConnectionPolicyPscConnections.builder()
    .build();
```


### NetworkConnectivityServiceConnectionPolicyPscConnectionsError <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsError" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsError.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyPscConnectionsError;

NetworkConnectivityServiceConnectionPolicyPscConnectionsError.builder()
    .build();
```


### NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo;

NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo.builder()
    .build();
```


### NetworkConnectivityServiceConnectionPolicyTimeouts <a name="NetworkConnectivityServiceConnectionPolicyTimeouts" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyTimeouts;

NetworkConnectivityServiceConnectionPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#create NetworkConnectivityServiceConnectionPolicy#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#delete NetworkConnectivityServiceConnectionPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#update NetworkConnectivityServiceConnectionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#create NetworkConnectivityServiceConnectionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#delete NetworkConnectivityServiceConnectionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_service_connection_policy#update NetworkConnectivityServiceConnectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference <a name="NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference;

new NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resetLimit">resetLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.resetLimit"></a>

```java
public void resetLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limitInput">limitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworksInput">subnetworksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limit">limit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworks">subnetworks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limitInput"></a>

```java
public java.lang.String getLimitInput();
```

- *Type:* java.lang.String

---

##### `subnetworksInput`<sup>Optional</sup> <a name="subnetworksInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworksInput"></a>

```java
public java.util.List<java.lang.String> getSubnetworksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.limit"></a>

```java
public java.lang.String getLimit();
```

- *Type:* java.lang.String

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.subnetworks"></a>

```java
public java.util.List<java.lang.String> getSubnetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfigOutputReference.property.internalValue"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConfig">NetworkConnectivityServiceConnectionPolicyPscConfig</a>

---


### NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList;

new NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference;

new NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo">NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoOutputReference.property.internalValue"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo">NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfo</a>

---


### NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList;

new NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference;

new NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.details">details</a></code> | <code>com.hashicorp.cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsError">NetworkConnectivityServiceConnectionPolicyPscConnectionsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.details"></a>

```java
public StringMapList getDetails();
```

- *Type:* com.hashicorp.cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorOutputReference.property.internalValue"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConnectionsError getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsError">NetworkConnectivityServiceConnectionPolicyPscConnectionsError</a>

---


### NetworkConnectivityServiceConnectionPolicyPscConnectionsList <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsList" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList;

new NetworkConnectivityServiceConnectionPolicyPscConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.get"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference <a name="NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference;

new NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerAddress">consumerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerForwardingRule">consumerForwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerTargetProject">consumerTargetProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.error">error</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList">NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorInfo">errorInfo</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList">NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorType">errorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.gceOperation">gceOperation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnections">NetworkConnectivityServiceConnectionPolicyPscConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerAddress`<sup>Required</sup> <a name="consumerAddress" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerAddress"></a>

```java
public java.lang.String getConsumerAddress();
```

- *Type:* java.lang.String

---

##### `consumerForwardingRule`<sup>Required</sup> <a name="consumerForwardingRule" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerForwardingRule"></a>

```java
public java.lang.String getConsumerForwardingRule();
```

- *Type:* java.lang.String

---

##### `consumerTargetProject`<sup>Required</sup> <a name="consumerTargetProject" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.consumerTargetProject"></a>

```java
public java.lang.String getConsumerTargetProject();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.error"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList getError();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList">NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorList</a>

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorInfo"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList getErrorInfo();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList">NetworkConnectivityServiceConnectionPolicyPscConnectionsErrorInfoList</a>

---

##### `errorType`<sup>Required</sup> <a name="errorType" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.errorType"></a>

```java
public java.lang.String getErrorType();
```

- *Type:* java.lang.String

---

##### `gceOperation`<sup>Required</sup> <a name="gceOperation" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.gceOperation"></a>

```java
public java.lang.String getGceOperation();
```

- *Type:* java.lang.String

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnectionsOutputReference.property.internalValue"></a>

```java
public NetworkConnectivityServiceConnectionPolicyPscConnections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyPscConnections">NetworkConnectivityServiceConnectionPolicyPscConnections</a>

---


### NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference <a name="NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_service_connection_policy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference;

new NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityServiceConnectionPolicy.NetworkConnectivityServiceConnectionPolicyTimeouts">NetworkConnectivityServiceConnectionPolicyTimeouts</a>

---



