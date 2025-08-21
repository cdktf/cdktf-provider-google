# `modelArmorFloorsetting` Submodule <a name="`modelArmorFloorsetting` Submodule" id="@cdktf/provider-google.modelArmorFloorsetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelArmorFloorsetting <a name="ModelArmorFloorsetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting google_model_armor_floorsetting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsetting;

ModelArmorFloorsetting.Builder.create(Construct scope, java.lang.String id)
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
    .filterConfig(ModelArmorFloorsettingFilterConfig)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .aiPlatformFloorSetting(ModelArmorFloorsettingAiPlatformFloorSetting)
//  .enableFloorSettingEnforcement(java.lang.Boolean)
//  .enableFloorSettingEnforcement(IResolvable)
//  .floorSettingMetadata(ModelArmorFloorsettingFloorSettingMetadata)
//  .id(java.lang.String)
//  .integratedServices(java.util.List<java.lang.String>)
//  .timeouts(ModelArmorFloorsettingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.filterConfig">filterConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Will be any one of these:. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.aiPlatformFloorSetting">aiPlatformFloorSetting</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a></code> | ai_platform_floor_setting block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.enableFloorSettingEnforcement">enableFloorSettingEnforcement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Floor Settings enforcement status. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.floorSettingMetadata">floorSettingMetadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a></code> | floor_setting_metadata block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#id ModelArmorFloorsetting#id}. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.integratedServices">integratedServices</a></code> | <code>java.util.List<java.lang.String></code> | List of integrated services for which the floor setting is applicable. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filterConfig`<sup>Required</sup> <a name="filterConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.filterConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#filter_config ModelArmorFloorsetting#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#location ModelArmorFloorsetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Will be any one of these:.

* 'projects/{project}'
* 'folders/{folder}'
* 'organizations/{organizationId}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#parent ModelArmorFloorsetting#parent}

---

##### `aiPlatformFloorSetting`<sup>Optional</sup> <a name="aiPlatformFloorSetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.aiPlatformFloorSetting"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

ai_platform_floor_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#ai_platform_floor_setting ModelArmorFloorsetting#ai_platform_floor_setting}

---

##### `enableFloorSettingEnforcement`<sup>Optional</sup> <a name="enableFloorSettingEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.enableFloorSettingEnforcement"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Floor Settings enforcement status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#enable_floor_setting_enforcement ModelArmorFloorsetting#enable_floor_setting_enforcement}

---

##### `floorSettingMetadata`<sup>Optional</sup> <a name="floorSettingMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.floorSettingMetadata"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

floor_setting_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#floor_setting_metadata ModelArmorFloorsetting#floor_setting_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#id ModelArmorFloorsetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integratedServices`<sup>Optional</sup> <a name="integratedServices" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.integratedServices"></a>

- *Type:* java.util.List<java.lang.String>

List of integrated services for which the floor setting is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#integrated_services ModelArmorFloorsetting#integrated_services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#timeouts ModelArmorFloorsetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putAiPlatformFloorSetting">putAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFilterConfig">putFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFloorSettingMetadata">putFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetAiPlatformFloorSetting">resetAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetEnableFloorSettingEnforcement">resetEnableFloorSettingEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetFloorSettingMetadata">resetFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetIntegratedServices">resetIntegratedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAiPlatformFloorSetting` <a name="putAiPlatformFloorSetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putAiPlatformFloorSetting"></a>

