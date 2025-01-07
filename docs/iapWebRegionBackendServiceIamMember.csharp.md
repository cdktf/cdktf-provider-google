# `iapWebRegionBackendServiceIamMember` Submodule <a name="`iapWebRegionBackendServiceIamMember` Submodule" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapWebRegionBackendServiceIamMember <a name="IapWebRegionBackendServiceIamMember" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member google_iap_web_region_backend_service_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapWebRegionBackendServiceIamMember(Construct Scope, string Id, IapWebRegionBackendServiceIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig">IapWebRegionBackendServiceIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig">IapWebRegionBackendServiceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.putCondition"></a>

```csharp
private void PutCondition(IapWebRegionBackendServiceIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IapWebRegionBackendServiceIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IapWebRegionBackendServiceIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IapWebRegionBackendServiceIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IapWebRegionBackendServiceIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IapWebRegionBackendServiceIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IapWebRegionBackendServiceIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IapWebRegionBackendServiceIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IapWebRegionBackendServiceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IapWebRegionBackendServiceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference">IapWebRegionBackendServiceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.webRegionBackendServiceInput">WebRegionBackendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.webRegionBackendService">WebRegionBackendService</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.condition"></a>

```csharp
public IapWebRegionBackendServiceIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference">IapWebRegionBackendServiceIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.conditionInput"></a>

```csharp
public IapWebRegionBackendServiceIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `WebRegionBackendServiceInput`<sup>Optional</sup> <a name="WebRegionBackendServiceInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.webRegionBackendServiceInput"></a>

```csharp
public string WebRegionBackendServiceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `WebRegionBackendService`<sup>Required</sup> <a name="WebRegionBackendService" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.webRegionBackendService"></a>

```csharp
public string WebRegionBackendService { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IapWebRegionBackendServiceIamMemberCondition <a name="IapWebRegionBackendServiceIamMemberCondition" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapWebRegionBackendServiceIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#expression IapWebRegionBackendServiceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#title IapWebRegionBackendServiceIamMember#title}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#description IapWebRegionBackendServiceIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#expression IapWebRegionBackendServiceIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#title IapWebRegionBackendServiceIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#description IapWebRegionBackendServiceIamMember#description}.

---

### IapWebRegionBackendServiceIamMemberConfig <a name="IapWebRegionBackendServiceIamMemberConfig" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapWebRegionBackendServiceIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Member,
    string Role,
    string WebRegionBackendService,
    IapWebRegionBackendServiceIamMemberCondition Condition = null,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#member IapWebRegionBackendServiceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#role IapWebRegionBackendServiceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.webRegionBackendService">WebRegionBackendService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#web_region_backend_service IapWebRegionBackendServiceIamMember#web_region_backend_service}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#id IapWebRegionBackendServiceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#project IapWebRegionBackendServiceIamMember#project}. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#region IapWebRegionBackendServiceIamMember#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#member IapWebRegionBackendServiceIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#role IapWebRegionBackendServiceIamMember#role}.

---

##### `WebRegionBackendService`<sup>Required</sup> <a name="WebRegionBackendService" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.webRegionBackendService"></a>

```csharp
public string WebRegionBackendService { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#web_region_backend_service IapWebRegionBackendServiceIamMember#web_region_backend_service}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.condition"></a>

```csharp
public IapWebRegionBackendServiceIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#condition IapWebRegionBackendServiceIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#id IapWebRegionBackendServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#project IapWebRegionBackendServiceIamMember#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iap_web_region_backend_service_iam_member#region IapWebRegionBackendServiceIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapWebRegionBackendServiceIamMemberConditionOutputReference <a name="IapWebRegionBackendServiceIamMemberConditionOutputReference" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapWebRegionBackendServiceIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public IapWebRegionBackendServiceIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapWebRegionBackendServiceIamMember.IapWebRegionBackendServiceIamMemberCondition">IapWebRegionBackendServiceIamMemberCondition</a>

---



