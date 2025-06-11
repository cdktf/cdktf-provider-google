# `apihubApiHubInstance` Submodule <a name="`apihubApiHubInstance` Submodule" id="@cdktf/provider-google.apihubApiHubInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubApiHubInstance <a name="ApihubApiHubInstance" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance google_apihub_api_hub_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apihub_api_hub_instance.ApihubApiHubInstance;

ApihubApiHubInstance.Builder.create(Construct scope, java.lang.String id)
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
    .config(ApihubApiHubInstanceConfigA)
    .location(java.lang.String)
//  .apiHubInstanceId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(ApihubApiHubInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.apiHubInstanceId">apiHubInstanceId</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the ApiHub instance. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#id ApihubApiHubInstance#id}. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#project ApihubApiHubInstance#project}. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#config ApihubApiHubInstance#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#location ApihubApiHubInstance#location}

---

##### `apiHubInstanceId`<sup>Optional</sup> <a name="apiHubInstanceId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.apiHubInstanceId"></a>

- *Type:* java.lang.String

Optional.

Identifier to assign to the Api Hub instance. Must be unique within
scope of the parent resource. If the field is not provided,
system generated id will be used.

This value should be 4-40 characters, and valid characters
are '/a-z[0-9]-_/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#api_hub_instance_id ApihubApiHubInstance#api_hub_instance_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. Description of the ApiHub instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#description ApihubApiHubInstance#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#id ApihubApiHubInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#labels ApihubApiHubInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#project ApihubApiHubInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#timeouts ApihubApiHubInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetApiHubInstanceId">resetApiHubInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putConfig"></a>