```java
public void putAiPlatformFloorSetting(ModelArmorFloorsettingAiPlatformFloorSetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putAiPlatformFloorSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

---

##### `putFilterConfig` <a name="putFilterConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFilterConfig"></a>

```java
public void putFilterConfig(ModelArmorFloorsettingFilterConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFilterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

---

##### `putFloorSettingMetadata` <a name="putFloorSettingMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFloorSettingMetadata"></a>

```java
public void putFloorSettingMetadata(ModelArmorFloorsettingFloorSettingMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFloorSettingMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putTimeouts"></a>

```java
public void putTimeouts(ModelArmorFloorsettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>

---

##### `resetAiPlatformFloorSetting` <a name="resetAiPlatformFloorSetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetAiPlatformFloorSetting"></a>

```java
public void resetAiPlatformFloorSetting()
```

##### `resetEnableFloorSettingEnforcement` <a name="resetEnableFloorSettingEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetEnableFloorSettingEnforcement"></a>

```java
public void resetEnableFloorSettingEnforcement()
```

##### `resetFloorSettingMetadata` <a name="resetFloorSettingMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetFloorSettingMetadata"></a>

```java
public void resetFloorSettingMetadata()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetId"></a>

```java
public void resetId()
```

##### `resetIntegratedServices` <a name="resetIntegratedServices" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetIntegratedServices"></a>

```java
public void resetIntegratedServices()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ModelArmorFloorsetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsetting;

ModelArmorFloorsetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsetting;

ModelArmorFloorsetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsetting;

ModelArmorFloorsetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsetting;

ModelArmorFloorsetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ModelArmorFloorsetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ModelArmorFloorsetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ModelArmorFloorsetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ModelArmorFloorsetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ModelArmorFloorsetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.aiPlatformFloorSetting">aiPlatformFloorSetting</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference">ModelArmorFloorsettingAiPlatformFloorSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.filterConfig">filterConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference">ModelArmorFloorsettingFilterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.floorSettingMetadata">floorSettingMetadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference">ModelArmorFloorsettingFloorSettingMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference">ModelArmorFloorsettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.aiPlatformFloorSettingInput">aiPlatformFloorSettingInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.enableFloorSettingEnforcementInput">enableFloorSettingEnforcementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.filterConfigInput">filterConfigInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.floorSettingMetadataInput">floorSettingMetadataInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.integratedServicesInput">integratedServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.enableFloorSettingEnforcement">enableFloorSettingEnforcement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.integratedServices">integratedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aiPlatformFloorSetting`<sup>Required</sup> <a name="aiPlatformFloorSetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.aiPlatformFloorSetting"></a>

```java
public ModelArmorFloorsettingAiPlatformFloorSettingOutputReference getAiPlatformFloorSetting();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference">ModelArmorFloorsettingAiPlatformFloorSettingOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `filterConfig`<sup>Required</sup> <a name="filterConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.filterConfig"></a>

```java
public ModelArmorFloorsettingFilterConfigOutputReference getFilterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference">ModelArmorFloorsettingFilterConfigOutputReference</a>

---

##### `floorSettingMetadata`<sup>Required</sup> <a name="floorSettingMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.floorSettingMetadata"></a>

```java
public ModelArmorFloorsettingFloorSettingMetadataOutputReference getFloorSettingMetadata();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference">ModelArmorFloorsettingFloorSettingMetadataOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.timeouts"></a>

```java
public ModelArmorFloorsettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference">ModelArmorFloorsettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `aiPlatformFloorSettingInput`<sup>Optional</sup> <a name="aiPlatformFloorSettingInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.aiPlatformFloorSettingInput"></a>

```java
public ModelArmorFloorsettingAiPlatformFloorSetting getAiPlatformFloorSettingInput();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

---

##### `enableFloorSettingEnforcementInput`<sup>Optional</sup> <a name="enableFloorSettingEnforcementInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.enableFloorSettingEnforcementInput"></a>

```java
public java.lang.Object getEnableFloorSettingEnforcementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterConfigInput`<sup>Optional</sup> <a name="filterConfigInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.filterConfigInput"></a>

```java
public ModelArmorFloorsettingFilterConfig getFilterConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

---

##### `floorSettingMetadataInput`<sup>Optional</sup> <a name="floorSettingMetadataInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.floorSettingMetadataInput"></a>

```java
public ModelArmorFloorsettingFloorSettingMetadata getFloorSettingMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integratedServicesInput`<sup>Optional</sup> <a name="integratedServicesInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.integratedServicesInput"></a>

```java
public java.util.List<java.lang.String> getIntegratedServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>

---

##### `enableFloorSettingEnforcement`<sup>Required</sup> <a name="enableFloorSettingEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.enableFloorSettingEnforcement"></a>

```java
public java.lang.Object getEnableFloorSettingEnforcement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integratedServices`<sup>Required</sup> <a name="integratedServices" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.integratedServices"></a>

```java
public java.util.List<java.lang.String> getIntegratedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ModelArmorFloorsettingAiPlatformFloorSetting <a name="ModelArmorFloorsettingAiPlatformFloorSetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingAiPlatformFloorSetting;

ModelArmorFloorsettingAiPlatformFloorSetting.builder()
//  .enableCloudLogging(java.lang.Boolean)
//  .enableCloudLogging(IResolvable)
//  .inspectAndBlock(java.lang.Boolean)
//  .inspectAndBlock(IResolvable)
//  .inspectOnly(java.lang.Boolean)
//  .inspectOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.enableCloudLogging">enableCloudLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, log Model Armor filter results to Cloud Logging. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.inspectAndBlock">inspectAndBlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, Model Armor filters will be run in inspect and block mode. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.inspectOnly">inspectOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request. |

---

##### `enableCloudLogging`<sup>Optional</sup> <a name="enableCloudLogging" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.enableCloudLogging"></a>

```java
public java.lang.Object getEnableCloudLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, log Model Armor filter results to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#enable_cloud_logging ModelArmorFloorsetting#enable_cloud_logging}

---

##### `inspectAndBlock`<sup>Optional</sup> <a name="inspectAndBlock" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.inspectAndBlock"></a>

```java
public java.lang.Object getInspectAndBlock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, Model Armor filters will be run in inspect and block mode.

Requests that trip Model Armor filters will be blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#inspect_and_block ModelArmorFloorsetting#inspect_and_block}

---

##### `inspectOnly`<sup>Optional</sup> <a name="inspectOnly" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.inspectOnly"></a>

```java
public java.lang.Object getInspectOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#inspect_only ModelArmorFloorsetting#inspect_only}

---

### ModelArmorFloorsettingConfig <a name="ModelArmorFloorsettingConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingConfig;

ModelArmorFloorsettingConfig.builder()
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
    .filterConfig(ModelArmorFloorsettingFilterConfig)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .aiPlatformFloorSetting(ModelArmorFloorsettingAiPlatformFloorSetting)
//  .enableFloorSettingEnforcement(java.lang.Boolean)
//  .enableFloorSettingEnforcement(IResolvable)
//  .floorSettingMetadata(ModelArmorFloorsettingFloorSettingMetadata)
//  .id(java.lang.String)
//  .integratedServices(java.util.List<java.lang.String>)
//  .timeouts(ModelArmorFloorsettingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.filterConfig">filterConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Will be any one of these:. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.aiPlatformFloorSetting">aiPlatformFloorSetting</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a></code> | ai_platform_floor_setting block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.enableFloorSettingEnforcement">enableFloorSettingEnforcement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Floor Settings enforcement status. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.floorSettingMetadata">floorSettingMetadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a></code> | floor_setting_metadata block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#id ModelArmorFloorsetting#id}. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.integratedServices">integratedServices</a></code> | <code>java.util.List<java.lang.String></code> | List of integrated services for which the floor setting is applicable. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filterConfig`<sup>Required</sup> <a name="filterConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.filterConfig"></a>

```java
public ModelArmorFloorsettingFilterConfig getFilterConfig();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#filter_config ModelArmorFloorsetting#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#location ModelArmorFloorsetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Will be any one of these:.

* 'projects/{project}'
* 'folders/{folder}'
* 'organizations/{organizationId}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#parent ModelArmorFloorsetting#parent}

---

##### `aiPlatformFloorSetting`<sup>Optional</sup> <a name="aiPlatformFloorSetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.aiPlatformFloorSetting"></a>

```java
public ModelArmorFloorsettingAiPlatformFloorSetting getAiPlatformFloorSetting();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

ai_platform_floor_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#ai_platform_floor_setting ModelArmorFloorsetting#ai_platform_floor_setting}

---

##### `enableFloorSettingEnforcement`<sup>Optional</sup> <a name="enableFloorSettingEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.enableFloorSettingEnforcement"></a>

```java
public java.lang.Object getEnableFloorSettingEnforcement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Floor Settings enforcement status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#enable_floor_setting_enforcement ModelArmorFloorsetting#enable_floor_setting_enforcement}

---

##### `floorSettingMetadata`<sup>Optional</sup> <a name="floorSettingMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.floorSettingMetadata"></a>

```java
public ModelArmorFloorsettingFloorSettingMetadata getFloorSettingMetadata();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

floor_setting_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#floor_setting_metadata ModelArmorFloorsetting#floor_setting_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#id ModelArmorFloorsetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integratedServices`<sup>Optional</sup> <a name="integratedServices" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.integratedServices"></a>

```java
public java.util.List<java.lang.String> getIntegratedServices();
```

- *Type:* java.util.List<java.lang.String>

List of integrated services for which the floor setting is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#integrated_services ModelArmorFloorsetting#integrated_services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.timeouts"></a>

```java
public ModelArmorFloorsettingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#timeouts ModelArmorFloorsetting#timeouts}

---

### ModelArmorFloorsettingFilterConfig <a name="ModelArmorFloorsettingFilterConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfig;

ModelArmorFloorsettingFilterConfig.builder()
//  .maliciousUriFilterSettings(ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings)
//  .piAndJailbreakFilterSettings(ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings)
//  .raiSettings(ModelArmorFloorsettingFilterConfigRaiSettings)
//  .sdpSettings(ModelArmorFloorsettingFilterConfigSdpSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.maliciousUriFilterSettings">maliciousUriFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | malicious_uri_filter_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.piAndJailbreakFilterSettings">piAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | pi_and_jailbreak_filter_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.raiSettings">raiSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a></code> | rai_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.sdpSettings">sdpSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a></code> | sdp_settings block. |

---

##### `maliciousUriFilterSettings`<sup>Optional</sup> <a name="maliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.maliciousUriFilterSettings"></a>

```java
public ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings getMaliciousUriFilterSettings();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#malicious_uri_filter_settings ModelArmorFloorsetting#malicious_uri_filter_settings}

---

##### `piAndJailbreakFilterSettings`<sup>Optional</sup> <a name="piAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.piAndJailbreakFilterSettings"></a>

```java
public ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings getPiAndJailbreakFilterSettings();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#pi_and_jailbreak_filter_settings ModelArmorFloorsetting#pi_and_jailbreak_filter_settings}

---

##### `raiSettings`<sup>Optional</sup> <a name="raiSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.raiSettings"></a>

```java
public ModelArmorFloorsettingFilterConfigRaiSettings getRaiSettings();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#rai_settings ModelArmorFloorsetting#rai_settings}

---

##### `sdpSettings`<sup>Optional</sup> <a name="sdpSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.sdpSettings"></a>

```java
public ModelArmorFloorsettingFilterConfigSdpSettings getSdpSettings();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#sdp_settings ModelArmorFloorsetting#sdp_settings}

---

### ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings <a name="ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings;

ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.builder()
//  .filterEnforcement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.property.filterEnforcement">filterEnforcement</a></code> | <code>java.lang.String</code> | Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filterEnforcement`<sup>Optional</sup> <a name="filterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.property.filterEnforcement"></a>

```java
public java.lang.String getFilterEnforcement();
```

- *Type:* java.lang.String

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}

---

### ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings <a name="ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings;

ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.builder()
//  .confidenceLevel(java.lang.String)
//  .filterEnforcement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel">confidenceLevel</a></code> | <code>java.lang.String</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement">filterEnforcement</a></code> | <code>java.lang.String</code> | Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `confidenceLevel`<sup>Optional</sup> <a name="confidenceLevel" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel"></a>

```java
public java.lang.String getConfidenceLevel();
```

- *Type:* java.lang.String

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#confidence_level ModelArmorFloorsetting#confidence_level}

---

##### `filterEnforcement`<sup>Optional</sup> <a name="filterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement"></a>

```java
public java.lang.String getFilterEnforcement();
```

- *Type:* java.lang.String

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}

