# `sccV2FolderMuteConfig` Submodule <a name="`sccV2FolderMuteConfig` Submodule" id="@cdktf/provider-google.sccV2FolderMuteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2FolderMuteConfig <a name="SccV2FolderMuteConfig" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config google_scc_v2_folder_mute_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_folder_mute_config.SccV2FolderMuteConfig;

SccV2FolderMuteConfig.Builder.create(Construct scope, java.lang.String id)
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
    .filter(java.lang.String)
    .folder(java.lang.String)
    .muteConfigId(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(SccV2FolderMuteConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | An expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | The folder whose Cloud Security Command Center the Mute Config lives in. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.muteConfigId">muteConfigId</a></code> | <code>java.lang.String</code> | Unique identifier provided by the client within the parent scope. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the mute config. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the mute config. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#id SccV2FolderMuteConfig#id}. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | location Id is provided by folder. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

An expression that defines the filter to apply across create/update events of findings.

While creating a filter string, be mindful of
the scope in which the mute configuration is being created. E.g.,
If a filter contains project = X but is created under the
project = Y scope, it might not match any findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#filter SccV2FolderMuteConfig#filter}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

The folder whose Cloud Security Command Center the Mute Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#folder SccV2FolderMuteConfig#folder}

---

##### `muteConfigId`<sup>Required</sup> <a name="muteConfigId" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.muteConfigId"></a>

- *Type:* java.lang.String

Unique identifier provided by the client within the parent scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#mute_config_id SccV2FolderMuteConfig#mute_config_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the mute config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#type SccV2FolderMuteConfig#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the mute config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#description SccV2FolderMuteConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#id SccV2FolderMuteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

location Id is provided by folder. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#location SccV2FolderMuteConfig#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#timeouts SccV2FolderMuteConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.putTimeouts"></a>

```java
public void putTimeouts(SccV2FolderMuteConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccV2FolderMuteConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_folder_mute_config.SccV2FolderMuteConfig;

SccV2FolderMuteConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_folder_mute_config.SccV2FolderMuteConfig;

SccV2FolderMuteConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_folder_mute_config.SccV2FolderMuteConfig;

SccV2FolderMuteConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_folder_mute_config.SccV2FolderMuteConfig;

SccV2FolderMuteConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SccV2FolderMuteConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SccV2FolderMuteConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SccV2FolderMuteConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SccV2FolderMuteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SccV2FolderMuteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.mostRecentEditor">mostRecentEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference">SccV2FolderMuteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.muteConfigIdInput">muteConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.muteConfigId">muteConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `mostRecentEditor`<sup>Required</sup> <a name="mostRecentEditor" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.mostRecentEditor"></a>

```java
public java.lang.String getMostRecentEditor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.timeouts"></a>

```java
public SccV2FolderMuteConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference">SccV2FolderMuteConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `muteConfigIdInput`<sup>Optional</sup> <a name="muteConfigIdInput" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.muteConfigIdInput"></a>

```java
public java.lang.String getMuteConfigIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `muteConfigId`<sup>Required</sup> <a name="muteConfigId" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.muteConfigId"></a>

```java
public java.lang.String getMuteConfigId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2FolderMuteConfigConfig <a name="SccV2FolderMuteConfigConfig" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_folder_mute_config.SccV2FolderMuteConfigConfig;

SccV2FolderMuteConfigConfig.builder()
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
    .filter(java.lang.String)
    .folder(java.lang.String)
    .muteConfigId(java.lang.String)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(SccV2FolderMuteConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | An expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | The folder whose Cloud Security Command Center the Mute Config lives in. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.muteConfigId">muteConfigId</a></code> | <code>java.lang.String</code> | Unique identifier provided by the client within the parent scope. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the mute config. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the mute config. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#id SccV2FolderMuteConfig#id}. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | location Id is provided by folder. If not provided, Use global as default. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

An expression that defines the filter to apply across create/update events of findings.

While creating a filter string, be mindful of
the scope in which the mute configuration is being created. E.g.,
If a filter contains project = X but is created under the
project = Y scope, it might not match any findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#filter SccV2FolderMuteConfig#filter}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

The folder whose Cloud Security Command Center the Mute Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#folder SccV2FolderMuteConfig#folder}

---

##### `muteConfigId`<sup>Required</sup> <a name="muteConfigId" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.muteConfigId"></a>

```java
public java.lang.String getMuteConfigId();
```

- *Type:* java.lang.String

Unique identifier provided by the client within the parent scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#mute_config_id SccV2FolderMuteConfig#mute_config_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the mute config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#type SccV2FolderMuteConfig#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the mute config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#description SccV2FolderMuteConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#id SccV2FolderMuteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

location Id is provided by folder. If not provided, Use global as default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#location SccV2FolderMuteConfig#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigConfig.property.timeouts"></a>

```java
public SccV2FolderMuteConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#timeouts SccV2FolderMuteConfig#timeouts}

---

### SccV2FolderMuteConfigTimeouts <a name="SccV2FolderMuteConfigTimeouts" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_folder_mute_config.SccV2FolderMuteConfigTimeouts;

SccV2FolderMuteConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#create SccV2FolderMuteConfig#create}. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#delete SccV2FolderMuteConfig#delete}. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#update SccV2FolderMuteConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#create SccV2FolderMuteConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#delete SccV2FolderMuteConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/scc_v2_folder_mute_config#update SccV2FolderMuteConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2FolderMuteConfigTimeoutsOutputReference <a name="SccV2FolderMuteConfigTimeoutsOutputReference" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_v2_folder_mute_config.SccV2FolderMuteConfigTimeoutsOutputReference;

new SccV2FolderMuteConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccV2FolderMuteConfig.SccV2FolderMuteConfigTimeouts">SccV2FolderMuteConfigTimeouts</a>

---



