# `iapSettings` Submodule <a name="`iapSettings` Submodule" id="@cdktf/provider-google.iapSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapSettings <a name="IapSettings" id="@cdktf/provider-google.iapSettings.IapSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings google_iap_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettings;

IapSettings.Builder.create(Construct scope, java.lang.String id)
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
//  .accessSettings(IapSettingsAccessSettings)
//  .applicationSettings(IapSettingsApplicationSettings)
//  .id(java.lang.String)
//  .timeouts(IapSettingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the IAP protected resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.accessSettings">accessSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a></code> | application_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#id IapSettings#id}. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the IAP protected resource.

Name can have below resources:

* organizations/{organization_id}
* folders/{folder_id}
* projects/{project_id}
* projects/{project_id}/iap_web
* projects/{project_id}/iap_web/compute
* projects/{project_id}/iap_web/compute-{region}
* projects/{project_id}/iap_web/compute/services/{service_id}
* projects/{project_id}/iap_web/compute-{region}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}/version/{version_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#name IapSettings#name}

---

##### `accessSettings`<sup>Optional</sup> <a name="accessSettings" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.accessSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#access_settings IapSettings#access_settings}

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.applicationSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

application_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#application_settings IapSettings#application_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#id IapSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iapSettings.IapSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#timeouts IapSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings">putAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.putApplicationSettings">putApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetAccessSettings">resetAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetApplicationSettings">resetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iapSettings.IapSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapSettings.IapSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iapSettings.IapSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iapSettings.IapSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iapSettings.IapSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iapSettings.IapSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iapSettings.IapSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iapSettings.IapSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iapSettings.IapSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iapSettings.IapSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iapSettings.IapSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iapSettings.IapSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapSettings.IapSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iapSettings.IapSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iapSettings.IapSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iapSettings.IapSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iapSettings.IapSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iapSettings.IapSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessSettings` <a name="putAccessSettings" id="@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings"></a>

```java
public void putAccessSettings(IapSettingsAccessSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettings.putAccessSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

---

##### `putApplicationSettings` <a name="putApplicationSettings" id="@cdktf/provider-google.iapSettings.IapSettings.putApplicationSettings"></a>

```java
public void putApplicationSettings(IapSettingsApplicationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettings.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iapSettings.IapSettings.putTimeouts"></a>

```java
public void putTimeouts(IapSettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>

---

##### `resetAccessSettings` <a name="resetAccessSettings" id="@cdktf/provider-google.iapSettings.IapSettings.resetAccessSettings"></a>

```java
public void resetAccessSettings()
```

##### `resetApplicationSettings` <a name="resetApplicationSettings" id="@cdktf/provider-google.iapSettings.IapSettings.resetApplicationSettings"></a>

```java
public void resetApplicationSettings()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iapSettings.IapSettings.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iapSettings.IapSettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IapSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iapSettings.IapSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettings;

IapSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapSettings.IapSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iapSettings.IapSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettings;

IapSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapSettings.IapSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iapSettings.IapSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettings;

IapSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapSettings.IapSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettings;

IapSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IapSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IapSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IapSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IapSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapSettings.IapSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IapSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.accessSettings">accessSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference">IapSettingsAccessSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference">IapSettingsApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference">IapSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.accessSettingsInput">accessSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.applicationSettingsInput">applicationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iapSettings.IapSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iapSettings.IapSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iapSettings.IapSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iapSettings.IapSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iapSettings.IapSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iapSettings.IapSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapSettings.IapSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapSettings.IapSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapSettings.IapSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapSettings.IapSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapSettings.IapSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapSettings.IapSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapSettings.IapSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessSettings`<sup>Required</sup> <a name="accessSettings" id="@cdktf/provider-google.iapSettings.IapSettings.property.accessSettings"></a>

```java
public IapSettingsAccessSettingsOutputReference getAccessSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference">IapSettingsAccessSettingsOutputReference</a>

---

##### `applicationSettings`<sup>Required</sup> <a name="applicationSettings" id="@cdktf/provider-google.iapSettings.IapSettings.property.applicationSettings"></a>

```java
public IapSettingsApplicationSettingsOutputReference getApplicationSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference">IapSettingsApplicationSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iapSettings.IapSettings.property.timeouts"></a>

```java
public IapSettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference">IapSettingsTimeoutsOutputReference</a>

---

##### `accessSettingsInput`<sup>Optional</sup> <a name="accessSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettings.property.accessSettingsInput"></a>

```java
public IapSettingsAccessSettings getAccessSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

---

##### `applicationSettingsInput`<sup>Optional</sup> <a name="applicationSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettings.property.applicationSettingsInput"></a>

```java
public IapSettingsApplicationSettings getApplicationSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iapSettings.IapSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.iapSettings.IapSettings.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iapSettings.IapSettings.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iapSettings.IapSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iapSettings.IapSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IapSettingsAccessSettings <a name="IapSettingsAccessSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettings;

IapSettingsAccessSettings.builder()
//  .allowedDomainsSettings(IapSettingsAccessSettingsAllowedDomainsSettings)
//  .corsSettings(IapSettingsAccessSettingsCorsSettings)
//  .gcipSettings(IapSettingsAccessSettingsGcipSettings)
//  .identitySources(java.util.List<java.lang.String>)
//  .oauthSettings(IapSettingsAccessSettingsOauthSettings)
//  .reauthSettings(IapSettingsAccessSettingsReauthSettings)
//  .workforceIdentitySettings(IapSettingsAccessSettingsWorkforceIdentitySettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.allowedDomainsSettings">allowedDomainsSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a></code> | allowed_domains_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.corsSettings">corsSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a></code> | cors_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.gcipSettings">gcipSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a></code> | gcip_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.identitySources">identitySources</a></code> | <code>java.util.List<java.lang.String></code> | Identity sources that IAP can use to authenticate the end user. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.oauthSettings">oauthSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a></code> | oauth_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.reauthSettings">reauthSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a></code> | reauth_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.workforceIdentitySettings">workforceIdentitySettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | workforce_identity_settings block. |

---

##### `allowedDomainsSettings`<sup>Optional</sup> <a name="allowedDomainsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.allowedDomainsSettings"></a>

```java
public IapSettingsAccessSettingsAllowedDomainsSettings getAllowedDomainsSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a>

allowed_domains_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#allowed_domains_settings IapSettings#allowed_domains_settings}

---

##### `corsSettings`<sup>Optional</sup> <a name="corsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.corsSettings"></a>

```java
public IapSettingsAccessSettingsCorsSettings getCorsSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a>

cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#cors_settings IapSettings#cors_settings}

---

##### `gcipSettings`<sup>Optional</sup> <a name="gcipSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.gcipSettings"></a>

```java
public IapSettingsAccessSettingsGcipSettings getGcipSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a>

gcip_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#gcip_settings IapSettings#gcip_settings}

---

##### `identitySources`<sup>Optional</sup> <a name="identitySources" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.identitySources"></a>

```java
public java.util.List<java.lang.String> getIdentitySources();
```

- *Type:* java.util.List<java.lang.String>

Identity sources that IAP can use to authenticate the end user.

Only one identity source
can be configured. The possible values are:

* 'WORKFORCE_IDENTITY_FEDERATION': Use external identities set up on Google Cloud Workforce
  Identity Federation. Possible values: ["WORKFORCE_IDENTITY_FEDERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#identity_sources IapSettings#identity_sources}

---

##### `oauthSettings`<sup>Optional</sup> <a name="oauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.oauthSettings"></a>

```java
public IapSettingsAccessSettingsOauthSettings getOauthSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a>

oauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#oauth_settings IapSettings#oauth_settings}

---

##### `reauthSettings`<sup>Optional</sup> <a name="reauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.reauthSettings"></a>

```java
public IapSettingsAccessSettingsReauthSettings getReauthSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a>

reauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#reauth_settings IapSettings#reauth_settings}

---

##### `workforceIdentitySettings`<sup>Optional</sup> <a name="workforceIdentitySettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettings.property.workforceIdentitySettings"></a>

```java
public IapSettingsAccessSettingsWorkforceIdentitySettings getWorkforceIdentitySettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a>

workforce_identity_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#workforce_identity_settings IapSettings#workforce_identity_settings}

---

### IapSettingsAccessSettingsAllowedDomainsSettings <a name="IapSettingsAccessSettingsAllowedDomainsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsAllowedDomainsSettings;

IapSettingsAccessSettingsAllowedDomainsSettings.builder()
//  .domains(java.util.List<java.lang.String>)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | List of trusted domains. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Configuration for customers to opt in for the feature. |

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

List of trusted domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#domains IapSettings#domains}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Configuration for customers to opt in for the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#enable IapSettings#enable}

---

### IapSettingsAccessSettingsCorsSettings <a name="IapSettingsAccessSettingsCorsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsCorsSettings;

IapSettingsAccessSettingsCorsSettings.builder()
//  .allowHttpOptions(java.lang.Boolean)
//  .allowHttpOptions(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings.property.allowHttpOptions">allowHttpOptions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Configuration to allow HTTP OPTIONS calls to skip authorization. |

---

##### `allowHttpOptions`<sup>Optional</sup> <a name="allowHttpOptions" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings.property.allowHttpOptions"></a>

```java
public java.lang.Object getAllowHttpOptions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Configuration to allow HTTP OPTIONS calls to skip authorization.

If undefined, IAP will not apply any special logic to OPTIONS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#allow_http_options IapSettings#allow_http_options}

---

### IapSettingsAccessSettingsGcipSettings <a name="IapSettingsAccessSettingsGcipSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsGcipSettings;

IapSettingsAccessSettingsGcipSettings.builder()
//  .loginPageUri(java.lang.String)
//  .tenantIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.property.loginPageUri">loginPageUri</a></code> | <code>java.lang.String</code> | Login page URI associated with the GCIP tenants. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.property.tenantIds">tenantIds</a></code> | <code>java.util.List<java.lang.String></code> | GCIP tenant ids that are linked to the IAP resource. |

---

##### `loginPageUri`<sup>Optional</sup> <a name="loginPageUri" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.property.loginPageUri"></a>

```java
public java.lang.String getLoginPageUri();
```

- *Type:* java.lang.String

Login page URI associated with the GCIP tenants.

Typically, all resources within
the same project share the same login page, though it could be overridden at the
sub resource level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#login_page_uri IapSettings#login_page_uri}

---

##### `tenantIds`<sup>Optional</sup> <a name="tenantIds" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings.property.tenantIds"></a>

```java
public java.util.List<java.lang.String> getTenantIds();
```

- *Type:* java.util.List<java.lang.String>

GCIP tenant ids that are linked to the IAP resource.

tenantIds could be a string
beginning with a number character to indicate authenticating with GCIP tenant flow,
or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow
is used, tenantIds should only contain one single element, while for tenant flow,
tenantIds can contain multiple elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#tenant_ids IapSettings#tenant_ids}

---

### IapSettingsAccessSettingsOauthSettings <a name="IapSettingsAccessSettingsOauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsOauthSettings;

IapSettingsAccessSettingsOauthSettings.builder()
//  .loginHint(java.lang.String)
//  .programmaticClients(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.property.loginHint">loginHint</a></code> | <code>java.lang.String</code> | Domain hint to send as hd=? |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.property.programmaticClients">programmaticClients</a></code> | <code>java.util.List<java.lang.String></code> | List of client ids allowed to use IAP programmatically. |

---

##### `loginHint`<sup>Optional</sup> <a name="loginHint" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.property.loginHint"></a>

```java
public java.lang.String getLoginHint();
```

- *Type:* java.lang.String

Domain hint to send as hd=?

parameter in OAuth request flow.
Enables redirect to primary IDP by skipping Google's login screen.
(https://developers.google.com/identity/protocols/OpenIDConnect#hd-param)
Note: IAP does not verify that the id token's hd claim matches this value
since access behavior is managed by IAM policies.

* loginHint setting is not a replacement for access control. Always enforce an appropriate access policy if you want to restrict access to users outside your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#login_hint IapSettings#login_hint}

---

##### `programmaticClients`<sup>Optional</sup> <a name="programmaticClients" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings.property.programmaticClients"></a>

```java
public java.util.List<java.lang.String> getProgrammaticClients();
```

- *Type:* java.util.List<java.lang.String>

List of client ids allowed to use IAP programmatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#programmatic_clients IapSettings#programmatic_clients}

---

### IapSettingsAccessSettingsReauthSettings <a name="IapSettingsAccessSettingsReauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsReauthSettings;

IapSettingsAccessSettingsReauthSettings.builder()
    .maxAge(java.lang.String)
    .method(java.lang.String)
    .policyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.maxAge">maxAge</a></code> | <code>java.lang.String</code> | Reauth session lifetime, how long before a user has to reauthenticate again. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.method">method</a></code> | <code>java.lang.String</code> | Reauth method requested. The possible values are:. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.policyType">policyType</a></code> | <code>java.lang.String</code> | How IAP determines the effective policy in cases of hierarchical policies. |

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.maxAge"></a>

```java
public java.lang.String getMaxAge();
```

- *Type:* java.lang.String

Reauth session lifetime, how long before a user has to reauthenticate again.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#max_age IapSettings#max_age}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Reauth method requested. The possible values are:.

* 'LOGIN': Prompts the user to log in again.
* 'SECURE_KEY': User must use their secure key 2nd factor device.
* 'ENROLLED_SECOND_FACTORS': User can use any enabled 2nd factor. Possible values: ["LOGIN", "SECURE_KEY", "ENROLLED_SECOND_FACTORS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#method IapSettings#method}

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

How IAP determines the effective policy in cases of hierarchical policies.

Policies are merged from higher in the hierarchy to lower in the hierarchy.
The possible values are:

* 'MINIMUM': This policy acts as a minimum to other policies, lower in the hierarchy.
  Effective policy may only be the same or stricter.
* 'DEFAULT': This policy acts as a default if no other reauth policy is set. Possible values: ["MINIMUM", "DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#policy_type IapSettings#policy_type}

---

### IapSettingsAccessSettingsWorkforceIdentitySettings <a name="IapSettingsAccessSettingsWorkforceIdentitySettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsWorkforceIdentitySettings;

IapSettingsAccessSettingsWorkforceIdentitySettings.builder()
//  .oauth2(IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2)
//  .workforcePools(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2">oauth2</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | oauth2 block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools">workforcePools</a></code> | <code>java.util.List<java.lang.String></code> | The workforce pool resources. Only one workforce pool is accepted. |

---

##### `oauth2`<sup>Optional</sup> <a name="oauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2"></a>

```java
public IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 getOauth2();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

oauth2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#oauth2 IapSettings#oauth2}

---

##### `workforcePools`<sup>Optional</sup> <a name="workforcePools" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools"></a>

```java
public java.util.List<java.lang.String> getWorkforcePools();
```

- *Type:* java.util.List<java.lang.String>

The workforce pool resources. Only one workforce pool is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#workforce_pools IapSettings#workforce_pools}

---

### IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 <a name="IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2;

IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.builder()
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Input only. The OAuth 2.0 client secret created while registering the client ID. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#client_id IapSettings#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Input only. The OAuth 2.0 client secret created while registering the client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#client_secret IapSettings#client_secret}

---

### IapSettingsApplicationSettings <a name="IapSettingsApplicationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsApplicationSettings;

IapSettingsApplicationSettings.builder()
//  .accessDeniedPageSettings(IapSettingsApplicationSettingsAccessDeniedPageSettings)
//  .attributePropagationSettings(IapSettingsApplicationSettingsAttributePropagationSettings)
//  .cookieDomain(java.lang.String)
//  .csmSettings(IapSettingsApplicationSettingsCsmSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.accessDeniedPageSettings">accessDeniedPageSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | access_denied_page_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.attributePropagationSettings">attributePropagationSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a></code> | attribute_propagation_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.cookieDomain">cookieDomain</a></code> | <code>java.lang.String</code> | The Domain value to set for cookies generated by IAP. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.csmSettings">csmSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a></code> | csm_settings block. |

---

##### `accessDeniedPageSettings`<sup>Optional</sup> <a name="accessDeniedPageSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.accessDeniedPageSettings"></a>

```java
public IapSettingsApplicationSettingsAccessDeniedPageSettings getAccessDeniedPageSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a>

access_denied_page_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#access_denied_page_settings IapSettings#access_denied_page_settings}

---

##### `attributePropagationSettings`<sup>Optional</sup> <a name="attributePropagationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.attributePropagationSettings"></a>

```java
public IapSettingsApplicationSettingsAttributePropagationSettings getAttributePropagationSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a>

attribute_propagation_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#attribute_propagation_settings IapSettings#attribute_propagation_settings}

---

##### `cookieDomain`<sup>Optional</sup> <a name="cookieDomain" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.cookieDomain"></a>

```java
public java.lang.String getCookieDomain();
```

- *Type:* java.lang.String

The Domain value to set for cookies generated by IAP.

This value is not validated by the API,
but will be ignored at runtime if invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#cookie_domain IapSettings#cookie_domain}

---

##### `csmSettings`<sup>Optional</sup> <a name="csmSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings.property.csmSettings"></a>

```java
public IapSettingsApplicationSettingsCsmSettings getCsmSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a>

csm_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#csm_settings IapSettings#csm_settings}

---

### IapSettingsApplicationSettingsAccessDeniedPageSettings <a name="IapSettingsApplicationSettingsAccessDeniedPageSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsApplicationSettingsAccessDeniedPageSettings;

IapSettingsApplicationSettingsAccessDeniedPageSettings.builder()
//  .accessDeniedPageUri(java.lang.String)
//  .generateTroubleshootingUri(java.lang.Boolean)
//  .generateTroubleshootingUri(IResolvable)
//  .remediationTokenGenerationEnabled(java.lang.Boolean)
//  .remediationTokenGenerationEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri">accessDeniedPageUri</a></code> | <code>java.lang.String</code> | The URI to be redirected to when access is denied. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri">generateTroubleshootingUri</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to generate a troubleshooting URL on access denied events to this application. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled">remediationTokenGenerationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to generate remediation token on access denied events to this application. |

---

##### `accessDeniedPageUri`<sup>Optional</sup> <a name="accessDeniedPageUri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri"></a>

```java
public java.lang.String getAccessDeniedPageUri();
```

- *Type:* java.lang.String

The URI to be redirected to when access is denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#access_denied_page_uri IapSettings#access_denied_page_uri}

---

##### `generateTroubleshootingUri`<sup>Optional</sup> <a name="generateTroubleshootingUri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri"></a>

```java
public java.lang.Object getGenerateTroubleshootingUri();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to generate a troubleshooting URL on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#generate_troubleshooting_uri IapSettings#generate_troubleshooting_uri}

---

##### `remediationTokenGenerationEnabled`<sup>Optional</sup> <a name="remediationTokenGenerationEnabled" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled"></a>

```java
public java.lang.Object getRemediationTokenGenerationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to generate remediation token on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#remediation_token_generation_enabled IapSettings#remediation_token_generation_enabled}

---

### IapSettingsApplicationSettingsAttributePropagationSettings <a name="IapSettingsApplicationSettingsAttributePropagationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsApplicationSettingsAttributePropagationSettings;

IapSettingsApplicationSettingsAttributePropagationSettings.builder()
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .expression(java.lang.String)
//  .outputCredentials(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the provided attribute propagation settings should be evaluated on user requests. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.expression">expression</a></code> | <code>java.lang.String</code> | Raw string CEL expression. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials">outputCredentials</a></code> | <code>java.util.List<java.lang.String></code> | Which output credentials attributes selected by the CEL expression should be propagated in. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the provided attribute propagation settings should be evaluated on user requests.

If set to true, attributes returned from the expression will be propagated in the set output credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#enable IapSettings#enable}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Raw string CEL expression.

Must return a list of attributes. A maximum of 45 attributes can
be selected. Expressions can select different attribute types from attributes:
attributes.saml_attributes, attributes.iap_attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#expression IapSettings#expression}

---

##### `outputCredentials`<sup>Optional</sup> <a name="outputCredentials" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials"></a>

```java
public java.util.List<java.lang.String> getOutputCredentials();
```

- *Type:* java.util.List<java.lang.String>

Which output credentials attributes selected by the CEL expression should be propagated in.

All attributes will be fully duplicated in each selected output credential.
Possible values are:

* 'HEADER': Propagate attributes in the headers with "x-goog-iap-attr-" prefix.
* 'JWT': Propagate attributes in the JWT of the form:
  "additional_claims": { "my_attribute": ["value1", "value2"] }
* 'RCTOKEN': Propagate attributes in the RCToken of the form: "
  additional_claims": { "my_attribute": ["value1", "value2"] } Possible values: ["HEADER", "JWT", "RCTOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#output_credentials IapSettings#output_credentials}

---

### IapSettingsApplicationSettingsCsmSettings <a name="IapSettingsApplicationSettingsCsmSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsApplicationSettingsCsmSettings;

IapSettingsApplicationSettingsCsmSettings.builder()
//  .rctokenAud(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings.property.rctokenAud">rctokenAud</a></code> | <code>java.lang.String</code> | Audience claim set in the generated RCToken. This value is not validated by IAP. |

---

##### `rctokenAud`<sup>Optional</sup> <a name="rctokenAud" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings.property.rctokenAud"></a>

```java
public java.lang.String getRctokenAud();
```

- *Type:* java.lang.String

Audience claim set in the generated RCToken. This value is not validated by IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#rctoken_aud IapSettings#rctoken_aud}

---

### IapSettingsConfig <a name="IapSettingsConfig" id="@cdktf/provider-google.iapSettings.IapSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsConfig;

IapSettingsConfig.builder()
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
//  .accessSettings(IapSettingsAccessSettings)
//  .applicationSettings(IapSettingsApplicationSettings)
//  .id(java.lang.String)
//  .timeouts(IapSettingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the IAP protected resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.accessSettings">accessSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a></code> | application_settings block. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#id IapSettings#id}. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the IAP protected resource.

Name can have below resources:

* organizations/{organization_id}
* folders/{folder_id}
* projects/{project_id}
* projects/{project_id}/iap_web
* projects/{project_id}/iap_web/compute
* projects/{project_id}/iap_web/compute-{region}
* projects/{project_id}/iap_web/compute/services/{service_id}
* projects/{project_id}/iap_web/compute-{region}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}/version/{version_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#name IapSettings#name}

---

##### `accessSettings`<sup>Optional</sup> <a name="accessSettings" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.accessSettings"></a>

```java
public IapSettingsAccessSettings getAccessSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#access_settings IapSettings#access_settings}

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.applicationSettings"></a>

```java
public IapSettingsApplicationSettings getApplicationSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

application_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#application_settings IapSettings#application_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#id IapSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iapSettings.IapSettingsConfig.property.timeouts"></a>

```java
public IapSettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#timeouts IapSettings#timeouts}

---

### IapSettingsTimeouts <a name="IapSettingsTimeouts" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsTimeouts;

IapSettingsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#create IapSettings#create}. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#delete IapSettings#delete}. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#update IapSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#create IapSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#delete IapSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iapSettings.IapSettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/iap_settings#update IapSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference <a name="IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference;

new IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains"></a>

```java
public void resetDomains()
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable"></a>

```java
public void resetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue"></a>

```java
public IapSettingsAccessSettingsAllowedDomainsSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a>

---


### IapSettingsAccessSettingsCorsSettingsOutputReference <a name="IapSettingsAccessSettingsCorsSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsCorsSettingsOutputReference;

new IapSettingsAccessSettingsCorsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions">resetAllowHttpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowHttpOptions` <a name="resetAllowHttpOptions" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions"></a>

```java
public void resetAllowHttpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput">allowHttpOptionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions">allowHttpOptions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowHttpOptionsInput`<sup>Optional</sup> <a name="allowHttpOptionsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput"></a>

```java
public java.lang.Object getAllowHttpOptionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHttpOptions`<sup>Required</sup> <a name="allowHttpOptions" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions"></a>

```java
public java.lang.Object getAllowHttpOptions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue"></a>

```java
public IapSettingsAccessSettingsCorsSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a>

---


### IapSettingsAccessSettingsGcipSettingsOutputReference <a name="IapSettingsAccessSettingsGcipSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsGcipSettingsOutputReference;

new IapSettingsAccessSettingsGcipSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri">resetLoginPageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds">resetTenantIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoginPageUri` <a name="resetLoginPageUri" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri"></a>

```java
public void resetLoginPageUri()
```

##### `resetTenantIds` <a name="resetTenantIds" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds"></a>

```java
public void resetTenantIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput">loginPageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput">tenantIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri">loginPageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds">tenantIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loginPageUriInput`<sup>Optional</sup> <a name="loginPageUriInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput"></a>

```java
public java.lang.String getLoginPageUriInput();
```

- *Type:* java.lang.String

---

##### `tenantIdsInput`<sup>Optional</sup> <a name="tenantIdsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput"></a>

```java
public java.util.List<java.lang.String> getTenantIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginPageUri`<sup>Required</sup> <a name="loginPageUri" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri"></a>

```java
public java.lang.String getLoginPageUri();
```

- *Type:* java.lang.String

---

##### `tenantIds`<sup>Required</sup> <a name="tenantIds" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds"></a>

```java
public java.util.List<java.lang.String> getTenantIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue"></a>

```java
public IapSettingsAccessSettingsGcipSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a>

---


### IapSettingsAccessSettingsOauthSettingsOutputReference <a name="IapSettingsAccessSettingsOauthSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsOauthSettingsOutputReference;

new IapSettingsAccessSettingsOauthSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint">resetLoginHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients">resetProgrammaticClients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoginHint` <a name="resetLoginHint" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint"></a>

```java
public void resetLoginHint()
```

##### `resetProgrammaticClients` <a name="resetProgrammaticClients" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients"></a>

```java
public void resetProgrammaticClients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput">loginHintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput">programmaticClientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint">loginHint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients">programmaticClients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loginHintInput`<sup>Optional</sup> <a name="loginHintInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput"></a>

```java
public java.lang.String getLoginHintInput();
```

- *Type:* java.lang.String

---

##### `programmaticClientsInput`<sup>Optional</sup> <a name="programmaticClientsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput"></a>

```java
public java.util.List<java.lang.String> getProgrammaticClientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginHint`<sup>Required</sup> <a name="loginHint" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint"></a>

```java
public java.lang.String getLoginHint();
```

- *Type:* java.lang.String

---

##### `programmaticClients`<sup>Required</sup> <a name="programmaticClients" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients"></a>

```java
public java.util.List<java.lang.String> getProgrammaticClients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue"></a>

```java
public IapSettingsAccessSettingsOauthSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a>

---


### IapSettingsAccessSettingsOutputReference <a name="IapSettingsAccessSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsOutputReference;

new IapSettingsAccessSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings">putAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putCorsSettings">putCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putGcipSettings">putGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putOauthSettings">putOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putReauthSettings">putReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings">putWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings">resetAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetCorsSettings">resetCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetGcipSettings">resetGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetIdentitySources">resetIdentitySources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetOauthSettings">resetOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetReauthSettings">resetReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings">resetWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedDomainsSettings` <a name="putAllowedDomainsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings"></a>

```java
public void putAllowedDomainsSettings(IapSettingsAccessSettingsAllowedDomainsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `putCorsSettings` <a name="putCorsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putCorsSettings"></a>

```java
public void putCorsSettings(IapSettingsAccessSettingsCorsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putCorsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a>

---

##### `putGcipSettings` <a name="putGcipSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putGcipSettings"></a>

```java
public void putGcipSettings(IapSettingsAccessSettingsGcipSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putGcipSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a>

---

##### `putOauthSettings` <a name="putOauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putOauthSettings"></a>

```java
public void putOauthSettings(IapSettingsAccessSettingsOauthSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putOauthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a>

---

##### `putReauthSettings` <a name="putReauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putReauthSettings"></a>

```java
public void putReauthSettings(IapSettingsAccessSettingsReauthSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putReauthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a>

---

##### `putWorkforceIdentitySettings` <a name="putWorkforceIdentitySettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings"></a>

```java
public void putWorkforceIdentitySettings(IapSettingsAccessSettingsWorkforceIdentitySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `resetAllowedDomainsSettings` <a name="resetAllowedDomainsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings"></a>

```java
public void resetAllowedDomainsSettings()
```

##### `resetCorsSettings` <a name="resetCorsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetCorsSettings"></a>

```java
public void resetCorsSettings()
```

##### `resetGcipSettings` <a name="resetGcipSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetGcipSettings"></a>

```java
public void resetGcipSettings()
```

##### `resetIdentitySources` <a name="resetIdentitySources" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetIdentitySources"></a>

```java
public void resetIdentitySources()
```

##### `resetOauthSettings` <a name="resetOauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetOauthSettings"></a>

```java
public void resetOauthSettings()
```

##### `resetReauthSettings` <a name="resetReauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetReauthSettings"></a>

```java
public void resetReauthSettings()
```

##### `resetWorkforceIdentitySettings` <a name="resetWorkforceIdentitySettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings"></a>

```java
public void resetWorkforceIdentitySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings">allowedDomainsSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.corsSettings">corsSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference">IapSettingsAccessSettingsCorsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.gcipSettings">gcipSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference">IapSettingsAccessSettingsGcipSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.oauthSettings">oauthSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference">IapSettingsAccessSettingsOauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.reauthSettings">reauthSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference">IapSettingsAccessSettingsReauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings">workforceIdentitySettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput">allowedDomainsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.corsSettingsInput">corsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.gcipSettingsInput">gcipSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.identitySourcesInput">identitySourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.oauthSettingsInput">oauthSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.reauthSettingsInput">reauthSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput">workforceIdentitySettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.identitySources">identitySources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedDomainsSettings`<sup>Required</sup> <a name="allowedDomainsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings"></a>

```java
public IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference getAllowedDomainsSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">IapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a>

---

##### `corsSettings`<sup>Required</sup> <a name="corsSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.corsSettings"></a>

```java
public IapSettingsAccessSettingsCorsSettingsOutputReference getCorsSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettingsOutputReference">IapSettingsAccessSettingsCorsSettingsOutputReference</a>

---

##### `gcipSettings`<sup>Required</sup> <a name="gcipSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.gcipSettings"></a>

```java
public IapSettingsAccessSettingsGcipSettingsOutputReference getGcipSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettingsOutputReference">IapSettingsAccessSettingsGcipSettingsOutputReference</a>

---

##### `oauthSettings`<sup>Required</sup> <a name="oauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.oauthSettings"></a>

```java
public IapSettingsAccessSettingsOauthSettingsOutputReference getOauthSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettingsOutputReference">IapSettingsAccessSettingsOauthSettingsOutputReference</a>

---

##### `reauthSettings`<sup>Required</sup> <a name="reauthSettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.reauthSettings"></a>

```java
public IapSettingsAccessSettingsReauthSettingsOutputReference getReauthSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference">IapSettingsAccessSettingsReauthSettingsOutputReference</a>

---

##### `workforceIdentitySettings`<sup>Required</sup> <a name="workforceIdentitySettings" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings"></a>

```java
public IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference getWorkforceIdentitySettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a>

---

##### `allowedDomainsSettingsInput`<sup>Optional</sup> <a name="allowedDomainsSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput"></a>

```java
public IapSettingsAccessSettingsAllowedDomainsSettings getAllowedDomainsSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsAllowedDomainsSettings">IapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `corsSettingsInput`<sup>Optional</sup> <a name="corsSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.corsSettingsInput"></a>

```java
public IapSettingsAccessSettingsCorsSettings getCorsSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsCorsSettings">IapSettingsAccessSettingsCorsSettings</a>

---

##### `gcipSettingsInput`<sup>Optional</sup> <a name="gcipSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.gcipSettingsInput"></a>

```java
public IapSettingsAccessSettingsGcipSettings getGcipSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsGcipSettings">IapSettingsAccessSettingsGcipSettings</a>

---

##### `identitySourcesInput`<sup>Optional</sup> <a name="identitySourcesInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.identitySourcesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitySourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oauthSettingsInput`<sup>Optional</sup> <a name="oauthSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.oauthSettingsInput"></a>

```java
public IapSettingsAccessSettingsOauthSettings getOauthSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOauthSettings">IapSettingsAccessSettingsOauthSettings</a>

---

##### `reauthSettingsInput`<sup>Optional</sup> <a name="reauthSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.reauthSettingsInput"></a>

```java
public IapSettingsAccessSettingsReauthSettings getReauthSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a>

---

##### `workforceIdentitySettingsInput`<sup>Optional</sup> <a name="workforceIdentitySettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput"></a>

```java
public IapSettingsAccessSettingsWorkforceIdentitySettings getWorkforceIdentitySettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `identitySources`<sup>Required</sup> <a name="identitySources" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.identitySources"></a>

```java
public java.util.List<java.lang.String> getIdentitySources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsOutputReference.property.internalValue"></a>

```java
public IapSettingsAccessSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettings">IapSettingsAccessSettings</a>

---


### IapSettingsAccessSettingsReauthSettingsOutputReference <a name="IapSettingsAccessSettingsReauthSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsReauthSettingsOutputReference;

new IapSettingsAccessSettingsReauthSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput"></a>

```java
public java.lang.String getMaxAgeInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge"></a>

```java
public java.lang.String getMaxAge();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue"></a>

```java
public IapSettingsAccessSettingsReauthSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsReauthSettings">IapSettingsAccessSettingsReauthSettings</a>

---


### IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference <a name="IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference;

new IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256">clientSecretSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientSecretSha256`<sup>Required</sup> <a name="clientSecretSha256" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256"></a>

```java
public java.lang.String getClientSecretSha256();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue"></a>

```java
public IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---


### IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference <a name="IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference;

new IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2">putOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2">resetOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools">resetWorkforcePools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauth2` <a name="putOauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2"></a>

```java
public void putOauth2(IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `resetOauth2` <a name="resetOauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2"></a>

```java
public void resetOauth2()
```

##### `resetWorkforcePools` <a name="resetWorkforcePools" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools"></a>

```java
public void resetWorkforcePools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2">oauth2</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input">oauth2Input</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput">workforcePoolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools">workforcePools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oauth2`<sup>Required</sup> <a name="oauth2" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2"></a>

```java
public IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference getOauth2();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a>

---

##### `oauth2Input`<sup>Optional</sup> <a name="oauth2Input" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input"></a>

```java
public IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 getOauth2Input();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">IapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `workforcePoolsInput`<sup>Optional</sup> <a name="workforcePoolsInput" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput"></a>

```java
public java.util.List<java.lang.String> getWorkforcePoolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workforcePools`<sup>Required</sup> <a name="workforcePools" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools"></a>

```java
public java.util.List<java.lang.String> getWorkforcePools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue"></a>

```java
public IapSettingsAccessSettingsWorkforceIdentitySettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsAccessSettingsWorkforceIdentitySettings">IapSettingsAccessSettingsWorkforceIdentitySettings</a>

---


### IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference <a name="IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference;

new IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri">resetAccessDeniedPageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri">resetGenerateTroubleshootingUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled">resetRemediationTokenGenerationEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessDeniedPageUri` <a name="resetAccessDeniedPageUri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri"></a>

```java
public void resetAccessDeniedPageUri()
```

##### `resetGenerateTroubleshootingUri` <a name="resetGenerateTroubleshootingUri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri"></a>

```java
public void resetGenerateTroubleshootingUri()
```

##### `resetRemediationTokenGenerationEnabled` <a name="resetRemediationTokenGenerationEnabled" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled"></a>

```java
public void resetRemediationTokenGenerationEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput">accessDeniedPageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput">generateTroubleshootingUriInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput">remediationTokenGenerationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri">accessDeniedPageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri">generateTroubleshootingUri</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled">remediationTokenGenerationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessDeniedPageUriInput`<sup>Optional</sup> <a name="accessDeniedPageUriInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput"></a>

```java
public java.lang.String getAccessDeniedPageUriInput();
```

- *Type:* java.lang.String

---

##### `generateTroubleshootingUriInput`<sup>Optional</sup> <a name="generateTroubleshootingUriInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput"></a>

```java
public java.lang.Object getGenerateTroubleshootingUriInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `remediationTokenGenerationEnabledInput`<sup>Optional</sup> <a name="remediationTokenGenerationEnabledInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput"></a>

```java
public java.lang.Object getRemediationTokenGenerationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accessDeniedPageUri`<sup>Required</sup> <a name="accessDeniedPageUri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri"></a>

```java
public java.lang.String getAccessDeniedPageUri();
```

- *Type:* java.lang.String

---

##### `generateTroubleshootingUri`<sup>Required</sup> <a name="generateTroubleshootingUri" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri"></a>

```java
public java.lang.Object getGenerateTroubleshootingUri();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `remediationTokenGenerationEnabled`<sup>Required</sup> <a name="remediationTokenGenerationEnabled" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled"></a>

```java
public java.lang.Object getRemediationTokenGenerationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue"></a>

```java
public IapSettingsApplicationSettingsAccessDeniedPageSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---


### IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference <a name="IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference;

new IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials">resetOutputCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetOutputCredentials` <a name="resetOutputCredentials" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials"></a>

```java
public void resetOutputCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput">outputCredentialsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials">outputCredentials</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `outputCredentialsInput`<sup>Optional</sup> <a name="outputCredentialsInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput"></a>

```java
public java.util.List<java.lang.String> getOutputCredentialsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `outputCredentials`<sup>Required</sup> <a name="outputCredentials" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials"></a>

```java
public java.util.List<java.lang.String> getOutputCredentials();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue"></a>

```java
public IapSettingsApplicationSettingsAttributePropagationSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a>

---


### IapSettingsApplicationSettingsCsmSettingsOutputReference <a name="IapSettingsApplicationSettingsCsmSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsApplicationSettingsCsmSettingsOutputReference;

new IapSettingsApplicationSettingsCsmSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud">resetRctokenAud</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRctokenAud` <a name="resetRctokenAud" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud"></a>

```java
public void resetRctokenAud()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput">rctokenAudInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud">rctokenAud</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rctokenAudInput`<sup>Optional</sup> <a name="rctokenAudInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput"></a>

```java
public java.lang.String getRctokenAudInput();
```

- *Type:* java.lang.String

---

##### `rctokenAud`<sup>Required</sup> <a name="rctokenAud" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud"></a>

```java
public java.lang.String getRctokenAud();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue"></a>

```java
public IapSettingsApplicationSettingsCsmSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a>

---


### IapSettingsApplicationSettingsOutputReference <a name="IapSettingsApplicationSettingsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsApplicationSettingsOutputReference;

new IapSettingsApplicationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings">putAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings">putAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putCsmSettings">putCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings">resetAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings">resetAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetCookieDomain">resetCookieDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetCsmSettings">resetCsmSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessDeniedPageSettings` <a name="putAccessDeniedPageSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings"></a>

```java
public void putAccessDeniedPageSettings(IapSettingsApplicationSettingsAccessDeniedPageSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `putAttributePropagationSettings` <a name="putAttributePropagationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings"></a>

```java
public void putAttributePropagationSettings(IapSettingsApplicationSettingsAttributePropagationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `putCsmSettings` <a name="putCsmSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putCsmSettings"></a>

```java
public void putCsmSettings(IapSettingsApplicationSettingsCsmSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.putCsmSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a>

---

##### `resetAccessDeniedPageSettings` <a name="resetAccessDeniedPageSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings"></a>

```java
public void resetAccessDeniedPageSettings()
```

##### `resetAttributePropagationSettings` <a name="resetAttributePropagationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings"></a>

```java
public void resetAttributePropagationSettings()
```

##### `resetCookieDomain` <a name="resetCookieDomain" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetCookieDomain"></a>

```java
public void resetCookieDomain()
```

##### `resetCsmSettings` <a name="resetCsmSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.resetCsmSettings"></a>

```java
public void resetCsmSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings">accessDeniedPageSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings">attributePropagationSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.csmSettings">csmSettings</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference">IapSettingsApplicationSettingsCsmSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput">accessDeniedPageSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput">attributePropagationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.cookieDomainInput">cookieDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.csmSettingsInput">csmSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.cookieDomain">cookieDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessDeniedPageSettings`<sup>Required</sup> <a name="accessDeniedPageSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings"></a>

```java
public IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference getAccessDeniedPageSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">IapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a>

---

##### `attributePropagationSettings`<sup>Required</sup> <a name="attributePropagationSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings"></a>

```java
public IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference getAttributePropagationSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">IapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a>

---

##### `csmSettings`<sup>Required</sup> <a name="csmSettings" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.csmSettings"></a>

```java
public IapSettingsApplicationSettingsCsmSettingsOutputReference getCsmSettings();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettingsOutputReference">IapSettingsApplicationSettingsCsmSettingsOutputReference</a>

---

##### `accessDeniedPageSettingsInput`<sup>Optional</sup> <a name="accessDeniedPageSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput"></a>

```java
public IapSettingsApplicationSettingsAccessDeniedPageSettings getAccessDeniedPageSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAccessDeniedPageSettings">IapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `attributePropagationSettingsInput`<sup>Optional</sup> <a name="attributePropagationSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput"></a>

```java
public IapSettingsApplicationSettingsAttributePropagationSettings getAttributePropagationSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsAttributePropagationSettings">IapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `cookieDomainInput`<sup>Optional</sup> <a name="cookieDomainInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.cookieDomainInput"></a>

```java
public java.lang.String getCookieDomainInput();
```

- *Type:* java.lang.String

---

##### `csmSettingsInput`<sup>Optional</sup> <a name="csmSettingsInput" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.csmSettingsInput"></a>

```java
public IapSettingsApplicationSettingsCsmSettings getCsmSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsCsmSettings">IapSettingsApplicationSettingsCsmSettings</a>

---

##### `cookieDomain`<sup>Required</sup> <a name="cookieDomain" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.cookieDomain"></a>

```java
public java.lang.String getCookieDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsApplicationSettingsOutputReference.property.internalValue"></a>

```java
public IapSettingsApplicationSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.iapSettings.IapSettingsApplicationSettings">IapSettingsApplicationSettings</a>

---


### IapSettingsTimeoutsOutputReference <a name="IapSettingsTimeoutsOutputReference" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.iap_settings.IapSettingsTimeoutsOutputReference;

new IapSettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iapSettings.IapSettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.iapSettings.IapSettingsTimeouts">IapSettingsTimeouts</a>

---



