# `vmwareengineExternalAccessRule` Submodule <a name="`vmwareengineExternalAccessRule` Submodule" id="@cdktf/provider-google.vmwareengineExternalAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineExternalAccessRule <a name="VmwareengineExternalAccessRule" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule google_vmwareengine_external_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineExternalAccessRule(Construct Scope, string Id, VmwareengineExternalAccessRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig">VmwareengineExternalAccessRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig">VmwareengineExternalAccessRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putDestinationIpRanges">PutDestinationIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putSourceIpRanges">PutSourceIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationIpRanges` <a name="PutDestinationIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putDestinationIpRanges"></a>

```csharp
private void PutDestinationIpRanges(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putDestinationIpRanges.parameter.value"></a>

- *Type:* object

---

##### `PutSourceIpRanges` <a name="PutSourceIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putSourceIpRanges"></a>

```csharp
private void PutSourceIpRanges(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putSourceIpRanges.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putTimeouts"></a>

```csharp
private void PutTimeouts(VmwareengineExternalAccessRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VmwareengineExternalAccessRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VmwareengineExternalAccessRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VmwareengineExternalAccessRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

VmwareengineExternalAccessRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VmwareengineExternalAccessRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VmwareengineExternalAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VmwareengineExternalAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationIpRanges">DestinationIpRanges</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList">VmwareengineExternalAccessRuleDestinationIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourceIpRanges">SourceIpRanges</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList">VmwareengineExternalAccessRuleSourceIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference">VmwareengineExternalAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationIpRangesInput">DestinationIpRangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationPortsInput">DestinationPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourceIpRangesInput">SourceIpRangesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourcePortsInput">SourcePortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationPorts">DestinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourcePorts">SourcePorts</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DestinationIpRanges`<sup>Required</sup> <a name="DestinationIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationIpRanges"></a>

```csharp
public VmwareengineExternalAccessRuleDestinationIpRangesList DestinationIpRanges { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList">VmwareengineExternalAccessRuleDestinationIpRangesList</a>

---

##### `SourceIpRanges`<sup>Required</sup> <a name="SourceIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourceIpRanges"></a>

```csharp
public VmwareengineExternalAccessRuleSourceIpRangesList SourceIpRanges { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList">VmwareengineExternalAccessRuleSourceIpRangesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.timeouts"></a>

```csharp
public VmwareengineExternalAccessRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference">VmwareengineExternalAccessRuleTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationIpRangesInput`<sup>Optional</sup> <a name="DestinationIpRangesInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationIpRangesInput"></a>

```csharp
public object DestinationIpRangesInput { get; }
```

- *Type:* object

---

##### `DestinationPortsInput`<sup>Optional</sup> <a name="DestinationPortsInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationPortsInput"></a>

```csharp
public string[] DestinationPortsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `SourceIpRangesInput`<sup>Optional</sup> <a name="SourceIpRangesInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourceIpRangesInput"></a>

```csharp
public object SourceIpRangesInput { get; }
```

- *Type:* object

---

##### `SourcePortsInput`<sup>Optional</sup> <a name="SourcePortsInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourcePortsInput"></a>

```csharp
public string[] SourcePortsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationPorts"></a>

```csharp
public string[] DestinationPorts { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourcePorts"></a>

```csharp
public string[] SourcePorts { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineExternalAccessRuleConfig <a name="VmwareengineExternalAccessRuleConfig" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineExternalAccessRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    object DestinationIpRanges,
    string[] DestinationPorts,
    string IpProtocol,
    string Name,
    string Parent,
    double Priority,
    object SourceIpRanges,
    string[] SourcePorts,
    string Description = null,
    string Id = null,
    VmwareengineExternalAccessRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.action">Action</a></code> | <code>string</code> | The action that the external access rule performs. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.destinationIpRanges">DestinationIpRanges</a></code> | <code>object</code> | destination_ip_ranges block. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.destinationPorts">DestinationPorts</a></code> | <code>string[]</code> | A list of destination ports to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The IP protocol to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.name">Name</a></code> | <code>string</code> | The ID of the external access rule. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.parent">Parent</a></code> | <code>string</code> | The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.priority">Priority</a></code> | <code>double</code> | External access rule priority, which determines the external access rule to use when multiple rules apply. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.sourceIpRanges">SourceIpRanges</a></code> | <code>object</code> | source_ip_ranges block. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.sourcePorts">SourcePorts</a></code> | <code>string[]</code> | A list of source ports to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.description">Description</a></code> | <code>string</code> | User-provided description for the external access rule. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#id VmwareengineExternalAccessRule#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The action that the external access rule performs. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#action VmwareengineExternalAccessRule#action}

---

##### `DestinationIpRanges`<sup>Required</sup> <a name="DestinationIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.destinationIpRanges"></a>

```csharp
public object DestinationIpRanges { get; set; }
```

- *Type:* object

destination_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#destination_ip_ranges VmwareengineExternalAccessRule#destination_ip_ranges}

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.destinationPorts"></a>

```csharp
public string[] DestinationPorts { get; set; }
```

- *Type:* string[]

A list of destination ports to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#destination_ports VmwareengineExternalAccessRule#destination_ports}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The IP protocol to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#ip_protocol VmwareengineExternalAccessRule#ip_protocol}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID of the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#name VmwareengineExternalAccessRule#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#parent VmwareengineExternalAccessRule#parent}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

External access rule priority, which determines the external access rule to use when multiple rules apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#priority VmwareengineExternalAccessRule#priority}

---

##### `SourceIpRanges`<sup>Required</sup> <a name="SourceIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.sourceIpRanges"></a>

```csharp
public object SourceIpRanges { get; set; }
```

- *Type:* object

source_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#source_ip_ranges VmwareengineExternalAccessRule#source_ip_ranges}

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.sourcePorts"></a>

```csharp
public string[] SourcePorts { get; set; }
```

- *Type:* string[]

A list of source ports to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#source_ports VmwareengineExternalAccessRule#source_ports}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User-provided description for the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#description VmwareengineExternalAccessRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#id VmwareengineExternalAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.timeouts"></a>

```csharp
public VmwareengineExternalAccessRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#timeouts VmwareengineExternalAccessRule#timeouts}

---

### VmwareengineExternalAccessRuleDestinationIpRanges <a name="VmwareengineExternalAccessRuleDestinationIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineExternalAccessRuleDestinationIpRanges {
    string ExternalAddress = null,
    string IpAddressRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.property.externalAddress">ExternalAddress</a></code> | <code>string</code> | The name of an 'ExternalAddress' resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.property.ipAddressRange">IpAddressRange</a></code> | <code>string</code> | An IP address range in the CIDR format. |

---

##### `ExternalAddress`<sup>Optional</sup> <a name="ExternalAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.property.externalAddress"></a>

```csharp
public string ExternalAddress { get; set; }
```

- *Type:* string

The name of an 'ExternalAddress' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#external_address VmwareengineExternalAccessRule#external_address}

---

##### `IpAddressRange`<sup>Optional</sup> <a name="IpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.property.ipAddressRange"></a>

```csharp
public string IpAddressRange { get; set; }
```

- *Type:* string

An IP address range in the CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#ip_address_range VmwareengineExternalAccessRule#ip_address_range}

---

### VmwareengineExternalAccessRuleSourceIpRanges <a name="VmwareengineExternalAccessRuleSourceIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineExternalAccessRuleSourceIpRanges {
    string IpAddress = null,
    string IpAddressRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.property.ipAddress">IpAddress</a></code> | <code>string</code> | A single IP address. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.property.ipAddressRange">IpAddressRange</a></code> | <code>string</code> | An IP address range in the CIDR format. |

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

A single IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#ip_address VmwareengineExternalAccessRule#ip_address}

---

##### `IpAddressRange`<sup>Optional</sup> <a name="IpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.property.ipAddressRange"></a>

```csharp
public string IpAddressRange { get; set; }
```

- *Type:* string

An IP address range in the CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#ip_address_range VmwareengineExternalAccessRule#ip_address_range}

---

### VmwareengineExternalAccessRuleTimeouts <a name="VmwareengineExternalAccessRuleTimeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineExternalAccessRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#create VmwareengineExternalAccessRule#create}. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#delete VmwareengineExternalAccessRule#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#update VmwareengineExternalAccessRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#create VmwareengineExternalAccessRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#delete VmwareengineExternalAccessRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/vmwareengine_external_access_rule#update VmwareengineExternalAccessRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineExternalAccessRuleDestinationIpRangesList <a name="VmwareengineExternalAccessRuleDestinationIpRangesList" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineExternalAccessRuleDestinationIpRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.get"></a>

```csharp
private VmwareengineExternalAccessRuleDestinationIpRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VmwareengineExternalAccessRuleDestinationIpRangesOutputReference <a name="VmwareengineExternalAccessRuleDestinationIpRangesOutputReference" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineExternalAccessRuleDestinationIpRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetExternalAddress">ResetExternalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetIpAddressRange">ResetIpAddressRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalAddress` <a name="ResetExternalAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetExternalAddress"></a>

```csharp
private void ResetExternalAddress()
```

##### `ResetIpAddressRange` <a name="ResetIpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetIpAddressRange"></a>

```csharp
private void ResetIpAddressRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddressInput">ExternalAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRangeInput">IpAddressRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress">ExternalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange">IpAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalAddressInput`<sup>Optional</sup> <a name="ExternalAddressInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddressInput"></a>

```csharp
public string ExternalAddressInput { get; }
```

- *Type:* string

---

##### `IpAddressRangeInput`<sup>Optional</sup> <a name="IpAddressRangeInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRangeInput"></a>

```csharp
public string IpAddressRangeInput { get; }
```

- *Type:* string

---

##### `ExternalAddress`<sup>Required</sup> <a name="ExternalAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress"></a>

```csharp
public string ExternalAddress { get; }
```

- *Type:* string

---

##### `IpAddressRange`<sup>Required</sup> <a name="IpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange"></a>

```csharp
public string IpAddressRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VmwareengineExternalAccessRuleSourceIpRangesList <a name="VmwareengineExternalAccessRuleSourceIpRangesList" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineExternalAccessRuleSourceIpRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.get"></a>

```csharp
private VmwareengineExternalAccessRuleSourceIpRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VmwareengineExternalAccessRuleSourceIpRangesOutputReference <a name="VmwareengineExternalAccessRuleSourceIpRangesOutputReference" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineExternalAccessRuleSourceIpRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddressRange">ResetIpAddressRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetIpAddressRange` <a name="ResetIpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddressRange"></a>

```csharp
private void ResetIpAddressRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRangeInput">IpAddressRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange">IpAddressRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IpAddressRangeInput`<sup>Optional</sup> <a name="IpAddressRangeInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRangeInput"></a>

```csharp
public string IpAddressRangeInput { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpAddressRange`<sup>Required</sup> <a name="IpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange"></a>

```csharp
public string IpAddressRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VmwareengineExternalAccessRuleTimeoutsOutputReference <a name="VmwareengineExternalAccessRuleTimeoutsOutputReference" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new VmwareengineExternalAccessRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



