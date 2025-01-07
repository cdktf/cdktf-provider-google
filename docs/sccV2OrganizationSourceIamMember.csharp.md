# `sccV2OrganizationSourceIamMember` Submodule <a name="`sccV2OrganizationSourceIamMember` Submodule" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2OrganizationSourceIamMember <a name="SccV2OrganizationSourceIamMember" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member google_scc_v2_organization_source_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccV2OrganizationSourceIamMember(Construct Scope, string Id, SccV2OrganizationSourceIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig">SccV2OrganizationSourceIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig">SccV2OrganizationSourceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.putCondition"></a>

```csharp
private void PutCondition(SccV2OrganizationSourceIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SccV2OrganizationSourceIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccV2OrganizationSourceIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccV2OrganizationSourceIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccV2OrganizationSourceIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SccV2OrganizationSourceIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SccV2OrganizationSourceIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccV2OrganizationSourceIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccV2OrganizationSourceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SccV2OrganizationSourceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference">SccV2OrganizationSourceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.source">Source</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.condition"></a>

```csharp
public SccV2OrganizationSourceIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference">SccV2OrganizationSourceIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.conditionInput"></a>

```csharp
public SccV2OrganizationSourceIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2OrganizationSourceIamMemberCondition <a name="SccV2OrganizationSourceIamMemberCondition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccV2OrganizationSourceIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#expression SccV2OrganizationSourceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#title SccV2OrganizationSourceIamMember#title}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#description SccV2OrganizationSourceIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#expression SccV2OrganizationSourceIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#title SccV2OrganizationSourceIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#description SccV2OrganizationSourceIamMember#description}.

---

### SccV2OrganizationSourceIamMemberConfig <a name="SccV2OrganizationSourceIamMemberConfig" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccV2OrganizationSourceIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Member,
    string Organization,
    string Role,
    string Source,
    SccV2OrganizationSourceIamMemberCondition Condition = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#member SccV2OrganizationSourceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#organization SccV2OrganizationSourceIamMember#organization}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#role SccV2OrganizationSourceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#source SccV2OrganizationSourceIamMember#source}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#id SccV2OrganizationSourceIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#member SccV2OrganizationSourceIamMember#member}.

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#organization SccV2OrganizationSourceIamMember#organization}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#role SccV2OrganizationSourceIamMember#role}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#source SccV2OrganizationSourceIamMember#source}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.condition"></a>

```csharp
public SccV2OrganizationSourceIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#condition SccV2OrganizationSourceIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/scc_v2_organization_source_iam_member#id SccV2OrganizationSourceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2OrganizationSourceIamMemberConditionOutputReference <a name="SccV2OrganizationSourceIamMemberConditionOutputReference" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SccV2OrganizationSourceIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public SccV2OrganizationSourceIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

---



