# `accessContextManagerGcpUserAccessBinding` Submodule <a name="`accessContextManagerGcpUserAccessBinding` Submodule" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerGcpUserAccessBinding <a name="AccessContextManagerGcpUserAccessBinding" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding google_access_context_manager_gcp_user_access_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBinding;

AccessContextManagerGcpUserAccessBinding.Builder.create(Construct scope, java.lang.String id)
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
    .groupKey(java.lang.String)
    .organizationId(java.lang.String)
//  .accessLevels(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .scopedAccessSettings(IResolvable)
//  .scopedAccessSettings(java.util.List<AccessContextManagerGcpUserAccessBindingScopedAccessSettings>)
//  .sessionSettings(AccessContextManagerGcpUserAccessBindingSessionSettings)
//  .timeouts(AccessContextManagerGcpUserAccessBindingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.groupKey">groupKey</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.organizationId">organizationId</a></code> | <code>java.lang.String</code> | Required. ID of the parent organization. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#id AccessContextManagerGcpUserAccessBinding#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.scopedAccessSettings">scopedAccessSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettings</a>></code> | scoped_access_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.sessionSettings">sessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | session_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupKey`<sup>Required</sup> <a name="groupKey" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.groupKey"></a>

- *Type:* java.lang.String

Required.

Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#group_key AccessContextManagerGcpUserAccessBinding#group_key}

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.organizationId"></a>

- *Type:* java.lang.String

Required. ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#organization_id AccessContextManagerGcpUserAccessBinding#organization_id}

---

##### `accessLevels`<sup>Optional</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.accessLevels"></a>

- *Type:* java.util.List<java.lang.String>

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#id AccessContextManagerGcpUserAccessBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scopedAccessSettings`<sup>Optional</sup> <a name="scopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.scopedAccessSettings"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettings</a>>

scoped_access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#scoped_access_settings AccessContextManagerGcpUserAccessBinding#scoped_access_settings}

---

##### `sessionSettings`<sup>Optional</sup> <a name="sessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.sessionSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

session_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#session_settings AccessContextManagerGcpUserAccessBinding#session_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#timeouts AccessContextManagerGcpUserAccessBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putScopedAccessSettings">putScopedAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putSessionSettings">putSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetAccessLevels">resetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetScopedAccessSettings">resetScopedAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetSessionSettings">resetSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScopedAccessSettings` <a name="putScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putScopedAccessSettings"></a>

