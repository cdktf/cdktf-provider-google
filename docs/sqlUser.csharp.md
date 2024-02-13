# `sqlUser` Submodule <a name="`sqlUser` Submodule" id="@cdktf/provider-google.sqlUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlUser <a name="SqlUser" id="@cdktf/provider-google.sqlUser.SqlUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user google_sql_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlUser(Construct Scope, string Id, SqlUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig">SqlUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sqlUser.SqlUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sqlUser.SqlUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.sqlUser.SqlUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserConfig">SqlUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.putPasswordPolicy">PutPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sqlUser.SqlUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.sqlUser.SqlUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlUser.SqlUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sqlUser.SqlUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.sqlUser.SqlUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sqlUser.SqlUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sqlUser.SqlUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sqlUser.SqlUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sqlUser.SqlUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sqlUser.SqlUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sqlUser.SqlUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sqlUser.SqlUser.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sqlUser.SqlUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sqlUser.SqlUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sqlUser.SqlUser.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sqlUser.SqlUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sqlUser.SqlUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sqlUser.SqlUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sqlUser.SqlUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.sqlUser.SqlUser.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sqlUser.SqlUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sqlUser.SqlUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPasswordPolicy` <a name="PutPasswordPolicy" id="@cdktf/provider-google.sqlUser.SqlUser.putPasswordPolicy"></a>

