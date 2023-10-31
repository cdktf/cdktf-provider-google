# `google_container_analysis_note_iam_member`

Refer to the Terraform Registory for docs: [`google_container_analysis_note_iam_member`](https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member).

# `containerAnalysisNoteIamMember` Submodule <a name="`containerAnalysisNoteIamMember` Submodule" id="@cdktf/provider-google.containerAnalysisNoteIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAnalysisNoteIamMember <a name="ContainerAnalysisNoteIamMember" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member google_container_analysis_note_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteIamMember(Construct Scope, string Id, ContainerAnalysisNoteIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig">ContainerAnalysisNoteIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig">ContainerAnalysisNoteIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.putCondition"></a>

```csharp
private void PutCondition(ContainerAnalysisNoteIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAnalysisNoteIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAnalysisNoteIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAnalysisNoteIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAnalysisNoteIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ContainerAnalysisNoteIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ContainerAnalysisNoteIamMember resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAnalysisNoteIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAnalysisNoteIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAnalysisNoteIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference">ContainerAnalysisNoteIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.noteInput">NoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.note">Note</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.condition"></a>

```csharp
public ContainerAnalysisNoteIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference">ContainerAnalysisNoteIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.conditionInput"></a>

```csharp
public ContainerAnalysisNoteIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `NoteInput`<sup>Optional</sup> <a name="NoteInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.noteInput"></a>

```csharp
public string NoteInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Note`<sup>Required</sup> <a name="Note" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.note"></a>

```csharp
public string Note { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAnalysisNoteIamMemberCondition <a name="ContainerAnalysisNoteIamMemberCondition" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#expression ContainerAnalysisNoteIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#title ContainerAnalysisNoteIamMember#title}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#description ContainerAnalysisNoteIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#expression ContainerAnalysisNoteIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#title ContainerAnalysisNoteIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#description ContainerAnalysisNoteIamMember#description}.

---

### ContainerAnalysisNoteIamMemberConfig <a name="ContainerAnalysisNoteIamMemberConfig" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Member,
    string Note,
    string Role,
    ContainerAnalysisNoteIamMemberCondition Condition = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#member ContainerAnalysisNoteIamMember#member}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.note">Note</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#note ContainerAnalysisNoteIamMember#note}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#role ContainerAnalysisNoteIamMember#role}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#id ContainerAnalysisNoteIamMember#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#project ContainerAnalysisNoteIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#member ContainerAnalysisNoteIamMember#member}.

---

##### `Note`<sup>Required</sup> <a name="Note" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.note"></a>

```csharp
public string Note { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#note ContainerAnalysisNoteIamMember#note}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#role ContainerAnalysisNoteIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.condition"></a>

```csharp
public ContainerAnalysisNoteIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#condition ContainerAnalysisNoteIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#id ContainerAnalysisNoteIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/container_analysis_note_iam_member#project ContainerAnalysisNoteIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAnalysisNoteIamMemberConditionOutputReference <a name="ContainerAnalysisNoteIamMemberConditionOutputReference" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ContainerAnalysisNoteIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public ContainerAnalysisNoteIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a>

---



