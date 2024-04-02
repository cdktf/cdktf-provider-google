# `firestoreField` Submodule <a name="`firestoreField` Submodule" id="@cdktf/provider-google.firestoreField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreField <a name="FirestoreField" id="@cdktf/provider-google.firestoreField.FirestoreField"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field google_firestore_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreField.FirestoreField.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreField(Construct Scope, string Id, FirestoreFieldConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig">FirestoreFieldConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firestoreField.FirestoreField.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreField.FirestoreField.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.firestoreField.FirestoreField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig">FirestoreFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.putIndexConfig">PutIndexConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.putTtlConfig">PutTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.resetIndexConfig">ResetIndexConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.resetTtlConfig">ResetTtlConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreField.FirestoreField.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.firestoreField.FirestoreField.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.firestoreField.FirestoreField.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firestoreField.FirestoreField.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.firestoreField.FirestoreField.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.firestoreField.FirestoreField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.firestoreField.FirestoreField.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.firestoreField.FirestoreField.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.firestoreField.FirestoreField.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.firestoreField.FirestoreField.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.firestoreField.FirestoreField.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firestoreField.FirestoreField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.firestoreField.FirestoreField.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.firestoreField.FirestoreField.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreField.FirestoreField.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreField.FirestoreField.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.firestoreField.FirestoreField.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreField.FirestoreField.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.firestoreField.FirestoreField.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.firestoreField.FirestoreField.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.firestoreField.FirestoreField.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.firestoreField.FirestoreField.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreField.FirestoreField.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIndexConfig` <a name="PutIndexConfig" id="@cdktf/provider-google.firestoreField.FirestoreField.putIndexConfig"></a>

