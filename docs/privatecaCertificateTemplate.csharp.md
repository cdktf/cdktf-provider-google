# `privatecaCertificateTemplate` Submodule <a name="`privatecaCertificateTemplate` Submodule" id="@cdktf/provider-google.privatecaCertificateTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatecaCertificateTemplate <a name="PrivatecaCertificateTemplate" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template google_privateca_certificate_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplate(Construct Scope, string Id, PrivatecaCertificateTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig">PrivatecaCertificateTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig">PrivatecaCertificateTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.putIdentityConstraints">PutIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.putPassthroughExtensions">PutPassthroughExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.putPredefinedValues">PutPredefinedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetIdentityConstraints">ResetIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetMaximumLifetime">ResetMaximumLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetPassthroughExtensions">ResetPassthroughExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetPredefinedValues">ResetPredefinedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentityConstraints` <a name="PutIdentityConstraints" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.putIdentityConstraints"></a>

```csharp
private void PutIdentityConstraints(PrivatecaCertificateTemplateIdentityConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.putIdentityConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints">PrivatecaCertificateTemplateIdentityConstraints</a>

---

##### `PutPassthroughExtensions` <a name="PutPassthroughExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.putPassthroughExtensions"></a>

```csharp
private void PutPassthroughExtensions(PrivatecaCertificateTemplatePassthroughExtensions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.putPassthroughExtensions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions">PrivatecaCertificateTemplatePassthroughExtensions</a>

---

##### `PutPredefinedValues` <a name="PutPredefinedValues" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.putPredefinedValues"></a>

```csharp
private void PutPredefinedValues(PrivatecaCertificateTemplatePredefinedValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.putPredefinedValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues">PrivatecaCertificateTemplatePredefinedValues</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(PrivatecaCertificateTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeouts">PrivatecaCertificateTemplateTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityConstraints` <a name="ResetIdentityConstraints" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetIdentityConstraints"></a>

```csharp
private void ResetIdentityConstraints()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaximumLifetime` <a name="ResetMaximumLifetime" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetMaximumLifetime"></a>

```csharp
private void ResetMaximumLifetime()
```

##### `ResetPassthroughExtensions` <a name="ResetPassthroughExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetPassthroughExtensions"></a>

```csharp
private void ResetPassthroughExtensions()
```

##### `ResetPredefinedValues` <a name="ResetPredefinedValues" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetPredefinedValues"></a>

```csharp
private void ResetPredefinedValues()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatecaCertificateTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCertificateTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCertificateTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCertificateTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCertificateTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PrivatecaCertificateTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatecaCertificateTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatecaCertificateTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PrivatecaCertificateTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.identityConstraints">IdentityConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference">PrivatecaCertificateTemplateIdentityConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.passthroughExtensions">PassthroughExtensions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference">PrivatecaCertificateTemplatePassthroughExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.predefinedValues">PredefinedValues</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference">PrivatecaCertificateTemplatePredefinedValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference">PrivatecaCertificateTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.identityConstraintsInput">IdentityConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints">PrivatecaCertificateTemplateIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.maximumLifetimeInput">MaximumLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.passthroughExtensionsInput">PassthroughExtensionsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions">PrivatecaCertificateTemplatePassthroughExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.predefinedValuesInput">PredefinedValuesInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues">PrivatecaCertificateTemplatePredefinedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.maximumLifetime">MaximumLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IdentityConstraints`<sup>Required</sup> <a name="IdentityConstraints" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.identityConstraints"></a>

```csharp
public PrivatecaCertificateTemplateIdentityConstraintsOutputReference IdentityConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference">PrivatecaCertificateTemplateIdentityConstraintsOutputReference</a>

---

##### `PassthroughExtensions`<sup>Required</sup> <a name="PassthroughExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.passthroughExtensions"></a>

```csharp
public PrivatecaCertificateTemplatePassthroughExtensionsOutputReference PassthroughExtensions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference">PrivatecaCertificateTemplatePassthroughExtensionsOutputReference</a>

---

##### `PredefinedValues`<sup>Required</sup> <a name="PredefinedValues" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.predefinedValues"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesOutputReference PredefinedValues { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference">PrivatecaCertificateTemplatePredefinedValuesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.timeouts"></a>

```csharp
public PrivatecaCertificateTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference">PrivatecaCertificateTemplateTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdentityConstraintsInput`<sup>Optional</sup> <a name="IdentityConstraintsInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.identityConstraintsInput"></a>

```csharp
public PrivatecaCertificateTemplateIdentityConstraints IdentityConstraintsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints">PrivatecaCertificateTemplateIdentityConstraints</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaximumLifetimeInput`<sup>Optional</sup> <a name="MaximumLifetimeInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.maximumLifetimeInput"></a>

```csharp
public string MaximumLifetimeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PassthroughExtensionsInput`<sup>Optional</sup> <a name="PassthroughExtensionsInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.passthroughExtensionsInput"></a>

```csharp
public PrivatecaCertificateTemplatePassthroughExtensions PassthroughExtensionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions">PrivatecaCertificateTemplatePassthroughExtensions</a>

---

##### `PredefinedValuesInput`<sup>Optional</sup> <a name="PredefinedValuesInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.predefinedValuesInput"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValues PredefinedValuesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues">PrivatecaCertificateTemplatePredefinedValues</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaximumLifetime`<sup>Required</sup> <a name="MaximumLifetime" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.maximumLifetime"></a>

```csharp
public string MaximumLifetime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatecaCertificateTemplateConfig <a name="PrivatecaCertificateTemplateConfig" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string Description = null,
    string Id = null,
    PrivatecaCertificateTemplateIdentityConstraints IdentityConstraints = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string MaximumLifetime = null,
    PrivatecaCertificateTemplatePassthroughExtensions PassthroughExtensions = null,
    PrivatecaCertificateTemplatePredefinedValues PredefinedValues = null,
    string Project = null,
    PrivatecaCertificateTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.name">Name</a></code> | <code>string</code> | The resource name for this CertificateTemplate in the format 'projects/* /locations/* /certificateTemplates/*'. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.description">Description</a></code> | <code>string</code> | Optional. A human-readable description of scenarios this template is intended for. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#id PrivatecaCertificateTemplate#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.identityConstraints">IdentityConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints">PrivatecaCertificateTemplateIdentityConstraints</a></code> | identity_constraints block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.maximumLifetime">MaximumLifetime</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.passthroughExtensions">PassthroughExtensions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions">PrivatecaCertificateTemplatePassthroughExtensions</a></code> | passthrough_extensions block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.predefinedValues">PredefinedValues</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues">PrivatecaCertificateTemplatePredefinedValues</a></code> | predefined_values block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#project PrivatecaCertificateTemplate#project}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeouts">PrivatecaCertificateTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#location PrivatecaCertificateTemplate#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name for this CertificateTemplate in the format 'projects/* /locations/* /certificateTemplates/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#name PrivatecaCertificateTemplate#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. A human-readable description of scenarios this template is intended for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#description PrivatecaCertificateTemplate#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#id PrivatecaCertificateTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityConstraints`<sup>Optional</sup> <a name="IdentityConstraints" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.identityConstraints"></a>

```csharp
public PrivatecaCertificateTemplateIdentityConstraints IdentityConstraints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints">PrivatecaCertificateTemplateIdentityConstraints</a>

identity_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#identity_constraints PrivatecaCertificateTemplate#identity_constraints}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Labels with user-defined metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#labels PrivatecaCertificateTemplate#labels}

---

##### `MaximumLifetime`<sup>Optional</sup> <a name="MaximumLifetime" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.maximumLifetime"></a>

```csharp
public string MaximumLifetime { get; set; }
```

- *Type:* string

Optional.

The maximum lifetime allowed for all issued certificates that use this template. If the issuing CaPool's IssuancePolicy specifies a maximum lifetime the minimum of the two durations will be the maximum lifetime for issued. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#maximum_lifetime PrivatecaCertificateTemplate#maximum_lifetime}

---

##### `PassthroughExtensions`<sup>Optional</sup> <a name="PassthroughExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.passthroughExtensions"></a>

```csharp
public PrivatecaCertificateTemplatePassthroughExtensions PassthroughExtensions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions">PrivatecaCertificateTemplatePassthroughExtensions</a>

passthrough_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#passthrough_extensions PrivatecaCertificateTemplate#passthrough_extensions}

---

##### `PredefinedValues`<sup>Optional</sup> <a name="PredefinedValues" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.predefinedValues"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValues PredefinedValues { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues">PrivatecaCertificateTemplatePredefinedValues</a>

predefined_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#predefined_values PrivatecaCertificateTemplate#predefined_values}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#project PrivatecaCertificateTemplate#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateConfig.property.timeouts"></a>

```csharp
public PrivatecaCertificateTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeouts">PrivatecaCertificateTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#timeouts PrivatecaCertificateTemplate#timeouts}

---

### PrivatecaCertificateTemplateIdentityConstraints <a name="PrivatecaCertificateTemplateIdentityConstraints" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplateIdentityConstraints {
    object AllowSubjectAltNamesPassthrough,
    object AllowSubjectPassthrough,
    PrivatecaCertificateTemplateIdentityConstraintsCelExpression CelExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints.property.allowSubjectAltNamesPassthrough">AllowSubjectAltNamesPassthrough</a></code> | <code>object</code> | Required. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints.property.allowSubjectPassthrough">AllowSubjectPassthrough</a></code> | <code>object</code> | Required. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints.property.celExpression">CelExpression</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression">PrivatecaCertificateTemplateIdentityConstraintsCelExpression</a></code> | cel_expression block. |

---

##### `AllowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="AllowSubjectAltNamesPassthrough" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints.property.allowSubjectAltNamesPassthrough"></a>

```csharp
public object AllowSubjectAltNamesPassthrough { get; set; }
```

- *Type:* object

Required.

If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#allow_subject_alt_names_passthrough PrivatecaCertificateTemplate#allow_subject_alt_names_passthrough}

---

##### `AllowSubjectPassthrough`<sup>Required</sup> <a name="AllowSubjectPassthrough" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints.property.allowSubjectPassthrough"></a>

```csharp
public object AllowSubjectPassthrough { get; set; }
```

- *Type:* object

Required.

If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#allow_subject_passthrough PrivatecaCertificateTemplate#allow_subject_passthrough}

---

##### `CelExpression`<sup>Optional</sup> <a name="CelExpression" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints.property.celExpression"></a>

```csharp
public PrivatecaCertificateTemplateIdentityConstraintsCelExpression CelExpression { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression">PrivatecaCertificateTemplateIdentityConstraintsCelExpression</a>

cel_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#cel_expression PrivatecaCertificateTemplate#cel_expression}

---

### PrivatecaCertificateTemplateIdentityConstraintsCelExpression <a name="PrivatecaCertificateTemplateIdentityConstraintsCelExpression" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplateIdentityConstraintsCelExpression {
    string Description = null,
    string Expression = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.description">Description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.location">Location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.title">Title</a></code> | <code>string</code> | Optional. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#description PrivatecaCertificateTemplate#description}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#expression PrivatecaCertificateTemplate#expression}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#location PrivatecaCertificateTemplate#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#title PrivatecaCertificateTemplate#title}

---

### PrivatecaCertificateTemplatePassthroughExtensions <a name="PrivatecaCertificateTemplatePassthroughExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePassthroughExtensions {
    object AdditionalExtensions = null,
    string[] KnownExtensions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions.property.additionalExtensions">AdditionalExtensions</a></code> | <code>object</code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions.property.knownExtensions">KnownExtensions</a></code> | <code>string[]</code> | Optional. |

---

##### `AdditionalExtensions`<sup>Optional</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions.property.additionalExtensions"></a>

```csharp
public object AdditionalExtensions { get; set; }
```

- *Type:* object

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#additional_extensions PrivatecaCertificateTemplate#additional_extensions}

---

##### `KnownExtensions`<sup>Optional</sup> <a name="KnownExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions.property.knownExtensions"></a>

```csharp
public string[] KnownExtensions { get; set; }
```

- *Type:* string[]

Optional.

A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#known_extensions PrivatecaCertificateTemplate#known_extensions}

---

### PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions <a name="PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions {
    double[] ObjectIdPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | Required. The parts of an OID path. The most significant parts of the path come first. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; set; }
```

- *Type:* double[]

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#object_id_path PrivatecaCertificateTemplate#object_id_path}

---

### PrivatecaCertificateTemplatePredefinedValues <a name="PrivatecaCertificateTemplatePredefinedValues" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValues {
    object AdditionalExtensions = null,
    string[] AiaOcspServers = null,
    PrivatecaCertificateTemplatePredefinedValuesCaOptions CaOptions = null,
    PrivatecaCertificateTemplatePredefinedValuesKeyUsage KeyUsage = null,
    PrivatecaCertificateTemplatePredefinedValuesNameConstraints NameConstraints = null,
    object PolicyIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.property.additionalExtensions">AdditionalExtensions</a></code> | <code>object</code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.property.aiaOcspServers">AiaOcspServers</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.property.caOptions">CaOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions">PrivatecaCertificateTemplatePredefinedValuesCaOptions</a></code> | ca_options block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsage</a></code> | key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.property.nameConstraints">NameConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints">PrivatecaCertificateTemplatePredefinedValuesNameConstraints</a></code> | name_constraints block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.property.policyIds">PolicyIds</a></code> | <code>object</code> | policy_ids block. |

---

##### `AdditionalExtensions`<sup>Optional</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.property.additionalExtensions"></a>

```csharp
public object AdditionalExtensions { get; set; }
```

- *Type:* object

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#additional_extensions PrivatecaCertificateTemplate#additional_extensions}

---

##### `AiaOcspServers`<sup>Optional</sup> <a name="AiaOcspServers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.property.aiaOcspServers"></a>

```csharp
public string[] AiaOcspServers { get; set; }
```

- *Type:* string[]

Optional.

Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#aia_ocsp_servers PrivatecaCertificateTemplate#aia_ocsp_servers}

---

##### `CaOptions`<sup>Optional</sup> <a name="CaOptions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.property.caOptions"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesCaOptions CaOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions">PrivatecaCertificateTemplatePredefinedValuesCaOptions</a>

ca_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#ca_options PrivatecaCertificateTemplate#ca_options}

---

##### `KeyUsage`<sup>Optional</sup> <a name="KeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.property.keyUsage"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsage KeyUsage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsage</a>

key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#key_usage PrivatecaCertificateTemplate#key_usage}

---

##### `NameConstraints`<sup>Optional</sup> <a name="NameConstraints" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.property.nameConstraints"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesNameConstraints NameConstraints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints">PrivatecaCertificateTemplatePredefinedValuesNameConstraints</a>

name_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#name_constraints PrivatecaCertificateTemplate#name_constraints}

---

##### `PolicyIds`<sup>Optional</sup> <a name="PolicyIds" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues.property.policyIds"></a>

```csharp
public object PolicyIds { get; set; }
```

- *Type:* object

policy_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#policy_ids PrivatecaCertificateTemplate#policy_ids}

---

### PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions <a name="PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions {
    PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId ObjectId,
    string Value,
    object Critical = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.objectId">ObjectId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a></code> | object_id block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.value">Value</a></code> | <code>string</code> | Required. The value of this X.509 extension. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.critical">Critical</a></code> | <code>object</code> | Optional. |

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.objectId"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId ObjectId { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a>

object_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#object_id PrivatecaCertificateTemplate#object_id}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Required. The value of this X.509 extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#value PrivatecaCertificateTemplate#value}

---

##### `Critical`<sup>Optional</sup> <a name="Critical" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.critical"></a>

```csharp
public object Critical { get; set; }
```

- *Type:* object

Optional.

Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#critical PrivatecaCertificateTemplate#critical}

---

### PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId <a name="PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId {
    double[] ObjectIdPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | Required. The parts of an OID path. The most significant parts of the path come first. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; set; }
