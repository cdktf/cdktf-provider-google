# `apigeeSecurityMonitoringCondition` Submodule <a name="`apigeeSecurityMonitoringCondition` Submodule" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityMonitoringCondition <a name="ApigeeSecurityMonitoringCondition" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition google_apigee_security_monitoring_condition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityMonitoringCondition(Construct Scope, string Id, ApigeeSecurityMonitoringConditionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig">ApigeeSecurityMonitoringConditionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig">ApigeeSecurityMonitoringConditionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putIncludeAllResources">PutIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetIncludeAllResources">ResetIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIncludeAllResources` <a name="PutIncludeAllResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putIncludeAllResources"></a>

```csharp
private void PutIncludeAllResources(ApigeeSecurityMonitoringConditionIncludeAllResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putIncludeAllResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putTimeouts"></a>

```csharp
private void PutTimeouts(ApigeeSecurityMonitoringConditionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeAllResources` <a name="ResetIncludeAllResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetIncludeAllResources"></a>

```csharp
private void ResetIncludeAllResources()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeSecurityMonitoringCondition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeSecurityMonitoringCondition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeSecurityMonitoringCondition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeSecurityMonitoringCondition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeSecurityMonitoringCondition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApigeeSecurityMonitoringCondition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeSecurityMonitoringCondition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeSecurityMonitoringCondition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityMonitoringCondition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.includeAllResources">IncludeAllResources</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference">ApigeeSecurityMonitoringConditionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.totalDeployedResources">TotalDeployedResources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.totalMonitoredResources">TotalMonitoredResources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.conditionIdInput">ConditionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.includeAllResourcesInput">IncludeAllResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.conditionId">ConditionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `IncludeAllResources`<sup>Required</sup> <a name="IncludeAllResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.includeAllResources"></a>

```csharp
public ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference IncludeAllResources { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference">ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.timeouts"></a>

```csharp
public ApigeeSecurityMonitoringConditionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference">ApigeeSecurityMonitoringConditionTimeoutsOutputReference</a>

---

##### `TotalDeployedResources`<sup>Required</sup> <a name="TotalDeployedResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.totalDeployedResources"></a>

```csharp
public double TotalDeployedResources { get; }
```

- *Type:* double

---

##### `TotalMonitoredResources`<sup>Required</sup> <a name="TotalMonitoredResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.totalMonitoredResources"></a>

```csharp
public double TotalMonitoredResources { get; }
```

- *Type:* double

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ConditionIdInput`<sup>Optional</sup> <a name="ConditionIdInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.conditionIdInput"></a>

```csharp
public string ConditionIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeAllResourcesInput`<sup>Optional</sup> <a name="IncludeAllResourcesInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.includeAllResourcesInput"></a>

```csharp
public ApigeeSecurityMonitoringConditionIncludeAllResources IncludeAllResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a>

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ConditionId`<sup>Required</sup> <a name="ConditionId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.conditionId"></a>

```csharp
public string ConditionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringCondition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityMonitoringConditionConfig <a name="ApigeeSecurityMonitoringConditionConfig" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityMonitoringConditionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConditionId,
    string OrgId,
    string Profile,
    string Scope,
    string Id = null,
    ApigeeSecurityMonitoringConditionIncludeAllResources IncludeAllResources = null,
    ApigeeSecurityMonitoringConditionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.conditionId">ConditionId</a></code> | <code>string</code> | Resource ID of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.orgId">OrgId</a></code> | <code>string</code> | The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.profile">Profile</a></code> | <code>string</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.scope">Scope</a></code> | <code>string</code> | ID of security profile of the security monitoring condition. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#id ApigeeSecurityMonitoringCondition#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.includeAllResources">IncludeAllResources</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | include_all_resources block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConditionId`<sup>Required</sup> <a name="ConditionId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.conditionId"></a>

```csharp
public string ConditionId { get; set; }
```

- *Type:* string

Resource ID of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#condition_id ApigeeSecurityMonitoringCondition#condition_id}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The Apigee Organization associated with the Apigee Security Monitoring Condition, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#org_id ApigeeSecurityMonitoringCondition#org_id}

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#profile ApigeeSecurityMonitoringCondition#profile}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

ID of security profile of the security monitoring condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#scope ApigeeSecurityMonitoringCondition#scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#id ApigeeSecurityMonitoringCondition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeAllResources`<sup>Optional</sup> <a name="IncludeAllResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.includeAllResources"></a>

```csharp
public ApigeeSecurityMonitoringConditionIncludeAllResources IncludeAllResources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a>

include_all_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#include_all_resources ApigeeSecurityMonitoringCondition#include_all_resources}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionConfig.property.timeouts"></a>

```csharp
public ApigeeSecurityMonitoringConditionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts">ApigeeSecurityMonitoringConditionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#timeouts ApigeeSecurityMonitoringCondition#timeouts}

---

### ApigeeSecurityMonitoringConditionIncludeAllResources <a name="ApigeeSecurityMonitoringConditionIncludeAllResources" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityMonitoringConditionIncludeAllResources {

};
```


### ApigeeSecurityMonitoringConditionTimeouts <a name="ApigeeSecurityMonitoringConditionTimeouts" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityMonitoringConditionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#create ApigeeSecurityMonitoringCondition#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#delete ApigeeSecurityMonitoringCondition#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#update ApigeeSecurityMonitoringCondition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#create ApigeeSecurityMonitoringCondition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#delete ApigeeSecurityMonitoringCondition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_monitoring_condition#update ApigeeSecurityMonitoringCondition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference <a name="ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResourcesOutputReference.property.internalValue"></a>

```csharp
public ApigeeSecurityMonitoringConditionIncludeAllResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionIncludeAllResources">ApigeeSecurityMonitoringConditionIncludeAllResources</a>

---


### ApigeeSecurityMonitoringConditionTimeoutsOutputReference <a name="ApigeeSecurityMonitoringConditionTimeoutsOutputReference" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityMonitoringConditionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityMonitoringCondition.ApigeeSecurityMonitoringConditionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