---

### ModelArmorFloorsettingFilterConfigRaiSettings <a name="ModelArmorFloorsettingFilterConfigRaiSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigRaiSettings;

ModelArmorFloorsettingFilterConfigRaiSettings.builder()
    .raiFilters(IResolvable)
    .raiFilters(java.util.List<ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings.property.raiFilters">raiFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>></code> | rai_filters block. |

---

##### `raiFilters`<sup>Required</sup> <a name="raiFilters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings.property.raiFilters"></a>

```java
public java.lang.Object getRaiFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>>

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#rai_filters ModelArmorFloorsetting#rai_filters}

---

### ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters <a name="ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters;

ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.builder()
    .filterType(java.lang.String)
//  .confidenceLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.filterType">filterType</a></code> | <code>java.lang.String</code> | Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.confidenceLevel">confidenceLevel</a></code> | <code>java.lang.String</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#filter_type ModelArmorFloorsetting#filter_type}

---

##### `confidenceLevel`<sup>Optional</sup> <a name="confidenceLevel" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.confidenceLevel"></a>

```java
public java.lang.String getConfidenceLevel();
```

- *Type:* java.lang.String

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#confidence_level ModelArmorFloorsetting#confidence_level}

---

### ModelArmorFloorsettingFilterConfigSdpSettings <a name="ModelArmorFloorsettingFilterConfigSdpSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigSdpSettings;

ModelArmorFloorsettingFilterConfigSdpSettings.builder()
//  .advancedConfig(ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig)
//  .basicConfig(ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.property.advancedConfig">advancedConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | advanced_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.property.basicConfig">basicConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | basic_config block. |

---

##### `advancedConfig`<sup>Optional</sup> <a name="advancedConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.property.advancedConfig"></a>

```java
public ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig getAdvancedConfig();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#advanced_config ModelArmorFloorsetting#advanced_config}

---

##### `basicConfig`<sup>Optional</sup> <a name="basicConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.property.basicConfig"></a>

```java
public ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig getBasicConfig();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#basic_config ModelArmorFloorsetting#basic_config}

---

### ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig <a name="ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig;

ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.builder()
//  .deidentifyTemplate(java.lang.String)
//  .inspectTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>java.lang.String</code> | Optional Sensitive Data Protection Deidentify template resource name. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate">inspectTemplate</a></code> | <code>java.lang.String</code> | Sensitive Data Protection inspect template resource name. |

---

##### `deidentifyTemplate`<sup>Optional</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate"></a>

```java
public java.lang.String getDeidentifyTemplate();
```

- *Type:* java.lang.String

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.

e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#deidentify_template ModelArmorFloorsetting#deidentify_template}

---

##### `inspectTemplate`<sup>Optional</sup> <a name="inspectTemplate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate"></a>

```java
public java.lang.String getInspectTemplate();
```

- *Type:* java.lang.String

Sensitive Data Protection inspect template resource name.

If only inspect template is provided (de-identify template not provided),
then Sensitive Data Protection InspectContent action is performed during
Sanitization. All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.

e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#inspect_template ModelArmorFloorsetting#inspect_template}

---

### ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig <a name="ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig;

ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.builder()
//  .filterEnforcement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.property.filterEnforcement">filterEnforcement</a></code> | <code>java.lang.String</code> | Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filterEnforcement`<sup>Optional</sup> <a name="filterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.property.filterEnforcement"></a>

```java
public java.lang.String getFilterEnforcement();
```

- *Type:* java.lang.String

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}