```java
public void putConfig(ApihubApiHubInstanceConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putTimeouts"></a>

```java
public void putTimeouts(ApihubApiHubInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a>

---

##### `resetApiHubInstanceId` <a name="resetApiHubInstanceId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetApiHubInstanceId"></a>

```java
public void resetApiHubInstanceId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApihubApiHubInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.apihub_api_hub_instance.ApihubApiHubInstance;

ApihubApiHubInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.apihub_api_hub_instance.ApihubApiHubInstance;

ApihubApiHubInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.apihub_api_hub_instance.ApihubApiHubInstance;

ApihubApiHubInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.apihub_api_hub_instance.ApihubApiHubInstance;

ApihubApiHubInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApihubApiHubInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApihubApiHubInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApihubApiHubInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApihubApiHubInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApihubApiHubInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference">ApihubApiHubInstanceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference">ApihubApiHubInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.apiHubInstanceIdInput">apiHubInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.apiHubInstanceId">apiHubInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.config"></a>

```java
public ApihubApiHubInstanceConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference">ApihubApiHubInstanceConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.timeouts"></a>

```java
public ApihubApiHubInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference">ApihubApiHubInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `apiHubInstanceIdInput`<sup>Optional</sup> <a name="apiHubInstanceIdInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.apiHubInstanceIdInput"></a>

```java
public java.lang.String getApiHubInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.configInput"></a>

```java
public ApihubApiHubInstanceConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a>

---

##### `apiHubInstanceId`<sup>Required</sup> <a name="apiHubInstanceId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.apiHubInstanceId"></a>

```java
public java.lang.String getApiHubInstanceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubApiHubInstanceConfig <a name="ApihubApiHubInstanceConfig" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apihub_api_hub_instance.ApihubApiHubInstanceConfig;

ApihubApiHubInstanceConfig.builder()
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
    .config(ApihubApiHubInstanceConfigA)
    .location(java.lang.String)
//  .apiHubInstanceId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(ApihubApiHubInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.apiHubInstanceId">apiHubInstanceId</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the ApiHub instance. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#id ApihubApiHubInstance#id}. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#project ApihubApiHubInstance#project}. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.config"></a>

```java
public ApihubApiHubInstanceConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#config ApihubApiHubInstance#config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#location ApihubApiHubInstance#location}

---

##### `apiHubInstanceId`<sup>Optional</sup> <a name="apiHubInstanceId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.apiHubInstanceId"></a>

```java
public java.lang.String getApiHubInstanceId();
```

- *Type:* java.lang.String

Optional.

Identifier to assign to the Api Hub instance. Must be unique within
scope of the parent resource. If the field is not provided,
system generated id will be used.

This value should be 4-40 characters, and valid characters
are '/a-z[0-9]-_/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#api_hub_instance_id ApihubApiHubInstance#api_hub_instance_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. Description of the ApiHub instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#description ApihubApiHubInstance#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#id ApihubApiHubInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#labels ApihubApiHubInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#project ApihubApiHubInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.timeouts"></a>

```java
public ApihubApiHubInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#timeouts ApihubApiHubInstance#timeouts}

---

### ApihubApiHubInstanceConfigA <a name="ApihubApiHubInstanceConfigA" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apihub_api_hub_instance.ApihubApiHubInstanceConfigA;

ApihubApiHubInstanceConfigA.builder()
//  .cmekKeyName(java.lang.String)
//  .disableSearch(java.lang.Boolean)
//  .disableSearch(IResolvable)
//  .encryptionType(java.lang.String)
//  .vertexLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.cmekKeyName">cmekKeyName</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.disableSearch">disableSearch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. If true, the search will be disabled for the instance. The default value is false. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.vertexLocation">vertexLocation</a></code> | <code>java.lang.String</code> | Optional. The name of the Vertex AI location where the data store is stored. |

---

##### `cmekKeyName`<sup>Optional</sup> <a name="cmekKeyName" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.cmekKeyName"></a>

```java
public java.lang.String getCmekKeyName();
```

- *Type:* java.lang.String

Optional.

The Customer Managed Encryption Key (CMEK) used for data encryption.
The CMEK name should follow the format of
'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)',
where the location must match the instance location.
If the CMEK is not provided, a GMEK will be created for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#cmek_key_name ApihubApiHubInstance#cmek_key_name}

---

##### `disableSearch`<sup>Optional</sup> <a name="disableSearch" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.disableSearch"></a>

```java
public java.lang.Object getDisableSearch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. If true, the search will be disabled for the instance. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#disable_search ApihubApiHubInstance#disable_search}

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

Optional.

Encryption type for the region. If the encryption type is CMEK, the
cmek_key_name must be provided. If no encryption type is provided,
GMEK will be used.
Possible values:
ENCRYPTION_TYPE_UNSPECIFIED
GMEK
CMEK

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#encryption_type ApihubApiHubInstance#encryption_type}

---

##### `vertexLocation`<sup>Optional</sup> <a name="vertexLocation" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.vertexLocation"></a>

```java
public java.lang.String getVertexLocation();
```

- *Type:* java.lang.String

Optional. The name of the Vertex AI location where the data store is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#vertex_location ApihubApiHubInstance#vertex_location}

---

### ApihubApiHubInstanceTimeouts <a name="ApihubApiHubInstanceTimeouts" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apihub_api_hub_instance.ApihubApiHubInstanceTimeouts;

ApihubApiHubInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#create ApihubApiHubInstance#create}. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#delete ApihubApiHubInstance#delete}. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#update ApihubApiHubInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#create ApihubApiHubInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#delete ApihubApiHubInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apihub_api_hub_instance#update ApihubApiHubInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubApiHubInstanceConfigAOutputReference <a name="ApihubApiHubInstanceConfigAOutputReference" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apihub_api_hub_instance.ApihubApiHubInstanceConfigAOutputReference;

new ApihubApiHubInstanceConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetCmekKeyName">resetCmekKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetDisableSearch">resetDisableSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetVertexLocation">resetVertexLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCmekKeyName` <a name="resetCmekKeyName" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetCmekKeyName"></a>

```java
public void resetCmekKeyName()
```

##### `resetDisableSearch` <a name="resetDisableSearch" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetDisableSearch"></a>

```java
public void resetDisableSearch()
```

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetEncryptionType"></a>

```java
public void resetEncryptionType()
```

##### `resetVertexLocation` <a name="resetVertexLocation" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetVertexLocation"></a>

```java
public void resetVertexLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.cmekKeyNameInput">cmekKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.disableSearchInput">disableSearchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.vertexLocationInput">vertexLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.cmekKeyName">cmekKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.disableSearch">disableSearch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.encryptionType">encryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.vertexLocation">vertexLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cmekKeyNameInput`<sup>Optional</sup> <a name="cmekKeyNameInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.cmekKeyNameInput"></a>

```java
public java.lang.String getCmekKeyNameInput();
```

- *Type:* java.lang.String

---

##### `disableSearchInput`<sup>Optional</sup> <a name="disableSearchInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.disableSearchInput"></a>

```java
public java.lang.Object getDisableSearchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.encryptionTypeInput"></a>

```java
public java.lang.String getEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `vertexLocationInput`<sup>Optional</sup> <a name="vertexLocationInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.vertexLocationInput"></a>

```java
public java.lang.String getVertexLocationInput();
```

- *Type:* java.lang.String

---

##### `cmekKeyName`<sup>Required</sup> <a name="cmekKeyName" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.cmekKeyName"></a>

```java
public java.lang.String getCmekKeyName();
```

- *Type:* java.lang.String

---

##### `disableSearch`<sup>Required</sup> <a name="disableSearch" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.disableSearch"></a>

```java
public java.lang.Object getDisableSearch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.encryptionType"></a>

```java
public java.lang.String getEncryptionType();
```

- *Type:* java.lang.String

---

##### `vertexLocation`<sup>Required</sup> <a name="vertexLocation" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.vertexLocation"></a>

```java
public java.lang.String getVertexLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.internalValue"></a>

```java
public ApihubApiHubInstanceConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

---


### ApihubApiHubInstanceTimeoutsOutputReference <a name="ApihubApiHubInstanceTimeoutsOutputReference" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apihub_api_hub_instance.ApihubApiHubInstanceTimeoutsOutputReference;

new ApihubApiHubInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a>

---



