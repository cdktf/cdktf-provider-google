# `organizationIamAuditConfig` Submodule <a name="`organizationIamAuditConfig` Submodule" id="@cdktf/provider-google.organizationIamAuditConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationIamAuditConfig <a name="OrganizationIamAuditConfig" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/organization_iam_audit_config google_organization_iam_audit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrganizationIamAuditConfig(Construct Scope, string Id, OrganizationIamAuditConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig">OrganizationIamAuditConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig">OrganizationIamAuditConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.putAuditLogConfig">PutAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuditLogConfig` <a name="PutAuditLogConfig" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.putAuditLogConfig"></a>

```csharp
private void PutAuditLogConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.putAuditLogConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationIamAuditConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OrganizationIamAuditConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OrganizationIamAuditConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OrganizationIamAuditConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OrganizationIamAuditConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OrganizationIamAuditConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationIamAuditConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationIamAuditConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/organization_iam_audit_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationIamAuditConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.auditLogConfig">AuditLogConfig</a></code> | <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList">OrganizationIamAuditConfigAuditLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.auditLogConfigInput">AuditLogConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuditLogConfig`<sup>Required</sup> <a name="AuditLogConfig" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.auditLogConfig"></a>

```csharp
public OrganizationIamAuditConfigAuditLogConfigList AuditLogConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList">OrganizationIamAuditConfigAuditLogConfigList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `AuditLogConfigInput`<sup>Optional</sup> <a name="AuditLogConfigInput" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.auditLogConfigInput"></a>

```csharp
public object AuditLogConfigInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationIamAuditConfigAuditLogConfig <a name="OrganizationIamAuditConfigAuditLogConfig" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrganizationIamAuditConfigAuditLogConfig {
    string LogType,
    string[] ExemptedMembers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfig.property.logType">LogType</a></code> | <code>string</code> | Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfig.property.exemptedMembers">ExemptedMembers</a></code> | <code>string[]</code> | Identities that do not cause logging for this type of permission. |

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfig.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/organization_iam_audit_config#log_type OrganizationIamAuditConfig#log_type}

---

##### `ExemptedMembers`<sup>Optional</sup> <a name="ExemptedMembers" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfig.property.exemptedMembers"></a>

```csharp
public string[] ExemptedMembers { get; set; }
```

- *Type:* string[]

Identities that do not cause logging for this type of permission.

Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/organization_iam_audit_config#exempted_members OrganizationIamAuditConfig#exempted_members}

---

### OrganizationIamAuditConfigConfig <a name="OrganizationIamAuditConfigConfig" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrganizationIamAuditConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AuditLogConfig,
    string OrgId,
    string Service,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.auditLogConfig">AuditLogConfig</a></code> | <code>object</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.orgId">OrgId</a></code> | <code>string</code> | The numeric ID of the organization in which you want to manage the audit logging config. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.service">Service</a></code> | <code>string</code> | Service which will be enabled for audit logging. The special value allServices covers all services. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/organization_iam_audit_config#id OrganizationIamAuditConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuditLogConfig`<sup>Required</sup> <a name="AuditLogConfig" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.auditLogConfig"></a>

```csharp
public object AuditLogConfig { get; set; }
```

- *Type:* object

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/organization_iam_audit_config#audit_log_config OrganizationIamAuditConfig#audit_log_config}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The numeric ID of the organization in which you want to manage the audit logging config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/organization_iam_audit_config#org_id OrganizationIamAuditConfig#org_id}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Service which will be enabled for audit logging. The special value allServices covers all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/organization_iam_audit_config#service OrganizationIamAuditConfig#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/organization_iam_audit_config#id OrganizationIamAuditConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationIamAuditConfigAuditLogConfigList <a name="OrganizationIamAuditConfigAuditLogConfigList" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrganizationIamAuditConfigAuditLogConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.get"></a>

```csharp
private OrganizationIamAuditConfigAuditLogConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrganizationIamAuditConfigAuditLogConfigOutputReference <a name="OrganizationIamAuditConfigAuditLogConfigOutputReference" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OrganizationIamAuditConfigAuditLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers">ResetExemptedMembers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExemptedMembers` <a name="ResetExemptedMembers" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers"></a>

```csharp
private void ResetExemptedMembers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput">ExemptedMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers">ExemptedMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExemptedMembersInput`<sup>Optional</sup> <a name="ExemptedMembersInput" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput"></a>

```csharp
public string[] ExemptedMembersInput { get; }
```

- *Type:* string[]

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `ExemptedMembers`<sup>Required</sup> <a name="ExemptedMembers" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers"></a>

```csharp
public string[] ExemptedMembers { get; }
```

- *Type:* string[]

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.organizationIamAuditConfig.OrganizationIamAuditConfigAuditLogConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