---

### ModelArmorFloorsettingFloorSettingMetadata <a name="ModelArmorFloorsettingFloorSettingMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFloorSettingMetadata;

ModelArmorFloorsettingFloorSettingMetadata.builder()
//  .multiLanguageDetection(ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata.property.multiLanguageDetection">multiLanguageDetection</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | multi_language_detection block. |

---

##### `multiLanguageDetection`<sup>Optional</sup> <a name="multiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata.property.multiLanguageDetection"></a>

```java
public ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection getMultiLanguageDetection();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#multi_language_detection ModelArmorFloorsetting#multi_language_detection}

---

### ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection <a name="ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection;

ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.builder()
    .enableMultiLanguageDetection(java.lang.Boolean)
    .enableMultiLanguageDetection(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.property.enableMultiLanguageDetection">enableMultiLanguageDetection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, multi language detection will be enabled. |

---

##### `enableMultiLanguageDetection`<sup>Required</sup> <a name="enableMultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.property.enableMultiLanguageDetection"></a>

```java
public java.lang.Object getEnableMultiLanguageDetection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#enable_multi_language_detection ModelArmorFloorsetting#enable_multi_language_detection}

---

### ModelArmorFloorsettingTimeouts <a name="ModelArmorFloorsettingTimeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingTimeouts;

ModelArmorFloorsettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#create ModelArmorFloorsetting#create}. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#delete ModelArmorFloorsetting#delete}. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#update ModelArmorFloorsetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#create ModelArmorFloorsetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#delete ModelArmorFloorsetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/model_armor_floorsetting#update ModelArmorFloorsetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelArmorFloorsettingAiPlatformFloorSettingOutputReference <a name="ModelArmorFloorsettingAiPlatformFloorSettingOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference;

new ModelArmorFloorsettingAiPlatformFloorSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetEnableCloudLogging">resetEnableCloudLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectAndBlock">resetInspectAndBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectOnly">resetInspectOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableCloudLogging` <a name="resetEnableCloudLogging" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetEnableCloudLogging"></a>

```java
public void resetEnableCloudLogging()
```

##### `resetInspectAndBlock` <a name="resetInspectAndBlock" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectAndBlock"></a>

```java
public void resetInspectAndBlock()
```

##### `resetInspectOnly` <a name="resetInspectOnly" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectOnly"></a>

```java
public void resetInspectOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLoggingInput">enableCloudLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlockInput">inspectAndBlockInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnlyInput">inspectOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLogging">enableCloudLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlock">inspectAndBlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnly">inspectOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableCloudLoggingInput`<sup>Optional</sup> <a name="enableCloudLoggingInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLoggingInput"></a>