```csharp
private void PutPasswordPolicy(SqlUserPasswordPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlUser.SqlUser.putPasswordPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sqlUser.SqlUser.putTimeouts"></a>

```csharp
private void PutTimeouts(SqlUserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sqlUser.SqlUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserTimeouts">SqlUserTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.sqlUser.SqlUser.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.sqlUser.SqlUser.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sqlUser.SqlUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-google.sqlUser.SqlUser.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktf/provider-google.sqlUser.SqlUser.resetPasswordPolicy"></a>

```csharp
private void ResetPasswordPolicy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.sqlUser.SqlUser.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sqlUser.SqlUser.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.sqlUser.SqlUser.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sqlUser.SqlUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SqlUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sqlUser.SqlUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sqlUser.SqlUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SqlUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sqlUser.SqlUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sqlUser.SqlUser.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SqlUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sqlUser.SqlUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sqlUser.SqlUser.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SqlUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SqlUser resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sqlUser.SqlUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.sqlUser.SqlUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.sqlUser.SqlUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sqlUser.SqlUser.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SqlUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference">SqlUserPasswordPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.sqlServerUserDetails">SqlServerUserDetails</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList">SqlUserSqlServerUserDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference">SqlUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sqlUser.SqlUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sqlUser.SqlUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sqlUser.SqlUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sqlUser.SqlUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sqlUser.SqlUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sqlUser.SqlUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sqlUser.SqlUser.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sqlUser.SqlUser.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sqlUser.SqlUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sqlUser.SqlUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sqlUser.SqlUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sqlUser.SqlUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sqlUser.SqlUser.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktf/provider-google.sqlUser.SqlUser.property.passwordPolicy"></a>

```csharp
public SqlUserPasswordPolicyOutputReference PasswordPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference">SqlUserPasswordPolicyOutputReference</a>

---

##### `SqlServerUserDetails`<sup>Required</sup> <a name="SqlServerUserDetails" id="@cdktf/provider-google.sqlUser.SqlUser.property.sqlServerUserDetails"></a>

```csharp
public SqlUserSqlServerUserDetailsList SqlServerUserDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList">SqlUserSqlServerUserDetailsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sqlUser.SqlUser.property.timeouts"></a>

```csharp
public SqlUserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference">SqlUserTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.passwordPolicyInput"></a>

```csharp
public SqlUserPasswordPolicy PasswordPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.sqlUser.SqlUser.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.sqlUser.SqlUser.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.sqlUser.SqlUser.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sqlUser.SqlUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.sqlUser.SqlUser.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlUser.SqlUser.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.sqlUser.SqlUser.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.sqlUser.SqlUser.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.sqlUser.SqlUser.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sqlUser.SqlUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlUserConfig <a name="SqlUserConfig" id="@cdktf/provider-google.sqlUser.SqlUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlUser.SqlUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlUserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Instance,
    string Name,
    string DeletionPolicy = null,
    string Host = null,
    string Id = null,
    string Password = null,
    SqlUserPasswordPolicy PasswordPolicy = null,
    string Project = null,
    SqlUserTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.instance">Instance</a></code> | <code>string</code> | The name of the Cloud SQL instance. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.name">Name</a></code> | <code>string</code> | The name of the user. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | The deletion policy for the user. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.host">Host</a></code> | <code>string</code> | The host the user can connect from. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#id SqlUser#id}. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.password">Password</a></code> | <code>string</code> | The password for the user. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeouts">SqlUserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserConfig.property.type">Type</a></code> | <code>string</code> | The user type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The name of the Cloud SQL instance. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#instance SqlUser#instance}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the user. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#name SqlUser#name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

The deletion policy for the user.

Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for Postgres, where users cannot be deleted from the API if they
have been granted SQL roles. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#deletion_policy SqlUser#deletion_policy}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The host the user can connect from.

This is only supported for MySQL instances. Don't set this field for PostgreSQL instances. Can be an IP address. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#host SqlUser#host}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#id SqlUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password for the user.

Can be updated. For Postgres instances this is a Required field, unless type is set to
either CLOUD_IAM_USER or CLOUD_IAM_SERVICE_ACCOUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#password SqlUser#password}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.passwordPolicy"></a>

```csharp
public SqlUserPasswordPolicy PasswordPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#password_policy SqlUser#password_policy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#project SqlUser#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.timeouts"></a>

```csharp
public SqlUserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserTimeouts">SqlUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#timeouts SqlUser#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.sqlUser.SqlUserConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The user type.

It determines the method to authenticate the user during login.
The default is the database's built-in user type. Flags include "BUILT_IN", "CLOUD_IAM_USER", "CLOUD_IAM_GROUP" or "CLOUD_IAM_SERVICE_ACCOUNT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#type SqlUser#type}

---

### SqlUserPasswordPolicy <a name="SqlUserPasswordPolicy" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlUserPasswordPolicy {
    double AllowedFailedAttempts = null,
    object EnableFailedAttemptsCheck = null,
    object EnablePasswordVerification = null,
    string PasswordExpirationDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.allowedFailedAttempts">AllowedFailedAttempts</a></code> | <code>double</code> | Number of failed attempts allowed before the user get locked. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.enableFailedAttemptsCheck">EnableFailedAttemptsCheck</a></code> | <code>object</code> | If true, the check that will lock user after too many failed login attempts will be enabled. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.enablePasswordVerification">EnablePasswordVerification</a></code> | <code>object</code> | If true, the user must specify the current password before changing the password. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.passwordExpirationDuration">PasswordExpirationDuration</a></code> | <code>string</code> | Password expiration duration with one week grace period. |

---

##### `AllowedFailedAttempts`<sup>Optional</sup> <a name="AllowedFailedAttempts" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.allowedFailedAttempts"></a>

```csharp
public double AllowedFailedAttempts { get; set; }
```

- *Type:* double

Number of failed attempts allowed before the user get locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#allowed_failed_attempts SqlUser#allowed_failed_attempts}

---

##### `EnableFailedAttemptsCheck`<sup>Optional</sup> <a name="EnableFailedAttemptsCheck" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.enableFailedAttemptsCheck"></a>

```csharp
public object EnableFailedAttemptsCheck { get; set; }
```

- *Type:* object

If true, the check that will lock user after too many failed login attempts will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#enable_failed_attempts_check SqlUser#enable_failed_attempts_check}

---

##### `EnablePasswordVerification`<sup>Optional</sup> <a name="EnablePasswordVerification" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.enablePasswordVerification"></a>

```csharp
public object EnablePasswordVerification { get; set; }
```

- *Type:* object

If true, the user must specify the current password before changing the password.

This flag is supported only for MySQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#enable_password_verification SqlUser#enable_password_verification}

---

##### `PasswordExpirationDuration`<sup>Optional</sup> <a name="PasswordExpirationDuration" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy.property.passwordExpirationDuration"></a>

```csharp
public string PasswordExpirationDuration { get; set; }
```

- *Type:* string

Password expiration duration with one week grace period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#password_expiration_duration SqlUser#password_expiration_duration}

---

### SqlUserPasswordPolicyStatus <a name="SqlUserPasswordPolicyStatus" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlUserPasswordPolicyStatus {

};
```


### SqlUserSqlServerUserDetails <a name="SqlUserSqlServerUserDetails" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlUserSqlServerUserDetails {

};
```


### SqlUserTimeouts <a name="SqlUserTimeouts" id="@cdktf/provider-google.sqlUser.SqlUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sqlUser.SqlUserTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlUserTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#create SqlUser#create}. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#delete SqlUser#delete}. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#update SqlUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sqlUser.SqlUserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#create SqlUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sqlUser.SqlUserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#delete SqlUser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sqlUser.SqlUserTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/sql_user#update SqlUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlUserPasswordPolicyOutputReference <a name="SqlUserPasswordPolicyOutputReference" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlUserPasswordPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetAllowedFailedAttempts">ResetAllowedFailedAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetEnableFailedAttemptsCheck">ResetEnableFailedAttemptsCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetEnablePasswordVerification">ResetEnablePasswordVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetPasswordExpirationDuration">ResetPasswordExpirationDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedFailedAttempts` <a name="ResetAllowedFailedAttempts" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetAllowedFailedAttempts"></a>

```csharp
private void ResetAllowedFailedAttempts()
```

##### `ResetEnableFailedAttemptsCheck` <a name="ResetEnableFailedAttemptsCheck" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetEnableFailedAttemptsCheck"></a>

```csharp
private void ResetEnableFailedAttemptsCheck()
```