```csharp
private void PutIndexConfig(FirestoreFieldIndexConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firestoreField.FirestoreField.putIndexConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.firestoreField.FirestoreField.putTimeouts"></a>

```csharp
private void PutTimeouts(FirestoreFieldTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firestoreField.FirestoreField.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts">FirestoreFieldTimeouts</a>

---

##### `PutTtlConfig` <a name="PutTtlConfig" id="@cdktf/provider-google.firestoreField.FirestoreField.putTtlConfig"></a>

```csharp
private void PutTtlConfig(FirestoreFieldTtlConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firestoreField.FirestoreField.putTtlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a>

---

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-google.firestoreField.FirestoreField.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.firestoreField.FirestoreField.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndexConfig` <a name="ResetIndexConfig" id="@cdktf/provider-google.firestoreField.FirestoreField.resetIndexConfig"></a>

```csharp
private void ResetIndexConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.firestoreField.FirestoreField.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.firestoreField.FirestoreField.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTtlConfig` <a name="ResetTtlConfig" id="@cdktf/provider-google.firestoreField.FirestoreField.resetTtlConfig"></a>

```csharp
private void ResetTtlConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FirestoreField resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.firestoreField.FirestoreField.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirestoreField.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firestoreField.FirestoreField.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.firestoreField.FirestoreField.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirestoreField.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firestoreField.FirestoreField.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.firestoreField.FirestoreField.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirestoreField.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.firestoreField.FirestoreField.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.firestoreField.FirestoreField.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

FirestoreField.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FirestoreField resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.firestoreField.FirestoreField.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.firestoreField.FirestoreField.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirestoreField to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.firestoreField.FirestoreField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirestoreField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreField.FirestoreField.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FirestoreField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.indexConfig">IndexConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference">FirestoreFieldIndexConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference">FirestoreFieldTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.ttlConfig">TtlConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference">FirestoreFieldTtlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.collectionInput">CollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.indexConfigInput">IndexConfigInput</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.ttlConfigInput">TtlConfigInput</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.collection">Collection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.firestoreField.FirestoreField.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.firestoreField.FirestoreField.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreField.FirestoreField.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.firestoreField.FirestoreField.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.firestoreField.FirestoreField.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.firestoreField.FirestoreField.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.firestoreField.FirestoreField.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firestoreField.FirestoreField.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firestoreField.FirestoreField.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firestoreField.FirestoreField.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firestoreField.FirestoreField.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firestoreField.FirestoreField.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreField.FirestoreField.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firestoreField.FirestoreField.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IndexConfig`<sup>Required</sup> <a name="IndexConfig" id="@cdktf/provider-google.firestoreField.FirestoreField.property.indexConfig"></a>

```csharp
public FirestoreFieldIndexConfigOutputReference IndexConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference">FirestoreFieldIndexConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.firestoreField.FirestoreField.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.firestoreField.FirestoreField.property.timeouts"></a>

```csharp
public FirestoreFieldTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference">FirestoreFieldTimeoutsOutputReference</a>

---

##### `TtlConfig`<sup>Required</sup> <a name="TtlConfig" id="@cdktf/provider-google.firestoreField.FirestoreField.property.ttlConfig"></a>

```csharp
public FirestoreFieldTtlConfigOutputReference TtlConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference">FirestoreFieldTtlConfigOutputReference</a>

---

##### `CollectionInput`<sup>Optional</sup> <a name="CollectionInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.collectionInput"></a>

```csharp
public string CollectionInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexConfigInput`<sup>Optional</sup> <a name="IndexConfigInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.indexConfigInput"></a>

```csharp
public FirestoreFieldIndexConfig IndexConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TtlConfigInput`<sup>Optional</sup> <a name="TtlConfigInput" id="@cdktf/provider-google.firestoreField.FirestoreField.property.ttlConfigInput"></a>

```csharp
public FirestoreFieldTtlConfig TtlConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a>

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-google.firestoreField.FirestoreField.property.collection"></a>

```csharp
public string Collection { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.firestoreField.FirestoreField.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.firestoreField.FirestoreField.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.firestoreField.FirestoreField.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.firestoreField.FirestoreField.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreField.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.firestoreField.FirestoreField.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreFieldConfig <a name="FirestoreFieldConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreFieldConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Collection,
    string Field,
    string Database = null,
    string Id = null,
    FirestoreFieldIndexConfig IndexConfig = null,
    string Project = null,
    FirestoreFieldTimeouts Timeouts = null,
    FirestoreFieldTtlConfig TtlConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.collection">Collection</a></code> | <code>string</code> | The id of the collection group to configure. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.field">Field</a></code> | <code>string</code> | The id of the field to configure. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.database">Database</a></code> | <code>string</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#id FirestoreField#id}. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.indexConfig">IndexConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a></code> | index_config block. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#project FirestoreField#project}. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts">FirestoreFieldTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.ttlConfig">TtlConfig</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a></code> | ttl_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.collection"></a>

```csharp
public string Collection { get; set; }
```

- *Type:* string

The id of the collection group to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#collection FirestoreField#collection}

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The id of the field to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#field FirestoreField#field}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#database FirestoreField#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#id FirestoreField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexConfig`<sup>Optional</sup> <a name="IndexConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.indexConfig"></a>

```csharp
public FirestoreFieldIndexConfig IndexConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a>

index_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#index_config FirestoreField#index_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#project FirestoreField#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.timeouts"></a>

```csharp
public FirestoreFieldTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts">FirestoreFieldTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#timeouts FirestoreField#timeouts}

---

##### `TtlConfig`<sup>Optional</sup> <a name="TtlConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldConfig.property.ttlConfig"></a>

```csharp
public FirestoreFieldTtlConfig TtlConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a>

ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#ttl_config FirestoreField#ttl_config}

---

### FirestoreFieldIndexConfig <a name="FirestoreFieldIndexConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreFieldIndexConfig {
    object Indexes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig.property.indexes">Indexes</a></code> | <code>object</code> | indexes block. |

---

##### `Indexes`<sup>Optional</sup> <a name="Indexes" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig.property.indexes"></a>

```csharp
public object Indexes { get; set; }
```

- *Type:* object

indexes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#indexes FirestoreField#indexes}

---

### FirestoreFieldIndexConfigIndexes <a name="FirestoreFieldIndexConfigIndexes" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreFieldIndexConfigIndexes {
    string ArrayConfig = null,
    string Order = null,
    string QueryScope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.property.arrayConfig">ArrayConfig</a></code> | <code>string</code> | Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["CONTAINS"]. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.property.order">Order</a></code> | <code>string</code> | Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.property.queryScope">QueryScope</a></code> | <code>string</code> | The scope at which a query is run. |

---

##### `ArrayConfig`<sup>Optional</sup> <a name="ArrayConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.property.arrayConfig"></a>

```csharp
public string ArrayConfig { get; set; }
```

- *Type:* string

Indicates that this field supports operations on arrayValues. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["CONTAINS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#array_config FirestoreField#array_config}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=, !=. Only one of 'order' and 'arrayConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#order FirestoreField#order}

---

##### `QueryScope`<sup>Optional</sup> <a name="QueryScope" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexes.property.queryScope"></a>

```csharp
public string QueryScope { get; set; }
```

- *Type:* string

The scope at which a query is run.

Collection scoped queries require you specify
the collection at query time. Collection group scope allows queries across all
collections with the same id. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#query_scope FirestoreField#query_scope}

---

### FirestoreFieldTimeouts <a name="FirestoreFieldTimeouts" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreFieldTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#create FirestoreField#create}. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#delete FirestoreField#delete}. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#update FirestoreField#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#create FirestoreField#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#delete FirestoreField#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_field#update FirestoreField#update}.

---

### FirestoreFieldTtlConfig <a name="FirestoreFieldTtlConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreFieldTtlConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### FirestoreFieldIndexConfigIndexesList <a name="FirestoreFieldIndexConfigIndexesList" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreFieldIndexConfigIndexesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.get"></a>

```csharp
private FirestoreFieldIndexConfigIndexesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirestoreFieldIndexConfigIndexesOutputReference <a name="FirestoreFieldIndexConfigIndexesOutputReference" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreFieldIndexConfigIndexesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resetArrayConfig">ResetArrayConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resetQueryScope">ResetQueryScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArrayConfig` <a name="ResetArrayConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resetArrayConfig"></a>

```csharp
private void ResetArrayConfig()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetQueryScope` <a name="ResetQueryScope" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.resetQueryScope"></a>

```csharp
private void ResetQueryScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfigInput">ArrayConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.queryScopeInput">QueryScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfig">ArrayConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.queryScope">QueryScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArrayConfigInput`<sup>Optional</sup> <a name="ArrayConfigInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfigInput"></a>

```csharp
public string ArrayConfigInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `QueryScopeInput`<sup>Optional</sup> <a name="QueryScopeInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.queryScopeInput"></a>

```csharp
public string QueryScopeInput { get; }
```

- *Type:* string

---

##### `ArrayConfig`<sup>Required</sup> <a name="ArrayConfig" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.arrayConfig"></a>

```csharp
public string ArrayConfig { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `QueryScope`<sup>Required</sup> <a name="QueryScope" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.queryScope"></a>

```csharp
public string QueryScope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirestoreFieldIndexConfigOutputReference <a name="FirestoreFieldIndexConfigOutputReference" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreFieldIndexConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.putIndexes">PutIndexes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.resetIndexes">ResetIndexes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIndexes` <a name="PutIndexes" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.putIndexes"></a>

```csharp
private void PutIndexes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.putIndexes.parameter.value"></a>

- *Type:* object

---

##### `ResetIndexes` <a name="ResetIndexes" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.resetIndexes"></a>

```csharp
private void ResetIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.indexes">Indexes</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList">FirestoreFieldIndexConfigIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.indexesInput">IndexesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Indexes`<sup>Required</sup> <a name="Indexes" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.indexes"></a>

```csharp
public FirestoreFieldIndexConfigIndexesList Indexes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigIndexesList">FirestoreFieldIndexConfigIndexesList</a>

---

##### `IndexesInput`<sup>Optional</sup> <a name="IndexesInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.indexesInput"></a>

```csharp
public object IndexesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfigOutputReference.property.internalValue"></a>

```csharp
public FirestoreFieldIndexConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldIndexConfig">FirestoreFieldIndexConfig</a>

---


### FirestoreFieldTimeoutsOutputReference <a name="FirestoreFieldTimeoutsOutputReference" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreFieldTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreField.FirestoreFieldTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FirestoreFieldTtlConfigOutputReference <a name="FirestoreFieldTtlConfigOutputReference" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new FirestoreFieldTtlConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfigOutputReference.property.internalValue"></a>

```csharp
public FirestoreFieldTtlConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.firestoreField.FirestoreFieldTtlConfig">FirestoreFieldTtlConfig</a>

---