```java
public java.lang.Object getEnableCloudLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inspectAndBlockInput`<sup>Optional</sup> <a name="inspectAndBlockInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlockInput"></a>

```java
public java.lang.Object getInspectAndBlockInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inspectOnlyInput`<sup>Optional</sup> <a name="inspectOnlyInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnlyInput"></a>

```java
public java.lang.Object getInspectOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableCloudLogging`<sup>Required</sup> <a name="enableCloudLogging" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLogging"></a>

```java
public java.lang.Object getEnableCloudLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inspectAndBlock`<sup>Required</sup> <a name="inspectAndBlock" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlock"></a>

```java
public java.lang.Object getInspectAndBlock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inspectOnly`<sup>Required</sup> <a name="inspectOnly" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnly"></a>

```java
public java.lang.Object getInspectOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.internalValue"></a>

```java
public ModelArmorFloorsettingAiPlatformFloorSetting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

---


### ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference <a name="ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference;

new ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement">resetFilterEnforcement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterEnforcement` <a name="resetFilterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement"></a>

```java
public void resetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput">filterEnforcementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement">filterEnforcement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterEnforcementInput`<sup>Optional</sup> <a name="filterEnforcementInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```java
public java.lang.String getFilterEnforcementInput();
```

- *Type:* java.lang.String

---

##### `filterEnforcement`<sup>Required</sup> <a name="filterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement"></a>

```java
public java.lang.String getFilterEnforcement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue"></a>

```java
public ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---


### ModelArmorFloorsettingFilterConfigOutputReference <a name="ModelArmorFloorsettingFilterConfigOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigOutputReference;

new ModelArmorFloorsettingFilterConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings">putMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings">putPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings">putRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings">putSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetMaliciousUriFilterSettings">resetMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetPiAndJailbreakFilterSettings">resetPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetRaiSettings">resetRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetSdpSettings">resetSdpSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaliciousUriFilterSettings` <a name="putMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings"></a>

