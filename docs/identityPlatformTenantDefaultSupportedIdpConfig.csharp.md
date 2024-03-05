# `identityPlatformTenantDefaultSupportedIdpConfig` Submodule <a name="`identityPlatformTenantDefaultSupportedIdpConfig` Submodule" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformTenantDefaultSupportedIdpConfig <a name="IdentityPlatformTenantDefaultSupportedIdpConfig" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config google_identity_platform_tenant_default_supported_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformTenantDefaultSupportedIdpConfig(Construct Scope, string Id, IdentityPlatformTenantDefaultSupportedIdpConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig">IdentityPlatformTenantDefaultSupportedIdpConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig">IdentityPlatformTenantDefaultSupportedIdpConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityPlatformTenantDefaultSupportedIdpConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IdentityPlatformTenantDefaultSupportedIdpConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IdentityPlatformTenantDefaultSupportedIdpConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IdentityPlatformTenantDefaultSupportedIdpConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IdentityPlatformTenantDefaultSupportedIdpConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityPlatformTenantDefaultSupportedIdpConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityPlatformTenantDefaultSupportedIdpConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityPlatformTenantDefaultSupportedIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPlatformTenantDefaultSupportedIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference">IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idpIdInput">IdpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tenantInput">TenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idpId">IdpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tenant">Tenant</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.timeouts"></a>

```csharp
public IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference">IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpIdInput`<sup>Optional</sup> <a name="IdpIdInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idpIdInput"></a>

```csharp
public string IdpIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tenantInput"></a>

```csharp
public string TenantInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idpId"></a>

```csharp
public string IdpId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tenant"></a>

```csharp
public string Tenant { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformTenantDefaultSupportedIdpConfigConfig <a name="IdentityPlatformTenantDefaultSupportedIdpConfigConfig" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformTenantDefaultSupportedIdpConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClientId,
    string ClientSecret,
    string IdpId,
    string Tenant,
    object Enabled = null,
    string Id = null,
    string Project = null,
    IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientId">ClientId</a></code> | <code>string</code> | OAuth client ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | OAuth client secret. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.idpId">IdpId</a></code> | <code>string</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.tenant">Tenant</a></code> | <code>string</code> | The name of the tenant where this DefaultSupportedIdpConfig resource exists. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.enabled">Enabled</a></code> | <code>object</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#id IdentityPlatformTenantDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#project IdentityPlatformTenantDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#client_id IdentityPlatformTenantDefaultSupportedIdpConfig#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#client_secret IdentityPlatformTenantDefaultSupportedIdpConfig#client_secret}

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.idpId"></a>

```csharp
public string IdpId { get; set; }
```

- *Type:* string

ID of the IDP. Possible values include:.

* 'apple.com'
* 'facebook.com'
* 'gc.apple.com'
* 'github.com'
* 'google.com'
* 'linkedin.com'
* 'microsoft.com'
* 'playgames.google.com'
* 'twitter.com'
* 'yahoo.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#idp_id IdentityPlatformTenantDefaultSupportedIdpConfig#idp_id}

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.tenant"></a>

```csharp
public string Tenant { get; set; }
```

- *Type:* string

The name of the tenant where this DefaultSupportedIdpConfig resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#tenant IdentityPlatformTenantDefaultSupportedIdpConfig#tenant}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#enabled IdentityPlatformTenantDefaultSupportedIdpConfig#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#id IdentityPlatformTenantDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#project IdentityPlatformTenantDefaultSupportedIdpConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.timeouts"></a>

```csharp
public IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#timeouts IdentityPlatformTenantDefaultSupportedIdpConfig#timeouts}

---

### IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts <a name="IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#create IdentityPlatformTenantDefaultSupportedIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#delete IdentityPlatformTenantDefaultSupportedIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#update IdentityPlatformTenantDefaultSupportedIdpConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#create IdentityPlatformTenantDefaultSupportedIdpConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#delete IdentityPlatformTenantDefaultSupportedIdpConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/identity_platform_tenant_default_supported_idp_config#update IdentityPlatformTenantDefaultSupportedIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference <a name="IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