```java
public void putScopedAccessSettings(IResolvable OR java.util.List<AccessContextManagerGcpUserAccessBindingScopedAccessSettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putScopedAccessSettings.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettings</a>>

---

##### `putSessionSettings` <a name="putSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putSessionSettings"></a>

```java
public void putSessionSettings(AccessContextManagerGcpUserAccessBindingSessionSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putSessionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putTimeouts"></a>

```java
public void putTimeouts(AccessContextManagerGcpUserAccessBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

---

##### `resetAccessLevels` <a name="resetAccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetAccessLevels"></a>

```java
public void resetAccessLevels()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetId"></a>

```java
public void resetId()
```

##### `resetScopedAccessSettings` <a name="resetScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetScopedAccessSettings"></a>

```java
public void resetScopedAccessSettings()
```

##### `resetSessionSettings` <a name="resetSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetSessionSettings"></a>

```java
public void resetSessionSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBinding;

AccessContextManagerGcpUserAccessBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBinding;

AccessContextManagerGcpUserAccessBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBinding;

AccessContextManagerGcpUserAccessBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBinding;

AccessContextManagerGcpUserAccessBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccessContextManagerGcpUserAccessBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccessContextManagerGcpUserAccessBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccessContextManagerGcpUserAccessBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccessContextManagerGcpUserAccessBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerGcpUserAccessBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.scopedAccessSettings">scopedAccessSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.sessionSettings">sessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference">AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference">AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevelsInput">accessLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKeyInput">groupKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationIdInput">organizationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.scopedAccessSettingsInput">scopedAccessSettingsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettings</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.sessionSettingsInput">sessionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKey">groupKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scopedAccessSettings`<sup>Required</sup> <a name="scopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.scopedAccessSettings"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList getScopedAccessSettings();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList</a>

---

##### `sessionSettings`<sup>Required</sup> <a name="sessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.sessionSettings"></a>

```java
public AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference getSessionSettings();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference">AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeouts"></a>

```java
public AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference">AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference</a>

---

##### `accessLevelsInput`<sup>Optional</sup> <a name="accessLevelsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevelsInput"></a>

```java
public java.util.List<java.lang.String> getAccessLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupKeyInput`<sup>Optional</sup> <a name="groupKeyInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKeyInput"></a>

```java
public java.lang.String getGroupKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationIdInput"></a>

```java
public java.lang.String getOrganizationIdInput();
```

- *Type:* java.lang.String

---

##### `scopedAccessSettingsInput`<sup>Optional</sup> <a name="scopedAccessSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.scopedAccessSettingsInput"></a>

```java
public java.lang.Object getScopedAccessSettingsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettings</a>>

---

##### `sessionSettingsInput`<sup>Optional</sup> <a name="sessionSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.sessionSettingsInput"></a>

```java
public AccessContextManagerGcpUserAccessBindingSessionSettings getSessionSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

---

##### `accessLevels`<sup>Required</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupKey`<sup>Required</sup> <a name="groupKey" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.groupKey"></a>

```java
public java.lang.String getGroupKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerGcpUserAccessBindingConfig <a name="AccessContextManagerGcpUserAccessBindingConfig" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingConfig;

AccessContextManagerGcpUserAccessBindingConfig.builder()
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
    .groupKey(java.lang.String)
    .organizationId(java.lang.String)
//  .accessLevels(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .scopedAccessSettings(IResolvable)
//  .scopedAccessSettings(java.util.List<AccessContextManagerGcpUserAccessBindingScopedAccessSettings>)
//  .sessionSettings(AccessContextManagerGcpUserAccessBindingSessionSettings)
//  .timeouts(AccessContextManagerGcpUserAccessBindingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.groupKey">groupKey</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | Required. ID of the parent organization. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#id AccessContextManagerGcpUserAccessBinding#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.scopedAccessSettings">scopedAccessSettings</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettings</a>></code> | scoped_access_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.sessionSettings">sessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | session_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupKey`<sup>Required</sup> <a name="groupKey" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.groupKey"></a>

```java
public java.lang.String getGroupKey();
```

- *Type:* java.lang.String

Required.

Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#group_key AccessContextManagerGcpUserAccessBinding#group_key}

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

Required. ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#organization_id AccessContextManagerGcpUserAccessBinding#organization_id}

---

##### `accessLevels`<sup>Optional</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#id AccessContextManagerGcpUserAccessBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scopedAccessSettings`<sup>Optional</sup> <a name="scopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.scopedAccessSettings"></a>

```java
public java.lang.Object getScopedAccessSettings();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettings</a>>

scoped_access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#scoped_access_settings AccessContextManagerGcpUserAccessBinding#scoped_access_settings}

---

##### `sessionSettings`<sup>Optional</sup> <a name="sessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.sessionSettings"></a>

```java
public AccessContextManagerGcpUserAccessBindingSessionSettings getSessionSettings();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

session_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#session_settings AccessContextManagerGcpUserAccessBinding#session_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingConfig.property.timeouts"></a>

```java
public AccessContextManagerGcpUserAccessBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#timeouts AccessContextManagerGcpUserAccessBinding#timeouts}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettings <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings;

AccessContextManagerGcpUserAccessBindingScopedAccessSettings.builder()
//  .activeSettings(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings)
//  .dryRunSettings(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings)
//  .scope(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.activeSettings">activeSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | active_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.dryRunSettings">dryRunSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | dry_run_settings block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | scope block. |

---

##### `activeSettings`<sup>Optional</sup> <a name="activeSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.activeSettings"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings getActiveSettings();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

active_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#active_settings AccessContextManagerGcpUserAccessBinding#active_settings}

---

##### `dryRunSettings`<sup>Optional</sup> <a name="dryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.dryRunSettings"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings getDryRunSettings();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

dry_run_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#dry_run_settings AccessContextManagerGcpUserAccessBinding#dry_run_settings}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings.property.scope"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope getScope();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#scope AccessContextManagerGcpUserAccessBinding#scope}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings;

AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.builder()
//  .accessLevels(java.util.List<java.lang.String>)
//  .sessionSettings(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.sessionSettings">sessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | session_settings block. |

---

##### `accessLevels`<sup>Optional</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}

---

##### `sessionSettings`<sup>Optional</sup> <a name="sessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings.property.sessionSettings"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings getSessionSettings();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

session_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#session_settings AccessContextManagerGcpUserAccessBinding#session_settings}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings;

AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.builder()
//  .maxInactivity(java.lang.String)
//  .sessionLength(java.lang.String)
//  .sessionLengthEnabled(java.lang.Boolean)
//  .sessionLengthEnabled(IResolvable)
//  .sessionReauthMethod(java.lang.String)
//  .useOidcMaxAge(java.lang.Boolean)
//  .useOidcMaxAge(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.maxInactivity">maxInactivity</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLength">sessionLength</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLengthEnabled">sessionLengthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionReauthMethod">sessionReauthMethod</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.useOidcMaxAge">useOidcMaxAge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |

---

##### `maxInactivity`<sup>Optional</sup> <a name="maxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.maxInactivity"></a>

```java
public java.lang.String getMaxInactivity();
```

- *Type:* java.lang.String

Optional.

How long a user is allowed to take between actions before a new access token must be issued. Only set for Google Cloud apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#max_inactivity AccessContextManagerGcpUserAccessBinding#max_inactivity}

---

##### `sessionLength`<sup>Optional</sup> <a name="sessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLength"></a>

```java
public java.lang.String getSessionLength();
```

- *Type:* java.lang.String

Optional.

The session length. Setting this field to zero is equal to disabling session. Also can set infinite session by flipping the enabled bit to false below. If useOidcMaxAge is true, for OIDC apps, the session length will be the minimum of this field and OIDC max_age param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length AccessContextManagerGcpUserAccessBinding#session_length}

---

##### `sessionLengthEnabled`<sup>Optional</sup> <a name="sessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionLengthEnabled"></a>

```java
public java.lang.Object getSessionLengthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

This field enables or disables Google Cloud session length. When false, all fields set above will be disregarded and the session length is basically infinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length_enabled AccessContextManagerGcpUserAccessBinding#session_length_enabled}

---

##### `sessionReauthMethod`<sup>Optional</sup> <a name="sessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.sessionReauthMethod"></a>

```java
public java.lang.String getSessionReauthMethod();
```

- *Type:* java.lang.String

Optional.

The session challenges proposed to users when the Google Cloud session length is up. Possible values: ["LOGIN", "SECURITY_KEY", "PASSWORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#session_reauth_method AccessContextManagerGcpUserAccessBinding#session_reauth_method}

---

##### `useOidcMaxAge`<sup>Optional</sup> <a name="useOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings.property.useOidcMaxAge"></a>

```java
public java.lang.Object getUseOidcMaxAge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

Only useful for OIDC apps. When false, the OIDC max_age param, if passed in the authentication request will be ignored. When true, the re-auth period will be the minimum of the sessionLength field and the max_age OIDC param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#use_oidc_max_age AccessContextManagerGcpUserAccessBinding#use_oidc_max_age}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings;

AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.builder()
//  .accessLevels(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |

---

##### `accessLevels`<sup>Optional</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope;

AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.builder()
//  .clientScope(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.property.clientScope">clientScope</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | client_scope block. |

---

##### `clientScope`<sup>Optional</sup> <a name="clientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope.property.clientScope"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope getClientScope();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

client_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#client_scope AccessContextManagerGcpUserAccessBinding#client_scope}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope;

AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.builder()
//  .restrictedClientApplication(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.property.restrictedClientApplication">restrictedClientApplication</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | restricted_client_application block. |

---

##### `restrictedClientApplication`<sup>Optional</sup> <a name="restrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope.property.restrictedClientApplication"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication getRestrictedClientApplication();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

restricted_client_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#restricted_client_application AccessContextManagerGcpUserAccessBinding#restricted_client_application}

---

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication;

AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.builder()
//  .clientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The OAuth client ID of the application. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The OAuth client ID of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#client_id AccessContextManagerGcpUserAccessBinding#client_id}

---

### AccessContextManagerGcpUserAccessBindingSessionSettings <a name="AccessContextManagerGcpUserAccessBindingSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingSessionSettings;

AccessContextManagerGcpUserAccessBindingSessionSettings.builder()
//  .maxInactivity(java.lang.String)
//  .sessionLength(java.lang.String)
//  .sessionLengthEnabled(java.lang.Boolean)
//  .sessionLengthEnabled(IResolvable)
//  .sessionReauthMethod(java.lang.String)
//  .useOidcMaxAge(java.lang.Boolean)
//  .useOidcMaxAge(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.maxInactivity">maxInactivity</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLength">sessionLength</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLengthEnabled">sessionLengthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionReauthMethod">sessionReauthMethod</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.useOidcMaxAge">useOidcMaxAge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |

---

##### `maxInactivity`<sup>Optional</sup> <a name="maxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.maxInactivity"></a>

```java
public java.lang.String getMaxInactivity();
```

- *Type:* java.lang.String

Optional.

How long a user is allowed to take between actions before a new access token must be issued. Only set for Google Cloud apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#max_inactivity AccessContextManagerGcpUserAccessBinding#max_inactivity}

---

##### `sessionLength`<sup>Optional</sup> <a name="sessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLength"></a>

```java
public java.lang.String getSessionLength();
```

- *Type:* java.lang.String

Optional.

The session length. Setting this field to zero is equal to disabling session. Also can set infinite session by flipping the enabled bit to false below. If useOidcMaxAge is true, for OIDC apps, the session length will be the minimum of this field and OIDC max_age param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length AccessContextManagerGcpUserAccessBinding#session_length}

---

##### `sessionLengthEnabled`<sup>Optional</sup> <a name="sessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionLengthEnabled"></a>

```java
public java.lang.Object getSessionLengthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

This field enables or disables Google Cloud session length. When false, all fields set above will be disregarded and the session length is basically infinite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#session_length_enabled AccessContextManagerGcpUserAccessBinding#session_length_enabled}

---

##### `sessionReauthMethod`<sup>Optional</sup> <a name="sessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.sessionReauthMethod"></a>

```java
public java.lang.String getSessionReauthMethod();
```

- *Type:* java.lang.String

Optional.

The session challenges proposed to users when the Google Cloud session length is up. Possible values: ["LOGIN", "SECURITY_KEY", "PASSWORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#session_reauth_method AccessContextManagerGcpUserAccessBinding#session_reauth_method}

---

##### `useOidcMaxAge`<sup>Optional</sup> <a name="useOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings.property.useOidcMaxAge"></a>

```java
public java.lang.Object getUseOidcMaxAge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

Only useful for OIDC apps. When false, the OIDC max_age param, if passed in the authentication request will be ignored. When true, the re-auth period will be the minimum of the sessionLength field and the max_age OIDC param.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#use_oidc_max_age AccessContextManagerGcpUserAccessBinding#use_oidc_max_age}

---

### AccessContextManagerGcpUserAccessBindingTimeouts <a name="AccessContextManagerGcpUserAccessBindingTimeouts" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingTimeouts;

AccessContextManagerGcpUserAccessBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#create AccessContextManagerGcpUserAccessBinding#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#delete AccessContextManagerGcpUserAccessBinding#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#update AccessContextManagerGcpUserAccessBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#create AccessContextManagerGcpUserAccessBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#delete AccessContextManagerGcpUserAccessBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/access_context_manager_gcp_user_access_binding#update AccessContextManagerGcpUserAccessBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings">putSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetAccessLevels">resetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetSessionSettings">resetSessionSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionSettings` <a name="putSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings"></a>

```java
public void putSessionSettings(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.putSessionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---

##### `resetAccessLevels` <a name="resetAccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetAccessLevels"></a>

```java
public void resetAccessLevels()
```

##### `resetSessionSettings` <a name="resetSessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.resetSessionSettings"></a>

```java
public void resetSessionSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettings">sessionSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevelsInput">accessLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettingsInput">sessionSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sessionSettings`<sup>Required</sup> <a name="sessionSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettings"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference getSessionSettings();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference</a>

---

##### `accessLevelsInput`<sup>Optional</sup> <a name="accessLevelsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevelsInput"></a>

```java
public java.util.List<java.lang.String> getAccessLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sessionSettingsInput`<sup>Optional</sup> <a name="sessionSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.sessionSettingsInput"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings getSessionSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---

##### `accessLevels`<sup>Required</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference.property.internalValue"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetMaxInactivity">resetMaxInactivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLength">resetSessionLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLengthEnabled">resetSessionLengthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionReauthMethod">resetSessionReauthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetUseOidcMaxAge">resetUseOidcMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxInactivity` <a name="resetMaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetMaxInactivity"></a>

```java
public void resetMaxInactivity()
```

##### `resetSessionLength` <a name="resetSessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLength"></a>

```java
public void resetSessionLength()
```

##### `resetSessionLengthEnabled` <a name="resetSessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionLengthEnabled"></a>

```java
public void resetSessionLengthEnabled()
```

##### `resetSessionReauthMethod` <a name="resetSessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetSessionReauthMethod"></a>

```java
public void resetSessionReauthMethod()
```

##### `resetUseOidcMaxAge` <a name="resetUseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.resetUseOidcMaxAge"></a>

```java
public void resetUseOidcMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivityInput">maxInactivityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabledInput">sessionLengthEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthInput">sessionLengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethodInput">sessionReauthMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAgeInput">useOidcMaxAgeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivity">maxInactivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLength">sessionLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabled">sessionLengthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethod">sessionReauthMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAge">useOidcMaxAge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInactivityInput`<sup>Optional</sup> <a name="maxInactivityInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivityInput"></a>

```java
public java.lang.String getMaxInactivityInput();
```

- *Type:* java.lang.String

---

##### `sessionLengthEnabledInput`<sup>Optional</sup> <a name="sessionLengthEnabledInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabledInput"></a>

```java
public java.lang.Object getSessionLengthEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sessionLengthInput`<sup>Optional</sup> <a name="sessionLengthInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthInput"></a>

```java
public java.lang.String getSessionLengthInput();
```

- *Type:* java.lang.String

---

##### `sessionReauthMethodInput`<sup>Optional</sup> <a name="sessionReauthMethodInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethodInput"></a>

```java
public java.lang.String getSessionReauthMethodInput();
```

- *Type:* java.lang.String

---

##### `useOidcMaxAgeInput`<sup>Optional</sup> <a name="useOidcMaxAgeInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAgeInput"></a>

```java
public java.lang.Object getUseOidcMaxAgeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxInactivity`<sup>Required</sup> <a name="maxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.maxInactivity"></a>

```java
public java.lang.String getMaxInactivity();
```

- *Type:* java.lang.String

---

##### `sessionLength`<sup>Required</sup> <a name="sessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLength"></a>

```java
public java.lang.String getSessionLength();
```

- *Type:* java.lang.String

---

##### `sessionLengthEnabled`<sup>Required</sup> <a name="sessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionLengthEnabled"></a>

```java
public java.lang.Object getSessionLengthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sessionReauthMethod`<sup>Required</sup> <a name="sessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.sessionReauthMethod"></a>

```java
public java.lang.String getSessionReauthMethod();
```

- *Type:* java.lang.String

---

##### `useOidcMaxAge`<sup>Required</sup> <a name="useOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.useOidcMaxAge"></a>

```java
public java.lang.Object getUseOidcMaxAge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettingsOutputReference.property.internalValue"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsSessionSettings</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resetAccessLevels">resetAccessLevels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevels` <a name="resetAccessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.resetAccessLevels"></a>

```java
public void resetAccessLevels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevelsInput">accessLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevelsInput`<sup>Optional</sup> <a name="accessLevelsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevelsInput"></a>

```java
public java.util.List<java.lang.String> getAccessLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessLevels`<sup>Required</sup> <a name="accessLevels" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference.property.internalValue"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettings</a>>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings">putActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings">putDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetActiveSettings">resetActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetDryRunSettings">resetDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveSettings` <a name="putActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings"></a>

```java
public void putActiveSettings(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putActiveSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---

##### `putDryRunSettings` <a name="putDryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings"></a>

```java
public void putDryRunSettings(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putDryRunSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---

##### `putScope` <a name="putScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope"></a>

```java
public void putScope(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---

##### `resetActiveSettings` <a name="resetActiveSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetActiveSettings"></a>

```java
public void resetActiveSettings()
```

##### `resetDryRunSettings` <a name="resetDryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetDryRunSettings"></a>

```java
public void resetDryRunSettings()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettings">activeSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettings">dryRunSettings</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettingsInput">activeSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettingsInput">dryRunSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeSettings`<sup>Required</sup> <a name="activeSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettings"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference getActiveSettings();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettingsOutputReference</a>

---

##### `dryRunSettings`<sup>Required</sup> <a name="dryRunSettings" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettings"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference getDryRunSettings();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettingsOutputReference</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scope"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference getScope();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference</a>

---

##### `activeSettingsInput`<sup>Optional</sup> <a name="activeSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.activeSettingsInput"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings getActiveSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsActiveSettings</a>

---

##### `dryRunSettingsInput`<sup>Optional</sup> <a name="dryRunSettingsInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.dryRunSettingsInput"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings getDryRunSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsDryRunSettings</a>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.scopeInput"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope getScopeInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettings">AccessContextManagerGcpUserAccessBindingScopedAccessSettings</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication">putRestrictedClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resetRestrictedClientApplication">resetRestrictedClientApplication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRestrictedClientApplication` <a name="putRestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication"></a>

```java
public void putRestrictedClientApplication(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.putRestrictedClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---

##### `resetRestrictedClientApplication` <a name="resetRestrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.resetRestrictedClientApplication"></a>

```java
public void resetRestrictedClientApplication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplication">restrictedClientApplication</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplicationInput">restrictedClientApplicationInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `restrictedClientApplication`<sup>Required</sup> <a name="restrictedClientApplication" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplication"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference getRestrictedClientApplication();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference</a>

---

##### `restrictedClientApplicationInput`<sup>Optional</sup> <a name="restrictedClientApplicationInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.restrictedClientApplicationInput"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication getRestrictedClientApplicationInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference.property.internalValue"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetClientId">resetClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.resetClientId"></a>

```java
public void resetClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplicationOutputReference.property.internalValue"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeRestrictedClientApplication</a>

---


### AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference <a name="AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference;

new AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope">putClientScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resetClientScope">resetClientScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientScope` <a name="putClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope"></a>

```java
public void putClientScope(AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.putClientScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---

##### `resetClientScope` <a name="resetClientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.resetClientScope"></a>

```java
public void resetClientScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScope">clientScope</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScopeInput">clientScopeInput</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientScope`<sup>Required</sup> <a name="clientScope" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScope"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference getClientScope();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScopeOutputReference</a>

---

##### `clientScopeInput`<sup>Optional</sup> <a name="clientScopeInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.clientScopeInput"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope getClientScopeInput();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeClientScope</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScopeOutputReference.property.internalValue"></a>

```java
public AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope">AccessContextManagerGcpUserAccessBindingScopedAccessSettingsScope</a>

---


### AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference <a name="AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference;

new AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetMaxInactivity">resetMaxInactivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLength">resetSessionLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLengthEnabled">resetSessionLengthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionReauthMethod">resetSessionReauthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetUseOidcMaxAge">resetUseOidcMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxInactivity` <a name="resetMaxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetMaxInactivity"></a>

```java
public void resetMaxInactivity()
```

##### `resetSessionLength` <a name="resetSessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLength"></a>

```java
public void resetSessionLength()
```

##### `resetSessionLengthEnabled` <a name="resetSessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionLengthEnabled"></a>

```java
public void resetSessionLengthEnabled()
```

##### `resetSessionReauthMethod` <a name="resetSessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetSessionReauthMethod"></a>

```java
public void resetSessionReauthMethod()
```

##### `resetUseOidcMaxAge` <a name="resetUseOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.resetUseOidcMaxAge"></a>

```java
public void resetUseOidcMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivityInput">maxInactivityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabledInput">sessionLengthEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthInput">sessionLengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethodInput">sessionReauthMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAgeInput">useOidcMaxAgeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivity">maxInactivity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLength">sessionLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabled">sessionLengthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethod">sessionReauthMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAge">useOidcMaxAge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInactivityInput`<sup>Optional</sup> <a name="maxInactivityInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivityInput"></a>

```java
public java.lang.String getMaxInactivityInput();
```

- *Type:* java.lang.String

---

##### `sessionLengthEnabledInput`<sup>Optional</sup> <a name="sessionLengthEnabledInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabledInput"></a>

```java
public java.lang.Object getSessionLengthEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sessionLengthInput`<sup>Optional</sup> <a name="sessionLengthInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthInput"></a>

```java
public java.lang.String getSessionLengthInput();
```

- *Type:* java.lang.String

---

##### `sessionReauthMethodInput`<sup>Optional</sup> <a name="sessionReauthMethodInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethodInput"></a>

```java
public java.lang.String getSessionReauthMethodInput();
```

- *Type:* java.lang.String

---

##### `useOidcMaxAgeInput`<sup>Optional</sup> <a name="useOidcMaxAgeInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAgeInput"></a>

```java
public java.lang.Object getUseOidcMaxAgeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxInactivity`<sup>Required</sup> <a name="maxInactivity" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.maxInactivity"></a>

```java
public java.lang.String getMaxInactivity();
```

- *Type:* java.lang.String

---

##### `sessionLength`<sup>Required</sup> <a name="sessionLength" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLength"></a>

```java
public java.lang.String getSessionLength();
```

- *Type:* java.lang.String

---

##### `sessionLengthEnabled`<sup>Required</sup> <a name="sessionLengthEnabled" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionLengthEnabled"></a>

```java
public java.lang.Object getSessionLengthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sessionReauthMethod`<sup>Required</sup> <a name="sessionReauthMethod" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.sessionReauthMethod"></a>

```java
public java.lang.String getSessionReauthMethod();
```

- *Type:* java.lang.String

---

##### `useOidcMaxAge`<sup>Required</sup> <a name="useOidcMaxAge" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.useOidcMaxAge"></a>

```java
public java.lang.Object getUseOidcMaxAge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettingsOutputReference.property.internalValue"></a>

```java
public AccessContextManagerGcpUserAccessBindingSessionSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingSessionSettings">AccessContextManagerGcpUserAccessBindingSessionSettings</a>

---


### AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference <a name="AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.access_context_manager_gcp_user_access_binding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference;

new AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.accessContextManagerGcpUserAccessBinding.AccessContextManagerGcpUserAccessBindingTimeouts">AccessContextManagerGcpUserAccessBindingTimeouts</a>

---