```java
public void putMaliciousUriFilterSettings(ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---

##### `putPiAndJailbreakFilterSettings` <a name="putPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings"></a>

```java
public void putPiAndJailbreakFilterSettings(ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `putRaiSettings` <a name="putRaiSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings"></a>

```java
public void putRaiSettings(ModelArmorFloorsettingFilterConfigRaiSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a>

---

##### `putSdpSettings` <a name="putSdpSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings"></a>

```java
public void putSdpSettings(ModelArmorFloorsettingFilterConfigSdpSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a>

---

##### `resetMaliciousUriFilterSettings` <a name="resetMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetMaliciousUriFilterSettings"></a>

```java
public void resetMaliciousUriFilterSettings()
```

##### `resetPiAndJailbreakFilterSettings` <a name="resetPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetPiAndJailbreakFilterSettings"></a>

```java
public void resetPiAndJailbreakFilterSettings()
```

##### `resetRaiSettings` <a name="resetRaiSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetRaiSettings"></a>

```java
public void resetRaiSettings()
```

##### `resetSdpSettings` <a name="resetSdpSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetSdpSettings"></a>

```java
public void resetSdpSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettings">maliciousUriFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettings">piAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.raiSettings">raiSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference">ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettings">sdpSettings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettingsInput">maliciousUriFilterSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput">piAndJailbreakFilterSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.raiSettingsInput">raiSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettingsInput">sdpSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maliciousUriFilterSettings`<sup>Required</sup> <a name="maliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettings"></a>

```java
public ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference getMaliciousUriFilterSettings();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference</a>

---

##### `piAndJailbreakFilterSettings`<sup>Required</sup> <a name="piAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettings"></a>

```java
public ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference getPiAndJailbreakFilterSettings();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference</a>

---

##### `raiSettings`<sup>Required</sup> <a name="raiSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.raiSettings"></a>

```java
public ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference getRaiSettings();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference">ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference</a>

---

##### `sdpSettings`<sup>Required</sup> <a name="sdpSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettings"></a>

```java
public ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference getSdpSettings();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference</a>

---

##### `maliciousUriFilterSettingsInput`<sup>Optional</sup> <a name="maliciousUriFilterSettingsInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettingsInput"></a>

```java
public ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings getMaliciousUriFilterSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---

##### `piAndJailbreakFilterSettingsInput`<sup>Optional</sup> <a name="piAndJailbreakFilterSettingsInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput"></a>

```java
public ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings getPiAndJailbreakFilterSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `raiSettingsInput`<sup>Optional</sup> <a name="raiSettingsInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.raiSettingsInput"></a>

```java
public ModelArmorFloorsettingFilterConfigRaiSettings getRaiSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a>

---

##### `sdpSettingsInput`<sup>Optional</sup> <a name="sdpSettingsInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettingsInput"></a>

```java
public ModelArmorFloorsettingFilterConfigSdpSettings getSdpSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.internalValue"></a>

```java
public ModelArmorFloorsettingFilterConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

---


### ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference <a name="ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference;

new ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel">resetConfidenceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement">resetFilterEnforcement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidenceLevel` <a name="resetConfidenceLevel" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel"></a>

```java
public void resetConfidenceLevel()
```

##### `resetFilterEnforcement` <a name="resetFilterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement"></a>

```java
public void resetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput">confidenceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput">filterEnforcementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel">confidenceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement">filterEnforcement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `confidenceLevelInput`<sup>Optional</sup> <a name="confidenceLevelInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput"></a>

```java
public java.lang.String getConfidenceLevelInput();
```

- *Type:* java.lang.String

---

##### `filterEnforcementInput`<sup>Optional</sup> <a name="filterEnforcementInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```java
public java.lang.String getFilterEnforcementInput();
```

- *Type:* java.lang.String

---

##### `confidenceLevel`<sup>Required</sup> <a name="confidenceLevel" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel"></a>

```java
public java.lang.String getConfidenceLevel();
```

- *Type:* java.lang.String

---

##### `filterEnforcement`<sup>Required</sup> <a name="filterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement"></a>

```java
public java.lang.String getFilterEnforcement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue"></a>

```java
public ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---


### ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference <a name="ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference;

new ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters">putRaiFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRaiFilters` <a name="putRaiFilters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters"></a>

```java
public void putRaiFilters(IResolvable OR java.util.List<ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFilters">raiFilters</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFiltersInput">raiFiltersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `raiFilters`<sup>Required</sup> <a name="raiFilters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFilters"></a>

```java
public ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList getRaiFilters();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList</a>

---

##### `raiFiltersInput`<sup>Optional</sup> <a name="raiFiltersInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFiltersInput"></a>

```java
public java.lang.Object getRaiFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.internalValue"></a>

```java
public ModelArmorFloorsettingFilterConfigRaiSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a>

---


### ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList <a name="ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList;

new ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get"></a>

```java
public ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>>

---


### ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference <a name="ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference;

new ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel">resetConfidenceLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidenceLevel` <a name="resetConfidenceLevel" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel"></a>

```java
public void resetConfidenceLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput">confidenceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel">confidenceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `confidenceLevelInput`<sup>Optional</sup> <a name="confidenceLevelInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput"></a>

```java
public java.lang.String getConfidenceLevelInput();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `confidenceLevel`<sup>Required</sup> <a name="confidenceLevel" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel"></a>

```java
public java.lang.String getConfidenceLevel();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>

---


### ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference <a name="ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference;

new ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate">resetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate">resetInspectTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeidentifyTemplate` <a name="resetDeidentifyTemplate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate"></a>

```java
public void resetDeidentifyTemplate()
```

##### `resetInspectTemplate` <a name="resetInspectTemplate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate"></a>

```java
public void resetInspectTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput">deidentifyTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput">inspectTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate">inspectTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deidentifyTemplateInput`<sup>Optional</sup> <a name="deidentifyTemplateInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput"></a>

```java
public java.lang.String getDeidentifyTemplateInput();
```

- *Type:* java.lang.String

---

##### `inspectTemplateInput`<sup>Optional</sup> <a name="inspectTemplateInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput"></a>

```java
public java.lang.String getInspectTemplateInput();
```

- *Type:* java.lang.String

---

##### `deidentifyTemplate`<sup>Required</sup> <a name="deidentifyTemplate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate"></a>

```java
public java.lang.String getDeidentifyTemplate();
```

- *Type:* java.lang.String

---

##### `inspectTemplate`<sup>Required</sup> <a name="inspectTemplate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate"></a>

```java
public java.lang.String getInspectTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue"></a>

```java
public ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---


### ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference <a name="ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference;

new ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement">resetFilterEnforcement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterEnforcement` <a name="resetFilterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement"></a>

```java
public void resetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput">filterEnforcementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement">filterEnforcement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterEnforcementInput`<sup>Optional</sup> <a name="filterEnforcementInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput"></a>

```java
public java.lang.String getFilterEnforcementInput();
```

- *Type:* java.lang.String

---

##### `filterEnforcement`<sup>Required</sup> <a name="filterEnforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement"></a>

```java
public java.lang.String getFilterEnforcement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue"></a>

```java
public ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---


### ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference <a name="ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference;

new ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig">putAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig">putBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetAdvancedConfig">resetAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetBasicConfig">resetBasicConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedConfig` <a name="putAdvancedConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig"></a>

```java
public void putAdvancedConfig(ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `putBasicConfig` <a name="putBasicConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig"></a>

```java
public void putBasicConfig(ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---

##### `resetAdvancedConfig` <a name="resetAdvancedConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetAdvancedConfig"></a>

```java
public void resetAdvancedConfig()
```

##### `resetBasicConfig` <a name="resetBasicConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetBasicConfig"></a>

```java
public void resetBasicConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfig">advancedConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfig">basicConfig</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfigInput">advancedConfigInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfigInput">basicConfigInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advancedConfig`<sup>Required</sup> <a name="advancedConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfig"></a>

```java
public ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference getAdvancedConfig();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference</a>

---

##### `basicConfig`<sup>Required</sup> <a name="basicConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfig"></a>

```java
public ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference getBasicConfig();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference</a>

---

##### `advancedConfigInput`<sup>Optional</sup> <a name="advancedConfigInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfigInput"></a>

```java
public ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig getAdvancedConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `basicConfigInput`<sup>Optional</sup> <a name="basicConfigInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfigInput"></a>

```java
public ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig getBasicConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.internalValue"></a>

```java
public ModelArmorFloorsettingFilterConfigSdpSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a>

---


### ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference <a name="ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference;

new ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput">enableMultiLanguageDetectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection">enableMultiLanguageDetection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableMultiLanguageDetectionInput`<sup>Optional</sup> <a name="enableMultiLanguageDetectionInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput"></a>

```java
public java.lang.Object getEnableMultiLanguageDetectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableMultiLanguageDetection`<sup>Required</sup> <a name="enableMultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection"></a>

```java
public java.lang.Object getEnableMultiLanguageDetection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.internalValue"></a>

```java
public ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---


### ModelArmorFloorsettingFloorSettingMetadataOutputReference <a name="ModelArmorFloorsettingFloorSettingMetadataOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference;

new ModelArmorFloorsettingFloorSettingMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection">putMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resetMultiLanguageDetection">resetMultiLanguageDetection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiLanguageDetection` <a name="putMultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection"></a>

```java
public void putMultiLanguageDetection(ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---

##### `resetMultiLanguageDetection` <a name="resetMultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resetMultiLanguageDetection"></a>

```java
public void resetMultiLanguageDetection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetection">multiLanguageDetection</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetectionInput">multiLanguageDetectionInput</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multiLanguageDetection`<sup>Required</sup> <a name="multiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetection"></a>

```java
public ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference getMultiLanguageDetection();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference</a>

---

##### `multiLanguageDetectionInput`<sup>Optional</sup> <a name="multiLanguageDetectionInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetectionInput"></a>

```java
public ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection getMultiLanguageDetectionInput();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.internalValue"></a>

```java
public ModelArmorFloorsettingFloorSettingMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

---


### ModelArmorFloorsettingTimeoutsOutputReference <a name="ModelArmorFloorsettingTimeoutsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.model_armor_floorsetting.ModelArmorFloorsettingTimeoutsOutputReference;

new ModelArmorFloorsettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>

---



