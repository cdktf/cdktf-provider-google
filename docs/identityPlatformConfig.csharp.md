# `identityPlatformConfig` Submodule <a name="`identityPlatformConfig` Submodule" id="@cdktf/provider-google.identityPlatformConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformConfig <a name="IdentityPlatformConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config google_identity_platform_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfig(Construct Scope, string Id, IdentityPlatformConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig">IdentityPlatformConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig">IdentityPlatformConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putBlockingFunctions">PutBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putClient">PutClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMfa">PutMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMonitoring">PutMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMultiTenant">PutMultiTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSignIn">PutSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSmsRegionConfig">PutSmsRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetAuthorizedDomains">ResetAuthorizedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetAutodeleteAnonymousUsers">ResetAutodeleteAnonymousUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetBlockingFunctions">ResetBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetClient">ResetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMfa">ResetMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMultiTenant">ResetMultiTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetSignIn">ResetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetSmsRegionConfig">ResetSmsRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlockingFunctions` <a name="PutBlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putBlockingFunctions"></a>

```csharp
private void PutBlockingFunctions(IdentityPlatformConfigBlockingFunctions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putBlockingFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

---

##### `PutClient` <a name="PutClient" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putClient"></a>

```csharp
private void PutClient(IdentityPlatformConfigClient Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putClient.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

---

##### `PutMfa` <a name="PutMfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMfa"></a>

```csharp
private void PutMfa(IdentityPlatformConfigMfa Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMfa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

---

##### `PutMonitoring` <a name="PutMonitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMonitoring"></a>

```csharp
private void PutMonitoring(IdentityPlatformConfigMonitoring Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

---

##### `PutMultiTenant` <a name="PutMultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMultiTenant"></a>

```csharp
private void PutMultiTenant(IdentityPlatformConfigMultiTenant Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMultiTenant.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

---

##### `PutQuota` <a name="PutQuota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putQuota"></a>

```csharp
private void PutQuota(IdentityPlatformConfigQuota Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

---

##### `PutSignIn` <a name="PutSignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSignIn"></a>

```csharp
private void PutSignIn(IdentityPlatformConfigSignIn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

---

##### `PutSmsRegionConfig` <a name="PutSmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSmsRegionConfig"></a>

```csharp
private void PutSmsRegionConfig(IdentityPlatformConfigSmsRegionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSmsRegionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityPlatformConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a>

---

##### `ResetAuthorizedDomains` <a name="ResetAuthorizedDomains" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetAuthorizedDomains"></a>

```csharp
private void ResetAuthorizedDomains()
```

##### `ResetAutodeleteAnonymousUsers` <a name="ResetAutodeleteAnonymousUsers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetAutodeleteAnonymousUsers"></a>

```csharp
private void ResetAutodeleteAnonymousUsers()
```

##### `ResetBlockingFunctions` <a name="ResetBlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetBlockingFunctions"></a>

```csharp
private void ResetBlockingFunctions()
```

##### `ResetClient` <a name="ResetClient" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetClient"></a>

```csharp
private void ResetClient()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMfa` <a name="ResetMfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMfa"></a>

```csharp
private void ResetMfa()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMonitoring"></a>

```csharp
private void ResetMonitoring()
```

##### `ResetMultiTenant` <a name="ResetMultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMultiTenant"></a>

```csharp
private void ResetMultiTenant()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetQuota"></a>

```csharp
private void ResetQuota()
```

##### `ResetSignIn` <a name="ResetSignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetSignIn"></a>

```csharp
private void ResetSignIn()
```

##### `ResetSmsRegionConfig` <a name="ResetSmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetSmsRegionConfig"></a>

```csharp
private void ResetSmsRegionConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityPlatformConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IdentityPlatformConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IdentityPlatformConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IdentityPlatformConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IdentityPlatformConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IdentityPlatformConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityPlatformConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityPlatformConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPlatformConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.blockingFunctions">BlockingFunctions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference">IdentityPlatformConfigBlockingFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.client">Client</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference">IdentityPlatformConfigClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.mfa">Mfa</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference">IdentityPlatformConfigMfaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference">IdentityPlatformConfigMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.multiTenant">MultiTenant</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference">IdentityPlatformConfigMultiTenantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference">IdentityPlatformConfigQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.signIn">SignIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference">IdentityPlatformConfigSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.smsRegionConfig">SmsRegionConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference">IdentityPlatformConfigSmsRegionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference">IdentityPlatformConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.authorizedDomainsInput">AuthorizedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.autodeleteAnonymousUsersInput">AutodeleteAnonymousUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.blockingFunctionsInput">BlockingFunctionsInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.clientInput">ClientInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.mfaInput">MfaInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.monitoringInput">MonitoringInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.multiTenantInput">MultiTenantInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.quotaInput">QuotaInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.signInInput">SignInInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.smsRegionConfigInput">SmsRegionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.authorizedDomains">AuthorizedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.autodeleteAnonymousUsers">AutodeleteAnonymousUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BlockingFunctions`<sup>Required</sup> <a name="BlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.blockingFunctions"></a>

```csharp
public IdentityPlatformConfigBlockingFunctionsOutputReference BlockingFunctions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference">IdentityPlatformConfigBlockingFunctionsOutputReference</a>

---

##### `Client`<sup>Required</sup> <a name="Client" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.client"></a>

```csharp
public IdentityPlatformConfigClientOutputReference Client { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference">IdentityPlatformConfigClientOutputReference</a>

---

##### `Mfa`<sup>Required</sup> <a name="Mfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.mfa"></a>

```csharp
public IdentityPlatformConfigMfaOutputReference Mfa { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference">IdentityPlatformConfigMfaOutputReference</a>

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.monitoring"></a>

```csharp
public IdentityPlatformConfigMonitoringOutputReference Monitoring { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference">IdentityPlatformConfigMonitoringOutputReference</a>

---

##### `MultiTenant`<sup>Required</sup> <a name="MultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.multiTenant"></a>

```csharp
public IdentityPlatformConfigMultiTenantOutputReference MultiTenant { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference">IdentityPlatformConfigMultiTenantOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.quota"></a>

```csharp
public IdentityPlatformConfigQuotaOutputReference Quota { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference">IdentityPlatformConfigQuotaOutputReference</a>

---

##### `SignIn`<sup>Required</sup> <a name="SignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.signIn"></a>

```csharp
public IdentityPlatformConfigSignInOutputReference SignIn { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference">IdentityPlatformConfigSignInOutputReference</a>

---

##### `SmsRegionConfig`<sup>Required</sup> <a name="SmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.smsRegionConfig"></a>

```csharp
public IdentityPlatformConfigSmsRegionConfigOutputReference SmsRegionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference">IdentityPlatformConfigSmsRegionConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.timeouts"></a>

```csharp
public IdentityPlatformConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference">IdentityPlatformConfigTimeoutsOutputReference</a>

---

##### `AuthorizedDomainsInput`<sup>Optional</sup> <a name="AuthorizedDomainsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.authorizedDomainsInput"></a>

```csharp
public string[] AuthorizedDomainsInput { get; }
```

- *Type:* string[]

---

##### `AutodeleteAnonymousUsersInput`<sup>Optional</sup> <a name="AutodeleteAnonymousUsersInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.autodeleteAnonymousUsersInput"></a>

```csharp
public object AutodeleteAnonymousUsersInput { get; }
```

- *Type:* object

---

##### `BlockingFunctionsInput`<sup>Optional</sup> <a name="BlockingFunctionsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.blockingFunctionsInput"></a>

```csharp
public IdentityPlatformConfigBlockingFunctions BlockingFunctionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

---

##### `ClientInput`<sup>Optional</sup> <a name="ClientInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.clientInput"></a>

```csharp
public IdentityPlatformConfigClient ClientInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MfaInput`<sup>Optional</sup> <a name="MfaInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.mfaInput"></a>

```csharp
public IdentityPlatformConfigMfa MfaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.monitoringInput"></a>

```csharp
public IdentityPlatformConfigMonitoring MonitoringInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

---

##### `MultiTenantInput`<sup>Optional</sup> <a name="MultiTenantInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.multiTenantInput"></a>

```csharp
public IdentityPlatformConfigMultiTenant MultiTenantInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.quotaInput"></a>

```csharp
public IdentityPlatformConfigQuota QuotaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

---

##### `SignInInput`<sup>Optional</sup> <a name="SignInInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.signInInput"></a>

```csharp
public IdentityPlatformConfigSignIn SignInInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

---

##### `SmsRegionConfigInput`<sup>Optional</sup> <a name="SmsRegionConfigInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.smsRegionConfigInput"></a>

```csharp
public IdentityPlatformConfigSmsRegionConfig SmsRegionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AuthorizedDomains`<sup>Required</sup> <a name="AuthorizedDomains" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.authorizedDomains"></a>

```csharp
public string[] AuthorizedDomains { get; }
```

- *Type:* string[]

---

##### `AutodeleteAnonymousUsers`<sup>Required</sup> <a name="AutodeleteAnonymousUsers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.autodeleteAnonymousUsers"></a>

```csharp
public object AutodeleteAnonymousUsers { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformConfigBlockingFunctions <a name="IdentityPlatformConfigBlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigBlockingFunctions {
    object Triggers,
    IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials ForwardInboundCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.property.triggers">Triggers</a></code> | <code>object</code> | triggers block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.property.forwardInboundCredentials">ForwardInboundCredentials</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | forward_inbound_credentials block. |

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.property.triggers"></a>

```csharp
public object Triggers { get; set; }
```

- *Type:* object

triggers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#triggers IdentityPlatformConfig#triggers}

---

##### `ForwardInboundCredentials`<sup>Optional</sup> <a name="ForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.property.forwardInboundCredentials"></a>

```csharp
public IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials ForwardInboundCredentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

forward_inbound_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#forward_inbound_credentials IdentityPlatformConfig#forward_inbound_credentials}

---

### IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials <a name="IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials {
    object AccessToken = null,
    object IdToken = null,
    object RefreshToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.accessToken">AccessToken</a></code> | <code>object</code> | Whether to pass the user's OAuth identity provider's access token. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.idToken">IdToken</a></code> | <code>object</code> | Whether to pass the user's OIDC identity provider's ID token. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.refreshToken">RefreshToken</a></code> | <code>object</code> | Whether to pass the user's OAuth identity provider's refresh token. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.accessToken"></a>

```csharp
public object AccessToken { get; set; }
```

- *Type:* object

Whether to pass the user's OAuth identity provider's access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#access_token IdentityPlatformConfig#access_token}

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.idToken"></a>

```csharp
public object IdToken { get; set; }
```

- *Type:* object

Whether to pass the user's OIDC identity provider's ID token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#id_token IdentityPlatformConfig#id_token}

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.refreshToken"></a>

```csharp
public object RefreshToken { get; set; }
```

- *Type:* object

Whether to pass the user's OAuth identity provider's refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#refresh_token IdentityPlatformConfig#refresh_token}

---

### IdentityPlatformConfigBlockingFunctionsTriggers <a name="IdentityPlatformConfigBlockingFunctionsTriggers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigBlockingFunctionsTriggers {
    string EventType,
    string FunctionUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.property.eventType">EventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#event_type IdentityPlatformConfig#event_type}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.property.functionUri">FunctionUri</a></code> | <code>string</code> | HTTP URI trigger for the Cloud Function. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#event_type IdentityPlatformConfig#event_type}.

---

##### `FunctionUri`<sup>Required</sup> <a name="FunctionUri" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.property.functionUri"></a>

```csharp
public string FunctionUri { get; set; }
```

- *Type:* string

HTTP URI trigger for the Cloud Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#function_uri IdentityPlatformConfig#function_uri}

---

### IdentityPlatformConfigClient <a name="IdentityPlatformConfigClient" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigClient {
    IdentityPlatformConfigClientPermissions Permissions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a></code> | permissions block. |

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient.property.permissions"></a>

```csharp
public IdentityPlatformConfigClientPermissions Permissions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#permissions IdentityPlatformConfig#permissions}

---

### IdentityPlatformConfigClientPermissions <a name="IdentityPlatformConfigClientPermissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigClientPermissions {
    object DisabledUserDeletion = null,
    object DisabledUserSignup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.property.disabledUserDeletion">DisabledUserDeletion</a></code> | <code>object</code> | When true, end users cannot delete their account on the associated project through any of our API methods. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.property.disabledUserSignup">DisabledUserSignup</a></code> | <code>object</code> | When true, end users cannot sign up for a new account on the associated project through any of our API methods. |

---

##### `DisabledUserDeletion`<sup>Optional</sup> <a name="DisabledUserDeletion" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.property.disabledUserDeletion"></a>

```csharp
public object DisabledUserDeletion { get; set; }
```

- *Type:* object

When true, end users cannot delete their account on the associated project through any of our API methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#disabled_user_deletion IdentityPlatformConfig#disabled_user_deletion}

---

##### `DisabledUserSignup`<sup>Optional</sup> <a name="DisabledUserSignup" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.property.disabledUserSignup"></a>

```csharp
public object DisabledUserSignup { get; set; }
```

- *Type:* object

When true, end users cannot sign up for a new account on the associated project through any of our API methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#disabled_user_signup IdentityPlatformConfig#disabled_user_signup}

---

### IdentityPlatformConfigConfig <a name="IdentityPlatformConfigConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AuthorizedDomains = null,
    object AutodeleteAnonymousUsers = null,
    IdentityPlatformConfigBlockingFunctions BlockingFunctions = null,
    IdentityPlatformConfigClient Client = null,
    string Id = null,
    IdentityPlatformConfigMfa Mfa = null,
    IdentityPlatformConfigMonitoring Monitoring = null,
    IdentityPlatformConfigMultiTenant MultiTenant = null,
    string Project = null,
    IdentityPlatformConfigQuota Quota = null,
    IdentityPlatformConfigSignIn SignIn = null,
    IdentityPlatformConfigSmsRegionConfig SmsRegionConfig = null,
    IdentityPlatformConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.authorizedDomains">AuthorizedDomains</a></code> | <code>string[]</code> | List of domains authorized for OAuth redirects. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.autodeleteAnonymousUsers">AutodeleteAnonymousUsers</a></code> | <code>object</code> | Whether anonymous users will be auto-deleted after a period of 30 days. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.blockingFunctions">BlockingFunctions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a></code> | blocking_functions block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.client">Client</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a></code> | client block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#id IdentityPlatformConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.mfa">Mfa</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a></code> | mfa block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.multiTenant">MultiTenant</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a></code> | multi_tenant block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#project IdentityPlatformConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.signIn">SignIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.smsRegionConfig">SmsRegionConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a></code> | sms_region_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthorizedDomains`<sup>Optional</sup> <a name="AuthorizedDomains" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.authorizedDomains"></a>

```csharp
public string[] AuthorizedDomains { get; set; }
```

- *Type:* string[]

List of domains authorized for OAuth redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#authorized_domains IdentityPlatformConfig#authorized_domains}

---

##### `AutodeleteAnonymousUsers`<sup>Optional</sup> <a name="AutodeleteAnonymousUsers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.autodeleteAnonymousUsers"></a>

```csharp
public object AutodeleteAnonymousUsers { get; set; }
```

- *Type:* object

Whether anonymous users will be auto-deleted after a period of 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#autodelete_anonymous_users IdentityPlatformConfig#autodelete_anonymous_users}

---

##### `BlockingFunctions`<sup>Optional</sup> <a name="BlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.blockingFunctions"></a>

```csharp
public IdentityPlatformConfigBlockingFunctions BlockingFunctions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

blocking_functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#blocking_functions IdentityPlatformConfig#blocking_functions}

---

##### `Client`<sup>Optional</sup> <a name="Client" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.client"></a>

```csharp
public IdentityPlatformConfigClient Client { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#client IdentityPlatformConfig#client}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#id IdentityPlatformConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mfa`<sup>Optional</sup> <a name="Mfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.mfa"></a>

```csharp
public IdentityPlatformConfigMfa Mfa { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

mfa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#mfa IdentityPlatformConfig#mfa}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.monitoring"></a>

```csharp
public IdentityPlatformConfigMonitoring Monitoring { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#monitoring IdentityPlatformConfig#monitoring}

---

##### `MultiTenant`<sup>Optional</sup> <a name="MultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.multiTenant"></a>

```csharp
public IdentityPlatformConfigMultiTenant MultiTenant { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

multi_tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#multi_tenant IdentityPlatformConfig#multi_tenant}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#project IdentityPlatformConfig#project}.

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.quota"></a>

```csharp
public IdentityPlatformConfigQuota Quota { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#quota IdentityPlatformConfig#quota}

---

##### `SignIn`<sup>Optional</sup> <a name="SignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.signIn"></a>

```csharp
public IdentityPlatformConfigSignIn SignIn { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#sign_in IdentityPlatformConfig#sign_in}

---

##### `SmsRegionConfig`<sup>Optional</sup> <a name="SmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.smsRegionConfig"></a>

```csharp
public IdentityPlatformConfigSmsRegionConfig SmsRegionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

sms_region_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#sms_region_config IdentityPlatformConfig#sms_region_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.timeouts"></a>

```csharp
public IdentityPlatformConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#timeouts IdentityPlatformConfig#timeouts}

---

### IdentityPlatformConfigMfa <a name="IdentityPlatformConfigMfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMfa {
    string[] EnabledProviders = null,
    object ProviderConfigs = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.enabledProviders">EnabledProviders</a></code> | <code>string[]</code> | A list of usable second factors for this project. Possible values: ["PHONE_SMS"]. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.providerConfigs">ProviderConfigs</a></code> | <code>object</code> | provider_configs block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.state">State</a></code> | <code>string</code> | Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"]. |

---

##### `EnabledProviders`<sup>Optional</sup> <a name="EnabledProviders" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.enabledProviders"></a>

```csharp
public string[] EnabledProviders { get; set; }
```

- *Type:* string[]

A list of usable second factors for this project. Possible values: ["PHONE_SMS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#enabled_providers IdentityPlatformConfig#enabled_providers}

---

##### `ProviderConfigs`<sup>Optional</sup> <a name="ProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.providerConfigs"></a>

```csharp
public object ProviderConfigs { get; set; }
```

- *Type:* object

provider_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#provider_configs IdentityPlatformConfig#provider_configs}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#state IdentityPlatformConfig#state}

---

### IdentityPlatformConfigMfaProviderConfigs <a name="IdentityPlatformConfigMfaProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMfaProviderConfigs {
    string State = null,
    IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig TotpProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.property.state">State</a></code> | <code>string</code> | Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"]. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.property.totpProviderConfig">TotpProviderConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a></code> | totp_provider_config block. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#state IdentityPlatformConfig#state}

---

##### `TotpProviderConfig`<sup>Optional</sup> <a name="TotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.property.totpProviderConfig"></a>

```csharp
public IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig TotpProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

totp_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#totp_provider_config IdentityPlatformConfig#totp_provider_config}

---

### IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig <a name="IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig {
    double AdjacentIntervals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.property.adjacentIntervals">AdjacentIntervals</a></code> | <code>double</code> | The allowed number of adjacent intervals that will be used for verification to avoid clock skew. |

---

##### `AdjacentIntervals`<sup>Optional</sup> <a name="AdjacentIntervals" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.property.adjacentIntervals"></a>

```csharp
public double AdjacentIntervals { get; set; }
```

- *Type:* double

The allowed number of adjacent intervals that will be used for verification to avoid clock skew.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#adjacent_intervals IdentityPlatformConfig#adjacent_intervals}

---

### IdentityPlatformConfigMonitoring <a name="IdentityPlatformConfigMonitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMonitoring {
    IdentityPlatformConfigMonitoringRequestLogging RequestLogging = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring.property.requestLogging">RequestLogging</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a></code> | request_logging block. |

---

##### `RequestLogging`<sup>Optional</sup> <a name="RequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring.property.requestLogging"></a>

```csharp
public IdentityPlatformConfigMonitoringRequestLogging RequestLogging { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a>

request_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#request_logging IdentityPlatformConfig#request_logging}

---

### IdentityPlatformConfigMonitoringRequestLogging <a name="IdentityPlatformConfigMonitoringRequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMonitoringRequestLogging {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging.property.enabled">Enabled</a></code> | <code>object</code> | Whether logging is enabled for this project or not. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether logging is enabled for this project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}

---

### IdentityPlatformConfigMultiTenant <a name="IdentityPlatformConfigMultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMultiTenant {
    object AllowTenants = null,
    string DefaultTenantLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.property.allowTenants">AllowTenants</a></code> | <code>object</code> | Whether this project can have tenants or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.property.defaultTenantLocation">DefaultTenantLocation</a></code> | <code>string</code> | The default cloud parent org or folder that the tenant project should be created under. |

---

##### `AllowTenants`<sup>Optional</sup> <a name="AllowTenants" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.property.allowTenants"></a>

```csharp
public object AllowTenants { get; set; }
```

- *Type:* object

Whether this project can have tenants or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#allow_tenants IdentityPlatformConfig#allow_tenants}

---

##### `DefaultTenantLocation`<sup>Optional</sup> <a name="DefaultTenantLocation" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.property.defaultTenantLocation"></a>

```csharp
public string DefaultTenantLocation { get; set; }
```

- *Type:* string

The default cloud parent org or folder that the tenant project should be created under.

The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456".
If the value is not set, the tenant will be created under the same organization or folder as the agent project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#default_tenant_location IdentityPlatformConfig#default_tenant_location}

---

### IdentityPlatformConfigQuota <a name="IdentityPlatformConfigQuota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigQuota {
    IdentityPlatformConfigQuotaSignUpQuotaConfig SignUpQuotaConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota.property.signUpQuotaConfig">SignUpQuotaConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | sign_up_quota_config block. |

---

##### `SignUpQuotaConfig`<sup>Optional</sup> <a name="SignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota.property.signUpQuotaConfig"></a>

```csharp
public IdentityPlatformConfigQuotaSignUpQuotaConfig SignUpQuotaConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a>

sign_up_quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#sign_up_quota_config IdentityPlatformConfig#sign_up_quota_config}

---

### IdentityPlatformConfigQuotaSignUpQuotaConfig <a name="IdentityPlatformConfigQuotaSignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigQuotaSignUpQuotaConfig {
    double Quota = null,
    string QuotaDuration = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.quota">Quota</a></code> | <code>double</code> | A sign up APIs quota that customers can override temporarily. Value can be in between 1 and 1000. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.quotaDuration">QuotaDuration</a></code> | <code>string</code> | How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s". |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.startTime">StartTime</a></code> | <code>string</code> | When this quota will take affect. |

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.quota"></a>

```csharp
public double Quota { get; set; }
```

- *Type:* double

A sign up APIs quota that customers can override temporarily. Value can be in between 1 and 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#quota IdentityPlatformConfig#quota}

---

##### `QuotaDuration`<sup>Optional</sup> <a name="QuotaDuration" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.quotaDuration"></a>

```csharp
public string QuotaDuration { get; set; }
```

- *Type:* string

How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#quota_duration IdentityPlatformConfig#quota_duration}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

When this quota will take affect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#start_time IdentityPlatformConfig#start_time}

---

### IdentityPlatformConfigSignIn <a name="IdentityPlatformConfigSignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSignIn {
    object AllowDuplicateEmails = null,
    IdentityPlatformConfigSignInAnonymous Anonymous = null,
    IdentityPlatformConfigSignInEmail Email = null,
    IdentityPlatformConfigSignInPhoneNumber PhoneNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.allowDuplicateEmails">AllowDuplicateEmails</a></code> | <code>object</code> | Whether to allow more than one account to have the same email. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.anonymous">Anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a></code> | anonymous block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.email">Email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.phoneNumber">PhoneNumber</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a></code> | phone_number block. |

---

##### `AllowDuplicateEmails`<sup>Optional</sup> <a name="AllowDuplicateEmails" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.allowDuplicateEmails"></a>

```csharp
public object AllowDuplicateEmails { get; set; }
```

- *Type:* object

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#allow_duplicate_emails IdentityPlatformConfig#allow_duplicate_emails}

---

##### `Anonymous`<sup>Optional</sup> <a name="Anonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.anonymous"></a>

```csharp
public IdentityPlatformConfigSignInAnonymous Anonymous { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#anonymous IdentityPlatformConfig#anonymous}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.email"></a>

```csharp
public IdentityPlatformConfigSignInEmail Email { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#email IdentityPlatformConfig#email}

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.phoneNumber"></a>

```csharp
public IdentityPlatformConfigSignInPhoneNumber PhoneNumber { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#phone_number IdentityPlatformConfig#phone_number}

---

### IdentityPlatformConfigSignInAnonymous <a name="IdentityPlatformConfigSignInAnonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSignInAnonymous {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous.property.enabled">Enabled</a></code> | <code>object</code> | Whether anonymous user auth is enabled for the project or not. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}

---

### IdentityPlatformConfigSignInEmail <a name="IdentityPlatformConfigSignInEmail" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSignInEmail {
    object Enabled,
    object PasswordRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.property.enabled">Enabled</a></code> | <code>object</code> | Whether email auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.property.passwordRequired">PasswordRequired</a></code> | <code>object</code> | Whether a password is required for email auth or not. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}

---

##### `PasswordRequired`<sup>Optional</sup> <a name="PasswordRequired" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.property.passwordRequired"></a>

```csharp
public object PasswordRequired { get; set; }
```

- *Type:* object

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#password_required IdentityPlatformConfig#password_required}

---

### IdentityPlatformConfigSignInHashConfig <a name="IdentityPlatformConfigSignInHashConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSignInHashConfig {

};
```


### IdentityPlatformConfigSignInPhoneNumber <a name="IdentityPlatformConfigSignInPhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSignInPhoneNumber {
    object Enabled,
    System.Collections.Generic.IDictionary<string, string> TestPhoneNumbers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.property.enabled">Enabled</a></code> | <code>object</code> | Whether phone number auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.property.testPhoneNumbers">TestPhoneNumbers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of <test phone number, fake code> that can be used for phone auth testing. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}

---

##### `TestPhoneNumbers`<sup>Optional</sup> <a name="TestPhoneNumbers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.property.testPhoneNumbers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TestPhoneNumbers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#test_phone_numbers IdentityPlatformConfig#test_phone_numbers}

---

### IdentityPlatformConfigSmsRegionConfig <a name="IdentityPlatformConfigSmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSmsRegionConfig {
    IdentityPlatformConfigSmsRegionConfigAllowByDefault AllowByDefault = null,
    IdentityPlatformConfigSmsRegionConfigAllowlistOnly AllowlistOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.property.allowByDefault">AllowByDefault</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a></code> | allow_by_default block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.property.allowlistOnly">AllowlistOnly</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a></code> | allowlist_only block. |

---

##### `AllowByDefault`<sup>Optional</sup> <a name="AllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.property.allowByDefault"></a>

```csharp
public IdentityPlatformConfigSmsRegionConfigAllowByDefault AllowByDefault { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

allow_by_default block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#allow_by_default IdentityPlatformConfig#allow_by_default}

---

##### `AllowlistOnly`<sup>Optional</sup> <a name="AllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.property.allowlistOnly"></a>

```csharp
public IdentityPlatformConfigSmsRegionConfigAllowlistOnly AllowlistOnly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

allowlist_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#allowlist_only IdentityPlatformConfig#allowlist_only}

---

### IdentityPlatformConfigSmsRegionConfigAllowByDefault <a name="IdentityPlatformConfigSmsRegionConfigAllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSmsRegionConfigAllowByDefault {
    string[] DisallowedRegions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault.property.disallowedRegions">DisallowedRegions</a></code> | <code>string[]</code> | Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json. |

---

##### `DisallowedRegions`<sup>Optional</sup> <a name="DisallowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault.property.disallowedRegions"></a>

```csharp
public string[] DisallowedRegions { get; set; }
```

- *Type:* string[]

Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#disallowed_regions IdentityPlatformConfig#disallowed_regions}

---

### IdentityPlatformConfigSmsRegionConfigAllowlistOnly <a name="IdentityPlatformConfigSmsRegionConfigAllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSmsRegionConfigAllowlistOnly {
    string[] AllowedRegions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly.property.allowedRegions">AllowedRegions</a></code> | <code>string[]</code> | Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json. |

---

##### `AllowedRegions`<sup>Optional</sup> <a name="AllowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly.property.allowedRegions"></a>

```csharp
public string[] AllowedRegions { get; set; }
```

- *Type:* string[]

Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#allowed_regions IdentityPlatformConfig#allowed_regions}

---

### IdentityPlatformConfigTimeouts <a name="IdentityPlatformConfigTimeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#create IdentityPlatformConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#delete IdentityPlatformConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#update IdentityPlatformConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#create IdentityPlatformConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#delete IdentityPlatformConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/identity_platform_config#update IdentityPlatformConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference <a name="IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetIdToken">ResetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetRefreshToken">ResetRefreshToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetIdToken"></a>

```csharp
private void ResetIdToken()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetRefreshToken"></a>

```csharp
private void ResetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessToken">AccessToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idToken">IdToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessTokenInput"></a>

```csharp
public object AccessTokenInput { get; }
```

- *Type:* object

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idTokenInput"></a>

```csharp
public object IdTokenInput { get; }
```

- *Type:* object

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshTokenInput"></a>

```csharp
public object RefreshTokenInput { get; }
```

- *Type:* object

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessToken"></a>

```csharp
public object AccessToken { get; }
```

- *Type:* object

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idToken"></a>

```csharp
public object IdToken { get; }
```

- *Type:* object

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshToken"></a>

```csharp
public object RefreshToken { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---


### IdentityPlatformConfigBlockingFunctionsOutputReference <a name="IdentityPlatformConfigBlockingFunctionsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigBlockingFunctionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials">PutForwardInboundCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers">PutTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resetForwardInboundCredentials">ResetForwardInboundCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForwardInboundCredentials` <a name="PutForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials"></a>

```csharp
private void PutForwardInboundCredentials(IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---

##### `PutTriggers` <a name="PutTriggers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers"></a>

```csharp
private void PutTriggers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers.parameter.value"></a>

- *Type:* object

---

##### `ResetForwardInboundCredentials` <a name="ResetForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resetForwardInboundCredentials"></a>

```csharp
private void ResetForwardInboundCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentials">ForwardInboundCredentials</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.triggers">Triggers</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList">IdentityPlatformConfigBlockingFunctionsTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentialsInput">ForwardInboundCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.triggersInput">TriggersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForwardInboundCredentials`<sup>Required</sup> <a name="ForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentials"></a>

```csharp
public IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference ForwardInboundCredentials { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference</a>

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.triggers"></a>

```csharp
public IdentityPlatformConfigBlockingFunctionsTriggersList Triggers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList">IdentityPlatformConfigBlockingFunctionsTriggersList</a>

---

##### `ForwardInboundCredentialsInput`<sup>Optional</sup> <a name="ForwardInboundCredentialsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentialsInput"></a>

```csharp
public IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials ForwardInboundCredentialsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.triggersInput"></a>

```csharp
public object TriggersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigBlockingFunctions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

---


### IdentityPlatformConfigBlockingFunctionsTriggersList <a name="IdentityPlatformConfigBlockingFunctionsTriggersList" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigBlockingFunctionsTriggersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.get"></a>

```csharp
private IdentityPlatformConfigBlockingFunctionsTriggersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityPlatformConfigBlockingFunctionsTriggersOutputReference <a name="IdentityPlatformConfigBlockingFunctionsTriggersOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigBlockingFunctionsTriggersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUriInput">FunctionUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUri">FunctionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `FunctionUriInput`<sup>Optional</sup> <a name="FunctionUriInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUriInput"></a>

```csharp
public string FunctionUriInput { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `FunctionUri`<sup>Required</sup> <a name="FunctionUri" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUri"></a>

```csharp
public string FunctionUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityPlatformConfigClientOutputReference <a name="IdentityPlatformConfigClientOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigClientOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.putPermissions"></a>

```csharp
private void PutPermissions(IdentityPlatformConfigClientPermissions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a>

---

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resetPermissions"></a>

```csharp
private void ResetPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.firebaseSubdomain">FirebaseSubdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference">IdentityPlatformConfigClientPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `FirebaseSubdomain`<sup>Required</sup> <a name="FirebaseSubdomain" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.firebaseSubdomain"></a>

```csharp
public string FirebaseSubdomain { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.permissions"></a>

```csharp
public IdentityPlatformConfigClientPermissionsOutputReference Permissions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference">IdentityPlatformConfigClientPermissionsOutputReference</a>

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.permissionsInput"></a>

```csharp
public IdentityPlatformConfigClientPermissions PermissionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigClient InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

---


### IdentityPlatformConfigClientPermissionsOutputReference <a name="IdentityPlatformConfigClientPermissionsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigClientPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserDeletion">ResetDisabledUserDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserSignup">ResetDisabledUserSignup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabledUserDeletion` <a name="ResetDisabledUserDeletion" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserDeletion"></a>

```csharp
private void ResetDisabledUserDeletion()
```

##### `ResetDisabledUserSignup` <a name="ResetDisabledUserSignup" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserSignup"></a>

```csharp
private void ResetDisabledUserSignup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletionInput">DisabledUserDeletionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignupInput">DisabledUserSignupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletion">DisabledUserDeletion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignup">DisabledUserSignup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledUserDeletionInput`<sup>Optional</sup> <a name="DisabledUserDeletionInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletionInput"></a>

```csharp
public object DisabledUserDeletionInput { get; }
```

- *Type:* object

---

##### `DisabledUserSignupInput`<sup>Optional</sup> <a name="DisabledUserSignupInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignupInput"></a>

```csharp
public object DisabledUserSignupInput { get; }
```

- *Type:* object

---

##### `DisabledUserDeletion`<sup>Required</sup> <a name="DisabledUserDeletion" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletion"></a>

```csharp
public object DisabledUserDeletion { get; }
```

- *Type:* object

---

##### `DisabledUserSignup`<sup>Required</sup> <a name="DisabledUserSignup" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignup"></a>

```csharp
public object DisabledUserSignup { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigClientPermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a>

---


### IdentityPlatformConfigMfaOutputReference <a name="IdentityPlatformConfigMfaOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMfaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.putProviderConfigs">PutProviderConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetEnabledProviders">ResetEnabledProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetProviderConfigs">ResetProviderConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfigs` <a name="PutProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.putProviderConfigs"></a>

```csharp
private void PutProviderConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.putProviderConfigs.parameter.value"></a>

- *Type:* object

---

##### `ResetEnabledProviders` <a name="ResetEnabledProviders" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetEnabledProviders"></a>

```csharp
private void ResetEnabledProviders()
```

##### `ResetProviderConfigs` <a name="ResetProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetProviderConfigs"></a>

```csharp
private void ResetProviderConfigs()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.providerConfigs">ProviderConfigs</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList">IdentityPlatformConfigMfaProviderConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.enabledProvidersInput">EnabledProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.providerConfigsInput">ProviderConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.enabledProviders">EnabledProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderConfigs`<sup>Required</sup> <a name="ProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.providerConfigs"></a>

```csharp
public IdentityPlatformConfigMfaProviderConfigsList ProviderConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList">IdentityPlatformConfigMfaProviderConfigsList</a>

---

##### `EnabledProvidersInput`<sup>Optional</sup> <a name="EnabledProvidersInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.enabledProvidersInput"></a>

```csharp
public string[] EnabledProvidersInput { get; }
```

- *Type:* string[]

---

##### `ProviderConfigsInput`<sup>Optional</sup> <a name="ProviderConfigsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.providerConfigsInput"></a>

```csharp
public object ProviderConfigsInput { get; }
```

- *Type:* object

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `EnabledProviders`<sup>Required</sup> <a name="EnabledProviders" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.enabledProviders"></a>

```csharp
public string[] EnabledProviders { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigMfa InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

---


### IdentityPlatformConfigMfaProviderConfigsList <a name="IdentityPlatformConfigMfaProviderConfigsList" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMfaProviderConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.get"></a>

```csharp
private IdentityPlatformConfigMfaProviderConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityPlatformConfigMfaProviderConfigsOutputReference <a name="IdentityPlatformConfigMfaProviderConfigsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMfaProviderConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.putTotpProviderConfig">PutTotpProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resetTotpProviderConfig">ResetTotpProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTotpProviderConfig` <a name="PutTotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.putTotpProviderConfig"></a>

```csharp
private void PutTotpProviderConfig(IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.putTotpProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

---

##### `ResetState` <a name="ResetState" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTotpProviderConfig` <a name="ResetTotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resetTotpProviderConfig"></a>

```csharp
private void ResetTotpProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfig">TotpProviderConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfigInput">TotpProviderConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotpProviderConfig`<sup>Required</sup> <a name="TotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfig"></a>

```csharp
public IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference TotpProviderConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TotpProviderConfigInput`<sup>Optional</sup> <a name="TotpProviderConfigInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfigInput"></a>

```csharp
public IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig TotpProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference <a name="IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resetAdjacentIntervals">ResetAdjacentIntervals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdjacentIntervals` <a name="ResetAdjacentIntervals" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resetAdjacentIntervals"></a>

```csharp
private void ResetAdjacentIntervals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervalsInput">AdjacentIntervalsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervals">AdjacentIntervals</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdjacentIntervalsInput`<sup>Optional</sup> <a name="AdjacentIntervalsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervalsInput"></a>

```csharp
public double AdjacentIntervalsInput { get; }
```

- *Type:* double

---

##### `AdjacentIntervals`<sup>Required</sup> <a name="AdjacentIntervals" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervals"></a>

```csharp
public double AdjacentIntervals { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

---


### IdentityPlatformConfigMonitoringOutputReference <a name="IdentityPlatformConfigMonitoringOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMonitoringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.putRequestLogging">PutRequestLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resetRequestLogging">ResetRequestLogging</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestLogging` <a name="PutRequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.putRequestLogging"></a>

```csharp
private void PutRequestLogging(IdentityPlatformConfigMonitoringRequestLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.putRequestLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a>

---

##### `ResetRequestLogging` <a name="ResetRequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resetRequestLogging"></a>

```csharp
private void ResetRequestLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.requestLogging">RequestLogging</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference">IdentityPlatformConfigMonitoringRequestLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.requestLoggingInput">RequestLoggingInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestLogging`<sup>Required</sup> <a name="RequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.requestLogging"></a>

```csharp
public IdentityPlatformConfigMonitoringRequestLoggingOutputReference RequestLogging { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference">IdentityPlatformConfigMonitoringRequestLoggingOutputReference</a>

---

##### `RequestLoggingInput`<sup>Optional</sup> <a name="RequestLoggingInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.requestLoggingInput"></a>

```csharp
public IdentityPlatformConfigMonitoringRequestLogging RequestLoggingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigMonitoring InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

---


### IdentityPlatformConfigMonitoringRequestLoggingOutputReference <a name="IdentityPlatformConfigMonitoringRequestLoggingOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMonitoringRequestLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigMonitoringRequestLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a>

---


### IdentityPlatformConfigMultiTenantOutputReference <a name="IdentityPlatformConfigMultiTenantOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigMultiTenantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resetAllowTenants">ResetAllowTenants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resetDefaultTenantLocation">ResetDefaultTenantLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowTenants` <a name="ResetAllowTenants" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resetAllowTenants"></a>

```csharp
private void ResetAllowTenants()
```

##### `ResetDefaultTenantLocation` <a name="ResetDefaultTenantLocation" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resetDefaultTenantLocation"></a>

```csharp
private void ResetDefaultTenantLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.allowTenantsInput">AllowTenantsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocationInput">DefaultTenantLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.allowTenants">AllowTenants</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocation">DefaultTenantLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowTenantsInput`<sup>Optional</sup> <a name="AllowTenantsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.allowTenantsInput"></a>

```csharp
public object AllowTenantsInput { get; }
```

- *Type:* object

---

##### `DefaultTenantLocationInput`<sup>Optional</sup> <a name="DefaultTenantLocationInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocationInput"></a>

```csharp
public string DefaultTenantLocationInput { get; }
```

- *Type:* string

---

##### `AllowTenants`<sup>Required</sup> <a name="AllowTenants" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.allowTenants"></a>

```csharp
public object AllowTenants { get; }
```

- *Type:* object

---

##### `DefaultTenantLocation`<sup>Required</sup> <a name="DefaultTenantLocation" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocation"></a>

```csharp
public string DefaultTenantLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigMultiTenant InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

---


### IdentityPlatformConfigQuotaOutputReference <a name="IdentityPlatformConfigQuotaOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigQuotaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig">PutSignUpQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resetSignUpQuotaConfig">ResetSignUpQuotaConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSignUpQuotaConfig` <a name="PutSignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig"></a>

```csharp
private void PutSignUpQuotaConfig(IdentityPlatformConfigQuotaSignUpQuotaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---

##### `ResetSignUpQuotaConfig` <a name="ResetSignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resetSignUpQuotaConfig"></a>

```csharp
private void ResetSignUpQuotaConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfig">SignUpQuotaConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference">IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfigInput">SignUpQuotaConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SignUpQuotaConfig`<sup>Required</sup> <a name="SignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfig"></a>

```csharp
public IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference SignUpQuotaConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference">IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference</a>

---

##### `SignUpQuotaConfigInput`<sup>Optional</sup> <a name="SignUpQuotaConfigInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfigInput"></a>

```csharp
public IdentityPlatformConfigQuotaSignUpQuotaConfig SignUpQuotaConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigQuota InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

---


### IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference <a name="IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuotaDuration">ResetQuotaDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuota"></a>

```csharp
private void ResetQuota()
```

##### `ResetQuotaDuration` <a name="ResetQuotaDuration" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuotaDuration"></a>

```csharp
private void ResetQuotaDuration()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDurationInput">QuotaDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaInput">QuotaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quota">Quota</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDuration">QuotaDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QuotaDurationInput`<sup>Optional</sup> <a name="QuotaDurationInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDurationInput"></a>

```csharp
public string QuotaDurationInput { get; }
```

- *Type:* string

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaInput"></a>

```csharp
public double QuotaInput { get; }
```

- *Type:* double

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quota"></a>

```csharp
public double Quota { get; }
```

- *Type:* double

---

##### `QuotaDuration`<sup>Required</sup> <a name="QuotaDuration" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDuration"></a>

```csharp
public string QuotaDuration { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigQuotaSignUpQuotaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---


### IdentityPlatformConfigSignInAnonymousOutputReference <a name="IdentityPlatformConfigSignInAnonymousOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSignInAnonymousOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigSignInAnonymous InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a>

---


### IdentityPlatformConfigSignInEmailOutputReference <a name="IdentityPlatformConfigSignInEmailOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSignInEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resetPasswordRequired">ResetPasswordRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPasswordRequired` <a name="ResetPasswordRequired" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resetPasswordRequired"></a>

```csharp
private void ResetPasswordRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.passwordRequiredInput">PasswordRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.passwordRequired">PasswordRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `PasswordRequiredInput`<sup>Optional</sup> <a name="PasswordRequiredInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.passwordRequiredInput"></a>

```csharp
public object PasswordRequiredInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `PasswordRequired`<sup>Required</sup> <a name="PasswordRequired" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.passwordRequired"></a>

```csharp
public object PasswordRequired { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigSignInEmail InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a>

---


### IdentityPlatformConfigSignInHashConfigList <a name="IdentityPlatformConfigSignInHashConfigList" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSignInHashConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.get"></a>

```csharp
private IdentityPlatformConfigSignInHashConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IdentityPlatformConfigSignInHashConfigOutputReference <a name="IdentityPlatformConfigSignInHashConfigOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSignInHashConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.memoryCost">MemoryCost</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.rounds">Rounds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.saltSeparator">SaltSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.signerKey">SignerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfig">IdentityPlatformConfigSignInHashConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `MemoryCost`<sup>Required</sup> <a name="MemoryCost" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.memoryCost"></a>

```csharp
public double MemoryCost { get; }
```

- *Type:* double

---

##### `Rounds`<sup>Required</sup> <a name="Rounds" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.rounds"></a>

```csharp
public double Rounds { get; }
```

- *Type:* double

---

##### `SaltSeparator`<sup>Required</sup> <a name="SaltSeparator" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.saltSeparator"></a>

```csharp
public string SaltSeparator { get; }
```

- *Type:* string

---

##### `SignerKey`<sup>Required</sup> <a name="SignerKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.signerKey"></a>

```csharp
public string SignerKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigSignInHashConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfig">IdentityPlatformConfigSignInHashConfig</a>

---


### IdentityPlatformConfigSignInOutputReference <a name="IdentityPlatformConfigSignInOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSignInOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putAnonymous">PutAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putEmail">PutEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putPhoneNumber">PutPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetAllowDuplicateEmails">ResetAllowDuplicateEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetAnonymous">ResetAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnonymous` <a name="PutAnonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putAnonymous"></a>

```csharp
private void PutAnonymous(IdentityPlatformConfigSignInAnonymous Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putAnonymous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a>

---

##### `PutEmail` <a name="PutEmail" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putEmail"></a>

```csharp
private void PutEmail(IdentityPlatformConfigSignInEmail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a>

---

##### `PutPhoneNumber` <a name="PutPhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putPhoneNumber"></a>

```csharp
private void PutPhoneNumber(IdentityPlatformConfigSignInPhoneNumber Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putPhoneNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a>

---

##### `ResetAllowDuplicateEmails` <a name="ResetAllowDuplicateEmails" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetAllowDuplicateEmails"></a>

```csharp
private void ResetAllowDuplicateEmails()
```

##### `ResetAnonymous` <a name="ResetAnonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetAnonymous"></a>

```csharp
private void ResetAnonymous()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.anonymous">Anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference">IdentityPlatformConfigSignInAnonymousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.email">Email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference">IdentityPlatformConfigSignInEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.hashConfig">HashConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList">IdentityPlatformConfigSignInHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference">IdentityPlatformConfigSignInPhoneNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmailsInput">AllowDuplicateEmailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.anonymousInput">AnonymousInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.emailInput">EmailInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmails">AllowDuplicateEmails</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Anonymous`<sup>Required</sup> <a name="Anonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.anonymous"></a>

```csharp
public IdentityPlatformConfigSignInAnonymousOutputReference Anonymous { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference">IdentityPlatformConfigSignInAnonymousOutputReference</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.email"></a>

```csharp
public IdentityPlatformConfigSignInEmailOutputReference Email { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference">IdentityPlatformConfigSignInEmailOutputReference</a>

---

##### `HashConfig`<sup>Required</sup> <a name="HashConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.hashConfig"></a>

```csharp
public IdentityPlatformConfigSignInHashConfigList HashConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList">IdentityPlatformConfigSignInHashConfigList</a>

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.phoneNumber"></a>

```csharp
public IdentityPlatformConfigSignInPhoneNumberOutputReference PhoneNumber { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference">IdentityPlatformConfigSignInPhoneNumberOutputReference</a>

---

##### `AllowDuplicateEmailsInput`<sup>Optional</sup> <a name="AllowDuplicateEmailsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmailsInput"></a>

```csharp
public object AllowDuplicateEmailsInput { get; }
```

- *Type:* object

---

##### `AnonymousInput`<sup>Optional</sup> <a name="AnonymousInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.anonymousInput"></a>

```csharp
public IdentityPlatformConfigSignInAnonymous AnonymousInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.emailInput"></a>

```csharp
public IdentityPlatformConfigSignInEmail EmailInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a>

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.phoneNumberInput"></a>

```csharp
public IdentityPlatformConfigSignInPhoneNumber PhoneNumberInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a>

---

##### `AllowDuplicateEmails`<sup>Required</sup> <a name="AllowDuplicateEmails" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmails"></a>

```csharp
public object AllowDuplicateEmails { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigSignIn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

---


### IdentityPlatformConfigSignInPhoneNumberOutputReference <a name="IdentityPlatformConfigSignInPhoneNumberOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSignInPhoneNumberOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers">ResetTestPhoneNumbers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestPhoneNumbers` <a name="ResetTestPhoneNumbers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers"></a>

```csharp
private void ResetTestPhoneNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput">TestPhoneNumbersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers">TestPhoneNumbers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `TestPhoneNumbersInput`<sup>Optional</sup> <a name="TestPhoneNumbersInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TestPhoneNumbersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `TestPhoneNumbers`<sup>Required</sup> <a name="TestPhoneNumbers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TestPhoneNumbers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigSignInPhoneNumber InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a>

---


### IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference <a name="IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resetDisallowedRegions">ResetDisallowedRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisallowedRegions` <a name="ResetDisallowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resetDisallowedRegions"></a>

```csharp
private void ResetDisallowedRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegionsInput">DisallowedRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegions">DisallowedRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisallowedRegionsInput`<sup>Optional</sup> <a name="DisallowedRegionsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegionsInput"></a>

```csharp
public string[] DisallowedRegionsInput { get; }
```

- *Type:* string[]

---

##### `DisallowedRegions`<sup>Required</sup> <a name="DisallowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegions"></a>

```csharp
public string[] DisallowedRegions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigSmsRegionConfigAllowByDefault InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

---


### IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference <a name="IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resetAllowedRegions">ResetAllowedRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRegions` <a name="ResetAllowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resetAllowedRegions"></a>

```csharp
private void ResetAllowedRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegionsInput">AllowedRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegions">AllowedRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedRegionsInput`<sup>Optional</sup> <a name="AllowedRegionsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegionsInput"></a>

```csharp
public string[] AllowedRegionsInput { get; }
```

- *Type:* string[]

---

##### `AllowedRegions`<sup>Required</sup> <a name="AllowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegions"></a>

```csharp
public string[] AllowedRegions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigSmsRegionConfigAllowlistOnly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

---


### IdentityPlatformConfigSmsRegionConfigOutputReference <a name="IdentityPlatformConfigSmsRegionConfigOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigSmsRegionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowByDefault">PutAllowByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowlistOnly">PutAllowlistOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowByDefault">ResetAllowByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowlistOnly">ResetAllowlistOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowByDefault` <a name="PutAllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowByDefault"></a>

```csharp
private void PutAllowByDefault(IdentityPlatformConfigSmsRegionConfigAllowByDefault Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowByDefault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

---

##### `PutAllowlistOnly` <a name="PutAllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowlistOnly"></a>

```csharp
private void PutAllowlistOnly(IdentityPlatformConfigSmsRegionConfigAllowlistOnly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowlistOnly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

---

##### `ResetAllowByDefault` <a name="ResetAllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowByDefault"></a>

```csharp
private void ResetAllowByDefault()
```

##### `ResetAllowlistOnly` <a name="ResetAllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowlistOnly"></a>

```csharp
private void ResetAllowlistOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefault">AllowByDefault</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference">IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnly">AllowlistOnly</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference">IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefaultInput">AllowByDefaultInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnlyInput">AllowlistOnlyInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowByDefault`<sup>Required</sup> <a name="AllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefault"></a>

```csharp
public IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference AllowByDefault { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference">IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference</a>

---

##### `AllowlistOnly`<sup>Required</sup> <a name="AllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnly"></a>

```csharp
public IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference AllowlistOnly { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference">IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference</a>

---

##### `AllowByDefaultInput`<sup>Optional</sup> <a name="AllowByDefaultInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefaultInput"></a>

```csharp
public IdentityPlatformConfigSmsRegionConfigAllowByDefault AllowByDefaultInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

---

##### `AllowlistOnlyInput`<sup>Optional</sup> <a name="AllowlistOnlyInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnlyInput"></a>

```csharp
public IdentityPlatformConfigSmsRegionConfigAllowlistOnly AllowlistOnlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.internalValue"></a>

```csharp
public IdentityPlatformConfigSmsRegionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

---


### IdentityPlatformConfigTimeoutsOutputReference <a name="IdentityPlatformConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IdentityPlatformConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



