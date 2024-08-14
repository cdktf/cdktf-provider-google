# `sccManagementOrganizationSecurityHealthAnalyticsCustomModule` Submodule <a name="`sccManagementOrganizationSecurityHealthAnalyticsCustomModule` Submodule" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccManagementOrganizationSecurityHealthAnalyticsCustomModule <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module google_scc_management_organization_security_health_analytics_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModule(Construct Scope, string Id, SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.putCustomConfig">PutCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetCustomConfig">ResetCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetEnablementState">ResetEnablementState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomConfig` <a name="PutCustomConfig" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.putCustomConfig"></a>

```csharp
private void PutCustomConfig(SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.putTimeouts"></a>

```csharp
private void PutTimeouts(SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a>

---

##### `ResetCustomConfig` <a name="ResetCustomConfig" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetCustomConfig"></a>

```csharp
private void ResetCustomConfig()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnablementState` <a name="ResetEnablementState" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetEnablementState"></a>

```csharp
private void ResetEnablementState()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SccManagementOrganizationSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccManagementOrganizationSecurityHealthAnalyticsCustomModule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccManagementOrganizationSecurityHealthAnalyticsCustomModule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccManagementOrganizationSecurityHealthAnalyticsCustomModule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccManagementOrganizationSecurityHealthAnalyticsCustomModule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SccManagementOrganizationSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccManagementOrganizationSecurityHealthAnalyticsCustomModule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccManagementOrganizationSecurityHealthAnalyticsCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SccManagementOrganizationSecurityHealthAnalyticsCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.ancestorModule">AncestorModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.customConfig">CustomConfig</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.lastEditor">LastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.customConfigInput">CustomConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.enablementStateInput">EnablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.enablementState">EnablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.organization">Organization</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AncestorModule`<sup>Required</sup> <a name="AncestorModule" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.ancestorModule"></a>

```csharp
public string AncestorModule { get; }
```

- *Type:* string

---

##### `CustomConfig`<sup>Required</sup> <a name="CustomConfig" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.customConfig"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference CustomConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a>

---

##### `LastEditor`<sup>Required</sup> <a name="LastEditor" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.lastEditor"></a>

```csharp
public string LastEditor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.timeouts"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CustomConfigInput`<sup>Optional</sup> <a name="CustomConfigInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.customConfigInput"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig CustomConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnablementStateInput`<sup>Optional</sup> <a name="EnablementStateInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.enablementStateInput"></a>

```csharp
public string EnablementStateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnablementState`<sup>Required</sup> <a name="EnablementState" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.enablementState"></a>

```csharp
public string EnablementState { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Organization,
    SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig CustomConfig = null,
    string DisplayName = null,
    string EnablementState = null,
    string Id = null,
    string Location = null,
    SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.organization">Organization</a></code> | <code>string</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.customConfig">CustomConfig</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.enablementState">EnablementState</a></code> | <code>string</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#id SccManagementOrganizationSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.location">Location</a></code> | <code>string</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#organization SccManagementOrganizationSecurityHealthAnalyticsCustomModule#organization}

---

##### `CustomConfig`<sup>Optional</sup> <a name="CustomConfig" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.customConfig"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig CustomConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#custom_config SccManagementOrganizationSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#display_name SccManagementOrganizationSecurityHealthAnalyticsCustomModule#display_name}

---

##### `EnablementState`<sup>Optional</sup> <a name="EnablementState" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.enablementState"></a>

```csharp
public string EnablementState { get; set; }
```

- *Type:* string

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#enablement_state SccManagementOrganizationSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#id SccManagementOrganizationSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#location SccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleConfig.property.timeouts"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#timeouts SccManagementOrganizationSecurityHealthAnalyticsCustomModule#timeouts}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig {
    SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate Predicate,
    string Recommendation,
    SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector ResourceSelector,
    string Severity,
    SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput CustomOutput = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation">Recommendation</a></code> | <code>string</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity">Severity</a></code> | <code>string</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.description">Description</a></code> | <code>string</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate Predicate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#predicate SccManagementOrganizationSecurityHealthAnalyticsCustomModule#predicate}

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation"></a>

```csharp
public string Recommendation { get; set; }
```

- *Type:* string

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#recommendation SccManagementOrganizationSecurityHealthAnalyticsCustomModule#recommendation}

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector ResourceSelector { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#resource_selector SccManagementOrganizationSecurityHealthAnalyticsCustomModule#resource_selector}

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#severity SccManagementOrganizationSecurityHealthAnalyticsCustomModule#severity}

---

##### `CustomOutput`<sup>Optional</sup> <a name="CustomOutput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput CustomOutput { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#custom_output SccManagementOrganizationSecurityHealthAnalyticsCustomModule#custom_output}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#description SccManagementOrganizationSecurityHealthAnalyticsCustomModule#description}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput {
    object Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties">Properties</a></code> | <code>object</code> | properties block. |

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties"></a>

```csharp
public object Properties { get; set; }
```

- *Type:* object

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#properties SccManagementOrganizationSecurityHealthAnalyticsCustomModule#properties}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties {
    string Name = null,
    SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression ValueExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name">Name</a></code> | <code>string</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#name SccManagementOrganizationSecurityHealthAnalyticsCustomModule#name}

---

##### `ValueExpression`<sup>Optional</sup> <a name="ValueExpression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression ValueExpression { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#value_expression SccManagementOrganizationSecurityHealthAnalyticsCustomModule#value_expression}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#expression SccManagementOrganizationSecurityHealthAnalyticsCustomModule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#description SccManagementOrganizationSecurityHealthAnalyticsCustomModule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#location SccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#title SccManagementOrganizationSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#expression SccManagementOrganizationSecurityHealthAnalyticsCustomModule#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#description SccManagementOrganizationSecurityHealthAnalyticsCustomModule#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#location SccManagementOrganizationSecurityHealthAnalyticsCustomModule#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#title SccManagementOrganizationSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector {
    string[] ResourceTypes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | The resource types to run the detector on. |

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; set; }
```

- *Type:* string[]

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#resource_types SccManagementOrganizationSecurityHealthAnalyticsCustomModule#resource_types}

---

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#create SccManagementOrganizationSecurityHealthAnalyticsCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#delete SccManagementOrganizationSecurityHealthAnalyticsCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#update SccManagementOrganizationSecurityHealthAnalyticsCustomModule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#create SccManagementOrganizationSecurityHealthAnalyticsCustomModule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#delete SccManagementOrganizationSecurityHealthAnalyticsCustomModule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/scc_management_organization_security_health_analytics_custom_module#update SccManagementOrganizationSecurityHealthAnalyticsCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```csharp
private void PutProperties(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* object

---

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```csharp
public object PropertiesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```csharp
private SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">PutValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">ResetValueExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueExpression` <a name="PutValueExpression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```csharp
private void PutValueExpression(SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValueExpression` <a name="ResetValueExpression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```csharp
private void ResetValueExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">ValueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">ValueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueExpression`<sup>Required</sup> <a name="ValueExpression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference ValueExpression { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueExpressionInput`<sup>Optional</sup> <a name="ValueExpressionInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression ValueExpressionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput">PutCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector">PutResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput">ResetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomOutput` <a name="PutCustomOutput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```csharp
private void PutCustomOutput(SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `PutPredicate` <a name="PutPredicate" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate"></a>

```csharp
private void PutPredicate(SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `PutResourceSelector` <a name="PutResourceSelector" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```csharp
private void PutResourceSelector(SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `ResetCustomOutput` <a name="ResetCustomOutput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```csharp
private void ResetCustomOutput()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput">CustomOutput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector">ResourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput">CustomOutputInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput">PredicateInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput">RecommendationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">ResourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation">Recommendation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomOutput`<sup>Required</sup> <a name="CustomOutput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference CustomOutput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference Predicate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `ResourceSelector`<sup>Required</sup> <a name="ResourceSelector" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference ResourceSelector { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `CustomOutputInput`<sup>Optional</sup> <a name="CustomOutputInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput CustomOutputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate PredicateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `RecommendationInput`<sup>Optional</sup> <a name="RecommendationInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```csharp
public string RecommendationInput { get; }
```

- *Type:* string

---

##### `ResourceSelectorInput`<sup>Optional</sup> <a name="ResourceSelectorInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector ResourceSelectorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```csharp
public string Recommendation { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```csharp
public string[] ResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```csharp
public SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementOrganizationSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---


### SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference <a name="SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccManagementOrganizationSecurityHealthAnalyticsCustomModule.SccManagementOrganizationSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



