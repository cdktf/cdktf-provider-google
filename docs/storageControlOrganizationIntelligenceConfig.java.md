# `storageControlOrganizationIntelligenceConfig` Submodule <a name="`storageControlOrganizationIntelligenceConfig` Submodule" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageControlOrganizationIntelligenceConfig <a name="StorageControlOrganizationIntelligenceConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config google_storage_control_organization_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfig;

StorageControlOrganizationIntelligenceConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .editionConfig(java.lang.String)
//  .filter(StorageControlOrganizationIntelligenceConfigFilter)
//  .id(java.lang.String)
//  .timeouts(StorageControlOrganizationIntelligenceConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier of the GCP Organization. For GCP org, this field should be organization number. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.editionConfig">editionConfig</a></code> | <code>java.lang.String</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#id StorageControlOrganizationIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts">StorageControlOrganizationIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier of the GCP Organization. For GCP org, this field should be organization number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#name StorageControlOrganizationIntelligenceConfig#name}

---

##### `editionConfig`<sup>Optional</sup> <a name="editionConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.editionConfig"></a>

- *Type:* java.lang.String

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#edition_config StorageControlOrganizationIntelligenceConfig#edition_config}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#filter StorageControlOrganizationIntelligenceConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#id StorageControlOrganizationIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts">StorageControlOrganizationIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#timeouts StorageControlOrganizationIntelligenceConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetEditionConfig">resetEditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.putFilter"></a>

