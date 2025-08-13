# `computeRegionSecurityPolicy` Submodule <a name="`computeRegionSecurityPolicy` Submodule" id="@cdktf/provider-google.computeRegionSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionSecurityPolicy <a name="ComputeRegionSecurityPolicy" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy google_compute_region_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicy(Construct Scope, string Id, ComputeRegionSecurityPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig">ComputeRegionSecurityPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig">ComputeRegionSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putAdvancedOptionsConfig">PutAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putDdosProtectionConfig">PutDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putUserDefinedFields">PutUserDefinedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetAdvancedOptionsConfig">ResetAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetDdosProtectionConfig">ResetDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetUserDefinedFields">ResetUserDefinedFields</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedOptionsConfig` <a name="PutAdvancedOptionsConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putAdvancedOptionsConfig"></a>

```csharp
private void PutAdvancedOptionsConfig(ComputeRegionSecurityPolicyAdvancedOptionsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putAdvancedOptionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfig</a>

---

##### `PutDdosProtectionConfig` <a name="PutDdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putDdosProtectionConfig"></a>

```csharp
private void PutDdosProtectionConfig(ComputeRegionSecurityPolicyDdosProtectionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putDdosProtectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeRegionSecurityPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a>

---

##### `PutUserDefinedFields` <a name="PutUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putUserDefinedFields"></a>

```csharp
private void PutUserDefinedFields(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putUserDefinedFields.parameter.value"></a>

- *Type:* object

---

##### `ResetAdvancedOptionsConfig` <a name="ResetAdvancedOptionsConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetAdvancedOptionsConfig"></a>

```csharp
private void ResetAdvancedOptionsConfig()
```

##### `ResetDdosProtectionConfig` <a name="ResetDdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetDdosProtectionConfig"></a>

```csharp
private void ResetDdosProtectionConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetRules"></a>

```csharp
private void ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUserDefinedFields` <a name="ResetUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetUserDefinedFields"></a>

```csharp
private void ResetUserDefinedFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionSecurityPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionSecurityPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionSecurityPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionSecurityPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionSecurityPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.advancedOptionsConfig">AdvancedOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference">ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.ddosProtectionConfig">DdosProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference">ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList">ComputeRegionSecurityPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.selfLinkWithPolicyId">SelfLinkWithPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference">ComputeRegionSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.userDefinedFields">UserDefinedFields</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList">ComputeRegionSecurityPolicyUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.advancedOptionsConfigInput">AdvancedOptionsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.ddosProtectionConfigInput">DdosProtectionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.userDefinedFieldsInput">UserDefinedFieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedOptionsConfig`<sup>Required</sup> <a name="AdvancedOptionsConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.advancedOptionsConfig"></a>

```csharp
public ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference AdvancedOptionsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference">ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference</a>

---

##### `DdosProtectionConfig`<sup>Required</sup> <a name="DdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.ddosProtectionConfig"></a>

```csharp
public ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference DdosProtectionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference">ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.rules"></a>

```csharp
public ComputeRegionSecurityPolicyRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList">ComputeRegionSecurityPolicyRulesList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SelfLinkWithPolicyId`<sup>Required</sup> <a name="SelfLinkWithPolicyId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.selfLinkWithPolicyId"></a>

```csharp
public string SelfLinkWithPolicyId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.timeouts"></a>

```csharp
public ComputeRegionSecurityPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference">ComputeRegionSecurityPolicyTimeoutsOutputReference</a>

---

##### `UserDefinedFields`<sup>Required</sup> <a name="UserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.userDefinedFields"></a>

```csharp
public ComputeRegionSecurityPolicyUserDefinedFieldsList UserDefinedFields { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList">ComputeRegionSecurityPolicyUserDefinedFieldsList</a>

---

##### `AdvancedOptionsConfigInput`<sup>Optional</sup> <a name="AdvancedOptionsConfigInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.advancedOptionsConfigInput"></a>

```csharp
public ComputeRegionSecurityPolicyAdvancedOptionsConfig AdvancedOptionsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfig</a>

---

##### `DdosProtectionConfigInput`<sup>Optional</sup> <a name="DdosProtectionConfigInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.ddosProtectionConfigInput"></a>

```csharp
public ComputeRegionSecurityPolicyDdosProtectionConfig DdosProtectionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserDefinedFieldsInput`<sup>Optional</sup> <a name="UserDefinedFieldsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.userDefinedFieldsInput"></a>

```csharp
public object UserDefinedFieldsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionSecurityPolicyAdvancedOptionsConfig <a name="ComputeRegionSecurityPolicyAdvancedOptionsConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyAdvancedOptionsConfig {
    ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig JsonCustomConfig = null,
    string JsonParsing = null,
    string LogLevel = null,
    string[] UserIpRequestHeaders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig">JsonCustomConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | json_custom_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig.property.jsonParsing">JsonParsing</a></code> | <code>string</code> | JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"]. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig.property.logLevel">LogLevel</a></code> | <code>string</code> | Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"]. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders">UserIpRequestHeaders</a></code> | <code>string[]</code> | An optional list of case-insensitive request header names to use for resolving the callers client IP address. |

---

##### `JsonCustomConfig`<sup>Optional</sup> <a name="JsonCustomConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig"></a>

```csharp
public ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig JsonCustomConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

json_custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#json_custom_config ComputeRegionSecurityPolicy#json_custom_config}

---

##### `JsonParsing`<sup>Optional</sup> <a name="JsonParsing" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig.property.jsonParsing"></a>

```csharp
public string JsonParsing { get; set; }
```

- *Type:* string

JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#json_parsing ComputeRegionSecurityPolicy#json_parsing}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#log_level ComputeRegionSecurityPolicy#log_level}

---

##### `UserIpRequestHeaders`<sup>Optional</sup> <a name="UserIpRequestHeaders" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders"></a>

```csharp
public string[] UserIpRequestHeaders { get; set; }
```

- *Type:* string[]

An optional list of case-insensitive request header names to use for resolving the callers client IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#user_ip_request_headers ComputeRegionSecurityPolicy#user_ip_request_headers}

---

### ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig {
    string[] ContentTypes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes">ContentTypes</a></code> | <code>string[]</code> | A list of custom Content-Type header values to apply the JSON parsing. |

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes"></a>

```csharp
public string[] ContentTypes { get; set; }
```

- *Type:* string[]

A list of custom Content-Type header values to apply the JSON parsing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#content_types ComputeRegionSecurityPolicy#content_types}

---

### ComputeRegionSecurityPolicyConfig <a name="ComputeRegionSecurityPolicyConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    ComputeRegionSecurityPolicyAdvancedOptionsConfig AdvancedOptionsConfig = null,
    ComputeRegionSecurityPolicyDdosProtectionConfig DdosProtectionConfig = null,
    string Description = null,
    string Id = null,
    string Project = null,
    string Region = null,
    object Rules = null,
    ComputeRegionSecurityPolicyTimeouts Timeouts = null,
    string Type = null,
    object UserDefinedFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.advancedOptionsConfig">AdvancedOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.ddosProtectionConfig">DdosProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | ddos_protection_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#id ComputeRegionSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#project ComputeRegionSecurityPolicy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.region">Region</a></code> | <code>string</code> | The Region in which the created Region Security Policy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.type">Type</a></code> | <code>string</code> | The type indicates the intended use of the security policy. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.userDefinedFields">UserDefinedFields</a></code> | <code>object</code> | user_defined_fields block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#name ComputeRegionSecurityPolicy#name}

---

##### `AdvancedOptionsConfig`<sup>Optional</sup> <a name="AdvancedOptionsConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.advancedOptionsConfig"></a>

```csharp
public ComputeRegionSecurityPolicyAdvancedOptionsConfig AdvancedOptionsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#advanced_options_config ComputeRegionSecurityPolicy#advanced_options_config}

---

##### `DdosProtectionConfig`<sup>Optional</sup> <a name="DdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.ddosProtectionConfig"></a>

```csharp
public ComputeRegionSecurityPolicyDdosProtectionConfig DdosProtectionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a>

ddos_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#ddos_protection_config ComputeRegionSecurityPolicy#ddos_protection_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#description ComputeRegionSecurityPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#id ComputeRegionSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#project ComputeRegionSecurityPolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Region in which the created Region Security Policy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#region ComputeRegionSecurityPolicy#region}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#rules ComputeRegionSecurityPolicy#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.timeouts"></a>

```csharp
public ComputeRegionSecurityPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#timeouts ComputeRegionSecurityPolicy#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type indicates the intended use of the security policy.

* CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
* CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
* CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
  This field can be set only at resource creation time. Possible values: ["CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#type ComputeRegionSecurityPolicy#type}

---

##### `UserDefinedFields`<sup>Optional</sup> <a name="UserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.userDefinedFields"></a>

```csharp
public object UserDefinedFields { get; set; }
```

- *Type:* object

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#user_defined_fields ComputeRegionSecurityPolicy#user_defined_fields}

---

### ComputeRegionSecurityPolicyDdosProtectionConfig <a name="ComputeRegionSecurityPolicyDdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyDdosProtectionConfig {
    string DdosProtection
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig.property.ddosProtection">DdosProtection</a></code> | <code>string</code> | Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses. |

---

##### `DdosProtection`<sup>Required</sup> <a name="DdosProtection" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig.property.ddosProtection"></a>

```csharp
public string DdosProtection { get; set; }
```

- *Type:* string

Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses.

* ADVANCED: additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.
* ADVANCED_PREVIEW: flag to enable the security policy in preview mode. Possible values: ["ADVANCED", "ADVANCED_PREVIEW", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#ddos_protection ComputeRegionSecurityPolicy#ddos_protection}

---

### ComputeRegionSecurityPolicyRules <a name="ComputeRegionSecurityPolicyRules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRules {
    string Action,
    double Priority,
    string Description = null,
    ComputeRegionSecurityPolicyRulesMatch Match = null,
    ComputeRegionSecurityPolicyRulesNetworkMatch NetworkMatch = null,
    ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig PreconfiguredWafConfig = null,
    object Preview = null,
    ComputeRegionSecurityPolicyRulesRateLimitOptions RateLimitOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.action">Action</a></code> | <code>string</code> | The Action to perform when the rule is matched. The following are the valid actions:. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.priority">Priority</a></code> | <code>double</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.networkMatch">NetworkMatch</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | network_match block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.preview">Preview</a></code> | <code>object</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | rate_limit_options block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The Action to perform when the rule is matched. The following are the valid actions:.

* allow: allow access to target.
* deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.
* rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.
* redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.
* throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#action ComputeRegionSecurityPolicy#action}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#priority ComputeRegionSecurityPolicy#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#description ComputeRegionSecurityPolicy#description}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.match"></a>

```csharp
public ComputeRegionSecurityPolicyRulesMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#match ComputeRegionSecurityPolicy#match}

---

##### `NetworkMatch`<sup>Optional</sup> <a name="NetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.networkMatch"></a>

```csharp
public ComputeRegionSecurityPolicyRulesNetworkMatch NetworkMatch { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a>

network_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#network_match ComputeRegionSecurityPolicy#network_match}

---

##### `PreconfiguredWafConfig`<sup>Optional</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.preconfiguredWafConfig"></a>

```csharp
public ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig PreconfiguredWafConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#preconfigured_waf_config ComputeRegionSecurityPolicy#preconfigured_waf_config}

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.preview"></a>

```csharp
public object Preview { get; set; }
```

- *Type:* object

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#preview ComputeRegionSecurityPolicy#preview}

---

##### `RateLimitOptions`<sup>Optional</sup> <a name="RateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.rateLimitOptions"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptions RateLimitOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#rate_limit_options ComputeRegionSecurityPolicy#rate_limit_options}

---

### ComputeRegionSecurityPolicyRulesMatch <a name="ComputeRegionSecurityPolicyRulesMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesMatch {
    ComputeRegionSecurityPolicyRulesMatchConfig Config = null,
    ComputeRegionSecurityPolicyRulesMatchExpr Expr = null,
    string VersionedExpr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.versionedExpr">VersionedExpr</a></code> | <code>string</code> | Preconfigured versioned expression. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.config"></a>

```csharp
public ComputeRegionSecurityPolicyRulesMatchConfig Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#config ComputeRegionSecurityPolicy#config}

---

##### `Expr`<sup>Optional</sup> <a name="Expr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.expr"></a>

```csharp
public ComputeRegionSecurityPolicyRulesMatchExpr Expr { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#expr ComputeRegionSecurityPolicy#expr}

---

##### `VersionedExpr`<sup>Optional</sup> <a name="VersionedExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.versionedExpr"></a>

```csharp
public string VersionedExpr { get; set; }
```

- *Type:* string

Preconfigured versioned expression.

If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#versioned_expr ComputeRegionSecurityPolicy#versioned_expr}

---

### ComputeRegionSecurityPolicyRulesMatchConfig <a name="ComputeRegionSecurityPolicyRulesMatchConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesMatchConfig {
    string[] SrcIpRanges = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of srcIpRanges allowed is 10. |

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; set; }
```

- *Type:* string[]

CIDR IP address range. Maximum number of srcIpRanges allowed is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#src_ip_ranges ComputeRegionSecurityPolicy#src_ip_ranges}

---

### ComputeRegionSecurityPolicyRulesMatchExpr <a name="ComputeRegionSecurityPolicyRulesMatchExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesMatchExpr {
    string Expression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#expression ComputeRegionSecurityPolicy#expression}

---

### ComputeRegionSecurityPolicyRulesNetworkMatch <a name="ComputeRegionSecurityPolicyRulesNetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesNetworkMatch {
    string[] DestIpRanges = null,
    string[] DestPorts = null,
    string[] IpProtocols = null,
    double[] SrcAsns = null,
    string[] SrcIpRanges = null,
    string[] SrcPorts = null,
    string[] SrcRegionCodes = null,
    object UserDefinedFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.destIpRanges">DestIpRanges</a></code> | <code>string[]</code> | Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.destPorts">DestPorts</a></code> | <code>string[]</code> | Destination port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.ipProtocols">IpProtocols</a></code> | <code>string[]</code> | IPv4 protocol / IPv6 next header (after extension headers). |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcAsns">SrcAsns</a></code> | <code>double[]</code> | BGP Autonomous System Number associated with the source IP address. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcPorts">SrcPorts</a></code> | <code>string[]</code> | Source port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>string[]</code> | Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.userDefinedFields">UserDefinedFields</a></code> | <code>object</code> | user_defined_fields block. |

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.destIpRanges"></a>

```csharp
public string[] DestIpRanges { get; set; }
```

- *Type:* string[]

Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#dest_ip_ranges ComputeRegionSecurityPolicy#dest_ip_ranges}

---

##### `DestPorts`<sup>Optional</sup> <a name="DestPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.destPorts"></a>

```csharp
public string[] DestPorts { get; set; }
```

- *Type:* string[]

Destination port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#dest_ports ComputeRegionSecurityPolicy#dest_ports}

---

##### `IpProtocols`<sup>Optional</sup> <a name="IpProtocols" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.ipProtocols"></a>

```csharp
public string[] IpProtocols { get; set; }
```

- *Type:* string[]

IPv4 protocol / IPv6 next header (after extension headers).

Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#ip_protocols ComputeRegionSecurityPolicy#ip_protocols}

---

##### `SrcAsns`<sup>Optional</sup> <a name="SrcAsns" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcAsns"></a>

```csharp
public double[] SrcAsns { get; set; }
```

- *Type:* double[]

BGP Autonomous System Number associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#src_asns ComputeRegionSecurityPolicy#src_asns}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; set; }
```

- *Type:* string[]

Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#src_ip_ranges ComputeRegionSecurityPolicy#src_ip_ranges}

---

##### `SrcPorts`<sup>Optional</sup> <a name="SrcPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcPorts"></a>

```csharp
public string[] SrcPorts { get; set; }
```

- *Type:* string[]

Source port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#src_ports ComputeRegionSecurityPolicy#src_ports}

---

##### `SrcRegionCodes`<sup>Optional</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcRegionCodes"></a>

```csharp
public string[] SrcRegionCodes { get; set; }
```

- *Type:* string[]

Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#src_region_codes ComputeRegionSecurityPolicy#src_region_codes}

---

##### `UserDefinedFields`<sup>Optional</sup> <a name="UserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.userDefinedFields"></a>

```csharp
public object UserDefinedFields { get; set; }
```

- *Type:* object

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#user_defined_fields ComputeRegionSecurityPolicy#user_defined_fields}

---

### ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields <a name="ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields {
    string Name = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.name">Name</a></code> | <code>string</code> | Name of the user-defined field, as given in the definition. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.values">Values</a></code> | <code>string[]</code> | Matching values of the field. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the user-defined field, as given in the definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#name ComputeRegionSecurityPolicy#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Matching values of the field.

Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#values ComputeRegionSecurityPolicy#values}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig {
    object Exclusion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.property.exclusion">Exclusion</a></code> | <code>object</code> | exclusion block. |

---

##### `Exclusion`<sup>Optional</sup> <a name="Exclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.property.exclusion"></a>

```csharp
public object Exclusion { get; set; }
```

- *Type:* object

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#exclusion ComputeRegionSecurityPolicy#exclusion}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion {
    string TargetRuleSet,
    object RequestCookie = null,
    object RequestHeader = null,
    object RequestQueryParam = null,
    object RequestUri = null,
    string[] TargetRuleIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleSet">TargetRuleSet</a></code> | <code>string</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestCookie">RequestCookie</a></code> | <code>object</code> | request_cookie block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestHeader">RequestHeader</a></code> | <code>object</code> | request_header block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestQueryParam">RequestQueryParam</a></code> | <code>object</code> | request_query_param block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestUri">RequestUri</a></code> | <code>object</code> | request_uri block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleIds">TargetRuleIds</a></code> | <code>string[]</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```csharp
public string TargetRuleSet { get; set; }
```

- *Type:* string

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#target_rule_set ComputeRegionSecurityPolicy#target_rule_set}

---

##### `RequestCookie`<sup>Optional</sup> <a name="RequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestCookie"></a>

```csharp
public object RequestCookie { get; set; }
```

- *Type:* object

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#request_cookie ComputeRegionSecurityPolicy#request_cookie}

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestHeader"></a>

```csharp
public object RequestHeader { get; set; }
```

- *Type:* object

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#request_header ComputeRegionSecurityPolicy#request_header}

---

##### `RequestQueryParam`<sup>Optional</sup> <a name="RequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```csharp
public object RequestQueryParam { get; set; }
```

- *Type:* object

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#request_query_param ComputeRegionSecurityPolicy#request_query_param}

---

##### `RequestUri`<sup>Optional</sup> <a name="RequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestUri"></a>

```csharp
public object RequestUri { get; set; }
```

- *Type:* object

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#request_uri ComputeRegionSecurityPolicy#request_uri}

---

##### `TargetRuleIds`<sup>Optional</sup> <a name="TargetRuleIds" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```csharp
public string[] TargetRuleIds { get; set; }
```

- *Type:* string[]

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#target_rule_ids ComputeRegionSecurityPolicy#target_rule_ids}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie {
    string Operator,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.operator">Operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.value">Value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#operator ComputeRegionSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#value ComputeRegionSecurityPolicy#value}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader {
    string Operator,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.operator">Operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.value">Value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#operator ComputeRegionSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#value ComputeRegionSecurityPolicy#value}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam {
    string Operator,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.operator">Operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.value">Value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#operator ComputeRegionSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#value ComputeRegionSecurityPolicy#value}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri {
    string Operator,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.operator">Operator</a></code> | <code>string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.value">Value</a></code> | <code>string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#operator ComputeRegionSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#value ComputeRegionSecurityPolicy#value}

---

### ComputeRegionSecurityPolicyRulesRateLimitOptions <a name="ComputeRegionSecurityPolicyRulesRateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesRateLimitOptions {
    double BanDurationSec = null,
    ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold BanThreshold = null,
    string ConformAction = null,
    string EnforceOnKey = null,
    object EnforceOnKeyConfigs = null,
    string EnforceOnKeyName = null,
    string ExceedAction = null,
    ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold RateLimitThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.banDurationSec">BanDurationSec</a></code> | <code>double</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.conformAction">ConformAction</a></code> | <code>string</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKey">EnforceOnKey</a></code> | <code>string</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code>object</code> | enforce_on_key_configs block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.exceedAction">ExceedAction</a></code> | <code>string</code> | Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | rate_limit_threshold block. |

---

##### `BanDurationSec`<sup>Optional</sup> <a name="BanDurationSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.banDurationSec"></a>

```csharp
public double BanDurationSec { get; set; }
```

- *Type:* double

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#ban_duration_sec ComputeRegionSecurityPolicy#ban_duration_sec}

---

##### `BanThreshold`<sup>Optional</sup> <a name="BanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.banThreshold"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold BanThreshold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#ban_threshold ComputeRegionSecurityPolicy#ban_threshold}

---

##### `ConformAction`<sup>Optional</sup> <a name="ConformAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.conformAction"></a>

```csharp
public string ConformAction { get; set; }
```

- *Type:* string

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#conform_action ComputeRegionSecurityPolicy#conform_action}

---

##### `EnforceOnKey`<sup>Optional</sup> <a name="EnforceOnKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKey"></a>

```csharp
public string EnforceOnKey { get; set; }
```

- *Type:* string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* TLS_JA4_FINGERPRINT: JA4 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "TLS_JA4_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#enforce_on_key ComputeRegionSecurityPolicy#enforce_on_key}

---

##### `EnforceOnKeyConfigs`<sup>Optional</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyConfigs"></a>

```csharp
public object EnforceOnKeyConfigs { get; set; }
```

- *Type:* object

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#enforce_on_key_configs ComputeRegionSecurityPolicy#enforce_on_key_configs}

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyName"></a>

```csharp
public string EnforceOnKeyName { get; set; }
```

- *Type:* string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#enforce_on_key_name ComputeRegionSecurityPolicy#enforce_on_key_name}

---

##### `ExceedAction`<sup>Optional</sup> <a name="ExceedAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.exceedAction"></a>

```csharp
public string ExceedAction { get; set; }
```

- *Type:* string

Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code.

Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#exceed_action ComputeRegionSecurityPolicy#exceed_action}

---

##### `RateLimitThreshold`<sup>Optional</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.rateLimitThreshold"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold RateLimitThreshold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#rate_limit_threshold ComputeRegionSecurityPolicy#rate_limit_threshold}

---

### ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold {
    double Count = null,
    double IntervalSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.count">Count</a></code> | <code>double</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.intervalSec">IntervalSec</a></code> | <code>double</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#count ComputeRegionSecurityPolicy#count}

---

##### `IntervalSec`<sup>Optional</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.intervalSec"></a>

```csharp
public double IntervalSec { get; set; }
```

- *Type:* double

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#interval_sec ComputeRegionSecurityPolicy#interval_sec}

---

### ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs {
    string EnforceOnKeyName = null,
    string EnforceOnKeyType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>string</code> | Determines the key to enforce the rateLimitThreshold on. |

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName"></a>

```csharp
public string EnforceOnKeyName { get; set; }
```

- *Type:* string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#enforce_on_key_name ComputeRegionSecurityPolicy#enforce_on_key_name}

---

##### `EnforceOnKeyType`<sup>Optional</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType"></a>

```csharp
public string EnforceOnKeyType { get; set; }
```

- *Type:* string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKeyConfigs" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* TLS_JA4_FINGERPRINT: JA4 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "TLS_JA4_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#enforce_on_key_type ComputeRegionSecurityPolicy#enforce_on_key_type}

---

### ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold {
    double Count = null,
    double IntervalSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.count">Count</a></code> | <code>double</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.intervalSec">IntervalSec</a></code> | <code>double</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#count ComputeRegionSecurityPolicy#count}

---

##### `IntervalSec`<sup>Optional</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.intervalSec"></a>

```csharp
public double IntervalSec { get; set; }
```

- *Type:* double

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#interval_sec ComputeRegionSecurityPolicy#interval_sec}

---

### ComputeRegionSecurityPolicyTimeouts <a name="ComputeRegionSecurityPolicyTimeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#create ComputeRegionSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#delete ComputeRegionSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#update ComputeRegionSecurityPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#create ComputeRegionSecurityPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#delete ComputeRegionSecurityPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#update ComputeRegionSecurityPolicy#update}.

---

### ComputeRegionSecurityPolicyUserDefinedFields <a name="ComputeRegionSecurityPolicyUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyUserDefinedFields {
    string Base,
    string Mask = null,
    string Name = null,
    double Offset = null,
    double Size = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.base">Base</a></code> | <code>string</code> | The base relative to which 'offset' is measured. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.mask">Mask</a></code> | <code>string</code> | If specified, apply this mask (bitwise AND) to the field to ignore bits before matching. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.name">Name</a></code> | <code>string</code> | The name of this field. Must be unique within the policy. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.offset">Offset</a></code> | <code>double</code> | Offset of the first byte of the field (in network byte order) relative to 'base'. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.size">Size</a></code> | <code>double</code> | Size of the field in bytes. Valid values: 1-4. |

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.base"></a>

```csharp
public string Base { get; set; }
```

- *Type:* string

The base relative to which 'offset' is measured.

Possible values are:

* IPV4: Points to the beginning of the IPv4 header.
* IPV6: Points to the beginning of the IPv6 header.
* TCP: Points to the beginning of the TCP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.
* UDP: Points to the beginning of the UDP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments. Possible values: ["IPV4", "IPV6", "TCP", "UDP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#base ComputeRegionSecurityPolicy#base}

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.mask"></a>

```csharp
public string Mask { get; set; }
```

- *Type:* string

If specified, apply this mask (bitwise AND) to the field to ignore bits before matching.

Encoded as a hexadecimal number (starting with "0x").
The last byte of the field (in network byte order) corresponds to the least significant byte of the mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#mask ComputeRegionSecurityPolicy#mask}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this field. Must be unique within the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#name ComputeRegionSecurityPolicy#name}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.offset"></a>

```csharp
public double Offset { get; set; }
```

- *Type:* double

Offset of the first byte of the field (in network byte order) relative to 'base'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#offset ComputeRegionSecurityPolicy#offset}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Size of the field in bytes. Valid values: 1-4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_region_security_policy#size ComputeRegionSecurityPolicy#size}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput">ContentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">ContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentTypesInput`<sup>Optional</sup> <a name="ContentTypesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput"></a>

```csharp
public string[] ContentTypesInput { get; }
```

- *Type:* string[]

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```csharp
public string[] ContentTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference <a name="ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig">PutJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig">ResetJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing">ResetJsonParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders">ResetUserIpRequestHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJsonCustomConfig` <a name="PutJsonCustomConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig"></a>

```csharp
private void PutJsonCustomConfig(ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `ResetJsonCustomConfig` <a name="ResetJsonCustomConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig"></a>

```csharp
private void ResetJsonCustomConfig()
```

##### `ResetJsonParsing` <a name="ResetJsonParsing" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing"></a>

```csharp
private void ResetJsonParsing()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```

##### `ResetUserIpRequestHeaders` <a name="ResetUserIpRequestHeaders" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders"></a>

```csharp
private void ResetUserIpRequestHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">JsonCustomConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput">JsonCustomConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput">JsonParsingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput">UserIpRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">JsonParsing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">UserIpRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonCustomConfig`<sup>Required</sup> <a name="JsonCustomConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```csharp
public ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference JsonCustomConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a>

---

##### `JsonCustomConfigInput`<sup>Optional</sup> <a name="JsonCustomConfigInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput"></a>

```csharp
public ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig JsonCustomConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `JsonParsingInput`<sup>Optional</sup> <a name="JsonParsingInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput"></a>

```csharp
public string JsonParsingInput { get; }
```

- *Type:* string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `UserIpRequestHeadersInput`<sup>Optional</sup> <a name="UserIpRequestHeadersInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput"></a>

```csharp
public string[] UserIpRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `JsonParsing`<sup>Required</sup> <a name="JsonParsing" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```csharp
public string JsonParsing { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `UserIpRequestHeaders`<sup>Required</sup> <a name="UserIpRequestHeaders" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```csharp
public string[] UserIpRequestHeaders { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionSecurityPolicyAdvancedOptionsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyAdvancedOptionsConfig">ComputeRegionSecurityPolicyAdvancedOptionsConfig</a>

---


### ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference <a name="ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtectionInput">DdosProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection">DdosProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DdosProtectionInput`<sup>Optional</sup> <a name="DdosProtectionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtectionInput"></a>

```csharp
public string DdosProtectionInput { get; }
```

- *Type:* string

---

##### `DdosProtection`<sup>Required</sup> <a name="DdosProtection" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection"></a>

```csharp
public string DdosProtection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionSecurityPolicyDdosProtectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a>

---


### ComputeRegionSecurityPolicyRulesList <a name="ComputeRegionSecurityPolicyRulesList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.get"></a>

```csharp
private ComputeRegionSecurityPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesMatchConfigOutputReference <a name="ComputeRegionSecurityPolicyRulesMatchConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesMatchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resetSrcIpRanges"></a>

```csharp
private void ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRangesInput"></a>

```csharp
public string[] SrcIpRangesInput { get; }
```

- *Type:* string[]

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionSecurityPolicyRulesMatchConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a>

---


### ComputeRegionSecurityPolicyRulesMatchExprOutputReference <a name="ComputeRegionSecurityPolicyRulesMatchExprOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesMatchExprOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionSecurityPolicyRulesMatchExpr InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a>

---


### ComputeRegionSecurityPolicyRulesMatchOutputReference <a name="ComputeRegionSecurityPolicyRulesMatchOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr">PutExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetExpr">ResetExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetVersionedExpr">ResetVersionedExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig"></a>

```csharp
private void PutConfig(ComputeRegionSecurityPolicyRulesMatchConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a>

---

##### `PutExpr` <a name="PutExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr"></a>

```csharp
private void PutExpr(ComputeRegionSecurityPolicyRulesMatchExpr Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetExpr` <a name="ResetExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetExpr"></a>

```csharp
private void ResetExpr()
```

##### `ResetVersionedExpr` <a name="ResetVersionedExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetVersionedExpr"></a>

```csharp
private void ResetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference">ComputeRegionSecurityPolicyRulesMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference">ComputeRegionSecurityPolicyRulesMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.exprInput">ExprInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExprInput">VersionedExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.config"></a>

```csharp
public ComputeRegionSecurityPolicyRulesMatchConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference">ComputeRegionSecurityPolicyRulesMatchConfigOutputReference</a>

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr"></a>

```csharp
public ComputeRegionSecurityPolicyRulesMatchExprOutputReference Expr { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference">ComputeRegionSecurityPolicyRulesMatchExprOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.configInput"></a>

```csharp
public ComputeRegionSecurityPolicyRulesMatchConfig ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a>

---

##### `ExprInput`<sup>Optional</sup> <a name="ExprInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.exprInput"></a>

```csharp
public ComputeRegionSecurityPolicyRulesMatchExpr ExprInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a>

---

##### `VersionedExprInput`<sup>Optional</sup> <a name="VersionedExprInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExprInput"></a>

```csharp
public string VersionedExprInput { get; }
```

- *Type:* string

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr"></a>

```csharp
public string VersionedExpr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionSecurityPolicyRulesMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a>

---


### ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference <a name="ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields">PutUserDefinedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestPorts">ResetDestPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetIpProtocols">ResetIpProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcAsns">ResetSrcAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcPorts">ResetSrcPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcRegionCodes">ResetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetUserDefinedFields">ResetUserDefinedFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUserDefinedFields` <a name="PutUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields"></a>

```csharp
private void PutUserDefinedFields(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields.parameter.value"></a>

- *Type:* object

---

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestIpRanges"></a>

```csharp
private void ResetDestIpRanges()
```

##### `ResetDestPorts` <a name="ResetDestPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestPorts"></a>

```csharp
private void ResetDestPorts()
```

##### `ResetIpProtocols` <a name="ResetIpProtocols" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetIpProtocols"></a>

```csharp
private void ResetIpProtocols()
```

##### `ResetSrcAsns` <a name="ResetSrcAsns" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcAsns"></a>

```csharp
private void ResetSrcAsns()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcIpRanges"></a>

```csharp
private void ResetSrcIpRanges()
```

##### `ResetSrcPorts` <a name="ResetSrcPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcPorts"></a>

```csharp
private void ResetSrcPorts()
```

##### `ResetSrcRegionCodes` <a name="ResetSrcRegionCodes" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcRegionCodes"></a>

```csharp
private void ResetSrcRegionCodes()
```

##### `ResetUserDefinedFields` <a name="ResetUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetUserDefinedFields"></a>

```csharp
private void ResetUserDefinedFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields">UserDefinedFields</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPortsInput">DestPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocolsInput">IpProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsnsInput">SrcAsnsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPortsInput">SrcPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodesInput">SrcRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFieldsInput">UserDefinedFieldsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts">DestPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols">IpProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns">SrcAsns</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts">SrcPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserDefinedFields`<sup>Required</sup> <a name="UserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields"></a>

```csharp
public ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList UserDefinedFields { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a>

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRangesInput"></a>

```csharp
public string[] DestIpRangesInput { get; }
```

- *Type:* string[]

---

##### `DestPortsInput`<sup>Optional</sup> <a name="DestPortsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPortsInput"></a>

```csharp
public string[] DestPortsInput { get; }
```

- *Type:* string[]

---

##### `IpProtocolsInput`<sup>Optional</sup> <a name="IpProtocolsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocolsInput"></a>

```csharp
public string[] IpProtocolsInput { get; }
```

- *Type:* string[]

---

##### `SrcAsnsInput`<sup>Optional</sup> <a name="SrcAsnsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsnsInput"></a>

```csharp
public double[] SrcAsnsInput { get; }
```

- *Type:* double[]

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRangesInput"></a>

```csharp
public string[] SrcIpRangesInput { get; }
```

- *Type:* string[]

---

##### `SrcPortsInput`<sup>Optional</sup> <a name="SrcPortsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPortsInput"></a>

```csharp
public string[] SrcPortsInput { get; }
```

- *Type:* string[]

---

##### `SrcRegionCodesInput`<sup>Optional</sup> <a name="SrcRegionCodesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodesInput"></a>

```csharp
public string[] SrcRegionCodesInput { get; }
```

- *Type:* string[]

---

##### `UserDefinedFieldsInput`<sup>Optional</sup> <a name="UserDefinedFieldsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFieldsInput"></a>

```csharp
public object UserDefinedFieldsInput { get; }
```

- *Type:* object

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges"></a>

```csharp
public string[] DestIpRanges { get; }
```

- *Type:* string[]

---

##### `DestPorts`<sup>Required</sup> <a name="DestPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts"></a>

```csharp
public string[] DestPorts { get; }
```

- *Type:* string[]

---

##### `IpProtocols`<sup>Required</sup> <a name="IpProtocols" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols"></a>

```csharp
public string[] IpProtocols { get; }
```

- *Type:* string[]

---

##### `SrcAsns`<sup>Required</sup> <a name="SrcAsns" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns"></a>

```csharp
public double[] SrcAsns { get; }
```

- *Type:* double[]

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; }
```

- *Type:* string[]

---

##### `SrcPorts`<sup>Required</sup> <a name="SrcPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts"></a>

```csharp
public string[] SrcPorts { get; }
```

- *Type:* string[]

---

##### `SrcRegionCodes`<sup>Required</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes"></a>

```csharp
public string[] SrcRegionCodes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionSecurityPolicyRulesNetworkMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a>

---


### ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList <a name="ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get"></a>

```csharp
private ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference <a name="ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesOutputReference <a name="ComputeRegionSecurityPolicyRulesOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch">PutNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig">PutPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions">PutRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetNetworkMatch">ResetNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetPreconfiguredWafConfig">ResetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetRateLimitOptions">ResetRateLimitOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putMatch"></a>

```csharp
private void PutMatch(ComputeRegionSecurityPolicyRulesMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a>

---

##### `PutNetworkMatch` <a name="PutNetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch"></a>

```csharp
private void PutNetworkMatch(ComputeRegionSecurityPolicyRulesNetworkMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a>

---

##### `PutPreconfiguredWafConfig` <a name="PutPreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig"></a>

```csharp
private void PutPreconfiguredWafConfig(ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---

##### `PutRateLimitOptions` <a name="PutRateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions"></a>

```csharp
private void PutRateLimitOptions(ComputeRegionSecurityPolicyRulesRateLimitOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```

##### `ResetNetworkMatch` <a name="ResetNetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetNetworkMatch"></a>

```csharp
private void ResetNetworkMatch()
```

##### `ResetPreconfiguredWafConfig` <a name="ResetPreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetPreconfiguredWafConfig"></a>

```csharp
private void ResetPreconfiguredWafConfig()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetPreview"></a>

```csharp
private void ResetPreview()
```

##### `ResetRateLimitOptions` <a name="ResetRateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetRateLimitOptions"></a>

```csharp
private void ResetRateLimitOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference">ComputeRegionSecurityPolicyRulesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch">NetworkMatch</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference">ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.networkMatchInput">NetworkMatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfigInput">PreconfiguredWafConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.previewInput">PreviewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptionsInput">RateLimitOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preview">Preview</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.match"></a>

```csharp
public ComputeRegionSecurityPolicyRulesMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference">ComputeRegionSecurityPolicyRulesMatchOutputReference</a>

---

##### `NetworkMatch`<sup>Required</sup> <a name="NetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch"></a>

```csharp
public ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference NetworkMatch { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference">ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference</a>

---

##### `PreconfiguredWafConfig`<sup>Required</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig"></a>

```csharp
public ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference PreconfiguredWafConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference</a>

---

##### `RateLimitOptions`<sup>Required</sup> <a name="RateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference RateLimitOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.matchInput"></a>

```csharp
public ComputeRegionSecurityPolicyRulesMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a>

---

##### `NetworkMatchInput`<sup>Optional</sup> <a name="NetworkMatchInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.networkMatchInput"></a>

```csharp
public ComputeRegionSecurityPolicyRulesNetworkMatch NetworkMatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a>

---

##### `PreconfiguredWafConfigInput`<sup>Optional</sup> <a name="PreconfiguredWafConfigInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfigInput"></a>

```csharp
public ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig PreconfiguredWafConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.previewInput"></a>

```csharp
public object PreviewInput { get; }
```

- *Type:* object

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RateLimitOptionsInput`<sup>Optional</sup> <a name="RateLimitOptionsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptionsInput"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptions RateLimitOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preview"></a>

```csharp
public object Preview { get; }
```

- *Type:* object

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get"></a>

```csharp
private ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie">PutRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">PutRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri">PutRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">ResetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">ResetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestUri">ResetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">ResetTargetRuleIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestCookie` <a name="PutRequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```csharp
private void PutRequestCookie(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* object

---

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```csharp
private void PutRequestHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* object

---

##### `PutRequestQueryParam` <a name="PutRequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```csharp
private void PutRequestQueryParam(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* object

---

##### `PutRequestUri` <a name="PutRequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```csharp
private void PutRequestUri(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* object

---

##### `ResetRequestCookie` <a name="ResetRequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```csharp
private void ResetRequestCookie()
```

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```csharp
private void ResetRequestHeader()
```

##### `ResetRequestQueryParam` <a name="ResetRequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```csharp
private void ResetRequestQueryParam()
```

##### `ResetRequestUri` <a name="ResetRequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```csharp
private void ResetRequestUri()
```

##### `ResetTargetRuleIds` <a name="ResetTargetRuleIds" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```csharp
private void ResetTargetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie">RequestCookie</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">RequestQueryParam</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri">RequestUri</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">RequestCookieInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">RequestQueryParamInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">RequestUriInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">TargetRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">TargetRuleSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">TargetRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">TargetRuleSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequestCookie`<sup>Required</sup> <a name="RequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```csharp
public ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList RequestCookie { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```csharp
public ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList RequestHeader { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `RequestQueryParam`<sup>Required</sup> <a name="RequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```csharp
public ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList RequestQueryParam { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```csharp
public ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList RequestUri { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `RequestCookieInput`<sup>Optional</sup> <a name="RequestCookieInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```csharp
public object RequestCookieInput { get; }
```

- *Type:* object

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```csharp
public object RequestHeaderInput { get; }
```

- *Type:* object

---

##### `RequestQueryParamInput`<sup>Optional</sup> <a name="RequestQueryParamInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```csharp
public object RequestQueryParamInput { get; }
```

- *Type:* object

---

##### `RequestUriInput`<sup>Optional</sup> <a name="RequestUriInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```csharp
public object RequestUriInput { get; }
```

- *Type:* object

---

##### `TargetRuleIdsInput`<sup>Optional</sup> <a name="TargetRuleIdsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```csharp
public string[] TargetRuleIdsInput { get; }
```

- *Type:* string[]

---

##### `TargetRuleSetInput`<sup>Optional</sup> <a name="TargetRuleSetInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```csharp
public string TargetRuleSetInput { get; }
```

- *Type:* string

---

##### `TargetRuleIds`<sup>Required</sup> <a name="TargetRuleIds" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```csharp
public string[] TargetRuleIds { get; }
```

- *Type:* string[]

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```csharp
public string TargetRuleSet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```csharp
private ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```csharp
private ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```csharp
private ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get"></a>

```csharp
private ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion">PutExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resetExclusion">ResetExclusion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusion` <a name="PutExclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion"></a>

```csharp
private void PutExclusion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* object

---

##### `ResetExclusion` <a name="ResetExclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resetExclusion"></a>

```csharp
private void ResetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion">Exclusion</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusionInput">ExclusionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Exclusion`<sup>Required</sup> <a name="Exclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion"></a>

```csharp
public ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList Exclusion { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a>

---

##### `ExclusionInput`<sup>Optional</sup> <a name="ExclusionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```csharp
public object ExclusionInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetIntervalSec">ResetIntervalSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetIntervalSec` <a name="ResetIntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetIntervalSec"></a>

```csharp
private void ResetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput"></a>

```csharp
public double IntervalSecInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```csharp
public double IntervalSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```csharp
private ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType">ResetEnforceOnKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName"></a>

```csharp
private void ResetEnforceOnKeyName()
```

##### `ResetEnforceOnKeyType` <a name="ResetEnforceOnKeyType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType"></a>

```csharp
private void ResetEnforceOnKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput">EnforceOnKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput"></a>

```csharp
public string EnforceOnKeyNameInput { get; }
```

- *Type:* string

---

##### `EnforceOnKeyTypeInput`<sup>Optional</sup> <a name="EnforceOnKeyTypeInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput"></a>

```csharp
public string EnforceOnKeyTypeInput { get; }
```

- *Type:* string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```csharp
public string EnforceOnKeyName { get; }
```

- *Type:* string

---

##### `EnforceOnKeyType`<sup>Required</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```csharp
public string EnforceOnKeyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold">PutBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs">PutEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold">PutRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanDurationSec">ResetBanDurationSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanThreshold">ResetBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetConformAction">ResetConformAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKey">ResetEnforceOnKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs">ResetEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetExceedAction">ResetExceedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetRateLimitThreshold">ResetRateLimitThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBanThreshold` <a name="PutBanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold"></a>

```csharp
private void PutBanThreshold(ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---

##### `PutEnforceOnKeyConfigs` <a name="PutEnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs"></a>

```csharp
private void PutEnforceOnKeyConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutRateLimitThreshold` <a name="PutRateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold"></a>

```csharp
private void PutRateLimitThreshold(ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---

##### `ResetBanDurationSec` <a name="ResetBanDurationSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanDurationSec"></a>

```csharp
private void ResetBanDurationSec()
```

##### `ResetBanThreshold` <a name="ResetBanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanThreshold"></a>

```csharp
private void ResetBanThreshold()
```

##### `ResetConformAction` <a name="ResetConformAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetConformAction"></a>

```csharp
private void ResetConformAction()
```

##### `ResetEnforceOnKey` <a name="ResetEnforceOnKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKey"></a>

```csharp
private void ResetEnforceOnKey()
```

##### `ResetEnforceOnKeyConfigs` <a name="ResetEnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs"></a>

```csharp
private void ResetEnforceOnKeyConfigs()
```

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyName"></a>

```csharp
private void ResetEnforceOnKeyName()
```

##### `ResetExceedAction` <a name="ResetExceedAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetExceedAction"></a>

```csharp
private void ResetExceedAction()
```

##### `ResetRateLimitThreshold` <a name="ResetRateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetRateLimitThreshold"></a>

```csharp
private void ResetRateLimitThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSecInput">BanDurationSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThresholdInput">BanThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformActionInput">ConformActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput">EnforceOnKeyConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyInput">EnforceOnKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedActionInput">ExceedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThresholdInput">RateLimitThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec">BanDurationSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction">ConformAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey">EnforceOnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction">ExceedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BanThreshold`<sup>Required</sup> <a name="BanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference BanThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference</a>

---

##### `EnforceOnKeyConfigs`<sup>Required</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList EnforceOnKeyConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `RateLimitThreshold`<sup>Required</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference RateLimitThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference</a>

---

##### `BanDurationSecInput`<sup>Optional</sup> <a name="BanDurationSecInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSecInput"></a>

```csharp
public double BanDurationSecInput { get; }
```

- *Type:* double

---

##### `BanThresholdInput`<sup>Optional</sup> <a name="BanThresholdInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThresholdInput"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold BanThresholdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---

##### `ConformActionInput`<sup>Optional</sup> <a name="ConformActionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformActionInput"></a>

```csharp
public string ConformActionInput { get; }
```

- *Type:* string

---

##### `EnforceOnKeyConfigsInput`<sup>Optional</sup> <a name="EnforceOnKeyConfigsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput"></a>

```csharp
public object EnforceOnKeyConfigsInput { get; }
```

- *Type:* object

---

##### `EnforceOnKeyInput`<sup>Optional</sup> <a name="EnforceOnKeyInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyInput"></a>

```csharp
public string EnforceOnKeyInput { get; }
```

- *Type:* string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyNameInput"></a>

```csharp
public string EnforceOnKeyNameInput { get; }
```

- *Type:* string

---

##### `ExceedActionInput`<sup>Optional</sup> <a name="ExceedActionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedActionInput"></a>

```csharp
public string ExceedActionInput { get; }
```

- *Type:* string

---

##### `RateLimitThresholdInput`<sup>Optional</sup> <a name="RateLimitThresholdInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThresholdInput"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold RateLimitThresholdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---

##### `BanDurationSec`<sup>Required</sup> <a name="BanDurationSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec"></a>

```csharp
public double BanDurationSec { get; }
```

- *Type:* double

---

##### `ConformAction`<sup>Required</sup> <a name="ConformAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction"></a>

```csharp
public string ConformAction { get; }
```

- *Type:* string

---

##### `EnforceOnKey`<sup>Required</sup> <a name="EnforceOnKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```csharp
public string EnforceOnKey { get; }
```

- *Type:* string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```csharp
public string EnforceOnKeyName { get; }
```

- *Type:* string

---

##### `ExceedAction`<sup>Required</sup> <a name="ExceedAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction"></a>

```csharp
public string ExceedAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec">ResetIntervalSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetIntervalSec` <a name="ResetIntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec"></a>

```csharp
private void ResetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput"></a>

```csharp
public double IntervalSecInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```csharp
public double IntervalSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---


### ComputeRegionSecurityPolicyTimeoutsOutputReference <a name="ComputeRegionSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyUserDefinedFieldsList <a name="ComputeRegionSecurityPolicyUserDefinedFieldsList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyUserDefinedFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.get"></a>

```csharp
private ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference <a name="ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetMask"></a>

```csharp
private void ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetOffset"></a>

```csharp
private void ResetOffset()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.baseInput">BaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.maskInput">MaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offsetInput">OffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base">Base</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask">Mask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset">Offset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseInput`<sup>Optional</sup> <a name="BaseInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.baseInput"></a>

```csharp
public string BaseInput { get; }
```

- *Type:* string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.maskInput"></a>

```csharp
public string MaskInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offsetInput"></a>

```csharp
public double OffsetInput { get; }
```

- *Type:* double

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base"></a>

```csharp
public string Base { get; }
```

- *Type:* string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask"></a>

```csharp
public string Mask { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset"></a>

```csharp
public double Offset { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