##### `ResetEnablePasswordVerification` <a name="ResetEnablePasswordVerification" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetEnablePasswordVerification"></a>

```csharp
private void ResetEnablePasswordVerification()
```

##### `ResetPasswordExpirationDuration` <a name="ResetPasswordExpirationDuration" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.resetPasswordExpirationDuration"></a>

```csharp
private void ResetPasswordExpirationDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList">SqlUserPasswordPolicyStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.allowedFailedAttemptsInput">AllowedFailedAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enableFailedAttemptsCheckInput">EnableFailedAttemptsCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enablePasswordVerificationInput">EnablePasswordVerificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.passwordExpirationDurationInput">PasswordExpirationDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.allowedFailedAttempts">AllowedFailedAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enableFailedAttemptsCheck">EnableFailedAttemptsCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enablePasswordVerification">EnablePasswordVerification</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.passwordExpirationDuration">PasswordExpirationDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.status"></a>

```csharp
public SqlUserPasswordPolicyStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList">SqlUserPasswordPolicyStatusList</a>

---

##### `AllowedFailedAttemptsInput`<sup>Optional</sup> <a name="AllowedFailedAttemptsInput" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.allowedFailedAttemptsInput"></a>

```csharp
public double AllowedFailedAttemptsInput { get; }
```

- *Type:* double

---

##### `EnableFailedAttemptsCheckInput`<sup>Optional</sup> <a name="EnableFailedAttemptsCheckInput" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enableFailedAttemptsCheckInput"></a>

```csharp
public object EnableFailedAttemptsCheckInput { get; }
```

- *Type:* object

---

##### `EnablePasswordVerificationInput`<sup>Optional</sup> <a name="EnablePasswordVerificationInput" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enablePasswordVerificationInput"></a>

```csharp
public object EnablePasswordVerificationInput { get; }
```

- *Type:* object

---

##### `PasswordExpirationDurationInput`<sup>Optional</sup> <a name="PasswordExpirationDurationInput" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.passwordExpirationDurationInput"></a>

```csharp
public string PasswordExpirationDurationInput { get; }
```

- *Type:* string

---

##### `AllowedFailedAttempts`<sup>Required</sup> <a name="AllowedFailedAttempts" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.allowedFailedAttempts"></a>

```csharp
public double AllowedFailedAttempts { get; }
```

- *Type:* double

---

##### `EnableFailedAttemptsCheck`<sup>Required</sup> <a name="EnableFailedAttemptsCheck" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enableFailedAttemptsCheck"></a>

```csharp
public object EnableFailedAttemptsCheck { get; }
```

- *Type:* object

---

##### `EnablePasswordVerification`<sup>Required</sup> <a name="EnablePasswordVerification" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.enablePasswordVerification"></a>

```csharp
public object EnablePasswordVerification { get; }
```

- *Type:* object

---

##### `PasswordExpirationDuration`<sup>Required</sup> <a name="PasswordExpirationDuration" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.passwordExpirationDuration"></a>

```csharp
public string PasswordExpirationDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyOutputReference.property.internalValue"></a>

```csharp
public SqlUserPasswordPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicy">SqlUserPasswordPolicy</a>

---


### SqlUserPasswordPolicyStatusList <a name="SqlUserPasswordPolicyStatusList" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlUserPasswordPolicyStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.get"></a>

```csharp
private SqlUserPasswordPolicyStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SqlUserPasswordPolicyStatusOutputReference <a name="SqlUserPasswordPolicyStatusOutputReference" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlUserPasswordPolicyStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.locked">Locked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.passwordExpirationTime">PasswordExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatus">SqlUserPasswordPolicyStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.locked"></a>

```csharp
public IResolvable Locked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PasswordExpirationTime`<sup>Required</sup> <a name="PasswordExpirationTime" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.passwordExpirationTime"></a>

```csharp
public string PasswordExpirationTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatusOutputReference.property.internalValue"></a>

```csharp
public SqlUserPasswordPolicyStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserPasswordPolicyStatus">SqlUserPasswordPolicyStatus</a>

---


### SqlUserSqlServerUserDetailsList <a name="SqlUserSqlServerUserDetailsList" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlUserSqlServerUserDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.get"></a>

```csharp
private SqlUserSqlServerUserDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SqlUserSqlServerUserDetailsOutputReference <a name="SqlUserSqlServerUserDetailsOutputReference" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlUserSqlServerUserDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.disabled">Disabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.serverRoles">ServerRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetails">SqlUserSqlServerUserDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ServerRoles`<sup>Required</sup> <a name="ServerRoles" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.serverRoles"></a>

```csharp
public string[] ServerRoles { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetailsOutputReference.property.internalValue"></a>

```csharp
public SqlUserSqlServerUserDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.sqlUser.SqlUserSqlServerUserDetails">SqlUserSqlServerUserDetails</a>

---


### SqlUserTimeoutsOutputReference <a name="SqlUserTimeoutsOutputReference" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SqlUserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sqlUser.SqlUserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