```java
public void putFilter(StorageControlOrganizationIntelligenceConfigFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.putTimeouts"></a>

```java
public void putTimeouts(StorageControlOrganizationIntelligenceConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts">StorageControlOrganizationIntelligenceConfigTimeouts</a>

---

##### `resetEditionConfig` <a name="resetEditionConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetEditionConfig"></a>

```java
public void resetEditionConfig()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfig;

StorageControlOrganizationIntelligenceConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfig;

StorageControlOrganizationIntelligenceConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfig;

StorageControlOrganizationIntelligenceConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfig;

StorageControlOrganizationIntelligenceConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageControlOrganizationIntelligenceConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageControlOrganizationIntelligenceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageControlOrganizationIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageControlOrganizationIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig">effectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference">StorageControlOrganizationIntelligenceConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference">StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.trialConfig">trialConfig</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList">StorageControlOrganizationIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.editionConfigInput">editionConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts">StorageControlOrganizationIntelligenceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.editionConfig">editionConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveIntelligenceConfig`<sup>Required</sup> <a name="effectiveIntelligenceConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```java
public StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList getEffectiveIntelligenceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.filter"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference">StorageControlOrganizationIntelligenceConfigFilterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.timeouts"></a>

```java
public StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference">StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference</a>

---

##### `trialConfig`<sup>Required</sup> <a name="trialConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.trialConfig"></a>

```java
public StorageControlOrganizationIntelligenceConfigTrialConfigList getTrialConfig();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList">StorageControlOrganizationIntelligenceConfigTrialConfigList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `editionConfigInput`<sup>Optional</sup> <a name="editionConfigInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.editionConfigInput"></a>

```java
public java.lang.String getEditionConfigInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.filterInput"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts">StorageControlOrganizationIntelligenceConfigTimeouts</a>

---

##### `editionConfig`<sup>Required</sup> <a name="editionConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.editionConfig"></a>

```java
public java.lang.String getEditionConfig();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageControlOrganizationIntelligenceConfigConfig <a name="StorageControlOrganizationIntelligenceConfigConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigConfig;

StorageControlOrganizationIntelligenceConfigConfig.builder()
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
//  .editionConfig(java.lang.String)
//  .filter(StorageControlOrganizationIntelligenceConfigFilter)
//  .id(java.lang.String)
//  .timeouts(StorageControlOrganizationIntelligenceConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier of the GCP Organization. For GCP org, this field should be organization number. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.editionConfig">editionConfig</a></code> | <code>java.lang.String</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#id StorageControlOrganizationIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts">StorageControlOrganizationIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier of the GCP Organization. For GCP org, this field should be organization number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#name StorageControlOrganizationIntelligenceConfig#name}

---

##### `editionConfig`<sup>Optional</sup> <a name="editionConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.editionConfig"></a>

```java
public java.lang.String getEditionConfig();
```

- *Type:* java.lang.String

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, DISABLED, TRIAL and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#edition_config StorageControlOrganizationIntelligenceConfig#edition_config}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.filter"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#filter StorageControlOrganizationIntelligenceConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#id StorageControlOrganizationIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigConfig.property.timeouts"></a>

```java
public StorageControlOrganizationIntelligenceConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts">StorageControlOrganizationIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#timeouts StorageControlOrganizationIntelligenceConfig#timeouts}

---

### StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig <a name="StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig;

StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig.builder()
    .build();
```


### StorageControlOrganizationIntelligenceConfigFilter <a name="StorageControlOrganizationIntelligenceConfigFilter" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigFilter;

StorageControlOrganizationIntelligenceConfigFilter.builder()
//  .excludedCloudStorageBuckets(StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets)
//  .excludedCloudStorageLocations(StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations)
//  .includedCloudStorageBuckets(StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets)
//  .includedCloudStorageLocations(StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageBuckets">excludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | excluded_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageLocations">excludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | excluded_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageBuckets">includedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageLocations">includedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | included_cloud_storage_locations block. |

---

##### `excludedCloudStorageBuckets`<sup>Optional</sup> <a name="excludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageBuckets"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets getExcludedCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#excluded_cloud_storage_buckets StorageControlOrganizationIntelligenceConfig#excluded_cloud_storage_buckets}

---

##### `excludedCloudStorageLocations`<sup>Optional</sup> <a name="excludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.excludedCloudStorageLocations"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations getExcludedCloudStorageLocations();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#excluded_cloud_storage_locations StorageControlOrganizationIntelligenceConfig#excluded_cloud_storage_locations}

---

##### `includedCloudStorageBuckets`<sup>Optional</sup> <a name="includedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageBuckets"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets getIncludedCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#included_cloud_storage_buckets StorageControlOrganizationIntelligenceConfig#included_cloud_storage_buckets}

---

##### `includedCloudStorageLocations`<sup>Optional</sup> <a name="includedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter.property.includedCloudStorageLocations"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations getIncludedCloudStorageLocations();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#included_cloud_storage_locations StorageControlOrganizationIntelligenceConfig#included_cloud_storage_locations}

---

### StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets;

StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.builder()
    .bucketIdRegexes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>java.util.List<java.lang.String></code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```java
public java.util.List<java.lang.String> getBucketIdRegexes();
```

- *Type:* java.util.List<java.lang.String>

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#bucket_id_regexes StorageControlOrganizationIntelligenceConfig#bucket_id_regexes}

---

### StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations <a name="StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations;

StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.builder()
    .locations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | List of locations. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#locations StorageControlOrganizationIntelligenceConfig#locations}

---

### StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets;

StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.builder()
    .bucketIdRegexes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>java.util.List<java.lang.String></code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```java
public java.util.List<java.lang.String> getBucketIdRegexes();
```

- *Type:* java.util.List<java.lang.String>

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#bucket_id_regexes StorageControlOrganizationIntelligenceConfig#bucket_id_regexes}

---

### StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations <a name="StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations;

StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.builder()
    .locations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | List of locations. |

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#locations StorageControlOrganizationIntelligenceConfig#locations}

---

### StorageControlOrganizationIntelligenceConfigTimeouts <a name="StorageControlOrganizationIntelligenceConfigTimeouts" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigTimeouts;

StorageControlOrganizationIntelligenceConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#create StorageControlOrganizationIntelligenceConfig#create}. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#delete StorageControlOrganizationIntelligenceConfig#delete}. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#update StorageControlOrganizationIntelligenceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#create StorageControlOrganizationIntelligenceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#delete StorageControlOrganizationIntelligenceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/storage_control_organization_intelligence_config#update StorageControlOrganizationIntelligenceConfig#update}.

---

### StorageControlOrganizationIntelligenceConfigTrialConfig <a name="StorageControlOrganizationIntelligenceConfigTrialConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigTrialConfig;

StorageControlOrganizationIntelligenceConfigTrialConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList <a name="StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList;

new StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```java
public StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference;

new StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">effectiveEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">intelligenceConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectiveEdition`<sup>Required</sup> <a name="effectiveEdition" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```java
public java.lang.String getEffectiveEdition();
```

- *Type:* java.lang.String

---

##### `intelligenceConfig`<sup>Required</sup> <a name="intelligenceConfig" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```java
public java.lang.String getIntelligenceConfig();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```java
public StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">StorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference;

new StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucketIdRegexesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketIdRegexesInput`<sup>Optional</sup> <a name="bucketIdRegexesInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```java
public java.util.List<java.lang.String> getBucketIdRegexesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```java
public java.util.List<java.lang.String> getBucketIdRegexes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference;

new StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput">locationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```java
public java.util.List<java.lang.String> getLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference;

new StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucketIdRegexesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucketIdRegexes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketIdRegexesInput`<sup>Optional</sup> <a name="bucketIdRegexesInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```java
public java.util.List<java.lang.String> getBucketIdRegexesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucketIdRegexes`<sup>Required</sup> <a name="bucketIdRegexes" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```java
public java.util.List<java.lang.String> getBucketIdRegexes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference;

new StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput">locationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```java
public java.util.List<java.lang.String> getLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### StorageControlOrganizationIntelligenceConfigFilterOutputReference <a name="StorageControlOrganizationIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigFilterOutputReference;

new StorageControlOrganizationIntelligenceConfigFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets">putExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations">putExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets">putIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations">putIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets">resetExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations">resetExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets">resetIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations">resetIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExcludedCloudStorageBuckets` <a name="putExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets"></a>

```java
public void putExcludedCloudStorageBuckets(StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `putExcludedCloudStorageLocations` <a name="putExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations"></a>

```java
public void putExcludedCloudStorageLocations(StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `putIncludedCloudStorageBuckets` <a name="putIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```java
public void putIncludedCloudStorageBuckets(StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `putIncludedCloudStorageLocations` <a name="putIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations"></a>

```java
public void putIncludedCloudStorageLocations(StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `resetExcludedCloudStorageBuckets` <a name="resetExcludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets"></a>

```java
public void resetExcludedCloudStorageBuckets()
```

##### `resetExcludedCloudStorageLocations` <a name="resetExcludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations"></a>

```java
public void resetExcludedCloudStorageLocations()
```

##### `resetIncludedCloudStorageBuckets` <a name="resetIncludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets"></a>

```java
public void resetIncludedCloudStorageBuckets()
```

##### `resetIncludedCloudStorageLocations` <a name="resetIncludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations"></a>

```java
public void resetIncludedCloudStorageLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">excludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">excludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">includedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">includedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput">excludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput">excludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput">includedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput">includedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludedCloudStorageBuckets`<sup>Required</sup> <a name="excludedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference getExcludedCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a>

---

##### `excludedCloudStorageLocations`<sup>Required</sup> <a name="excludedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference getExcludedCloudStorageLocations();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a>

---

##### `includedCloudStorageBuckets`<sup>Required</sup> <a name="includedCloudStorageBuckets" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference getIncludedCloudStorageBuckets();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `includedCloudStorageLocations`<sup>Required</sup> <a name="includedCloudStorageLocations" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference getIncludedCloudStorageLocations();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a>

---

##### `excludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="excludedCloudStorageBucketsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets getExcludedCloudStorageBucketsInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `excludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="excludedCloudStorageLocationsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations getExcludedCloudStorageLocationsInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `includedCloudStorageBucketsInput`<sup>Optional</sup> <a name="includedCloudStorageBucketsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets getIncludedCloudStorageBucketsInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `includedCloudStorageLocationsInput`<sup>Optional</sup> <a name="includedCloudStorageLocationsInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations getIncludedCloudStorageLocationsInput();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">StorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```java
public StorageControlOrganizationIntelligenceConfigFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigFilter">StorageControlOrganizationIntelligenceConfigFilter</a>

---


### StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference <a name="StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference;

new StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts">StorageControlOrganizationIntelligenceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTimeouts">StorageControlOrganizationIntelligenceConfigTimeouts</a>

---


### StorageControlOrganizationIntelligenceConfigTrialConfigList <a name="StorageControlOrganizationIntelligenceConfigTrialConfigList" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigTrialConfigList;

new StorageControlOrganizationIntelligenceConfigTrialConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.get"></a>

```java
public StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference <a name="StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.storage_control_organization_intelligence_config.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference;

new StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfig">StorageControlOrganizationIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```java
public StorageControlOrganizationIntelligenceConfigTrialConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.storageControlOrganizationIntelligenceConfig.StorageControlOrganizationIntelligenceConfigTrialConfig">StorageControlOrganizationIntelligenceConfigTrialConfig</a>

---