```

- *Type:* double[]

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#object_id_path PrivatecaCertificateTemplate#object_id_path}

---

### PrivatecaCertificateTemplatePredefinedValuesCaOptions <a name="PrivatecaCertificateTemplatePredefinedValuesCaOptions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesCaOptions {
    object IsCa = null,
    double MaxIssuerPathLength = null,
    object NullCa = null,
    object ZeroMaxIssuerPathLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions.property.isCa">IsCa</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions.property.maxIssuerPathLength">MaxIssuerPathLength</a></code> | <code>double</code> | Optional. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions.property.nullCa">NullCa</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions.property.zeroMaxIssuerPathLength">ZeroMaxIssuerPathLength</a></code> | <code>object</code> | Optional. |

---

##### `IsCa`<sup>Optional</sup> <a name="IsCa" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions.property.isCa"></a>

```csharp
public object IsCa { get; set; }
```

- *Type:* object

Optional.

Refers to the "CA" X.509 extension, which is a boolean value. When this value is true, the "CA" in Basic Constraints extension will be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#is_ca PrivatecaCertificateTemplate#is_ca}

---

##### `MaxIssuerPathLength`<sup>Optional</sup> <a name="MaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions.property.maxIssuerPathLength"></a>

```csharp
public double MaxIssuerPathLength { get; set; }
```

- *Type:* double

Optional.

Refers to the "path length constraint" in Basic Constraints extension. For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#max_issuer_path_length PrivatecaCertificateTemplate#max_issuer_path_length}

---

##### `NullCa`<sup>Optional</sup> <a name="NullCa" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions.property.nullCa"></a>

```csharp
public object NullCa { get; set; }
```

- *Type:* object

Optional.

When true, the "CA" in Basic Constraints extension will be set to null and omitted from the CA certificate.
If both 'is_ca' and 'null_ca' are unset, the "CA" in Basic Constraints extension will be set to false.
Note that the behavior when 'is_ca = false' for this resource is different from the behavior in the Certificate Authority, Certificate and CaPool resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#null_ca PrivatecaCertificateTemplate#null_ca}

---

##### `ZeroMaxIssuerPathLength`<sup>Optional</sup> <a name="ZeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions.property.zeroMaxIssuerPathLength"></a>

```csharp
public object ZeroMaxIssuerPathLength { get; set; }
```

- *Type:* object

Optional.

When true, the "path length constraint" in Basic Constraints extension will be set to 0.
if both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
the max path length will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#zero_max_issuer_path_length PrivatecaCertificateTemplate#zero_max_issuer_path_length}

---

### PrivatecaCertificateTemplatePredefinedValuesKeyUsage <a name="PrivatecaCertificateTemplatePredefinedValuesKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesKeyUsage {
    PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage BaseKeyUsage = null,
    PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage ExtendedKeyUsage = null,
    object UnknownExtendedKeyUsages = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.baseKeyUsage">BaseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a></code> | base_key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a></code> | extended_key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.unknownExtendedKeyUsages">UnknownExtendedKeyUsages</a></code> | <code>object</code> | unknown_extended_key_usages block. |

---

##### `BaseKeyUsage`<sup>Optional</sup> <a name="BaseKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.baseKeyUsage"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage BaseKeyUsage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a>

base_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#base_key_usage PrivatecaCertificateTemplate#base_key_usage}

---

##### `ExtendedKeyUsage`<sup>Optional</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.extendedKeyUsage"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage ExtendedKeyUsage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a>

extended_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#extended_key_usage PrivatecaCertificateTemplate#extended_key_usage}

---

##### `UnknownExtendedKeyUsages`<sup>Optional</sup> <a name="UnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.unknownExtendedKeyUsages"></a>

```csharp
public object UnknownExtendedKeyUsages { get; set; }
```

- *Type:* object

unknown_extended_key_usages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#unknown_extended_key_usages PrivatecaCertificateTemplate#unknown_extended_key_usages}

---

### PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage <a name="PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage {
    object CertSign = null,
    object ContentCommitment = null,
    object CrlSign = null,
    object DataEncipherment = null,
    object DecipherOnly = null,
    object DigitalSignature = null,
    object EncipherOnly = null,
    object KeyAgreement = null,
    object KeyEncipherment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.certSign">CertSign</a></code> | <code>object</code> | The key may be used to sign certificates. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.contentCommitment">ContentCommitment</a></code> | <code>object</code> | The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.crlSign">CrlSign</a></code> | <code>object</code> | The key may be used sign certificate revocation lists. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.dataEncipherment">DataEncipherment</a></code> | <code>object</code> | The key may be used to encipher data. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.decipherOnly">DecipherOnly</a></code> | <code>object</code> | The key may be used to decipher only. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.digitalSignature">DigitalSignature</a></code> | <code>object</code> | The key may be used for digital signatures. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.encipherOnly">EncipherOnly</a></code> | <code>object</code> | The key may be used to encipher only. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.keyAgreement">KeyAgreement</a></code> | <code>object</code> | The key may be used in a key agreement protocol. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.keyEncipherment">KeyEncipherment</a></code> | <code>object</code> | The key may be used to encipher other keys. |

---

##### `CertSign`<sup>Optional</sup> <a name="CertSign" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.certSign"></a>

```csharp
public object CertSign { get; set; }
```

- *Type:* object

The key may be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#cert_sign PrivatecaCertificateTemplate#cert_sign}

---

##### `ContentCommitment`<sup>Optional</sup> <a name="ContentCommitment" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.contentCommitment"></a>

```csharp
public object ContentCommitment { get; set; }
```

- *Type:* object

The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#content_commitment PrivatecaCertificateTemplate#content_commitment}

---

##### `CrlSign`<sup>Optional</sup> <a name="CrlSign" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.crlSign"></a>

```csharp
public object CrlSign { get; set; }
```

- *Type:* object

The key may be used sign certificate revocation lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#crl_sign PrivatecaCertificateTemplate#crl_sign}

---

##### `DataEncipherment`<sup>Optional</sup> <a name="DataEncipherment" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.dataEncipherment"></a>

```csharp
public object DataEncipherment { get; set; }
```

- *Type:* object

The key may be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#data_encipherment PrivatecaCertificateTemplate#data_encipherment}

---

##### `DecipherOnly`<sup>Optional</sup> <a name="DecipherOnly" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.decipherOnly"></a>

```csharp
public object DecipherOnly { get; set; }
```

- *Type:* object

The key may be used to decipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#decipher_only PrivatecaCertificateTemplate#decipher_only}

---

##### `DigitalSignature`<sup>Optional</sup> <a name="DigitalSignature" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.digitalSignature"></a>

```csharp
public object DigitalSignature { get; set; }
```

- *Type:* object

The key may be used for digital signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#digital_signature PrivatecaCertificateTemplate#digital_signature}

---

##### `EncipherOnly`<sup>Optional</sup> <a name="EncipherOnly" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.encipherOnly"></a>

```csharp
public object EncipherOnly { get; set; }
```

- *Type:* object

The key may be used to encipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#encipher_only PrivatecaCertificateTemplate#encipher_only}

---

##### `KeyAgreement`<sup>Optional</sup> <a name="KeyAgreement" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.keyAgreement"></a>

```csharp
public object KeyAgreement { get; set; }
```

- *Type:* object

The key may be used in a key agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#key_agreement PrivatecaCertificateTemplate#key_agreement}

---

##### `KeyEncipherment`<sup>Optional</sup> <a name="KeyEncipherment" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.keyEncipherment"></a>

```csharp
public object KeyEncipherment { get; set; }
```

- *Type:* object

The key may be used to encipher other keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#key_encipherment PrivatecaCertificateTemplate#key_encipherment}

---

### PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage <a name="PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage {
    object ClientAuth = null,
    object CodeSigning = null,
    object EmailProtection = null,
    object OcspSigning = null,
    object ServerAuth = null,
    object TimeStamping = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.clientAuth">ClientAuth</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.codeSigning">CodeSigning</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.emailProtection">EmailProtection</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.ocspSigning">OcspSigning</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.serverAuth">ServerAuth</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.timeStamping">TimeStamping</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". |

---

##### `ClientAuth`<sup>Optional</sup> <a name="ClientAuth" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.clientAuth"></a>

```csharp
public object ClientAuth { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#client_auth PrivatecaCertificateTemplate#client_auth}

---

##### `CodeSigning`<sup>Optional</sup> <a name="CodeSigning" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.codeSigning"></a>

```csharp
public object CodeSigning { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#code_signing PrivatecaCertificateTemplate#code_signing}

---

##### `EmailProtection`<sup>Optional</sup> <a name="EmailProtection" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.emailProtection"></a>

```csharp
public object EmailProtection { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#email_protection PrivatecaCertificateTemplate#email_protection}

---

##### `OcspSigning`<sup>Optional</sup> <a name="OcspSigning" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.ocspSigning"></a>

```csharp
public object OcspSigning { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#ocsp_signing PrivatecaCertificateTemplate#ocsp_signing}

---

##### `ServerAuth`<sup>Optional</sup> <a name="ServerAuth" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.serverAuth"></a>

```csharp
public object ServerAuth { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#server_auth PrivatecaCertificateTemplate#server_auth}

---

##### `TimeStamping`<sup>Optional</sup> <a name="TimeStamping" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.timeStamping"></a>

```csharp
public object TimeStamping { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#time_stamping PrivatecaCertificateTemplate#time_stamping}

---

### PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages <a name="PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages {
    double[] ObjectIdPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | Required. The parts of an OID path. The most significant parts of the path come first. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; set; }
```

- *Type:* double[]

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#object_id_path PrivatecaCertificateTemplate#object_id_path}

---

### PrivatecaCertificateTemplatePredefinedValuesNameConstraints <a name="PrivatecaCertificateTemplatePredefinedValuesNameConstraints" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesNameConstraints {
    object Critical,
    string[] ExcludedDnsNames = null,
    string[] ExcludedEmailAddresses = null,
    string[] ExcludedIpRanges = null,
    string[] ExcludedUris = null,
    string[] PermittedDnsNames = null,
    string[] PermittedEmailAddresses = null,
    string[] PermittedIpRanges = null,
    string[] PermittedUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.critical">Critical</a></code> | <code>object</code> | Indicates whether or not the name constraints are marked critical. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.excludedDnsNames">ExcludedDnsNames</a></code> | <code>string[]</code> | Contains excluded DNS names. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>string[]</code> | Contains the excluded email addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>string[]</code> | Contains the excluded IP ranges. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.excludedUris">ExcludedUris</a></code> | <code>string[]</code> | Contains the excluded URIs that apply to the host part of the name. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.permittedDnsNames">PermittedDnsNames</a></code> | <code>string[]</code> | Contains permitted DNS names. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>string[]</code> | Contains the permitted email addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>string[]</code> | Contains the permitted IP ranges. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.permittedUris">PermittedUris</a></code> | <code>string[]</code> | Contains the permitted URIs that apply to the host part of the name. |

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.critical"></a>

```csharp
public object Critical { get; set; }
```

- *Type:* object

Indicates whether or not the name constraints are marked critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#critical PrivatecaCertificateTemplate#critical}

---

##### `ExcludedDnsNames`<sup>Optional</sup> <a name="ExcludedDnsNames" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.excludedDnsNames"></a>

```csharp
public string[] ExcludedDnsNames { get; set; }
```

- *Type:* string[]

Contains excluded DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#excluded_dns_names PrivatecaCertificateTemplate#excluded_dns_names}

---

##### `ExcludedEmailAddresses`<sup>Optional</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.excludedEmailAddresses"></a>

```csharp
public string[] ExcludedEmailAddresses { get; set; }
```

- *Type:* string[]

Contains the excluded email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#excluded_email_addresses PrivatecaCertificateTemplate#excluded_email_addresses}

---

##### `ExcludedIpRanges`<sup>Optional</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.excludedIpRanges"></a>

```csharp
public string[] ExcludedIpRanges { get; set; }
```

- *Type:* string[]

Contains the excluded IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#excluded_ip_ranges PrivatecaCertificateTemplate#excluded_ip_ranges}

---

##### `ExcludedUris`<sup>Optional</sup> <a name="ExcludedUris" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.excludedUris"></a>

```csharp
public string[] ExcludedUris { get; set; }
```

- *Type:* string[]

Contains the excluded URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#excluded_uris PrivatecaCertificateTemplate#excluded_uris}

---

##### `PermittedDnsNames`<sup>Optional</sup> <a name="PermittedDnsNames" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.permittedDnsNames"></a>

```csharp
public string[] PermittedDnsNames { get; set; }
```

- *Type:* string[]

Contains permitted DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#permitted_dns_names PrivatecaCertificateTemplate#permitted_dns_names}

---

##### `PermittedEmailAddresses`<sup>Optional</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.permittedEmailAddresses"></a>

```csharp
public string[] PermittedEmailAddresses { get; set; }
```

- *Type:* string[]

Contains the permitted email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#permitted_email_addresses PrivatecaCertificateTemplate#permitted_email_addresses}

---

##### `PermittedIpRanges`<sup>Optional</sup> <a name="PermittedIpRanges" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.permittedIpRanges"></a>

```csharp
public string[] PermittedIpRanges { get; set; }
```

- *Type:* string[]

Contains the permitted IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#permitted_ip_ranges PrivatecaCertificateTemplate#permitted_ip_ranges}

---

##### `PermittedUris`<sup>Optional</sup> <a name="PermittedUris" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints.property.permittedUris"></a>

```csharp
public string[] PermittedUris { get; set; }
```

- *Type:* string[]

Contains the permitted URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#permitted_uris PrivatecaCertificateTemplate#permitted_uris}

---

### PrivatecaCertificateTemplatePredefinedValuesPolicyIds <a name="PrivatecaCertificateTemplatePredefinedValuesPolicyIds" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesPolicyIds {
    double[] ObjectIdPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIds.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | Required. The parts of an OID path. The most significant parts of the path come first. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIds.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; set; }
```

- *Type:* double[]

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#object_id_path PrivatecaCertificateTemplate#object_id_path}

---

### PrivatecaCertificateTemplateTimeouts <a name="PrivatecaCertificateTemplateTimeouts" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#create PrivatecaCertificateTemplate#create}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#delete PrivatecaCertificateTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#update PrivatecaCertificateTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#create PrivatecaCertificateTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#delete PrivatecaCertificateTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privateca_certificate_template#update PrivatecaCertificateTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference <a name="PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression">PrivatecaCertificateTemplateIdentityConstraintsCelExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCertificateTemplateIdentityConstraintsCelExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression">PrivatecaCertificateTemplateIdentityConstraintsCelExpression</a>

---


### PrivatecaCertificateTemplateIdentityConstraintsOutputReference <a name="PrivatecaCertificateTemplateIdentityConstraintsOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplateIdentityConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.putCelExpression">PutCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.resetCelExpression">ResetCelExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCelExpression` <a name="PutCelExpression" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.putCelExpression"></a>

```csharp
private void PutCelExpression(PrivatecaCertificateTemplateIdentityConstraintsCelExpression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.putCelExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression">PrivatecaCertificateTemplateIdentityConstraintsCelExpression</a>

---

##### `ResetCelExpression` <a name="ResetCelExpression" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.resetCelExpression"></a>

```csharp
private void ResetCelExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.celExpression">CelExpression</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference">PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput">AllowSubjectAltNamesPassthroughInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput">AllowSubjectPassthroughInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.celExpressionInput">CelExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression">PrivatecaCertificateTemplateIdentityConstraintsCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough">AllowSubjectAltNamesPassthrough</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectPassthrough">AllowSubjectPassthrough</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints">PrivatecaCertificateTemplateIdentityConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.celExpression"></a>

```csharp
public PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference CelExpression { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference">PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference</a>

---

##### `AllowSubjectAltNamesPassthroughInput`<sup>Optional</sup> <a name="AllowSubjectAltNamesPassthroughInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput"></a>

```csharp
public object AllowSubjectAltNamesPassthroughInput { get; }
```

- *Type:* object

---

##### `AllowSubjectPassthroughInput`<sup>Optional</sup> <a name="AllowSubjectPassthroughInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput"></a>

```csharp
public object AllowSubjectPassthroughInput { get; }
```

- *Type:* object

---

##### `CelExpressionInput`<sup>Optional</sup> <a name="CelExpressionInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.celExpressionInput"></a>

```csharp
public PrivatecaCertificateTemplateIdentityConstraintsCelExpression CelExpressionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsCelExpression">PrivatecaCertificateTemplateIdentityConstraintsCelExpression</a>

---

##### `AllowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="AllowSubjectAltNamesPassthrough" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough"></a>

```csharp
public object AllowSubjectAltNamesPassthrough { get; }
```

- *Type:* object

---

##### `AllowSubjectPassthrough`<sup>Required</sup> <a name="AllowSubjectPassthrough" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectPassthrough"></a>

```csharp
public object AllowSubjectPassthrough { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCertificateTemplateIdentityConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateIdentityConstraints">PrivatecaCertificateTemplateIdentityConstraints</a>

---


### PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList <a name="PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.get"></a>

```csharp
private PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference <a name="PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.objectIdPathInput"></a>

```csharp
public double[] ObjectIdPathInput { get; }
```

- *Type:* double[]

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCertificateTemplatePassthroughExtensionsOutputReference <a name="PrivatecaCertificateTemplatePassthroughExtensionsOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePassthroughExtensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.putAdditionalExtensions">PutAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resetAdditionalExtensions">ResetAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resetKnownExtensions">ResetKnownExtensions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalExtensions` <a name="PutAdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.putAdditionalExtensions"></a>

```csharp
private void PutAdditionalExtensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* object

---

##### `ResetAdditionalExtensions` <a name="ResetAdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resetAdditionalExtensions"></a>

```csharp
private void ResetAdditionalExtensions()
```

##### `ResetKnownExtensions` <a name="ResetKnownExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resetKnownExtensions"></a>

```csharp
private void ResetKnownExtensions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.additionalExtensions">AdditionalExtensions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList">PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.additionalExtensionsInput">AdditionalExtensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.knownExtensionsInput">KnownExtensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.knownExtensions">KnownExtensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions">PrivatecaCertificateTemplatePassthroughExtensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalExtensions`<sup>Required</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.additionalExtensions"></a>

```csharp
public PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList AdditionalExtensions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList">PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList</a>

---

##### `AdditionalExtensionsInput`<sup>Optional</sup> <a name="AdditionalExtensionsInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.additionalExtensionsInput"></a>

```csharp
public object AdditionalExtensionsInput { get; }
```

- *Type:* object

---

##### `KnownExtensionsInput`<sup>Optional</sup> <a name="KnownExtensionsInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.knownExtensionsInput"></a>

```csharp
public string[] KnownExtensionsInput { get; }
```

- *Type:* string[]

---

##### `KnownExtensions`<sup>Required</sup> <a name="KnownExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.knownExtensions"></a>

```csharp
public string[] KnownExtensions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCertificateTemplatePassthroughExtensions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePassthroughExtensions">PrivatecaCertificateTemplatePassthroughExtensions</a>

---


### PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList <a name="PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.get"></a>

```csharp
private PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference <a name="PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput"></a>

```csharp
public double[] ObjectIdPathInput { get; }
```

- *Type:* double[]

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a>

---


### PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference <a name="PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.putObjectId">PutObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resetCritical">ResetCritical</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectId` <a name="PutObjectId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.putObjectId"></a>

```csharp
private void PutObjectId(PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.putObjectId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a>

---

##### `ResetCritical` <a name="ResetCritical" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resetCritical"></a>

```csharp
private void ResetCritical()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.objectId">ObjectId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference">PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.criticalInput">CriticalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.critical">Critical</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.objectId"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference ObjectId { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference">PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference</a>

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.criticalInput"></a>

```csharp
public object CriticalInput { get; }
```

- *Type:* object

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.objectIdInput"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId ObjectIdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.critical"></a>

```csharp
public object Critical { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference <a name="PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetIsCa">ResetIsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetMaxIssuerPathLength">ResetMaxIssuerPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetNullCa">ResetNullCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength">ResetZeroMaxIssuerPathLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsCa` <a name="ResetIsCa" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetIsCa"></a>

```csharp
private void ResetIsCa()
```

##### `ResetMaxIssuerPathLength` <a name="ResetMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetMaxIssuerPathLength"></a>

```csharp
private void ResetMaxIssuerPathLength()
```

##### `ResetNullCa` <a name="ResetNullCa" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetNullCa"></a>

```csharp
private void ResetNullCa()
```

##### `ResetZeroMaxIssuerPathLength` <a name="ResetZeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength"></a>

```csharp
private void ResetZeroMaxIssuerPathLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.isCaInput">IsCaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput">MaxIssuerPathLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.nullCaInput">NullCaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput">ZeroMaxIssuerPathLengthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.isCa">IsCa</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.maxIssuerPathLength">MaxIssuerPathLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.nullCa">NullCa</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength">ZeroMaxIssuerPathLength</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions">PrivatecaCertificateTemplatePredefinedValuesCaOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsCaInput`<sup>Optional</sup> <a name="IsCaInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.isCaInput"></a>

```csharp
public object IsCaInput { get; }
```

- *Type:* object

---

##### `MaxIssuerPathLengthInput`<sup>Optional</sup> <a name="MaxIssuerPathLengthInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput"></a>

```csharp
public double MaxIssuerPathLengthInput { get; }
```

- *Type:* double

---

##### `NullCaInput`<sup>Optional</sup> <a name="NullCaInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.nullCaInput"></a>

```csharp
public object NullCaInput { get; }
```

- *Type:* object

---

##### `ZeroMaxIssuerPathLengthInput`<sup>Optional</sup> <a name="ZeroMaxIssuerPathLengthInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput"></a>

```csharp
public object ZeroMaxIssuerPathLengthInput { get; }
```

- *Type:* object

---

##### `IsCa`<sup>Required</sup> <a name="IsCa" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.isCa"></a>

```csharp
public object IsCa { get; }
```

- *Type:* object

---

##### `MaxIssuerPathLength`<sup>Required</sup> <a name="MaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.maxIssuerPathLength"></a>

```csharp
public double MaxIssuerPathLength { get; }
```

- *Type:* double

---

##### `NullCa`<sup>Required</sup> <a name="NullCa" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.nullCa"></a>

```csharp
public object NullCa { get; }
```

- *Type:* object

---

##### `ZeroMaxIssuerPathLength`<sup>Required</sup> <a name="ZeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength"></a>

```csharp
public object ZeroMaxIssuerPathLength { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesCaOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions">PrivatecaCertificateTemplatePredefinedValuesCaOptions</a>

---


### PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference <a name="PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign">ResetCertSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment">ResetContentCommitment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign">ResetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment">ResetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly">ResetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature">ResetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly">ResetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement">ResetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment">ResetKeyEncipherment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertSign` <a name="ResetCertSign" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign"></a>

```csharp
private void ResetCertSign()
```

##### `ResetContentCommitment` <a name="ResetContentCommitment" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment"></a>

```csharp
private void ResetContentCommitment()
```

##### `ResetCrlSign` <a name="ResetCrlSign" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign"></a>

```csharp
private void ResetCrlSign()
```

##### `ResetDataEncipherment` <a name="ResetDataEncipherment" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment"></a>

```csharp
private void ResetDataEncipherment()
```

##### `ResetDecipherOnly` <a name="ResetDecipherOnly" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly"></a>

```csharp
private void ResetDecipherOnly()
```

##### `ResetDigitalSignature` <a name="ResetDigitalSignature" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature"></a>

```csharp
private void ResetDigitalSignature()
```

##### `ResetEncipherOnly` <a name="ResetEncipherOnly" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly"></a>

```csharp
private void ResetEncipherOnly()
```

##### `ResetKeyAgreement` <a name="ResetKeyAgreement" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement"></a>

```csharp
private void ResetKeyAgreement()
```

##### `ResetKeyEncipherment` <a name="ResetKeyEncipherment" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment"></a>

```csharp
private void ResetKeyEncipherment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput">CertSignInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput">ContentCommitmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput">CrlSignInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput">DataEnciphermentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput">DecipherOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput">DigitalSignatureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput">EncipherOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput">KeyAgreementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput">KeyEnciphermentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.certSign">CertSign</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment">ContentCommitment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign">CrlSign</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment">DataEncipherment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly">DecipherOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature">DigitalSignature</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly">EncipherOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement">KeyAgreement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment">KeyEncipherment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertSignInput`<sup>Optional</sup> <a name="CertSignInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput"></a>

```csharp
public object CertSignInput { get; }
```

- *Type:* object

---

##### `ContentCommitmentInput`<sup>Optional</sup> <a name="ContentCommitmentInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput"></a>

```csharp
public object ContentCommitmentInput { get; }
```

- *Type:* object

---

##### `CrlSignInput`<sup>Optional</sup> <a name="CrlSignInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput"></a>

```csharp
public object CrlSignInput { get; }
```

- *Type:* object

---

##### `DataEnciphermentInput`<sup>Optional</sup> <a name="DataEnciphermentInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```csharp
public object DataEnciphermentInput { get; }
```

- *Type:* object

---

##### `DecipherOnlyInput`<sup>Optional</sup> <a name="DecipherOnlyInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput"></a>

```csharp
public object DecipherOnlyInput { get; }
```

- *Type:* object

---

##### `DigitalSignatureInput`<sup>Optional</sup> <a name="DigitalSignatureInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput"></a>

```csharp
public object DigitalSignatureInput { get; }
```

- *Type:* object

---

##### `EncipherOnlyInput`<sup>Optional</sup> <a name="EncipherOnlyInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput"></a>

```csharp
public object EncipherOnlyInput { get; }
```

- *Type:* object

---

##### `KeyAgreementInput`<sup>Optional</sup> <a name="KeyAgreementInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput"></a>

```csharp
public object KeyAgreementInput { get; }
```

- *Type:* object

---

##### `KeyEnciphermentInput`<sup>Optional</sup> <a name="KeyEnciphermentInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```csharp
public object KeyEnciphermentInput { get; }
```

- *Type:* object

---

##### `CertSign`<sup>Required</sup> <a name="CertSign" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.certSign"></a>

```csharp
public object CertSign { get; }
```

- *Type:* object

---

##### `ContentCommitment`<sup>Required</sup> <a name="ContentCommitment" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment"></a>

```csharp
public object ContentCommitment { get; }
```

- *Type:* object

---

##### `CrlSign`<sup>Required</sup> <a name="CrlSign" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign"></a>

```csharp
public object CrlSign { get; }
```

- *Type:* object

---

##### `DataEncipherment`<sup>Required</sup> <a name="DataEncipherment" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment"></a>

```csharp
public object DataEncipherment { get; }
```

- *Type:* object

---

##### `DecipherOnly`<sup>Required</sup> <a name="DecipherOnly" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly"></a>

```csharp
public object DecipherOnly { get; }
```

- *Type:* object

---

##### `DigitalSignature`<sup>Required</sup> <a name="DigitalSignature" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature"></a>

```csharp
public object DigitalSignature { get; }
```

- *Type:* object

---

##### `EncipherOnly`<sup>Required</sup> <a name="EncipherOnly" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly"></a>

```csharp
public object EncipherOnly { get; }
```

- *Type:* object

---

##### `KeyAgreement`<sup>Required</sup> <a name="KeyAgreement" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement"></a>

```csharp
public object KeyAgreement { get; }
```

- *Type:* object

---

##### `KeyEncipherment`<sup>Required</sup> <a name="KeyEncipherment" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment"></a>

```csharp
public object KeyEncipherment { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a>

---


### PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference <a name="PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth">ResetClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning">ResetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection">ResetEmailProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning">ResetOcspSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth">ResetServerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping">ResetTimeStamping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientAuth` <a name="ResetClientAuth" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth"></a>

```csharp
private void ResetClientAuth()
```

##### `ResetCodeSigning` <a name="ResetCodeSigning" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning"></a>

```csharp
private void ResetCodeSigning()
```

##### `ResetEmailProtection` <a name="ResetEmailProtection" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection"></a>

```csharp
private void ResetEmailProtection()
```

##### `ResetOcspSigning` <a name="ResetOcspSigning" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning"></a>

```csharp
private void ResetOcspSigning()
```

##### `ResetServerAuth` <a name="ResetServerAuth" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth"></a>

```csharp
private void ResetServerAuth()
```

##### `ResetTimeStamping` <a name="ResetTimeStamping" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping"></a>

```csharp
private void ResetTimeStamping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput">ClientAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput">CodeSigningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput">EmailProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput">OcspSigningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput">ServerAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput">TimeStampingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth">ClientAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning">CodeSigning</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection">EmailProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning">OcspSigning</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth">ServerAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping">TimeStamping</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientAuthInput`<sup>Optional</sup> <a name="ClientAuthInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput"></a>

```csharp
public object ClientAuthInput { get; }
```

- *Type:* object

---

##### `CodeSigningInput`<sup>Optional</sup> <a name="CodeSigningInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput"></a>

```csharp
public object CodeSigningInput { get; }
```

- *Type:* object

---

##### `EmailProtectionInput`<sup>Optional</sup> <a name="EmailProtectionInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput"></a>

```csharp
public object EmailProtectionInput { get; }
```

- *Type:* object

---

##### `OcspSigningInput`<sup>Optional</sup> <a name="OcspSigningInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput"></a>

```csharp
public object OcspSigningInput { get; }
```

- *Type:* object

---

##### `ServerAuthInput`<sup>Optional</sup> <a name="ServerAuthInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput"></a>

```csharp
public object ServerAuthInput { get; }
```

- *Type:* object

---

##### `TimeStampingInput`<sup>Optional</sup> <a name="TimeStampingInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput"></a>

```csharp
public object TimeStampingInput { get; }
```

- *Type:* object

---

##### `ClientAuth`<sup>Required</sup> <a name="ClientAuth" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth"></a>

```csharp
public object ClientAuth { get; }
```

- *Type:* object

---

##### `CodeSigning`<sup>Required</sup> <a name="CodeSigning" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning"></a>

```csharp
public object CodeSigning { get; }
```

- *Type:* object

---

##### `EmailProtection`<sup>Required</sup> <a name="EmailProtection" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection"></a>

```csharp
public object EmailProtection { get; }
```

- *Type:* object

---

##### `OcspSigning`<sup>Required</sup> <a name="OcspSigning" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning"></a>

```csharp
public object OcspSigning { get; }
```

- *Type:* object

---

##### `ServerAuth`<sup>Required</sup> <a name="ServerAuth" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth"></a>

```csharp
public object ServerAuth { get; }
```

- *Type:* object

---

##### `TimeStamping`<sup>Required</sup> <a name="TimeStamping" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping"></a>

```csharp
public object TimeStamping { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a>

---


### PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference <a name="PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage">PutBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage">PutExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages">PutUnknownExtendedKeyUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetBaseKeyUsage">ResetBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetExtendedKeyUsage">ResetExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages">ResetUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseKeyUsage` <a name="PutBaseKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage"></a>

```csharp
private void PutBaseKeyUsage(PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a>

---

##### `PutExtendedKeyUsage` <a name="PutExtendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage"></a>

```csharp
private void PutExtendedKeyUsage(PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a>

---

##### `PutUnknownExtendedKeyUsages` <a name="PutUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages"></a>

```csharp
private void PutUnknownExtendedKeyUsages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages.parameter.value"></a>

- *Type:* object

---

##### `ResetBaseKeyUsage` <a name="ResetBaseKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetBaseKeyUsage"></a>

```csharp
private void ResetBaseKeyUsage()
```

##### `ResetExtendedKeyUsage` <a name="ResetExtendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetExtendedKeyUsage"></a>

```csharp
private void ResetExtendedKeyUsage()
```

##### `ResetUnknownExtendedKeyUsages` <a name="ResetUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages"></a>

```csharp
private void ResetUnknownExtendedKeyUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.baseKeyUsage">BaseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference">PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference">PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages">UnknownExtendedKeyUsages</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList">PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.baseKeyUsageInput">BaseKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.extendedKeyUsageInput">ExtendedKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput">UnknownExtendedKeyUsagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseKeyUsage`<sup>Required</sup> <a name="BaseKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.baseKeyUsage"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference BaseKeyUsage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference">PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference</a>

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.extendedKeyUsage"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference ExtendedKeyUsage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference">PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference</a>

---

##### `UnknownExtendedKeyUsages`<sup>Required</sup> <a name="UnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList UnknownExtendedKeyUsages { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList">PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList</a>

---

##### `BaseKeyUsageInput`<sup>Optional</sup> <a name="BaseKeyUsageInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.baseKeyUsageInput"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage BaseKeyUsageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a>

---

##### `ExtendedKeyUsageInput`<sup>Optional</sup> <a name="ExtendedKeyUsageInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.extendedKeyUsageInput"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage ExtendedKeyUsageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a>

---

##### `UnknownExtendedKeyUsagesInput`<sup>Optional</sup> <a name="UnknownExtendedKeyUsagesInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput"></a>

```csharp
public object UnknownExtendedKeyUsagesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsage</a>

---


### PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList <a name="PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.get"></a>

```csharp
private PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference <a name="PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput"></a>

```csharp
public double[] ObjectIdPathInput { get; }
```

- *Type:* double[]

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference <a name="PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetExcludedDnsNames">ResetExcludedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetExcludedEmailAddresses">ResetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetExcludedIpRanges">ResetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetExcludedUris">ResetExcludedUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetPermittedDnsNames">ResetPermittedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetPermittedEmailAddresses">ResetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetPermittedIpRanges">ResetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetPermittedUris">ResetPermittedUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedDnsNames` <a name="ResetExcludedDnsNames" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetExcludedDnsNames"></a>

```csharp
private void ResetExcludedDnsNames()
```

##### `ResetExcludedEmailAddresses` <a name="ResetExcludedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetExcludedEmailAddresses"></a>

```csharp
private void ResetExcludedEmailAddresses()
```

##### `ResetExcludedIpRanges` <a name="ResetExcludedIpRanges" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetExcludedIpRanges"></a>

```csharp
private void ResetExcludedIpRanges()
```

##### `ResetExcludedUris` <a name="ResetExcludedUris" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetExcludedUris"></a>

```csharp
private void ResetExcludedUris()
```

##### `ResetPermittedDnsNames` <a name="ResetPermittedDnsNames" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetPermittedDnsNames"></a>

```csharp
private void ResetPermittedDnsNames()
```

##### `ResetPermittedEmailAddresses` <a name="ResetPermittedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetPermittedEmailAddresses"></a>

```csharp
private void ResetPermittedEmailAddresses()
```

##### `ResetPermittedIpRanges` <a name="ResetPermittedIpRanges" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetPermittedIpRanges"></a>

```csharp
private void ResetPermittedIpRanges()
```

##### `ResetPermittedUris` <a name="ResetPermittedUris" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.resetPermittedUris"></a>

```csharp
private void ResetPermittedUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.criticalInput">CriticalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedDnsNamesInput">ExcludedDnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput">ExcludedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedIpRangesInput">ExcludedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedUrisInput">ExcludedUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedDnsNamesInput">PermittedDnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput">PermittedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedIpRangesInput">PermittedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedUrisInput">PermittedUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.critical">Critical</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedDnsNames">ExcludedDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedUris">ExcludedUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedDnsNames">PermittedDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedUris">PermittedUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints">PrivatecaCertificateTemplatePredefinedValuesNameConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.criticalInput"></a>

```csharp
public object CriticalInput { get; }
```

- *Type:* object

---

##### `ExcludedDnsNamesInput`<sup>Optional</sup> <a name="ExcludedDnsNamesInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedDnsNamesInput"></a>

```csharp
public string[] ExcludedDnsNamesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedEmailAddressesInput`<sup>Optional</sup> <a name="ExcludedEmailAddressesInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput"></a>

```csharp
public string[] ExcludedEmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedIpRangesInput`<sup>Optional</sup> <a name="ExcludedIpRangesInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedIpRangesInput"></a>

```csharp
public string[] ExcludedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedUrisInput`<sup>Optional</sup> <a name="ExcludedUrisInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedUrisInput"></a>

```csharp
public string[] ExcludedUrisInput { get; }
```

- *Type:* string[]

---

##### `PermittedDnsNamesInput`<sup>Optional</sup> <a name="PermittedDnsNamesInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedDnsNamesInput"></a>

```csharp
public string[] PermittedDnsNamesInput { get; }
```

- *Type:* string[]

---

##### `PermittedEmailAddressesInput`<sup>Optional</sup> <a name="PermittedEmailAddressesInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput"></a>

```csharp
public string[] PermittedEmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `PermittedIpRangesInput`<sup>Optional</sup> <a name="PermittedIpRangesInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedIpRangesInput"></a>

```csharp
public string[] PermittedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `PermittedUrisInput`<sup>Optional</sup> <a name="PermittedUrisInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedUrisInput"></a>

```csharp
public string[] PermittedUrisInput { get; }
```

- *Type:* string[]

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.critical"></a>

```csharp
public object Critical { get; }
```

- *Type:* object

---

##### `ExcludedDnsNames`<sup>Required</sup> <a name="ExcludedDnsNames" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedDnsNames"></a>

```csharp
public string[] ExcludedDnsNames { get; }
```

- *Type:* string[]

---

##### `ExcludedEmailAddresses`<sup>Required</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedEmailAddresses"></a>

```csharp
public string[] ExcludedEmailAddresses { get; }
```

- *Type:* string[]

---

##### `ExcludedIpRanges`<sup>Required</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedIpRanges"></a>

```csharp
public string[] ExcludedIpRanges { get; }
```

- *Type:* string[]

---

##### `ExcludedUris`<sup>Required</sup> <a name="ExcludedUris" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.excludedUris"></a>

```csharp
public string[] ExcludedUris { get; }
```

- *Type:* string[]

---

##### `PermittedDnsNames`<sup>Required</sup> <a name="PermittedDnsNames" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedDnsNames"></a>

```csharp
public string[] PermittedDnsNames { get; }
```

- *Type:* string[]

---

##### `PermittedEmailAddresses`<sup>Required</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedEmailAddresses"></a>

```csharp
public string[] PermittedEmailAddresses { get; }
```

- *Type:* string[]

---

##### `PermittedIpRanges`<sup>Required</sup> <a name="PermittedIpRanges" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedIpRanges"></a>

```csharp
public string[] PermittedIpRanges { get; }
```

- *Type:* string[]

---

##### `PermittedUris`<sup>Required</sup> <a name="PermittedUris" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.permittedUris"></a>

```csharp
public string[] PermittedUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesNameConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints">PrivatecaCertificateTemplatePredefinedValuesNameConstraints</a>

---


### PrivatecaCertificateTemplatePredefinedValuesOutputReference <a name="PrivatecaCertificateTemplatePredefinedValuesOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putAdditionalExtensions">PutAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putCaOptions">PutCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putKeyUsage">PutKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putNameConstraints">PutNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putPolicyIds">PutPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resetAdditionalExtensions">ResetAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resetAiaOcspServers">ResetAiaOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resetCaOptions">ResetCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resetKeyUsage">ResetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resetNameConstraints">ResetNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resetPolicyIds">ResetPolicyIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalExtensions` <a name="PutAdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putAdditionalExtensions"></a>

```csharp
private void PutAdditionalExtensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* object

---

##### `PutCaOptions` <a name="PutCaOptions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putCaOptions"></a>

```csharp
private void PutCaOptions(PrivatecaCertificateTemplatePredefinedValuesCaOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putCaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions">PrivatecaCertificateTemplatePredefinedValuesCaOptions</a>

---

##### `PutKeyUsage` <a name="PutKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putKeyUsage"></a>

```csharp
private void PutKeyUsage(PrivatecaCertificateTemplatePredefinedValuesKeyUsage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsage</a>

---

##### `PutNameConstraints` <a name="PutNameConstraints" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putNameConstraints"></a>

```csharp
private void PutNameConstraints(PrivatecaCertificateTemplatePredefinedValuesNameConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putNameConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints">PrivatecaCertificateTemplatePredefinedValuesNameConstraints</a>

---

##### `PutPolicyIds` <a name="PutPolicyIds" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putPolicyIds"></a>

```csharp
private void PutPolicyIds(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.putPolicyIds.parameter.value"></a>

- *Type:* object

---

##### `ResetAdditionalExtensions` <a name="ResetAdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resetAdditionalExtensions"></a>

```csharp
private void ResetAdditionalExtensions()
```

##### `ResetAiaOcspServers` <a name="ResetAiaOcspServers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resetAiaOcspServers"></a>

```csharp
private void ResetAiaOcspServers()
```

##### `ResetCaOptions` <a name="ResetCaOptions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resetCaOptions"></a>

```csharp
private void ResetCaOptions()
```

##### `ResetKeyUsage` <a name="ResetKeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resetKeyUsage"></a>

```csharp
private void ResetKeyUsage()
```

##### `ResetNameConstraints` <a name="ResetNameConstraints" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resetNameConstraints"></a>

```csharp
private void ResetNameConstraints()
```

##### `ResetPolicyIds` <a name="ResetPolicyIds" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.resetPolicyIds"></a>

```csharp
private void ResetPolicyIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.additionalExtensions">AdditionalExtensions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList">PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.caOptions">CaOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference">PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference">PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.nameConstraints">NameConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference">PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.policyIds">PolicyIds</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList">PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.additionalExtensionsInput">AdditionalExtensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.aiaOcspServersInput">AiaOcspServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.caOptionsInput">CaOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions">PrivatecaCertificateTemplatePredefinedValuesCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.keyUsageInput">KeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.nameConstraintsInput">NameConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints">PrivatecaCertificateTemplatePredefinedValuesNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.policyIdsInput">PolicyIdsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.aiaOcspServers">AiaOcspServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues">PrivatecaCertificateTemplatePredefinedValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalExtensions`<sup>Required</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.additionalExtensions"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList AdditionalExtensions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList">PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList</a>

---

##### `CaOptions`<sup>Required</sup> <a name="CaOptions" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.caOptions"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference CaOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference">PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference</a>

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.keyUsage"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference KeyUsage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference">PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference</a>

---

##### `NameConstraints`<sup>Required</sup> <a name="NameConstraints" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.nameConstraints"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference NameConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference">PrivatecaCertificateTemplatePredefinedValuesNameConstraintsOutputReference</a>

---

##### `PolicyIds`<sup>Required</sup> <a name="PolicyIds" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.policyIds"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList PolicyIds { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList">PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList</a>

---

##### `AdditionalExtensionsInput`<sup>Optional</sup> <a name="AdditionalExtensionsInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.additionalExtensionsInput"></a>

```csharp
public object AdditionalExtensionsInput { get; }
```

- *Type:* object

---

##### `AiaOcspServersInput`<sup>Optional</sup> <a name="AiaOcspServersInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.aiaOcspServersInput"></a>

```csharp
public string[] AiaOcspServersInput { get; }
```

- *Type:* string[]

---

##### `CaOptionsInput`<sup>Optional</sup> <a name="CaOptionsInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.caOptionsInput"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesCaOptions CaOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesCaOptions">PrivatecaCertificateTemplatePredefinedValuesCaOptions</a>

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.keyUsageInput"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesKeyUsage KeyUsageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesKeyUsage">PrivatecaCertificateTemplatePredefinedValuesKeyUsage</a>

---

##### `NameConstraintsInput`<sup>Optional</sup> <a name="NameConstraintsInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.nameConstraintsInput"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValuesNameConstraints NameConstraintsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesNameConstraints">PrivatecaCertificateTemplatePredefinedValuesNameConstraints</a>

---

##### `PolicyIdsInput`<sup>Optional</sup> <a name="PolicyIdsInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.policyIdsInput"></a>

```csharp
public object PolicyIdsInput { get; }
```

- *Type:* object

---

##### `AiaOcspServers`<sup>Required</sup> <a name="AiaOcspServers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.aiaOcspServers"></a>

```csharp
public string[] AiaOcspServers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCertificateTemplatePredefinedValues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValues">PrivatecaCertificateTemplatePredefinedValues</a>

---


### PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList <a name="PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.get"></a>

```csharp
private PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference <a name="PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.objectIdPathInput"></a>

```csharp
public double[] ObjectIdPathInput { get; }
```

- *Type:* double[]

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PrivatecaCertificateTemplateTimeoutsOutputReference <a name="PrivatecaCertificateTemplateTimeoutsOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplate.PrivatecaCertificateTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



