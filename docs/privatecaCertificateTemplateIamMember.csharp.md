# `privatecaCertificateTemplateIamMember` Submodule <a name="`privatecaCertificateTemplateIamMember` Submodule" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatecaCertificateTemplateIamMember <a name="PrivatecaCertificateTemplateIamMember" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member google_privateca_certificate_template_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplateIamMember(Construct Scope, string Id, PrivatecaCertificateTemplateIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig">PrivatecaCertificateTemplateIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig">PrivatecaCertificateTemplateIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.putCondition"></a>

```csharp
private void PutCondition(PrivatecaCertificateTemplateIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatecaCertificateTemplateIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCertificateTemplateIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCertificateTemplateIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCertificateTemplateIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCertificateTemplateIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PrivatecaCertificateTemplateIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatecaCertificateTemplateIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatecaCertificateTemplateIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PrivatecaCertificateTemplateIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference">PrivatecaCertificateTemplateIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.certificateTemplateInput">CertificateTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.certificateTemplate">CertificateTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.condition"></a>

```csharp
public PrivatecaCertificateTemplateIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference">PrivatecaCertificateTemplateIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `CertificateTemplateInput`<sup>Optional</sup> <a name="CertificateTemplateInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.certificateTemplateInput"></a>

```csharp
public string CertificateTemplateInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.conditionInput"></a>

```csharp
public PrivatecaCertificateTemplateIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `CertificateTemplate`<sup>Required</sup> <a name="CertificateTemplate" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.certificateTemplate"></a>

```csharp
public string CertificateTemplate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatecaCertificateTemplateIamMemberCondition <a name="PrivatecaCertificateTemplateIamMemberCondition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplateIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#expression PrivatecaCertificateTemplateIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#title PrivatecaCertificateTemplateIamMember#title}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#description PrivatecaCertificateTemplateIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#expression PrivatecaCertificateTemplateIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#title PrivatecaCertificateTemplateIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#description PrivatecaCertificateTemplateIamMember#description}.

---

### PrivatecaCertificateTemplateIamMemberConfig <a name="PrivatecaCertificateTemplateIamMemberConfig" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplateIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CertificateTemplate,
    string Member,
    string Role,
    PrivatecaCertificateTemplateIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.certificateTemplate">CertificateTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#certificate_template PrivatecaCertificateTemplateIamMember#certificate_template}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#member PrivatecaCertificateTemplateIamMember#member}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#role PrivatecaCertificateTemplateIamMember#role}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#id PrivatecaCertificateTemplateIamMember#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#location PrivatecaCertificateTemplateIamMember#location}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#project PrivatecaCertificateTemplateIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateTemplate`<sup>Required</sup> <a name="CertificateTemplate" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.certificateTemplate"></a>

```csharp
public string CertificateTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#certificate_template PrivatecaCertificateTemplateIamMember#certificate_template}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#member PrivatecaCertificateTemplateIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#role PrivatecaCertificateTemplateIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.condition"></a>

```csharp
public PrivatecaCertificateTemplateIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#condition PrivatecaCertificateTemplateIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#id PrivatecaCertificateTemplateIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#location PrivatecaCertificateTemplateIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/privateca_certificate_template_iam_member#project PrivatecaCertificateTemplateIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatecaCertificateTemplateIamMemberConditionOutputReference <a name="PrivatecaCertificateTemplateIamMemberConditionOutputReference" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCertificateTemplateIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCertificateTemplateIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateTemplateIamMember.PrivatecaCertificateTemplateIamMemberCondition">PrivatecaCertificateTemplateIamMemberCondition</a>

---



